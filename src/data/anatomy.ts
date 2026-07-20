import type { MuscleId } from "./muscles";

export type MuscleRelation = "synergist" | "antagonist" | "adjacent";

export interface RelatedMuscle {
  id: MuscleId;
  relation: MuscleRelation;
}

export interface MuscleAnatomy {
  muscleId: MuscleId;
  actions: string[];
  origin: string;
  insertion: string;
  innervation: string;
  bloodSupply: string;
  funFact: string;
  commonIssues: string[];
  stretchTips: string[];
  relatedMuscles: RelatedMuscle[];
}

export const muscleAnatomy: Record<MuscleId, MuscleAnatomy> = {
  chest: {
    muscleId: "chest",
    actions: [
      "Horizontal adduction of the arm",
      "Internal rotation of the humerus",
      "Flexion of the extended arm",
    ],
    origin: "Clavicle, sternum, and cartilages of ribs 1–6",
    insertion: "Lateral lip of the intertubercular (bicipital) groove of the humerus",
    innervation: "Lateral and medial pectoral nerves (C5–T1)",
    bloodSupply: "Thoracoacromial and internal thoracic arteries",
    funFact:
      "The pectoralis major has two heads — clavicular (upper) and sternocostal (lower) — which is why incline and flat presses hit slightly different fibres.",
    commonIssues: [
      "Tight pecs pull the shoulders forward, contributing to rounded posture",
      "Strains often occur during heavy bench press or sudden pushing movements",
    ],
    stretchTips: [
      "Doorway stretch: forearm on frame, step through gently for 30–45 seconds",
      "Avoid forcing the arm behind the body — ease into external rotation",
    ],
    relatedMuscles: [
      { id: "deltoids", relation: "synergist" },
      { id: "triceps", relation: "synergist" },
      { id: "upper-back", relation: "antagonist" },
    ],
  },
  deltoids: {
    muscleId: "deltoids",
    actions: [
      "Anterior head: flexion and internal rotation",
      "Lateral head: abduction of the arm",
      "Posterior head: extension and external rotation",
    ],
    origin: "Lateral third of clavicle, acromion, and spine of scapula",
    insertion: "Deltoid tuberosity of the humerus",
    innervation: "Axillary nerve (C5–C6)",
    bloodSupply: "Posterior circumflex humeral artery",
    funFact:
      "All three deltoid heads converge on a single tendon — yet each head has a distinct action depending on arm position.",
    commonIssues: [
      "Imbalanced training (too much front delt, not enough rear) leads to shoulder rounding",
      "Overhead impingement when pressing with poor scapular control",
    ],
    stretchTips: [
      "Cross-body arm pull across the chest for posterior fibres",
      "Behind-the-back towel stretch for internal rotators",
    ],
    relatedMuscles: [
      { id: "trapezius", relation: "synergist" },
      { id: "triceps", relation: "synergist" },
      { id: "upper-back", relation: "antagonist" },
    ],
  },
  biceps: {
    muscleId: "biceps",
    actions: [
      "Flexion of the elbow",
      "Supination of the forearm",
      "Weak flexion of the shoulder",
    ],
    origin: "Long head: supraglenoid tubercle · Short head: coracoid process",
    insertion: "Radial tuberosity and bicipital aponeurosis",
    innervation: "Musculocutaneous nerve (C5–C7)",
    bloodSupply: "Brachial artery",
    funFact:
      "The biceps crosses two joints — shoulder and elbow — so its length-tension relationship changes dramatically with arm position.",
    commonIssues: [
      "Biceps tendinitis at the shoulder from repetitive overhead work",
      "Distal biceps rupture during heavy eccentric loading",
    ],
    stretchTips: [
      "Extend the arm palm-down against a wall, rotate body away gently",
      "Keep the elbow straight and shoulder relaxed",
    ],
    relatedMuscles: [
      { id: "forearm", relation: "adjacent" },
      { id: "triceps", relation: "antagonist" },
      { id: "deltoids", relation: "synergist" },
    ],
  },
  triceps: {
    muscleId: "triceps",
    actions: [
      "Extension of the elbow",
      "Long head assists shoulder extension",
    ],
    origin: "Long head: infraglenoid tubercle · Lateral & medial heads: posterior humerus",
    insertion: "Olecranon process of the ulna",
    innervation: "Radial nerve (C6–C8)",
    bloodSupply: "Deep brachial artery",
    funFact:
      "The triceps is the only muscle on the back of the upper arm, but it has three heads that attach at different points on the humerus and scapula.",
    commonIssues: [
      "Elbow tendinopathy from repetitive pressing or push-ups",
      "Long-head tightness limits overhead shoulder mobility",
    ],
    stretchTips: [
      "Reach one hand down the spine, gently press the elbow with the other hand",
      "Overhead triceps stretch: elbow bent behind head, pull gently",
    ],
    relatedMuscles: [
      { id: "biceps", relation: "antagonist" },
      { id: "deltoids", relation: "synergist" },
      { id: "forearm", relation: "adjacent" },
    ],
  },
  forearm: {
    muscleId: "forearm",
    actions: [
      "Wrist flexion and extension",
      "Pronation and supination",
      "Finger flexion and grip strength",
    ],
    origin: "Medial and lateral epicondyles of the humerus, ulna, and radius",
    insertion: "Metacarpals, phalanges, and base of the hand",
    innervation: "Median, ulnar, and radial nerves",
    bloodSupply: "Ulnar and radial arteries",
    funFact:
      "Roughly half the muscles in the human body that move the fingers live in the forearm — long tendons run through the wrist to the hand.",
    commonIssues: [
      "Tennis elbow (lateral epicondylitis) from repetitive wrist extension",
      "Carpal tunnel symptoms from tight flexors compressing the median nerve",
    ],
    stretchTips: [
      "Extend the arm, pull fingers back gently with the opposite hand",
      "Prayer stretch: palms together, lower wrists for flexor release",
    ],
    relatedMuscles: [
      { id: "biceps", relation: "adjacent" },
      { id: "triceps", relation: "adjacent" },
    ],
  },
  abs: {
    muscleId: "abs",
    actions: [
      "Flexion of the lumbar spine",
      "Compression of abdominal contents",
      "Stabilisation of the pelvis and rib cage",
    ],
    origin: "Pubic crest and symphysis",
    insertion: "Xiphoid process and costal cartilages of ribs 5–7",
    innervation: "Intercostal nerves (T7–T12) and subcostal nerve",
    bloodSupply: "Superior and inferior epigastric arteries",
    funFact:
      "The 'six-pack' appearance comes from tendinous intersections crossing the rectus abdominis — everyone has them, visibility depends on body fat.",
    commonIssues: [
      "Diastasis recti — separation of the linea alba, common post-pregnancy",
      "Lower-back pain when weak abs fail to stabilise the pelvis",
    ],
    stretchTips: [
      "Cobra or upward-facing dog: gentle spinal extension",
      "Avoid aggressive back-bending if you have disc issues",
    ],
    relatedMuscles: [
      { id: "obliques", relation: "synergist" },
      { id: "lower-back", relation: "antagonist" },
    ],
  },
  obliques: {
    muscleId: "obliques",
    actions: [
      "Lateral flexion of the trunk",
      "Rotation of the trunk",
      "Compression of abdominal contents",
    ],
    origin: "External: lower 8 ribs · Internal: iliac crest and inguinal ligament",
    insertion: "External: iliac crest & linea alba · Internal: lower ribs & linea alba",
    innervation: "Intercostal, iliohypogastric, and ilioinguinal nerves (T8–L1)",
    bloodSupply: "Lower intercostal and lumbar arteries",
    funFact:
      "The external and internal obliques run in opposite diagonal directions — like a cross-brace that resists twisting forces during sport.",
    commonIssues: [
      "Side strains (oblique tears) from explosive rotation in cricket, golf, or tennis",
      "Asymmetry can contribute to uneven gait patterns",
    ],
    stretchTips: [
      "Side bend: reach one arm overhead and lean to the opposite side",
      "Seated spinal rotation: twist gently, keep hips facing forward",
    ],
    relatedMuscles: [
      { id: "abs", relation: "synergist" },
      { id: "lower-back", relation: "adjacent" },
    ],
  },
  quadriceps: {
    muscleId: "quadriceps",
    actions: [
      "Extension of the knee (all four heads)",
      "Rectus femoris also flexes the hip",
    ],
    origin: "Rectus femoris: AIIS · Vastus muscles: femoral shaft and linea aspera",
    insertion: "Patella via quadriceps tendon, then tibial tuberosity via patellar ligament",
    innervation: "Femoral nerve (L2–L4)",
    bloodSupply: "Femoral artery and genicular branches",
    funFact:
      "The quads are the body's largest muscle group by volume — the vastus lateralis alone can weigh over 300 g in trained athletes.",
    commonIssues: [
      "Patellofemoral pain when quads overpower hamstrings",
      "Quad strains during sprint acceleration or kicking sports",
    ],
    stretchTips: [
      "Standing quad stretch: pull heel to glute, keep knees together",
      "Couch stretch: rear foot elevated, lunge forward for deep hip flexor + quad release",
    ],
    relatedMuscles: [
      { id: "hamstring", relation: "antagonist" },
      { id: "gluteal", relation: "synergist" },
      { id: "adductors", relation: "adjacent" },
    ],
  },
  hamstring: {
    muscleId: "hamstring",
    actions: [
      "Extension of the hip",
      "Flexion of the knee",
      "Medial/lateral rotation of the flexed knee",
    ],
    origin: "Ischial tuberosity (biceps femoris also from femur)",
    insertion: "Tibia and fibula (varies by head: semitendinosus, semimembranosus, biceps femoris)",
    innervation: "Sciatic nerve — tibial division (L5–S2)",
    bloodSupply: "Profunda femoris and gluteal arteries",
    funFact:
      "Hamstrings are biarticular — they cross both hip and knee — making them critical for sprinting deceleration and the 'snap' of a kick.",
    commonIssues: [
      "Strains are among the most common sports injuries, especially in sprinting",
      "Tight hamstrings often compensate for weak glutes",
    ],
    stretchTips: [
      "Standing toe touch or seated forward fold — keep a soft knee bend",
      "Lying hamstring stretch with a strap: slow, controlled, 45–60 seconds",
    ],
    relatedMuscles: [
      { id: "quadriceps", relation: "antagonist" },
      { id: "gluteal", relation: "synergist" },
      { id: "calves", relation: "adjacent" },
    ],
  },
  gluteal: {
    muscleId: "gluteal",
    actions: [
      "Extension and external rotation of the hip",
      "Abduction of the thigh (via upper fibres)",
      "Stabilisation of the pelvis during gait",
    ],
    origin: "Posterior ilium, sacrum, coccyx, and sacrotuberous ligament",
    insertion: "Gluteal tuberosity of femur and iliotibial tract",
    innervation: "Inferior gluteal nerve (L5–S2)",
    bloodSupply: "Superior and inferior gluteal arteries",
    funFact:
      "The gluteus maximus is the largest and most powerful muscle in the human body — it evolved to keep us upright and power endurance running.",
    commonIssues: [
      "'Dead butt syndrome' — glutes fail to activate from prolonged sitting",
      "Piriformis-related sciatica when deep hip rotators are tight",
    ],
    stretchTips: [
      "Figure-4 stretch: ankle on opposite knee, pull thigh toward chest",
      "Pigeon pose: hip external rotation with forward fold",
    ],
    relatedMuscles: [
      { id: "hamstring", relation: "synergist" },
      { id: "lower-back", relation: "adjacent" },
      { id: "adductors", relation: "adjacent" },
    ],
  },
  calves: {
    muscleId: "calves",
    actions: [
      "Plantar flexion of the ankle (pointing the foot)",
      "Gastrocnemius also flexes the knee",
      "Soleus provides endurance plantar flexion",
    ],
    origin: "Gastrocnemius: medial & lateral femoral condyles · Soleus: posterior tibia & fibula",
    insertion: "Calcaneus via the Achilles tendon",
    innervation: "Tibial nerve (S1–S2)",
    bloodSupply: "Posterior tibial and peroneal arteries",
    funFact:
      "The Achilles tendon is the strongest tendon in the body — it stores and releases elastic energy with every step, like a spring.",
    commonIssues: [
      "Achilles tendinopathy from sudden volume increases in running",
      "Calf cramps during dehydration or mineral imbalance",
    ],
    stretchTips: [
      "Wall calf stretch: back leg straight for gastrocnemius, bent knee for soleus",
      "Hold each position 30–45 seconds after training",
    ],
    relatedMuscles: [
      { id: "hamstring", relation: "adjacent" },
      { id: "quadriceps", relation: "antagonist" },
    ],
  },
  trapezius: {
    muscleId: "trapezius",
    actions: [
      "Upper fibres: elevation of scapula",
      "Middle fibres: retraction of scapula",
      "Lower fibres: depression and upward rotation",
    ],
    origin: "Occipital bone, nuchal ligament, and spinous processes C7–T12",
    insertion: "Lateral third of clavicle, acromion, and spine of scapula",
    innervation: "Accessory nerve (CN XI) and cervical nerves C3–C4",
    bloodSupply: "Transverse cervical and dorsal scapular arteries",
    funFact:
      "The trapezius is one of the few muscles innervated by a cranial nerve (accessory nerve), reflecting its role in head and shoulder movement.",
    commonIssues: [
      "Upper trap dominance from stress and desk posture",
      "Knots and trigger points from prolonged screen time",
    ],
    stretchTips: [
      "Ear-to-shoulder tilt: gently pull head to one side",
      "Thread the needle: rotational stretch for mid-trap and rhomboids",
    ],
    relatedMuscles: [
      { id: "deltoids", relation: "synergist" },
      { id: "upper-back", relation: "adjacent" },
      { id: "lower-back", relation: "adjacent" },
    ],
  },
  "upper-back": {
    muscleId: "upper-back",
    actions: [
      "Adduction, extension, and internal rotation of the arm",
      "Depression of the shoulder",
      "Extension and lateral flexion of the trunk",
    ],
    origin: "Spinous processes of T7–L5, thoracolumbar fascia, iliac crest, and lower ribs",
    insertion: "Floor of the intertubercular groove of the humerus",
    innervation: "Thoracodorsal nerve (C6–C8)",
    bloodSupply: "Thoracodorsal artery",
    funFact:
      "The latissimus dorsi is the widest muscle in the body — its fibres span from the lower back all the way to the upper arm.",
    commonIssues: [
      "Weak lats contribute to shoulder instability and poor pull-up mechanics",
      "Overactive lats can restrict overhead shoulder mobility",
    ],
    stretchTips: [
      "Overhead lat stretch: kneel and reach hands forward on a bench",
      "Side hang from a pull-up bar for gentle decompression",
    ],
    relatedMuscles: [
      { id: "trapezius", relation: "synergist" },
      { id: "biceps", relation: "synergist" },
      { id: "chest", relation: "antagonist" },
    ],
  },
  "lower-back": {
    muscleId: "lower-back",
    actions: [
      "Extension of the vertebral column",
      "Lateral flexion of the trunk",
      "Maintenance of upright posture",
    ],
    origin: "Posterior sacrum, iliac crest, and spinous processes of lumbar vertebrae",
    insertion: "Spinous and transverse processes of vertebrae, ribs, and skull base",
    innervation: "Dorsal rami of spinal nerves",
    bloodSupply: "Lumbar and sacral arteries",
    funFact:
      "The erector spinae isn't one muscle but a group of three columns — iliocostalis, longissimus, and spinalis — running the full length of the spine.",
    commonIssues: [
      "Non-specific lower-back pain often linked to weak core and hip mobility",
      "Acute strains from heavy deadlifts with poor spinal positioning",
    ],
    stretchTips: [
      "Child's pose: knees wide, sit back on heels, arms extended",
      "Knee-to-chest: gentle, one leg at a time",
    ],
    relatedMuscles: [
      { id: "gluteal", relation: "synergist" },
      { id: "abs", relation: "antagonist" },
      { id: "hamstring", relation: "adjacent" },
    ],
  },
  adductors: {
    muscleId: "adductors",
    actions: [
      "Adduction of the thigh",
      "Medial rotation of the hip (anterior fibres)",
      "Stabilisation during single-leg stance",
    ],
    origin: "Pubis and ischium (adductor longus, brevis, magnus, gracilis, pectineus)",
    insertion: "Linea aspera, medial femur, and proximal tibia (gracilis)",
    innervation: "Obturator nerve (L2–L4) · Gracilis: femoral nerve",
    bloodSupply: "Obturator and femoral arteries",
    funFact:
      "The adductor magnus is so large it's sometimes called the 'fourth hamstring' — part of it crosses the knee and assists in extension.",
    commonIssues: [
      "Groin strains common in football, hockey, and skating",
      "Tight adductors limit squat depth and contribute to knee valgus",
    ],
    stretchTips: [
      "Butterfly stretch: soles together, gently press knees toward floor",
      "Wide-stance side lunge for dynamic adductor opening",
    ],
    relatedMuscles: [
      { id: "quadriceps", relation: "adjacent" },
      { id: "gluteal", relation: "antagonist" },
      { id: "hamstring", relation: "adjacent" },
    ],
  },
};

export function getMuscleAnatomy(id: MuscleId): MuscleAnatomy {
  return muscleAnatomy[id];
}

export function getRelatedMuscleIds(id: MuscleId): MuscleId[] {
  return muscleAnatomy[id].relatedMuscles.map((r) => r.id);
}
