export type MuscleId =
  | "chest"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "forearms"
  | "abs"
  | "obliques"
  | "quads"
  | "hamstrings"
  | "glutes"
  | "calves"
  | "traps"
  | "lats"
  | "lower-back"
  | "adductors";

export type Difficulty = "beginner" | "intermediate" | "advanced";
export type Equipment = "bodyweight" | "dumbbells" | "barbell" | "cable" | "machine" | "band";
export type ViewSide = "front" | "back";
export type Mode = "exercises" | "stretches";

export interface Muscle {
  id: MuscleId;
  name: string;
  latin: string;
  description: string;
  color: string;
  views: ViewSide[];
}

export interface PoseStep {
  label: string;
  cue: string;
}

export interface Exercise {
  id: string;
  muscleId: MuscleId;
  name: string;
  difficulty: Difficulty;
  equipment: Equipment;
  primaryFocus: string;
  secondaryMuscles: string[];
  sets: string;
  reps: string;
  rest: string;
  summary: string;
  whyItWorks: string;
  formCues: string[];
  commonMistakes: string[];
  steps: PoseStep[];
  pose: PoseKind;
}

export interface Stretch {
  id: string;
  muscleId: MuscleId;
  name: string;
  difficulty: Difficulty;
  hold: string;
  frequency: string;
  summary: string;
  benefits: string;
  howTo: PoseStep[];
  tips: string[];
  avoid: string[];
  pose: PoseKind;
}

/** Identifiers for SVG instructional pose illustrations */
export type PoseKind =
  | "pushup"
  | "bench-press"
  | "fly"
  | "overhead-press"
  | "lateral-raise"
  | "curl"
  | "hammer-curl"
  | "tricep-extension"
  | "dip"
  | "wrist-curl"
  | "crunch"
  | "plank"
  | "side-bend"
  | "squat"
  | "lunge"
  | "rdl"
  | "hip-thrust"
  | "calf-raise"
  | "shrug"
  | "row"
  | "pulldown"
  | "back-extension"
  | "adductor-squeeze"
  | "chest-opener"
  | "doorway-stretch"
  | "cross-body"
  | "overhead-triceps"
  | "wrist-flexor"
  | "cobra"
  | "oblique-reach"
  | "quad-stand"
  | "forward-fold"
  | "pigeon"
  | "wall-calf"
  | "neck-trap"
  | "lat-hang"
  | "child-pose"
  | "butterfly";
