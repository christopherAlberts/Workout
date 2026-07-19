import { NextResponse } from "next/server";
import { getMuscle, type Mode } from "@/data/muscles";
import { getExercisesForMuscle } from "@/lib/exercisedb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const muscleId = searchParams.get("muscle");
  const mode = (searchParams.get("mode") ?? "exercises") as Mode;

  if (!muscleId) {
    return NextResponse.json({ error: "Missing muscle" }, { status: 400 });
  }

  const muscle = getMuscle(muscleId);
  if (!muscle) {
    return NextResponse.json({ error: "Unknown muscle" }, { status: 404 });
  }

  if (mode !== "exercises" && mode !== "stretches") {
    return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
  }

  try {
    const data = await getExercisesForMuscle(muscle, mode);
    return NextResponse.json(
      {
        muscle: muscle.id,
        mode,
        count: data.length,
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
