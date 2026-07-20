import type { EdbExercise, Gender, Mode, Muscle } from "@/data/muscles";
import type { RunningMuscleFocus } from "@/data/running";
import {
  getExercisesForMuscle,
  isStretch,
  searchExercises,
} from "@/lib/exercisedb";
import { preferGenderMedia } from "@/lib/gender-media";

const RUNNING_STRENGTH_HINTS = [
  "single",
  "unilateral",
  "lunge",
  "step",
  "bridge",
  "thrust",
  "calf",
  "plank",
  "dead bug",
  "bird dog",
  "nordic",
  "hip",
  "glute",
  "balance",
  "eccentric",
  "body weight",
];

function dedupeById(items: EdbExercise[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.exerciseId)) return false;
    seen.add(item.exerciseId);
    return true;
  });
}

function scoreRunningStrength(ex: EdbExercise) {
  const name = ex.name.toLowerCase();
  let score = 0;
  for (const hint of RUNNING_STRENGTH_HINTS) {
    if (name.includes(hint)) score += 2;
  }
  if ((ex.equipments ?? []).some((e) => /body\s*weight/i.test(e))) score += 1;
  if (isStretch(ex)) return -10;
  return Math.max(1, score);
}

function scoreRunningStretch(ex: EdbExercise) {
  const name = ex.name.toLowerCase();
  let score = isStretch(ex) ? 5 : 0;
  if (/standing|dynamic|leg swing/i.test(name)) score += 2;
  if (/seated|lying|kneeling/i.test(name)) score += 1;
  if (/calf|hamstring|glute|quad|hip/i.test(name)) score += 1;
  if (isStretch(ex)) return Math.max(1, score);
  return score;
}

export async function getRunningExercisesForMuscle(
  muscle: Muscle,
  focus: RunningMuscleFocus,
  mode: Mode,
  gender: Gender = "male",
) {
  if (mode === "stretches") {
    const items = await getExercisesForMuscle(muscle, mode, gender);
    return items
      .map((item) => ({ item, score: scoreRunningStretch(item) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }

  const curatedQueries = focus.strengthQueries.slice(0, 2);
  const [base, ...curatedBatches] = await Promise.all([
    getExercisesForMuscle(muscle, mode, gender),
    ...curatedQueries.map((query) =>
      searchExercises(query, { limit: 6 }).catch(() => [] as EdbExercise[]),
    ),
  ]);

  const merged = preferGenderMedia(
    dedupeById([...curatedBatches.flat(), ...base]),
    gender,
    muscle.id,
  );
  return merged
    .map((item) => ({ item, score: scoreRunningStrength(item) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 28)
    .map(({ item }) => item);
}
