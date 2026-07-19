import type { Stretch } from "./types";

export const stretches: Stretch[] = [
  {
    id: "doorway-chest",
    muscleId: "chest",
    name: "Doorway Chest Opener",
    difficulty: "beginner",
    hold: "30–45s / side",
    frequency: "Daily or post-press",
    summary:
      "Opens the pecs and front shoulders after sitting or heavy pressing days.",
    benefits:
      "Counteracts rounded-shoulder posture and restores pressing range by lengthening the pectoralis major and minor.",
    howTo: [
      { label: "Place", cue: "Forearm on a doorframe with elbow at ~90°." },
      { label: "Step", cue: "Step the same-side foot forward gently." },
      { label: "Open", cue: "Rotate the chest away until you feel a stretch." },
    ],
    tips: ["Keep the neck long", "Breathe into the stretch", "Stay below pain threshold"],
    avoid: ["Forcing into sharp shoulder pain", "Shrugging toward the ear"],
    pose: "doorway-stretch",
  },
  {
    id: "chest-floor-opener",
    muscleId: "chest",
    name: "Floor Chest Opener",
    difficulty: "beginner",
    hold: "45–60s",
    frequency: "Evening mobility",
    summary:
      "A passive floor stretch that melts tight pecs while you breathe.",
    benefits:
      "Uses gravity to open the chest wall and improve thoracic extension — helpful after desk work.",
    howTo: [
      { label: "Lie", cue: "Lie on your back with arms open in a T or cactus shape." },
      { label: "Relax", cue: "Let the chest soften toward the floor." },
      { label: "Breathe", cue: "Slow nasal breaths for the full hold." },
    ],
    tips: ["Support the head if needed", "Soft bend in the elbows is fine"],
    avoid: ["Pinching the low back by flaring ribs hard"],
    pose: "chest-opener",
  },
  {
    id: "cross-body-shoulder",
    muscleId: "shoulders",
    name: "Cross-Body Shoulder Stretch",
    difficulty: "beginner",
    hold: "30s / side",
    frequency: "After shoulder work",
    summary:
      "Gently stretches the rear and side deltoid after pressing or raising.",
    benefits:
      "Improves horizontal adduction range and eases post-workout shoulder stiffness.",
    howTo: [
      { label: "Reach", cue: "Bring one arm across the chest." },
      { label: "Anchor", cue: "Use the other arm to hug it closer." },
      { label: "Hold", cue: "Keep shoulders down away from the ears." },
    ],
    tips: ["Stay upright", "Feel stretch in the outer/rear shoulder"],
    avoid: ["Pulling so hard the neck tenses"],
    pose: "cross-body",
  },
  {
    id: "bicep-wall",
    muscleId: "biceps",
    name: "Wall Bicep Stretch",
    difficulty: "beginner",
    hold: "30–40s / side",
    frequency: "Post-curl sessions",
    summary:
      "Lengthens the biceps and front shoulder after heavy elbow flexion work.",
    benefits:
      "Restores elbow extension comfort and reduces anterior arm tightness from curling volume.",
    howTo: [
      { label: "Plant", cue: "Place palm on a wall with arm extended behind you." },
      { label: "Turn", cue: "Gently rotate the torso away from the wall." },
      { label: "Feel", cue: "Sense stretch along the front of the upper arm." },
    ],
    tips: ["Keep the elbow soft, not locked", "Start mild and ease deeper"],
    avoid: ["Aggressive twisting into elbow pain"],
    pose: "doorway-stretch",
  },
  {
    id: "overhead-triceps-stretch",
    muscleId: "triceps",
    name: "Overhead Triceps Stretch",
    difficulty: "beginner",
    hold: "30–45s / side",
    frequency: "After push days",
    summary:
      "Classic stretch for the long head of the triceps.",
    benefits:
      "Improves overhead elbow flexion range and relieves post-extension tightness.",
    howTo: [
      { label: "Reach", cue: "Reach one arm overhead, bend elbow so hand drops behind the head." },
      { label: "Assist", cue: "Use the other hand to gently deepen the elbow bend." },
      { label: "Stand tall", cue: "Avoid dumping into the lower back." },
    ],
    tips: ["Keep ribs down", "Breathe out as you ease deeper"],
    avoid: ["Yanked pulls on the elbow"],
    pose: "overhead-triceps",
  },
  {
    id: "wrist-flexor-stretch",
    muscleId: "forearms",
    name: "Wrist Flexor Stretch",
    difficulty: "beginner",
    hold: "20–30s / side",
    frequency: "Between desk & lifting blocks",
    summary:
      "Opens the underside of the forearm — vital for lifters and desk workers.",
    benefits:
      "Reduces wrist-flexor tightness that can contribute to elbow discomfort and grip fatigue.",
    howTo: [
      { label: "Extend", cue: "Arm straight, palm facing up." },
      { label: "Pull", cue: "Use the other hand to gently pull fingers down/back." },
      { label: "Hold", cue: "Keep the elbow soft and shoulder relaxed." },
    ],
    tips: ["Also try palm-down for the extensors", "Stop shy of tingling"],
    avoid: ["Forcing through numbness"],
    pose: "wrist-flexor",
  },
  {
    id: "cobra-stretch",
    muscleId: "abs",
    name: "Cobra / Prone Extension",
    difficulty: "beginner",
    hold: "20–30s",
    frequency: "Daily mobility",
    summary:
      "Opens the abdominal wall and gently extends the spine.",
    benefits:
      "Counters flexed sitting posture and lengthens the rectus abdominis after crunch-heavy sessions.",
    howTo: [
      { label: "Lie", cue: "Lie face-down, hands under shoulders." },
      { label: "Press", cue: "Press the chest up while hips stay grounded." },
      { label: "Relax", cue: "Soften the glutes and breathe into the belly stretch." },
    ],
    tips: ["Keep elbows soft", "Stay within comfortable extension"],
    avoid: ["Cranking the neck back", "Pushing past low-back pain"],
    pose: "cobra",
  },
  {
    id: "oblique-reach",
    muscleId: "obliques",
    name: "Standing Oblique Reach",
    difficulty: "beginner",
    hold: "25–40s / side",
    frequency: "Warm-up or cool-down",
    summary:
      "A tall side-body stretch for the obliques and lat line.",
    benefits:
      "Improves lateral flexion range and decompresses the side waist after twisting sports or side bends.",
    howTo: [
      { label: "Stand", cue: "Feet hip-width, one arm reaching overhead." },
      { label: "Lean", cue: "Lean away to lengthen the opposite side body." },
      { label: "Lengthen", cue: "Reach long through the fingertips." },
    ],
    tips: ["Keep hips relatively square", "Both feet rooted"],
    avoid: ["Twisting forward into a fold"],
    pose: "oblique-reach",
  },
  {
    id: "standing-quad",
    muscleId: "quads",
    name: "Standing Quad Stretch",
    difficulty: "beginner",
    hold: "30–45s / side",
    frequency: "After squats / runs",
    summary:
      "The essential stretch for the front of the thigh.",
    benefits:
      "Restores knee flexion range and eases quadriceps tightness that can tug on the knees and hips.",
    howTo: [
      { label: "Stand", cue: "Hold a wall for balance if needed." },
      { label: "Grab", cue: "Hold the ankle and draw the heel toward the glute." },
      { label: "Align", cue: "Keep knees close and tuck the pelvis slightly." },
    ],
    tips: ["Squeeze the glute on the stretching side", "Stay upright"],
    avoid: ["Cranking the lower back into extension"],
    pose: "quad-stand",
  },
  {
    id: "forward-fold",
    muscleId: "hamstrings",
    name: "Standing Forward Fold",
    difficulty: "beginner",
    hold: "40–60s",
    frequency: "Daily or post-hinge",
    summary:
      "A classic posterior-chain stretch targeting the hamstrings.",
    benefits:
      "Lengthens the hamstrings and eases tension that limits hinge depth and can tug on the lower back.",
    howTo: [
      { label: "Hinge", cue: "Soft knees, fold from the hips." },
      { label: "Hang", cue: "Let the torso and arms drape downward." },
      { label: "Soften", cue: "Relax the neck and breathe into the backs of the legs." },
    ],
    tips: ["Bent knees are encouraged", "Shift weight slightly into the midfoot"],
    avoid: ["Forcing a locked-knee deeper fold"],
    pose: "forward-fold",
  },
  {
    id: "pigeon",
    muscleId: "glutes",
    name: "Figure-Four / Pigeon Prep",
    difficulty: "intermediate",
    hold: "45–60s / side",
    frequency: "After lower-body days",
    summary:
      "Deep glute and outer-hip opener used in many mobility routines.",
    benefits:
      "Targets the glute max and deep external rotators — helpful after squats, runs, and long sitting.",
    howTo: [
      { label: "Lie", cue: "On your back, cross ankle over opposite knee." },
      { label: "Thread", cue: "Reach through and draw the uncrossed thigh toward you." },
      { label: "Settle", cue: "Keep the sacrum heavy on the floor." },
    ],
    tips: ["Flex the crossed foot", "Use a strap if reach is limited"],
    avoid: ["Pain in the knee of the crossed leg"],
    pose: "pigeon",
  },
  {
    id: "wall-calf",
    muscleId: "calves",
    name: "Wall Calf Stretch",
    difficulty: "beginner",
    hold: "30–45s / side",
    frequency: "After runs or calf raises",
    summary:
      "Stretches the gastrocnemius against a wall with a straight back leg.",
    benefits:
      "Improves ankle dorsiflexion for squats and reduces calf tightness that limits walking and sprinting mechanics.",
    howTo: [
      { label: "Lunge", cue: "Hands on wall, one foot back, heel down." },
      { label: "Straighten", cue: "Keep the back knee straight for gastroc focus." },
      { label: "Lean", cue: "Lean the hips forward until calves stretch." },
    ],
    tips: ["Bend the back knee slightly to bias soleus", "Both sides equally"],
    avoid: ["Letting the back heel rise"],
    pose: "wall-calf",
  },
  {
    id: "trap-neck",
    muscleId: "traps",
    name: "Upper Trap Side Stretch",
    difficulty: "beginner",
    hold: "25–35s / side",
    frequency: "Desk resets",
    summary:
      "Gentle side-neck stretch that eases upper trap tension.",
    benefits:
      "Relieves elevation-fatigue from shrugs, carries, and stress-related shoulder hiking.",
    howTo: [
      { label: "Sit tall", cue: "One hand anchors the opposite side of the chair." },
      { label: "Tilt", cue: "Ear toward the free-side shoulder." },
      { label: "Optional assist", cue: "Light hand pressure on the head — never yank." },
    ],
    tips: ["Keep both shoulders low", "Breathe slowly"],
    avoid: ["Forceful pulling on the head"],
    pose: "neck-trap",
  },
  {
    id: "lat-child",
    muscleId: "lats",
    name: "Child’s Pose Lat Reach",
    difficulty: "beginner",
    hold: "45–60s",
    frequency: "Post-pull days",
    summary:
      "A kneeling reach that lengthens the lats and side body.",
    benefits:
      "Restores overhead reach and decompresses the lats after rows and pulldowns.",
    howTo: [
      { label: "Kneel", cue: "Sit hips toward heels, arms reaching forward." },
      { label: "Walk", cue: "Walk hands to one side to bias that lat." },
      { label: "Sink", cue: "Let the chest melt toward the floor." },
    ],
    tips: ["Widen the knees if hips are tight", "Support forehead on a block if needed"],
    avoid: ["Pain in the knees — pad them"],
    pose: "child-pose",
  },
  {
    id: "hang-lat",
    muscleId: "lats",
    name: "Passive Hang",
    difficulty: "intermediate",
    hold: "15–30s",
    frequency: "2–4 short sets",
    summary:
      "A dead hang that decompresses the shoulders and lengthens the lats.",
    benefits:
      "Improves grip, scapular mobility, and lat length — an excellent finisher after vertical pulls.",
    howTo: [
      { label: "Grip", cue: "Hang from a bar with relaxed shoulders." },
      { label: "Breathe", cue: "Allow the torso to lengthen." },
      { label: "Exit", cue: "Step down carefully before grip fails completely." },
    ],
    tips: ["Start with toes lightly touching the floor", "Build duration gradually"],
    avoid: ["Hanging through shoulder injury pain"],
    pose: "lat-hang",
  },
  {
    id: "child-pose-back",
    muscleId: "lower-back",
    name: "Child’s Pose",
    difficulty: "beginner",
    hold: "60–90s",
    frequency: "Anytime low back feels compressed",
    summary:
      "A restorative fold that gently flexes and unloads the lumbar spine.",
    benefits:
      "Reduces erector tone after hinges and gives the lumbar tissues a supported rest position.",
    howTo: [
      { label: "Kneel", cue: "Big toes together, knees comfortably apart." },
      { label: "Fold", cue: "Reach arms forward or rest them by the sides." },
      { label: "Rest", cue: "Breathe into the back body." },
    ],
    tips: ["Use a cushion between calves and thighs if needed"],
    avoid: ["Forcing hips to heels through knee pain"],
    pose: "child-pose",
  },
  {
    id: "butterfly",
    muscleId: "adductors",
    name: "Butterfly Stretch",
    difficulty: "beginner",
    hold: "45–60s",
    frequency: "Pre squat / skating / lateral work",
    summary:
      "Seated inner-thigh opener with soles of the feet together.",
    benefits:
      "Improves hip abduction and adductor length for deeper squats and healthier groin tissue.",
    howTo: [
      { label: "Sit", cue: "Soles together, knees falling open." },
      { label: "Lengthen", cue: "Sit tall, then hinge slightly forward." },
      { label: "Relax", cue: "Let gravity open the hips — don't bounce." },
    ],
    tips: ["Prop the knees with pillows if very tight", "Hold the feet gently"],
    avoid: ["Bouncing (ballistic) presses on the knees"],
    pose: "butterfly",
  },
];

export function getStretchesForMuscle(muscleId: string) {
  return stretches.filter((s) => s.muscleId === muscleId);
}

export function getStretch(id: string) {
  return stretches.find((s) => s.id === id);
}
