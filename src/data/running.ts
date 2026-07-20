import type { MuscleId } from "./muscles";

export type AppSection = "anatomy" | "running";

export interface RunningMuscleFocus {
  muscleId: MuscleId;
  /** Why this muscle matters specifically for runners */
  role: string;
  /** What to prioritise in training */
  trainFocus: string;
  /** ExerciseDB search terms biased toward running-relevant moves */
  strengthQueries: string[];
  /** Stretch searches — pre/post run mobility for this muscle */
  stretchQueries: string[];
  /** Coaching cues for runners */
  cues: string[];
}

export const runningMuscles: RunningMuscleFocus[] = [
  {
    muscleId: "calves",
    role: "Your spring system — stiff ankles drive push-off and absorb landing forces mile after mile.",
    trainFocus: "Single-leg strength, slow eccentrics, and ankle stiffness.",
    strengthQueries: [
      "standing calf raise",
      "single leg calf raise",
      "seated calf raise",
      "donkey calf raise",
    ],
    stretchQueries: ["calf stretch", "standing calf stretch", "wall calf stretch"],
    cues: [
      "2× per week calf raises — runners often skip these",
      "Slow lowering phase builds Achilles resilience",
      "Stretch after every run, not only when tight",
    ],
  },
  {
    muscleId: "gluteal",
    role: "Primary hip extensors — weak glutes shift load to hamstrings and lower back, a common injury pathway.",
    trainFocus: "Hip extension power, single-leg stability, and glute activation.",
    strengthQueries: [
      "hip thrust",
      "glute bridge",
      "single leg glute bridge",
      "step up",
      "lateral band walk",
    ],
    stretchQueries: ["glute stretch", "piriformis stretch", "figure four stretch"],
    cues: [
      "Fire glutes before tempo runs or hills",
      "Single-leg work mirrors the running stride",
      "Squeeze at the top of every bridge rep",
    ],
  },
  {
    muscleId: "hamstring",
    role: "Decelerate the lower leg at swing phase and protect the knee — often tight from high stride volume.",
    trainFocus: "Eccentric strength and posterior-chain length.",
    strengthQueries: [
      "romanian deadlift",
      "nordic curl",
      "glute ham raise",
      "single leg deadlift",
    ],
    stretchQueries: [
      "hamstring stretch",
      "seated hamstring stretch",
      "standing hamstring stretch",
    ],
    cues: [
      "Eccentrics reduce hamstring strain risk",
      "Never bounce into a hamstring stretch cold",
      "Pair strength with hip mobility work",
    ],
  },
  {
    muscleId: "quadriceps",
    role: "Absorb impact on descents and extend the knee on climbs — quads take a beating on hilly courses.",
    trainFocus: "Single-leg control, eccentric loading, and front-thigh mobility.",
    strengthQueries: [
      "split squat",
      "bulgarian split squat",
      "step up",
      "wall sit",
      "lunge",
    ],
    stretchQueries: ["quad stretch", "standing quad stretch", "kneeling hip flexor stretch"],
    cues: [
      "Split squats build downhill resilience",
      "Stretch hip flexors and quads after long runs",
      "Keep the knee tracking over the foot on lunges",
    ],
  },
  {
    muscleId: "abs",
    role: "Braces the trunk so force transfers cleanly from legs to upper body — slouching wastes energy every stride.",
    trainFocus: "Anti-rotation and anti-extension core, not endless crunches.",
    strengthQueries: ["dead bug", "plank", "hollow hold", "pallof press", "bird dog"],
    stretchQueries: ["cobra stretch", "cat stretch", "child pose"],
    cues: [
      "Run tall — core holds posture under fatigue",
      "Anti-rotation work protects the lower back",
      "Breathe into the ribs, not just the belly",
    ],
  },
  {
    muscleId: "adductors",
    role: "Stabilise the pelvis laterally — groin and inner-thigh issues often trace back to weak adductors.",
    trainFocus: "Side-to-side hip stability and groin length.",
    strengthQueries: [
      "copenhagen plank",
      "side lunge",
      "sumo squat",
      "adductor",
    ],
    stretchQueries: ["adductor stretch", "butterfly stretch", "side lunge stretch"],
    cues: [
      "Include lateral movement — running is mostly forward",
      "Copenhagen planks are gold for groin health",
      "Warm up adductors before track sessions",
    ],
  },
  {
    muscleId: "lower-back",
    role: "Holds upright posture for the full duration of a run — fatigue here shows up as a forward fold late in races.",
    trainFocus: "Spinal endurance, hip hinge control, and post-run decompression.",
    strengthQueries: [
      "back extension",
      "superman",
      "good morning",
      "bird dog",
    ],
    stretchQueries: [
      "lower back stretch",
      "child pose",
      "knee to chest stretch",
      "spinal twist stretch",
    ],
    cues: [
      "A strong hinge pattern protects the lumbar spine",
      "Stretch the lower back after long runs",
      "If pain is sharp, rest — don't stretch through it",
    ],
  },
];

export const runningMuscleIds = runningMuscles.map((m) => m.muscleId);

export function getRunningMuscle(muscleId: MuscleId) {
  return runningMuscles.find((m) => m.muscleId === muscleId);
}

export function isRunningMuscle(muscleId: MuscleId) {
  return runningMuscleIds.includes(muscleId);
}
