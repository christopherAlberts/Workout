import type { Slug } from "react-muscle-highlighter";

export type MuscleId =
  | "chest"
  | "deltoids"
  | "biceps"
  | "triceps"
  | "forearm"
  | "abs"
  | "obliques"
  | "quadriceps"
  | "hamstring"
  | "gluteal"
  | "calves"
  | "trapezius"
  | "upper-back"
  | "lower-back"
  | "adductors";

export type ViewSide = "front" | "back";
export type Mode = "exercises" | "stretches" | "learn";
export type Gender = "male" | "female";

export interface Muscle {
  id: MuscleId;
  /** Matches react-muscle-highlighter Slug */
  slug: Slug;
  name: string;
  latin: string;
  description: string;
  color: string;
  views: ViewSide[];
  /** ExerciseDB targetMuscles query values */
  edbTargets: string[];
  /** Keywords used when searching for stretches */
  stretchQuery: string;
  /** Extra stretch search terms for richer results */
  stretchQueries?: string[];
}

export interface EdbExercise {
  exerciseId: string;
  name: string;
  gifUrl: string;
  bodyParts: string[];
  equipments: string[];
  targetMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
}

export const muscles: Muscle[] = [
  {
    id: "chest",
    slug: "chest",
    name: "Chest",
    latin: "Pectoralis major",
    description:
      "The chest drives pressing strength and shapes the front of the torso. Training it builds pushing power for everyday lifts and sport.",
    color: "#ff6b4a",
    views: ["front"],
    edbTargets: ["pectorals", "chest", "upper chest"],
    stretchQuery: "chest stretch",
    stretchQueries: ["doorway chest stretch", "pec stretch", "upper chest stretch"],
  },
  {
    id: "deltoids",
    slug: "deltoids",
    name: "Shoulders",
    latin: "Deltoids",
    description:
      "Three heads wrap the shoulder joint. Strong delts stabilize presses, protect the rotator cuff pathway, and create upper-body width.",
    color: "#ff9f1c",
    views: ["front", "back"],
    edbTargets: ["delts", "deltoids", "shoulders", "rear deltoids"],
    stretchQuery: "shoulder stretch",
    stretchQueries: ["cross body shoulder stretch", "rear delt stretch", "overhead shoulder stretch"],
  },
  {
    id: "biceps",
    slug: "biceps",
    name: "Biceps",
    latin: "Biceps brachii",
    description:
      "Elbow flexors that also assist shoulder movement. Essential for pulling strength, carrying loads, and arm aesthetics.",
    color: "#2ec4b6",
    views: ["front"],
    edbTargets: ["biceps", "brachialis"],
    stretchQuery: "biceps stretch",
    stretchQueries: ["doorway biceps stretch", "arm stretch"],
  },
  {
    id: "triceps",
    slug: "triceps",
    name: "Triceps",
    latin: "Triceps brachii",
    description:
      "The primary elbow extenders and the largest arm muscle. They lock out presses and give the arm its horseshoe shape.",
    color: "#3a86ff",
    views: ["back"],
    edbTargets: ["triceps"],
    stretchQuery: "triceps stretch",
    stretchQueries: ["overhead triceps stretch", "cross body triceps stretch"],
  },
  {
    id: "forearm",
    slug: "forearm",
    name: "Forearms",
    latin: "Flexors & extensors",
    description:
      "Grip engines of the lower arm. Strong forearms improve deadlifts, rows, and injury resilience of the wrist and elbow.",
    color: "#8ac926",
    views: ["front", "back"],
    edbTargets: ["forearms", "wrist flexors", "wrist extensors", "grip muscles"],
    stretchQuery: "wrist stretch",
    stretchQueries: ["forearm stretch", "wrist flexor stretch", "wrist extensor stretch"],
  },
  {
    id: "abs",
    slug: "abs",
    name: "Abs",
    latin: "Rectus abdominis",
    description:
      "The front core wall that flexes the spine and braces the trunk under load — foundational for posture and force transfer.",
    color: "#ffd166",
    views: ["front"],
    edbTargets: ["abs", "abdominals", "lower abs", "core"],
    stretchQuery: "abs stretch",
    stretchQueries: ["cobra stretch", "cat cow stretch", "child pose"],
  },
  {
    id: "obliques",
    slug: "obliques",
    name: "Obliques",
    latin: "External & internal",
    description:
      "Side-core muscles that rotate and resist twisting. Critical for sport cutting movements and a stable midsection.",
    color: "#ef476f",
    views: ["front"],
    edbTargets: ["obliques"],
    stretchQuery: "oblique stretch",
    stretchQueries: ["side bend stretch", "torso twist stretch", "side stretch"],
  },
  {
    id: "quadriceps",
    slug: "quadriceps",
    name: "Quads",
    latin: "Quadriceps femoris",
    description:
      "Four muscles on the front thigh that extend the knee. They dominate squats, sprints, climbs, and athletic deceleration.",
    color: "#06d6a0",
    views: ["front"],
    edbTargets: ["quadriceps", "quads"],
    stretchQuery: "quad stretch",
    stretchQueries: ["hip flexor stretch", "kneeling quad stretch", "standing quad stretch"],
  },
  {
    id: "hamstring",
    slug: "hamstring",
    name: "Hamstrings",
    latin: "Posterior thigh",
    description:
      "Hip extenders and knee flexors on the back of the thigh. Balance quad strength and protect the knees and lower back.",
    color: "#118ab2",
    views: ["back"],
    edbTargets: ["hamstrings"],
    stretchQuery: "hamstring stretch",
    stretchQueries: ["seated hamstring stretch", "standing hamstring stretch", "toe touch stretch"],
  },
  {
    id: "gluteal",
    slug: "gluteal",
    name: "Glutes",
    latin: "Gluteus maximus",
    description:
      "The body’s strongest hip extensors. They drive sprinting, jumping, hip hinge power, and upright posture.",
    color: "#e76f51",
    views: ["back"],
    edbTargets: ["glutes"],
    stretchQuery: "glute stretch",
    stretchQueries: ["piriformis stretch", "figure four stretch", "pigeon stretch"],
  },
  {
    id: "calves",
    slug: "calves",
    name: "Calves",
    latin: "Gastrocnemius & soleus",
    description:
      "Plantar flexors that spring you through walk, run, and jump. Often undertrained — crucial for ankle stiffness and balance.",
    color: "#9b5de5",
    views: ["front", "back"],
    edbTargets: ["calves", "soleus"],
    stretchQuery: "calf stretch",
    stretchQueries: ["wall calf stretch", "downward dog", "soleus stretch"],
  },
  {
    id: "trapezius",
    slug: "trapezius",
    name: "Traps",
    latin: "Trapezius",
    description:
      "A kite-shaped back muscle that shrugs, retracts, and stabilizes the scapulae for every upper-body lift.",
    color: "#00bbf9",
    views: ["back"],
    edbTargets: ["traps", "trapezius"],
    stretchQuery: "trapezius stretch",
    stretchQueries: ["neck stretch", "upper trap stretch", "levator scapulae stretch"],
  },
  {
    id: "upper-back",
    slug: "upper-back",
    name: "Lats / Upper Back",
    latin: "Latissimus dorsi",
    description:
      "Broad back muscles that pull the arms toward the body. They create V-taper and dominate rows and pull-ups.",
    color: "#00f5d4",
    views: ["back"],
    edbTargets: ["lats", "latissimus dorsi", "upper back", "rhomboids"],
    stretchQuery: "lat stretch",
    stretchQueries: ["child pose", "overhead lat stretch", "doorway lat stretch"],
  },
  {
    id: "lower-back",
    slug: "lower-back",
    name: "Lower Back",
    latin: "Erector spinae",
    description:
      "Spinal erecting columns that keep you upright under load. Train them for hinge strength and back resilience.",
    color: "#f15bb5",
    views: ["back"],
    edbTargets: ["lower back", "spine"],
    stretchQuery: "lower back stretch",
    stretchQueries: ["cat cow stretch", "knee to chest stretch", "spinal twist stretch"],
  },
  {
    id: "adductors",
    slug: "adductors",
    name: "Adductors",
    latin: "Inner thigh",
    description:
      "Inner-thigh muscles that pull the legs toward midline. Vital for lateral stability, squatting depth, and groin health.",
    color: "#fee440",
    views: ["front"],
    edbTargets: ["adductors", "inner thighs", "groin"],
    stretchQuery: "adductor stretch",
    stretchQueries: ["groin stretch", "butterfly stretch", "side lunge stretch"],
  },
];

export function getMuscle(id: string) {
  return muscles.find((m) => m.id === id);
}

export function getMuscleBySlug(slug: string) {
  return muscles.find((m) => m.slug === slug);
}
