import { NextResponse } from "next/server";
import { getMuscle, type MuscleId } from "@/data/muscles";
import { getMuscleIllustration, ILLUSTRATION_ATTRIBUTION } from "@/data/muscle-illustrations";

/**
 * Returns curated reference illustration metadata for a muscle.
 * Images are bundled locally (public/anatomy/) from OpenStax via Wikimedia Commons.
 *
 * There is no dedicated "medical illustration API" — Wikimedia Commons API is used
 * during curation to source CC-licensed OpenStax textbook figures.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const muscleId = searchParams.get("muscle") as MuscleId | null;

  if (!muscleId) {
    return NextResponse.json({ error: "Missing muscle" }, { status: 400 });
  }

  const muscle = getMuscle(muscleId);
  if (!muscle) {
    return NextResponse.json({ error: "Unknown muscle" }, { status: 404 });
  }

  const illustration = getMuscleIllustration(muscleId);

  return NextResponse.json(
    {
      muscle: muscleId,
      name: muscle.name,
      illustration,
      attribution: ILLUSTRATION_ATTRIBUTION,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    },
  );
}
