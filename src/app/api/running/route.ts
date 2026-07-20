import { NextResponse } from "next/server";
import { getMuscle, type Gender, type Mode, type MuscleId } from "@/data/muscles";
import { getRunningMuscle } from "@/data/running";
import { getRunningExercisesForMuscle } from "@/lib/running-exercises";
import { genderMediaNote } from "@/lib/gender-media";

function parseGender(value: string | null): Gender {
  return value === "female" ? "female" : "male";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const muscleId = searchParams.get("muscle");
  const mode = (searchParams.get("mode") ?? "exercises") as Mode;
  const gender = parseGender(searchParams.get("gender"));

  if (!muscleId) {
    return NextResponse.json({ error: "Missing muscle" }, { status: 400 });
  }

  const muscle = getMuscle(muscleId);
  if (!muscle) {
    return NextResponse.json({ error: "Unknown muscle" }, { status: 404 });
  }

  const focus = getRunningMuscle(muscleId as MuscleId);
  if (!focus) {
    return NextResponse.json(
      { error: "Muscle not in running focus set" },
      { status: 404 },
    );
  }

  if (mode !== "exercises" && mode !== "stretches") {
    return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
  }

  try {
    const data = await getRunningExercisesForMuscle(muscle, focus, mode, gender);
    return NextResponse.json(
      {
        muscle: muscle.id,
        mode,
        gender,
        runningFocus: focus,
        count: data.length,
        mediaNote: genderMediaNote(gender),
        attribution: "Exercise data & media © AscendAPI / ExerciseDB",
        data,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
        },
      },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upstream failure";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
