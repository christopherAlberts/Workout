import type { MuscleId } from "./muscles";

export interface MuscleIllustration {
  /** Primary image URL (Wikimedia Commons CDN) */
  src: string;
  /** Optional local fallback under /public/anatomy/ */
  localSrc?: string;
  caption: string;
  credit: string;
  sourceFile?: string;
}

const COMMONS = "https://upload.wikimedia.org/wikipedia/commons";

/**
 * Curated OpenStax illustrations hosted on Wikimedia Commons (CC BY 4.0).
 * Remote URLs work without bundling files in public/.
 */
export const muscleIllustrations: Record<MuscleId, MuscleIllustration> = {
  chest: {
    src: `${COMMONS}/6/6f/1119_Muscles_that_Move_the_Humerus_a.png`,
    localSrc: "/anatomy/chest.png",
    caption: "Muscles that move the humerus — pectoralis major and chest region.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1119_Muscles_that_Move_the_Humerus_a.png",
  },
  deltoids: {
    src: `${COMMONS}/e/ee/1119_Muscles_that_Move_the_Humerus_b.png`,
    localSrc: "/anatomy/shoulders.png",
    caption: "Shoulder girdle muscles including the deltoid heads.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1119_Muscles_that_Move_the_Humerus_b.png",
  },
  biceps: {
    src: `${COMMONS}/9/96/Biceps_Muscle_CNX.jpg`,
    localSrc: "/anatomy/biceps.jpg",
    caption: "Biceps brachii with synergists brachialis and brachioradialis.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "Biceps_Muscle_CNX.jpg",
  },
  triceps: {
    src: `${COMMONS}/4/4f/1119_Muscles_that_Move_the_Humerus_c.png`,
    localSrc: "/anatomy/triceps.png",
    caption: "Posterior arm muscles including triceps brachii.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1119_Muscles_that_Move_the_Humerus_c.png",
  },
  forearm: {
    src: `${COMMONS}/b/bd/1119_Muscles_that_Move_the_Humerus_d.png`,
    localSrc: "/anatomy/forearm.png",
    caption: "Muscles that move the forearm, wrist, and hand.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1119_Muscles_that_Move_the_Humerus_d.png",
  },
  abs: {
    src: `${COMMONS}/5/50/1112_Muscles_of_the_Abdomen.jpg`,
    localSrc: "/anatomy/abdomen.jpg",
    caption: "Anterior abdominal wall — rectus abdominis and surrounding muscles.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1112_Muscles_of_the_Abdomen.jpg",
  },
  obliques: {
    src: `${COMMONS}/7/7c/1112_Muscles_of_the_Abdomen_Anterolateral.png`,
    localSrc: "/anatomy/core.png",
    caption: "Anterolateral abdominal muscles including internal and external obliques.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1112_Muscles_of_the_Abdomen_Anterolateral.png",
  },
  quadriceps: {
    src: `${COMMONS}/thumb/f/f7/1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg/1920px-1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg`,
    localSrc: "/anatomy/thigh.jpg",
    caption: "Thigh muscles — quadriceps femoris on the anterior thigh.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg",
  },
  hamstring: {
    src: `${COMMONS}/thumb/f/f7/1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg/1920px-1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg`,
    localSrc: "/anatomy/thigh.jpg",
    caption: "Posterior thigh muscles — hamstring group.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg",
  },
  gluteal: {
    src: `${COMMONS}/8/8f/1122_Gluteal_Muscles_that_Move_the_Femur.jpg`,
    localSrc: "/anatomy/glutes.jpg",
    caption: "Gluteal muscles that move the femur.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1122_Gluteal_Muscles_that_Move_the_Femur.jpg",
  },
  calves: {
    src: `${COMMONS}/thumb/f/f7/1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg/1920px-1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg`,
    localSrc: "/anatomy/thigh.jpg",
    caption: "Lower leg muscles — gastrocnemius and soleus (calf group).",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg",
  },
  trapezius: {
    src: `${COMMONS}/0/04/Trapezius_muscle.svg`,
    localSrc: "/anatomy/trapezius.svg",
    caption: "Trapezius muscle — upper, middle, and lower fibres.",
    credit: "InjuryMap / Wikimedia Commons (CC BY-SA 4.0)",
    sourceFile: "Trapezius_muscle.svg",
  },
  "upper-back": {
    src: `${COMMONS}/0/04/Trapezius_muscle.svg`,
    localSrc: "/anatomy/trapezius.svg",
    caption: "Upper and mid-back musculature including latissimus dorsi region.",
    credit: "InjuryMap / Wikimedia Commons (CC BY-SA 4.0)",
    sourceFile: "Trapezius_muscle.svg",
  },
  "lower-back": {
    src: `${COMMONS}/8/8f/1122_Gluteal_Muscles_that_Move_the_Femur.jpg`,
    localSrc: "/anatomy/glutes.jpg",
    caption: "Deep back and hip muscles — erector spinae and related stabilisers.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1122_Gluteal_Muscles_that_Move_the_Femur.jpg",
  },
  adductors: {
    src: `${COMMONS}/thumb/f/f7/1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg/1920px-1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg`,
    localSrc: "/anatomy/thigh.jpg",
    caption: "Medial thigh — adductor muscle group.",
    credit: "OpenStax Anatomy & Physiology (CC BY 4.0)",
    sourceFile: "1133_Thigh_Muscles_that_Moves_the_Femur_Tibia_and_Fibula.jpg",
  },
};

export function getMuscleIllustration(id: MuscleId): MuscleIllustration {
  return muscleIllustrations[id];
}

export const ILLUSTRATION_ATTRIBUTION =
  "Illustrations from OpenStax Anatomy & Physiology (CC BY 4.0) via Wikimedia Commons";

export const OPENSTAX_URL =
  "https://openstax.org/details/books/anatomy-and-physiology-2e";

export const COMMONS_URL = "https://commons.wikimedia.org";
