import type { EdbExercise, Muscle, Mode } from "@/data/muscles";

const EDB_BASE = "https://oss.exercisedb.dev/api/v1";
const GIF_BASE = "https://static.exercisedb.dev/media";

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
      "User-Agent": "FORMA-Workout/1.0",
    },
    next: { revalidate: 60 * 60 * 24 },
  });

  if (res.status === 429 && attempt < 3) {
    await sleep(800 * (attempt + 1));
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

async function fetchByPrimaryTarget(target: string, limit = 25) {
  const qs = new URLSearchParams({
    targetMuscles: target,
    limit: String(limit),
  });
  const payload = await edbFetch<EdbListResponse>(`/exercises/muscles?${qs}`);
  return (payload.data ?? []).map(normalize);
}

async function fetchStretches(muscle: Muscle) {
  // Prefer a single target-muscle call (includes GIFs + instructions)
  const fromTargets = await fetchByPrimaryTarget(muscle.edbTargets[0], 25);
  const stretches = fromTargets.filter(isStretch);

  if (stretches.length >= 3) {
    return stretches;
  }

  // Fallback search — build GIF URLs without N detail requests
  const search = new URLSearchParams({
    search: muscle.stretchQuery,
    threshold: "0.45",
  });
  const hits = await edbFetch<{ data?: EdbSearchHit[] }>(
    `/exercises/search?${search}`,
  );

  const seen = new Set(stretches.map((s) => s.exerciseId));
  for (const hit of hits.data ?? []) {
    if (seen.has(hit.exerciseId)) continue;
    if (!/\bstretch\b/i.test(hit.name)) continue;
    seen.add(hit.exerciseId);
    stretches.push(
      normalize({
        exerciseId: hit.exerciseId,
        name: hit.name,
        gifUrl: `${GIF_BASE}/${hit.exerciseId}.gif`,
        bodyParts: [],
        equipments: ["body weight"],
        targetMuscles: muscle.edbTargets.slice(0, 1),
        secondaryMuscles: [],
        instructions: [
          "Follow the animated demonstration closely.",
          "Move into the stretch gradually and breathe steadily.",
          "Hold a mild comfortable tension — never sharp pain.",
          "Switch sides when the stretch is one-sided.",
        ],
      }),
    );
  }

  return stretches;
}

export async function getExercisesForMuscle(muscle: Muscle, mode: Mode) {
  if (mode === "stretches") {
    return (await fetchStretches(muscle)).slice(0, 16);
  }

  const items = await fetchByPrimaryTarget(muscle.edbTargets[0], 25);
  return items.filter((item) => !isStretch(item)).slice(0, 18);
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

export { isStretch };
