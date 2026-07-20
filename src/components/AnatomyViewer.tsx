"use client";

import { useMemo } from "react";
import Body, { type ExtendedBodyPart, type Slug } from "react-muscle-highlighter";
import { muscles, type Gender, type MuscleId, type ViewSide } from "@/data/muscles";
import { RotateCcw } from "lucide-react";

type Props = {
  selected: MuscleId | null;
  view: ViewSide;
  gender: Gender;
  onSelect: (id: MuscleId) => void;
  onViewChange: (view: ViewSide) => void;
  onGenderChange: (gender: Gender) => void;
  /** When set, only these muscles can be selected (e.g. running stride muscles). */
  allowedIds?: MuscleId[];
  /** Secondary highlight for related muscles (e.g. Learn mode). */
  relatedIds?: MuscleId[];
  labelEyebrow?: string;
};

const HIDDEN: Slug[] = ["hair", "head", "hands", "feet", "ankles", "knees", "neck", "tibialis"];

export function AnatomyViewer({
  selected,
  view,
  gender,
  onSelect,
  onViewChange,
  onGenderChange,
  allowedIds,
  relatedIds = [],
  labelEyebrow = "Muscle focus",
}: Props) {
  const active = selected ? muscles.find((m) => m.id === selected) : null;

  const data = useMemo(() => {
    if (allowedIds?.length) {
      const parts: ExtendedBodyPart[] = allowedIds.map((id) => {
        const m = muscles.find((muscle) => muscle.id === id);
        if (!m) return null;
        const isSelected = id === selected;
        const isRelated = relatedIds.includes(id);
        return {
          slug: m.slug,
          color: m.color,
          intensity: isSelected ? 1 : isRelated ? 0.55 : 0.35,
        };
      }).filter(Boolean) as ExtendedBodyPart[];
      return parts;
    }

    const parts: ExtendedBodyPart[] = [];

    if (active) {
      parts.push({
        slug: active.slug,
        color: active.color,
        intensity: 1,
      });
    }

    for (const id of relatedIds) {
      if (id === selected) continue;
      const m = muscles.find((muscle) => muscle.id === id);
      if (!m) continue;
      parts.push({
        slug: m.slug,
        color: m.color,
        intensity: 0.55,
      });
    }

    return parts;
  }, [active, allowedIds, relatedIds, selected]);

  return (
    <div className="anatomy-stage">
      <div className="anatomy-toolbar">
        <div className="toolbar-group">
          <div className="view-toggle" role="group" aria-label="Body view">
            <button
              type="button"
              className={view === "front" ? "active" : ""}
              onClick={() => onViewChange("front")}
            >
              Front
            </button>
            <button
              type="button"
              className={view === "back" ? "active" : ""}
              onClick={() => onViewChange("back")}
            >
              Back
            </button>
          </div>
          <div className="view-toggle" role="group" aria-label="Body model">
            <button
              type="button"
              className={gender === "male" ? "active" : ""}
              onClick={() => onGenderChange("male")}
            >
              Male
            </button>
            <button
              type="button"
              className={gender === "female" ? "active" : ""}
              onClick={() => onGenderChange("female")}
            >
              Female
            </button>
          </div>
        </div>
        <p className="anatomy-hint">
          <RotateCcw size={14} aria-hidden /> Tap a muscle region
        </p>
      </div>

      <div className="anatomy-canvas-wrap anatomy-svg-wrap">
        <div className="body-svg">
          <Body
            data={data}
            side={view}
            gender={gender}
            scale={1.15}
            colors={[active?.color ?? "#ff8c42"]}
            defaultFill="#4b5563"
            border="#1a222c"
            hiddenParts={HIDDEN}
            onBodyPartPress={(part) => {
              const match = muscles.find((m) => m.slug === part.slug);
              if (!match) return;
              if (allowedIds?.length && !allowedIds.includes(match.id)) return;
              onSelect(match.id);
            }}
          />
        </div>

        <div className="anatomy-label" aria-live="polite">
          <span className="anatomy-label-eyebrow">{labelEyebrow}</span>
          <strong>{active?.name ?? "Select a muscle"}</strong>
        </div>
      </div>
    </div>
  );
}
