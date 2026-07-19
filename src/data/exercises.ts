import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  // Chest
  {
    id: "push-up",
    muscleId: "chest",
    name: "Push-Up",
    difficulty: "beginner",
    equipment: "bodyweight",
    primaryFocus: "Horizontal press strength",
    secondaryMuscles: ["Shoulders", "Triceps", "Core"],
    sets: "3–4",
    reps: "8–15",
    rest: "60–90s",
    summary:
      "A classic bodyweight press that builds chest endurance and scapular control without equipment.",
    whyItWorks:
      "As you lower and press, the pectorals shorten to drive the arms forward while the anterior delts and triceps share the load. Keeping a rigid plank line forces the chest to work as a press, not a shrug.",
    formCues: [
      "Hands under shoulders, fingers spread for floor grip",
      "Ribs down, glutes lightly squeezed — one straight line",
      "Elbows ~45° from the torso, not flared to 90°",
      "Chest leads the ascent; don't let hips sag",
    ],
    commonMistakes: [
      "Collapsing hips or piking the butt",
      "Neck craning toward the floor",
      "Partial reps that never reach chest depth",
    ],
    steps: [
      { label: "Setup", cue: "High plank, wrists stacked under shoulders." },
      { label: "Lower", cue: "Bend elbows and lower chest until nearly floor." },
      { label: "Press", cue: "Drive through palms and lock out without shrugging." },
    ],
    pose: "pushup",
  },
  {
    id: "dumbbell-press",
    muscleId: "chest",
    name: "Dumbbell Bench Press",
    difficulty: "intermediate",
    equipment: "dumbbells",
    primaryFocus: "Chest hypertrophy & press power",
    secondaryMuscles: ["Shoulders", "Triceps"],
    sets: "3–4",
    reps: "8–12",
    rest: "90–120s",
    summary:
      "A free-weight press that lets each arm move independently for balanced chest development.",
    whyItWorks:
      "Dumbbells allow a deeper stretch at the bottom and a natural arc at the top, recruiting more pectoral fibers through a longer range of motion than a fixed barbell path.",
    formCues: [
      "Feet planted, shoulder blades pinched into the bench",
      "Wrists stacked over elbows throughout",
      "Lower until elbows reach roughly torso depth",
      "Press up and slightly together without clanking weights",
    ],
    commonMistakes: [
      "Rib flare that turns the lift into a shoulder shrug",
      "Bouncing out of the bottom stretch",
      "Flaring elbows excessively",
    ],
    steps: [
      { label: "Setup", cue: "Lie on bench, dumbbells above mid-chest." },
      { label: "Eccentric", cue: "Lower with control for 2–3 seconds." },
      { label: "Press", cue: "Drive up powerfully, soft lockout at top." },
    ],
    pose: "bench-press",
  },
  {
    id: "chest-fly",
    muscleId: "chest",
    name: "Dumbbell Fly",
    difficulty: "intermediate",
    equipment: "dumbbells",
    primaryFocus: "Chest stretch & isolation",
    secondaryMuscles: ["Anterior delts"],
    sets: "3",
    reps: "10–15",
    rest: "60–90s",
    summary:
      "An isolation move that emphasizes the stretch portion of chest contraction.",
    whyItWorks:
      "With elbows softly bent, the arms sweep like a hug — the pectorals lengthen under load then shorten to bring the arms together, a motion presses alone don't isolate as cleanly.",
    formCues: [
      "Soft elbow bend that stays fixed (not a press)",
      "Open until you feel a chest stretch, not shoulder pain",
      "Arc the weights together above the sternum",
      "Exhale as you close the arms",
    ],
    commonMistakes: [
      "Turning the fly into a mini press",
      "Going too deep and stressing the shoulder capsule",
      "Using momentum from the hips",
    ],
    steps: [
      { label: "Setup", cue: "Dumbbells above chest, palms facing each other." },
      { label: "Open", cue: "Sweep arms wide in a large arc." },
      { label: "Close", cue: "Hug the weights back together overhead." },
    ],
    pose: "fly",
  },

  // Shoulders
  {
    id: "overhead-press",
    muscleId: "shoulders",
    name: "Overhead Press",
    difficulty: "intermediate",
    equipment: "dumbbells",
    primaryFocus: "Vertical pressing strength",
    secondaryMuscles: ["Triceps", "Upper chest", "Core"],
    sets: "3–4",
    reps: "6–10",
    rest: "90–120s",
    summary:
      "A standing vertical press that builds shoulder mass and anti-extension core strength.",
    whyItWorks:
      "Pressing overhead against gravity loads all three deltoid heads, especially the front and side, while the core braces to keep the ribs from flaring.",
    formCues: [
      "Glutes tight, ribs stacked over pelvis",
      "Start with elbows slightly in front of the body",
      "Press in a slight arc toward the midline",
      "Finish with biceps near the ears, not behind",
    ],
    commonMistakes: [
      "Excessive lower-back lean",
      "Pressing the weights too far forward",
      "Shrugging early instead of driving through delts",
    ],
    steps: [
      { label: "Rack", cue: "Dumbbells at shoulder height, wrists stacked." },
      { label: "Drive", cue: "Press overhead while bracing the midsection." },
      { label: "Lock", cue: "Pause briefly, then lower under control." },
    ],
    pose: "overhead-press",
  },
  {
    id: "lateral-raise",
    muscleId: "shoulders",
    name: "Lateral Raise",
    difficulty: "beginner",
    equipment: "dumbbells",
    primaryFocus: "Side deltoid isolation",
    secondaryMuscles: ["Traps (upper)"],
    sets: "3–4",
    reps: "12–15",
    rest: "45–60s",
    summary:
      "The go-to isolation move for wider-looking shoulders and side deltoid detail.",
    whyItWorks:
      "Raising the arms in the scapular plane targets the lateral deltoid fibers that create shoulder 'caps' — a stimulus overhead presses often under-emphasize.",
    formCues: [
      "Slight forward lean, soft elbows",
      "Lead with the elbows, not the hands",
      "Raise to roughly shoulder height",
      "Control the lower — don't dump the weights",
    ],
    commonMistakes: [
      "Swinging with the torso",
      "Shrugging traps to finish the lift",
      "Going above shoulder height with heavy load",
    ],
    steps: [
      { label: "Setup", cue: "Dumbbells at sides, palms inward." },
      { label: "Raise", cue: "Lift elbows out to the sides." },
      { label: "Lower", cue: "Descend slowly for 2–3 seconds." },
    ],
    pose: "lateral-raise",
  },

  // Biceps
  {
    id: "bicep-curl",
    muscleId: "biceps",
    name: "Dumbbell Curl",
    difficulty: "beginner",
    equipment: "dumbbells",
    primaryFocus: "Elbow flexion hypertrophy",
    secondaryMuscles: ["Forearms", "Brachialis"],
    sets: "3–4",
    reps: "8–12",
    rest: "60–75s",
    summary:
      "A foundational curl that builds peak biceps strength through a full elbow-flex range.",
    whyItWorks:
      "Supinated curling places the biceps brachii in its strongest orientation. Controlling both the lift and lower maximizes time under tension.",
    formCues: [
      "Elbows pinned near the ribs",
      "Curl without swinging the torso",
      "Squeeze at the top for a beat",
      "Fully extend at the bottom without locking harshly",
    ],
    commonMistakes: [
      "Using hip drive to cheat the weight up",
      "Letting elbows drift forward excessively",
      "Cutting the range short",
    ],
    steps: [
      { label: "Setup", cue: "Arms hanging, palms forward." },
      { label: "Curl", cue: "Flex elbows until weights near shoulders." },
      { label: "Extend", cue: "Lower fully under control." },
    ],
    pose: "curl",
  },
  {
    id: "hammer-curl",
    muscleId: "biceps",
    name: "Hammer Curl",
    difficulty: "beginner",
    equipment: "dumbbells",
    primaryFocus: "Brachialis & arm thickness",
    secondaryMuscles: ["Biceps", "Brachioradialis"],
    sets: "3",
    reps: "10–12",
    rest: "60s",
    summary:
      "A neutral-grip curl that thickens the upper arm and builds forearm carryover.",
    whyItWorks:
      "The hammer grip emphasizes the brachialis underneath the biceps and the brachioradialis — adding density that shows even when the arm is at rest.",
    formCues: [
      "Palms face each other the entire time",
      "Keep wrists neutral and firm",
      "Move only at the elbow",
      "Equal tempo up and down",
    ],
    commonMistakes: [
      "Rotating into a regular curl mid-rep",
      "Shrugging shoulders",
      "Rushing the eccentric",
    ],
    steps: [
      { label: "Setup", cue: "Neutral grip, arms at sides." },
      { label: "Curl", cue: "Lift as if carrying hammers." },
      { label: "Lower", cue: "Return without torso sway." },
    ],
    pose: "hammer-curl",
  },

  // Triceps
  {
    id: "overhead-extension",
    muscleId: "triceps",
    name: "Overhead Triceps Extension",
    difficulty: "intermediate",
    equipment: "dumbbells",
    primaryFocus: "Long-head triceps stretch",
    secondaryMuscles: ["Shoulders (stabilizers)"],
    sets: "3",
    reps: "10–12",
    rest: "60–90s",
    summary:
      "Stretches the long head of the triceps under load for full horseshoe development.",
    whyItWorks:
      "With the arms overhead, the long head is lengthened across both the shoulder and elbow — a unique stimulus other elbow-only extensions miss.",
    formCues: [
      "Elbows point forward / slightly in, not flared",
      "Lower the weight behind the head carefully",
      "Keep upper arms still — only forearms move",
      "Soft knees, braced core",
    ],
    commonMistakes: [
      "Flaring elbows wide",
      "Arching the lower back",
      "Using too much weight and cutting depth",
    ],
    steps: [
      { label: "Setup", cue: "Dumbbell overhead with both hands." },
      { label: "Lower", cue: "Bend elbows to load the stretch." },
      { label: "Extend", cue: "Straighten arms without slamming lockout." },
    ],
    pose: "tricep-extension",
  },
  {
    id: "bench-dip",
    muscleId: "triceps",
    name: "Bench Dip",
    difficulty: "beginner",
    equipment: "bodyweight",
    primaryFocus: "Triceps press endurance",
    secondaryMuscles: ["Chest", "Shoulders"],
    sets: "3",
    reps: "8–15",
    rest: "60s",
    summary:
      "A bodyweight triceps builder you can do almost anywhere with a sturdy bench.",
    whyItWorks:
      "As you lower and press, the triceps straighten the elbows against body weight. Keeping the torso upright biases the arms over the chest.",
    formCues: [
      "Hands on edge of bench, fingers forward",
      "Hips close to the bench, feet planted",
      "Lower until elbows are about 90°",
      "Press up without shrugging to the ears",
    ],
    commonMistakes: [
      "Going too deep and stressing the front shoulder",
      "Flaring elbows aggressively",
      "Letting shoulders roll forward",
    ],
    steps: [
      { label: "Setup", cue: "Support your weight on a stable bench." },
      { label: "Descend", cue: "Bend elbows until upper arms are parallel." },
      { label: "Press", cue: "Drive through palms to full extension." },
    ],
    pose: "dip",
  },

  // Forearms
  {
    id: "wrist-curl",
    muscleId: "forearms",
    name: "Wrist Curl",
    difficulty: "beginner",
    equipment: "dumbbells",
    primaryFocus: "Forearm flexor strength",
    secondaryMuscles: ["Grip stabilizers"],
    sets: "3",
    reps: "12–20",
    rest: "45–60s",
    summary:
      "Direct flexor work that thickens the underside of the forearm and aids grip.",
    whyItWorks:
      "Isolating wrist flexion loads the flexor group that often only gets incidental work during heavy pulls — improving grip stamina under fatigue.",
    formCues: [
      "Forearms supported on thighs or a bench",
      "Wrists hang off the edge",
      "Curl palms toward you through full range",
      "Control the stretch at the bottom",
    ],
    commonMistakes: [
      "Using the elbows to help",
      "Partial reps only",
      "Going so heavy that grip fails mid-set",
    ],
    steps: [
      { label: "Setup", cue: "Forearms fixed, wrists free." },
      { label: "Curl", cue: "Flex wrists upward." },
      { label: "Lower", cue: "Allow a controlled stretch." },
    ],
    pose: "wrist-curl",
  },

  // Abs
  {
    id: "crunch",
    muscleId: "abs",
    name: "Crunch",
    difficulty: "beginner",
    equipment: "bodyweight",
    primaryFocus: "Spinal flexion strength",
    secondaryMuscles: ["Hip flexors (minimal if done well)"],
    sets: "3",
    reps: "12–20",
    rest: "45s",
    summary:
      "A controlled spinal flexion that targets the rectus abdominis without swinging.",
    whyItWorks:
      "Shortening the distance between ribs and pelvis actively contracts the abs. Pausing at the top removes momentum so the muscle does the work.",
    formCues: [
      "Chin slightly tucked — imagine an apple under it",
      "Curl ribs toward pelvis, not yanking on the neck",
      "Lower vertebrae by vertebrae",
      "Exhale on the curl",
    ],
    commonMistakes: [
      "Pulling the head with the hands",
      "Using hip flexors to yank up into a sit-up",
      "Rushing reps without a squeeze",
    ],
    steps: [
      { label: "Setup", cue: "Knees bent, hands lightly behind head." },
      { label: "Curl", cue: "Lift shoulders while pressing low back down." },
      { label: "Lower", cue: "Return slowly without fully relaxing." },
    ],
    pose: "crunch",
  },
  {
    id: "plank",
    muscleId: "abs",
    name: "Front Plank",
    difficulty: "beginner",
    equipment: "bodyweight",
    primaryFocus: "Anti-extension core bracing",
    secondaryMuscles: ["Shoulders", "Glutes", "Quads"],
    sets: "3",
    reps: "20–45s hold",
    rest: "45–60s",
    summary:
      "Isometric bracing that teaches the core to resist sagging under load.",
    whyItWorks:
      "Holding a rigid line forces the abs to isometrically fight gravity trying to pull the hips down — the same bracing pattern you need under a squat or deadlift.",
    formCues: [
      "Elbows under shoulders, forearms parallel",
      "Glutes and quads gently engaged",
      "Neutral neck — eyes on the floor ahead",
      "Breathe steadily; don't hold your breath",
    ],
    commonMistakes: [
      "Hips too high (pike) or too low (sag)",
      "Shrugging shoulders to the ears",
      "Holding breath until failure",
    ],
    steps: [
      { label: "Setup", cue: "Forearm plank position." },
      { label: "Brace", cue: "Create one straight line from head to heels." },
      { label: "Hold", cue: "Maintain tension while breathing calmly." },
    ],
    pose: "plank",
  },

  // Obliques
  {
    id: "side-bend",
    muscleId: "obliques",
    name: "Dumbbell Side Bend",
    difficulty: "beginner",
    equipment: "dumbbells",
    primaryFocus: "Lateral flexion strength",
    secondaryMuscles: ["Quadratus lumborum"],
    sets: "3",
    reps: "12–15/side",
    rest: "45s",
    summary:
      "A simple lateral flexion drill that strengthens the side core under load.",
    whyItWorks:
      "Bending sideways under a dumbbell loads the opposite obliques eccentrically, then concentrically as you return upright — building resilient side-body strength.",
    formCues: [
      "Feet hip-width, soft knees",
      "Slide the weight down the outside of the thigh",
      "Return to tall posture without twisting",
      "Equal work on both sides",
    ],
    commonMistakes: [
      "Twisting instead of side-bending",
      "Leaning forward through the hips",
      "Using a weight so heavy form collapses",
    ],
    steps: [
      { label: "Setup", cue: "Dumbbell in one hand at your side." },
      { label: "Bend", cue: "Lean laterally toward the weight." },
      { label: "Return", cue: "Stand tall using the opposite obliques." },
    ],
    pose: "side-bend",
  },

  // Quads
  {
    id: "goblet-squat",
    muscleId: "quads",
    name: "Goblet Squat",
    difficulty: "beginner",
    equipment: "dumbbells",
    primaryFocus: "Quad-dominant squat pattern",
    secondaryMuscles: ["Glutes", "Core", "Upper back"],
    sets: "3–4",
    reps: "8–12",
    rest: "90s",
    summary:
      "An accessible squat that teaches depth and upright torso mechanics.",
    whyItWorks:
      "Holding a weight at the chest counters the tendancy to tip forward, letting the quads drive out of the bottom while the core stays braced.",
    formCues: [
      "Feet roughly shoulder-width, toes slightly out",
      "Elbows inside the knees at the bottom",
      "Sit between the hips, heels stay down",
      "Drive floor away through midfoot",
    ],
    commonMistakes: [
      "Heels lifting",
      "Knees collapsing inward",
      "Rounding the upper back around the weight",
    ],
    steps: [
      { label: "Setup", cue: "Hold dumbbell at chest like a goblet." },
      { label: "Descend", cue: "Sit down until thighs are at least parallel." },
      { label: "Ascend", cue: "Stand tall without knees cave." },
    ],
    pose: "squat",
  },
  {
    id: "reverse-lunge",
    muscleId: "quads",
    name: "Reverse Lunge",
    difficulty: "intermediate",
    equipment: "dumbbells",
    primaryFocus: "Single-leg quad strength",
    secondaryMuscles: ["Glutes", "Hamstrings", "Balance"],
    sets: "3",
    reps: "8–10/leg",
    rest: "75–90s",
    summary:
      "A rear-step lunge that’s kinder on the knees while still torching the quads.",
    whyItWorks:
      "Stepping back keeps the front shin more vertical, loading the front-leg quads and glutes while challenging balance and hip stability.",
    formCues: [
      "Step back onto the ball of the rear foot",
      "Front knee tracks over midfoot",
      "Torso stays tall",
      "Push through the front heel/midfoot to stand",
    ],
    commonMistakes: [
      "Tiny steps that crowd the stance",
      "Front knee collapsing in",
      "Leaning heavily onto the back leg",
    ],
    steps: [
      { label: "Setup", cue: "Stand tall with dumbbells at sides." },
      { label: "Step", cue: "Reach one foot back into a long lunge." },
      { label: "Drive", cue: "Return to standing through the front leg." },
    ],
    pose: "lunge",
  },

  // Hamstrings
  {
    id: "romanian-deadlift",
    muscleId: "hamstrings",
    name: "Romanian Deadlift",
    difficulty: "intermediate",
    equipment: "dumbbells",
    primaryFocus: "Hip hinge & hamstring tension",
    secondaryMuscles: ["Glutes", "Erectors", "Forearms"],
    sets: "3–4",
    reps: "6–10",
    rest: "90–120s",
    summary:
      "The gold-standard hinge for loading the hamstrings through a long eccentric.",
    whyItWorks:
      "Pushing the hips back while keeping a soft knee bend stretches the hamstrings under tension — the exact stimulus that builds strength and resilience.",
    formCues: [
      "Soft knees that stay fixed",
      "Hips travel back, bar/weights stay close to legs",
      "Flat back, proud chest",
      "Feel tension in the hamstrings before standing",
    ],
    commonMistakes: [
      "Rounding the lower back",
      "Squatting the weight down instead of hinging",
      "Letting the weights drift far from the body",
    ],
    steps: [
      { label: "Setup", cue: "Weights in hands, shoulders packed." },
      { label: "Hinge", cue: "Push hips back until hamstrings stretch." },
      { label: "Stand", cue: "Drive hips forward to lockout." },
    ],
    pose: "rdl",
  },

  // Glutes
  {
    id: "hip-thrust",
    muscleId: "glutes",
    name: "Hip Thrust",
    difficulty: "intermediate",
    equipment: "barbell",
    primaryFocus: "Glute max peak contraction",
    secondaryMuscles: ["Hamstrings", "Core"],
    sets: "3–4",
    reps: "8–12",
    rest: "90s",
    summary:
      "A horizontal hip extension that hits the glutes harder than most standing lifts.",
    whyItWorks:
      "At full hip extension the glute max is in its shortest, most contracted position against gravity — a lever that squats don’t match as cleanly.",
    formCues: [
      "Upper back on bench, chin tucked slightly",
      "Shins roughly vertical at the top",
      "Drive through heels, squeeze glutes hard",
      "Avoid overextending the lumbar spine",
    ],
    commonMistakes: [
      "Hyperextending the low back at lockout",
      "Feet too far or too close",
      "Rib flare instead of posterior pelvic tilt cue",
    ],
    steps: [
      { label: "Setup", cue: "Upper back on bench, bar over hips." },
      { label: "Drive", cue: "Thrust hips up to a tabletop." },
      { label: "Squeeze", cue: "Pause, then lower with control." },
    ],
    pose: "hip-thrust",
  },

  // Calves
  {
    id: "calf-raise",
    muscleId: "calves",
    name: "Standing Calf Raise",
    difficulty: "beginner",
    equipment: "bodyweight",
    primaryFocus: "Gastrocnemius development",
    secondaryMuscles: ["Soleus", "Ankle stabilizers"],
    sets: "3–4",
    reps: "12–20",
    rest: "45–60s",
    summary:
      "Simple ankle plantarflexion that builds spring and shape in the calves.",
    whyItWorks:
      "Rising onto the toes shortens the gastrocnemius. Pausing at the top and using a full stretch at the bottom maximizes fiber recruitment.",
    formCues: [
      "Use a step for a full stretch if available",
      "Press through the big-toe side of the foot",
      "Pause 1 second at the top",
      "Don't bounce out of the bottom",
    ],
    commonMistakes: [
      "Using momentum from the knees",
      "Rolling onto the outer edge of the foot",
      "Partial range only",
    ],
    steps: [
      { label: "Setup", cue: "Feet hip-width on floor or step edge." },
      { label: "Rise", cue: "Lift heels as high as possible." },
      { label: "Lower", cue: "Descend into a controlled stretch." },
    ],
    pose: "calf-raise",
  },

  // Traps
  {
    id: "shrug",
    muscleId: "traps",
    name: "Dumbbell Shrug",
    difficulty: "beginner",
    equipment: "dumbbells",
    primaryFocus: "Upper trap elevation",
    secondaryMuscles: ["Forearms", "Levator scapulae"],
    sets: "3–4",
    reps: "10–15",
    rest: "60s",
    summary:
      "A direct elevation pattern for building dense upper traps.",
    whyItWorks:
      "Shrugging pure elevation isolates the upper traps from the delts. A slow lower builds tension that fast-jerked shrugs miss.",
    formCues: [
      "Stand tall, arms hang long",
      "Shrug straight up toward the ears",
      "Squeeze for a full second",
      "Lower slowly — avoid rolling the shoulders",
    ],
    commonMistakes: [
      "Rolling shoulders in a circle",
      "Bending the elbows to curl the weight",
      "Using so much weight that range shrinks",
    ],
    steps: [
      { label: "Setup", cue: "Dumbbells at sides, proud posture." },
      { label: "Elevate", cue: "Lift shoulders to the ears." },
      { label: "Lower", cue: "Control the descent fully." },
    ],
    pose: "shrug",
  },

  // Lats
  {
    id: "bent-over-row",
    muscleId: "lats",
    name: "Bent-Over Row",
    difficulty: "intermediate",
    equipment: "dumbbells",
    primaryFocus: "Horizontal pull & lat thickness",
    secondaryMuscles: ["Rhomboids", "Biceps", "Rear delts"],
    sets: "3–4",
    reps: "8–12",
    rest: "75–90s",
    summary:
      "A foundational row that thickens the mid-back and trains hip-hinge posture.",
    whyItWorks:
      "Pulling the elbows toward the hips engages the lats as primary movers while scapular retractors stabilize — building the V-taper foundation.",
    formCues: [
      "Hinge to ~45°, back flat",
      "Pull elbows back toward hips",
      "Squeeze shoulder blades at the top",
      "Lower until arms hang long",
    ],
    commonMistakes: [
      "Yanked reps with torso swing",
      "Rounding the lumbar spine",
      "Shrugging instead of rowing",
    ],
    steps: [
      { label: "Hinge", cue: "Soft knees, torso angled over the floor." },
      { label: "Row", cue: "Drive elbows back without flaring wide." },
      { label: "Extend", cue: "Control the arms back to the hang." },
    ],
    pose: "row",
  },
  {
    id: "lat-pulldown",
    muscleId: "lats",
    name: "Lat Pulldown",
    difficulty: "beginner",
    equipment: "cable",
    primaryFocus: "Vertical pull width",
    secondaryMuscles: ["Biceps", "Rear delts"],
    sets: "3–4",
    reps: "8–12",
    rest: "75s",
    summary:
      "A machine-friendly vertical pull that teaches lat engagement before pull-ups.",
    whyItWorks:
      "Pulling the bar to the upper chest with elbows driving down and back recruits the lats through scapular depression — the width-building pattern.",
    formCues: [
      "Lean back slightly, chest proud",
      "Initiate by pulling shoulders down",
      "Bar to upper chest, not behind the neck",
      "Control the stretch at the top",
    ],
    commonMistakes: [
      "Behind-the-neck pulldowns",
      "Using too much momentum",
      "Only bending the elbows without depressing the scaps",
    ],
    steps: [
      { label: "Setup", cue: "Wide grip, seated with thighs locked." },
      { label: "Pull", cue: "Drive elbows down to the sides of the ribs." },
      { label: "Return", cue: "Reach tall into a loaded stretch." },
    ],
    pose: "pulldown",
  },

  // Lower back
  {
    id: "back-extension",
    muscleId: "lower-back",
    name: "Back Extension",
    difficulty: "beginner",
    equipment: "bodyweight",
    primaryFocus: "Erector strength & endurance",
    secondaryMuscles: ["Glutes", "Hamstrings"],
    sets: "3",
    reps: "10–15",
    rest: "60s",
    summary:
      "A controlled hyperextension pattern that strengthens the posterior chain safely.",
    whyItWorks:
      "Extending the torso against gravity trains the erectors to hold spinal posture — critical for hinges, carries, and everyday lifting.",
    formCues: [
      "Hips supported, spine neutral to start",
      "Rise until body forms a straight line",
      "Avoid cranking into extreme hyperextension",
      "Hands across chest or behind head lightly",
    ],
    commonMistakes: [
      "Overarching aggressively at the top",
      "Using arms to fling the torso up",
      "Rounding deeply into a slumped start",
    ],
    steps: [
      { label: "Setup", cue: "Pad under hips on a stable surface." },
      { label: "Extend", cue: "Lift torso to a neutral line." },
      { label: "Lower", cue: "Descend with a braced spine." },
    ],
    pose: "back-extension",
  },

  // Adductors
  {
    id: "adductor-squeeze",
    muscleId: "adductors",
    name: "Isometric Ball Squeeze",
    difficulty: "beginner",
    equipment: "bodyweight",
    primaryFocus: "Inner-thigh activation",
    secondaryMuscles: ["Pelvic stabilizers"],
    sets: "3",
    reps: "20–30s hold",
    rest: "45s",
    summary:
      "A simple isometric that wakes up the adductors before squats or lateral work.",
    whyItWorks:
      "Squeezing inward against a ball or cushion fires the adductors isometrically, teaching pelvic control that carries into loaded lower-body work.",
    formCues: [
      "Ball or cushion between the knees",
      "Sit or lie with a neutral spine",
      "Squeeze firmly without holding breath",
      "Keep hips level",
    ],
    commonMistakes: [
      "Only tapping the ball lightly",
      "Tucking the pelvis aggressively",
      "Holding the breath through the entire set",
    ],
    steps: [
      { label: "Setup", cue: "Place a soft object between the knees." },
      { label: "Squeeze", cue: "Press inward and hold tension." },
      { label: "Release", cue: "Ease off slowly between holds." },
    ],
    pose: "adductor-squeeze",
  },
];

export function getExercisesForMuscle(muscleId: string) {
  return exercises.filter((e) => e.muscleId === muscleId);
}

export function getExercise(id: string) {
  return exercises.find((e) => e.id === id);
}
