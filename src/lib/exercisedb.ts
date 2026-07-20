import type { EdbExercise, Gender, Muscle, Mode } from "@/data/muscles";
import { getLocalStretches } from "@/data/stretch-catalog";
import { preferGenderMedia } from "@/lib/gender-media";

const EDB_BASE = "https://oss.exercisedb.dev/api/v1";
const GIF_BASE = "https://static.exercisedb.dev/media";

const RETRYABLE = new Set([429, 502, 503, 504]);
const PAGE_SIZE = 25;
const MAX_PAGES = 2;
const EXERCISE_LIMIT = 36;

type EdbListResponse = {
  success?: boolean;
  meta?: { total?: number; hasNextPage?: boolean; nextCursor?: string };
  data?: EdbExercise[];
  error?: { message?: string };
};

type EdbSearchHit = { exerciseId: string; name: string; imageUrl?: string };

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function edbFetch<T>(path: string, attempt = 0): Promise<T> {
  const res = await fetch(`${EDB_BASE}${path}`, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Workout/1.0",
    },
    next: { revalidate: 60 * 60 * 24 },
  });

  if (RETRYABLE.has(res.status) && attempt < 3) {
    await sleep(400 * (attempt + 1));
    return edbFetch<T>(path, attempt + 1);
  }

  if (!res.ok) {
    throw new Error(`ExerciseDB error ${res.status}`);
  }

  return res.json() as Promise<T>;
}

function isStretch(ex: Pick<EdbExercise, "name">) {
  return /\bstretch\b/i.test(ex.name);
}

function cleanSteps(instructions: string[] = []) {
  return instructions.map((step) =>
    step.replace(/^Step:\s*\d+\s*/i, "").trim(),
  );
}

function normalize(item: EdbExercise): EdbExercise {
  return {
    ...item,
    gifUrl: item.gifUrl || `${GIF_BASE}/${item.exerciseId}.gif`,
    instructions: cleanSteps(item.instructions ?? []),
    bodyParts: item.bodyParts ?? [],
    equipments: item.equipments ?? [],
    targetMuscles: item.targetMuscles ?? [],
    secondaryMuscles: item.secondaryMuscles ?? [],
  };
}

function dedupe(items: EdbExercise[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.exerciseId)) return false;
    seen.add(item.exerciseId);
    return true;
  });
}

async function fetchByPrimaryTarget(target: string, maxItems = PAGE_SIZE * MAX_PAGES) {
  const all: EdbExercise[] = [];
  let cursor: string | undefined;

  for (let page = 0; page < MAX_PAGES; page++) {
    const qs = new URLSearchParams({
      targetMuscles: target,
      limit: String(PAGE_SIZE),
    });
    if (cursor) qs.set("cursor", cursor);

    const payload = await edbFetch<EdbListResponse>(`/exercises/muscles?${qs}`);
    const batch = (payload.data ?? []).map(normalize);
    all.push(...batch);

    if (!payload.meta?.hasNextPage || !payload.meta?.nextCursor) break;
    cursor = payload.meta.nextCursor;
    if (all.length >= maxItems) break;
  }

  return all.slice(0, maxItems);
}

/** Try targets in order until we have enough non-stretch exercises. */
async function fetchExercises(muscle: Muscle) {
  for (const target of muscle.edbTargets) {
    try {
      const items = await fetchByPrimaryTarget(target);
      const exercises = dedupe(items.filter((item) => !isStretch(item)));
      if (exercises.length > 0) return exercises;
    } catch {
      // try next target
    }
  }

  try {
    return dedupe(
      (await searchExercises(muscle.edbTargets[0] ?? muscle.name, { limit: 24 })).filter(
        (item) => !isStretch(item),
      ),
    );
  } catch {
    return [] as EdbExercise[];
  }
}

function placeholderInstructions(kind: "stretch" | "move") {
  if (kind === "stretch") {
    return [
      "Follow the animated demonstration closely.",
      "Move into the stretch gradually and breathe steadily.",
      "Hold a mild comfortable tension — never sharp pain.",
      "Switch sides when the stretch is one-sided.",
    ];
  }
  return [
    "Follow the animated demonstration closely.",
    "Move with control and keep breathing steady.",
    "Stop if you feel sharp pain.",
  ];
}

export async function getExercisesForMuscle(
  muscle: Muscle,
  mode: Mode,
  gender: Gender = "male",
) {
  if (mode === "stretches") {
    return preferGenderMedia(getLocalStretches(muscle.id), gender, muscle.id);
  }

  const items = await fetchExercises(muscle);
  return preferGenderMedia(items, gender, muscle.id).slice(0, EXERCISE_LIMIT);
}

export async function getExerciseById(id: string) {
  const payload = await edbFetch<{ data?: EdbExercise } | EdbExercise>(
    `/exercises/${id}`,
  );
  const item =
    payload && typeof payload === "object" && "data" in payload
      ? (payload as { data?: EdbExercise }).data
      : (payload as EdbExercise);
  if (!item?.exerciseId) throw new Error("Exercise not found");
  return normalize(item);
}

/** Search ExerciseDB and return normalized hits with GIF URLs (no N+1 detail calls). */
export async function searchExercises(
  query: string,
  opts: { preferStretch?: boolean; limit?: number } = {},
) {
  const { preferStretch = false, limit = 4 } = opts;
  const search = new URLSearchParams({
    search: query,
    threshold: "0.4",
  });
  const hits = await edbFetch<{ data?: EdbSearchHit[] }>(
    `/exercises/search?${search}`,
  );

  const ranked = [...(hits.data ?? [])].sort((a, b) => {
    const aStretch = Number(isStretch(a));
    const bStretch = Number(isStretch(b));
    if (preferStretch && aStretch !== bStretch) return bStretch - aStretch;
    if (!preferStretch && aStretch !== bStretch) return aStretch - bStretch;
    return 0;
  });

  return ranked.slice(0, limit).map((hit) =>
    normalize({
      exerciseId: hit.exerciseId,
      name: hit.name,
      gifUrl: `${GIF_BASE}/${hit.exerciseId}.gif`,
      bodyParts: [],
      equipments: ["body weight"],
      targetMuscles: [],
      secondaryMuscles: [],
      instructions: placeholderInstructions(preferStretch ? "stretch" : "move"),
    }),
  );
}

export { isStretch };
