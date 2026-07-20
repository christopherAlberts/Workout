import type { EdbExercise, Gender, MuscleId } from "@/data/muscles";

const GIF_BASE = "https://static.exercisedb.dev/media";

/** Explicit female-demo exercises available on free ExerciseDB. */
const FEMALE_DEMOS: Partial<Record<MuscleId, EdbExercise[]>> = {
  abs: [
    {
      exerciseId: "BCs0G2F",
      name: "barbell seated alternate leg raise (female)",
      gifUrl: `${GIF_BASE}/BCs0G2F.gif`,
      bodyParts: ["waist"],
      equipments: ["barbell"],
      targetMuscles: ["abs"],
      secondaryMuscles: ["hip flexors"],
      instructions: [
        "Sit on a bench holding a barbell across your upper thighs or behind your shoulders for light support.",
        "Lean back slightly and brace your core.",
        "Raise one straight leg until it is roughly parallel with the floor.",
        "Lower with control and alternate legs.",
      ],
    },
    {
      exerciseId: "yT9tk17",
      name: "twisted leg raise (female)",
      gifUrl: `${GIF_BASE}/yT9tk17.gif`,
      bodyParts: ["waist"],
      equipments: ["body weight"],
      targetMuscles: ["abs"],
      secondaryMuscles: ["obliques"],
      instructions: [
        "Lie on your back with hands under your hips or by your sides.",
        "Raise both legs and gently twist them toward one side.",
        "Lower with control, then repeat to the opposite side.",
      ],
    },
  ],
  gluteal: [
    {
      exerciseId: "Pjbc0Kt",
      name: "resistance band hip thrusts on knees (female)",
      gifUrl: `${GIF_BASE}/Pjbc0Kt.gif`,
      bodyParts: ["upper legs"],
      equipments: ["resistance band"],
      targetMuscles: ["glutes"],
      secondaryMuscles: ["hamstrings"],
      instructions: [
        "Kneel with a resistance band around your hips, anchored behind you.",
        "Hinge slightly at the hips, then thrust forward by squeezing your glutes.",
        "Pause at full extension, then return with control.",
      ],
    },
  ],
  "upper-back": [
    {
      exerciseId: "Nh3mvOO",
      name: "dumbbell reverse grip row (female)",
      gifUrl: `${GIF_BASE}/Nh3mvOO.gif`,
      bodyParts: ["back"],
      equipments: ["dumbbell"],
      targetMuscles: ["upper back"],
      secondaryMuscles: ["biceps", "lats"],
      instructions: [
        "Hinge at the hips with a flat back, holding dumbbells with an underhand grip.",
        "Row the weights toward your waist, squeezing your shoulder blades.",
        "Lower slowly and repeat.",
      ],
    },
  ],
};

function namedGender(name: string): Gender | null {
  if (/\(\s*female\s*\)/i.test(name)) return "female";
  if (/\(\s*male\s*\)/i.test(name)) return "male";
  return null;
}

export function displayExerciseName(name: string) {
  return name
    .replace(/\s*\(\s*(male|female)\s*\)/gi, "")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

/**
 * Prefer demos matching the selected body model.
 * Free ExerciseDB has very few female-specific clips — those are boosted first.
 * Explicit opposite-gender tagged clips are dropped.
 */
export function preferGenderMedia(
  items: EdbExercise[],
  gender: Gender,
  muscleId?: MuscleId,
): EdbExercise[] {
  const boosted =
    gender === "female" && muscleId ? (FEMALE_DEMOS[muscleId] ?? []) : [];

  const filtered = items.filter((item) => {
    const tagged = namedGender(item.name);
    if (!tagged) return true;
    return tagged === gender;
  });

  const seen = new Set<string>();
  const merged: EdbExercise[] = [];
  for (const item of [...boosted, ...filtered]) {
    if (seen.has(item.exerciseId)) continue;
    seen.add(item.exerciseId);
    merged.push(item);
  }

  return merged.sort((a, b) => {
    const aMatch = Number(namedGender(a.name) === gender);
    const bMatch = Number(namedGender(b.name) === gender);
    return bMatch - aMatch;
  });
}

export function genderMediaNote(gender: Gender) {
  if (gender !== "female") return null;
  return "Female body map is active. ExerciseDB’s free demos are mostly filmed with a male model — female-specific clips are shown first when available.";
}
