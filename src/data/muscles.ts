import type { Muscle } from "./types";

export const muscles: Muscle[] = [
  {
    id: "chest",
    name: "Chest",
    latin: "Pectoralis major",
    description:
      "The chest drives pressing strength and shapes the front of the torso. Training it builds pushing power for everyday lifts and sport.",
    color: "#ff6b4a",
    views: ["front"],
  },
  {
    id: "shoulders",
    name: "Shoulders",
    latin: "Deltoids",
    description:
      "Three heads wrap the shoulder joint. Strong delts stabilize presses, protect the rotator cuff pathway, and create upper-body width.",
    color: "#ff9f1c",
    views: ["front", "back"],
  },
  {
    id: "biceps",
    name: "Biceps",
    latin: "Biceps brachii",
    description:
      "Elbow flexors that also assist shoulder movement. Essential for pulling strength, carrying loads, and arm aesthetics.",
    color: "#2ec4b6",
    views: ["front"],
  },
  {
    id: "triceps",
    name: "Triceps",
    latin: "Triceps brachii",
    description:
      "The primary elbow extenders and the largest arm muscle. They lock out presses and give the arm its horseshoe shape.",
    color: "#3a86ff",
    views: ["back"],
  },
  {
    id: "forearms",
    name: "Forearms",
    latin: "Flexors & extensors",
    description:
      "Grip engines of the lower arm. Strong forearms improve deadlifts, rows, and injury resilience of the wrist and elbow.",
    color: "#8ac926",
    views: ["front", "back"],
  },
  {
    id: "abs",
    name: "Abs",
    latin: "Rectus abdominis",
    description:
      "The front core wall that flexes the spine and braces the trunk under load — foundational for posture and force transfer.",
    color: "#ffd166",
    views: ["front"],
  },
  {
    id: "obliques",
    name: "Obliques",
    latin: "External & internal",
    description:
      "Side-core muscles that rotate and resist twisting. Critical for sport cutting movements and a stable midsection.",
    color: "#ef476f",
    views: ["front"],
  },
  {
    id: "quads",
    name: "Quads",
    latin: "Quadriceps femoris",
    description:
      "Four muscles on the front thigh that extend the knee. They dominate squats, sprints, climbs, and athletic deceleration.",
    color: "#06d6a0",
    views: ["front"],
  },
  {
    id: "hamstrings",
    name: "Hamstrings",
    latin: "Posterior thigh",
    description:
      "Hip extenders and knee flexors on the back of the thigh. Balance quad strength and protect the knees and lower back.",
    color: "#118ab2",
    views: ["back"],
  },
  {
    id: "glutes",
    name: "Glutes",
    latin: "Gluteus maximus",
    description:
      "The body’s strongest hip extensors. They drive sprinting, jumping, hip hinge power, and upright posture.",
    color: "#e76f51",
    views: ["back"],
  },
  {
    id: "calves",
    name: "Calves",
    latin: "Gastrocnemius & soleus",
    description:
      "Plantar flexors that spring you through walk, run, and jump. Often undertrained — crucial for ankle stiffness and balance.",
    color: "#9b5de5",
    views: ["front", "back"],
  },
  {
    id: "traps",
    name: "Traps",
    latin: "Trapezius",
    description:
      "A kite-shaped back muscle that shrugs, retracts, and stabilizes the scapulae for every upper-body lift.",
    color: "#00bbf9",
    views: ["back"],
  },
  {
    id: "lats",
    name: "Lats",
    latin: "Latissimus dorsi",
    description:
      "Broad back muscles that pull the arms toward the body. They create V-taper and dominate rows and pull-ups.",
    color: "#00f5d4",
    views: ["back"],
  },
  {
    id: "lower-back",
    name: "Lower Back",
    latin: "Erector spinae",
    description:
      "Spinal erecting columns that keep you upright under load. Train them for hinge strength and back resilience.",
    color: "#f15bb5",
    views: ["back"],
  },
  {
    id: "adductors",
    name: "Adductors",
    latin: "Inner thigh",
    description:
      "Inner-thigh muscles that pull the legs toward midline. Vital for lateral stability, squatting depth, and groin health.",
    color: "#fee440",
    views: ["front"],
  },
];

export function getMuscle(id: string) {
  return muscles.find((m) => m.id === id);
}
