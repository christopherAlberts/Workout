"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Dumbbell,
  ExternalLink,
  ListChecks,
  LoaderCircle,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { EdbExercise, Mode, Muscle, MuscleId } from "@/data/muscles";
import type { RunningMuscleFocus } from "@/data/running";
import { displayExerciseName } from "@/lib/gender-media";
import { MuscleLearnPanel } from "./MuscleLearnPanel";

type Props = {
  muscle: Muscle;
  mode: Mode;
  items: EdbExercise[];
  loading: boolean;
  error: string | null;
  mediaNote?: string | null;
  selected: EdbExercise | null;
  onSelect: (item: EdbExercise | null) => void;
  onModeChange: (mode: Mode) => void;
  onRelatedSelect?: (id: MuscleId) => void;
  /** When set, panel shows running-specific context for this muscle. */
  running?: RunningMuscleFocus;
};

export function DetailPanel({
  muscle,
  mode,
  items,
  loading,
  error,
  mediaNote,
  selected,
  onSelect,
  onModeChange,
  onRelatedSelect,
  running,
}: Props) {
  return (
    <div className={`detail-panel ${running ? "running-detail-panel" : ""} ${selected ? "detail-panel-focused" : ""}`}>
      <header className="detail-header">
        <div
          className="muscle-swatch"
          style={{ background: muscle.color, boxShadow: `0 0 28px ${muscle.color}55` }}
        />
        <div>
          <p className="eyebrow">
            {selected
              ? mode === "stretches"
                ? "Stretch detail"
                : "Exercise detail"
              : mode === "learn"
                ? "Muscle anatomy"
                : running
                  ? "Running muscle"
                  : "Selected muscle"}
          </p>
          <h2>{selected ? displayExerciseName(selected.name) : muscle.name}</h2>
          <p className="latin">{selected ? muscle.name : running ? running.trainFocus : muscle.latin}</p>
        </div>
      </header>

      {!selected && mode !== "learn" && (
      <p className="muscle-blurb">{running ? running.role : muscle.description}</p>
      )}

      {!selected && mode !== "learn" && mediaNote && (
        <p className="media-note" role="note">
          {mediaNote}
        </p>
      )}

      {running && !selected && mode !== "learn" && (
        <ul className="running-cue-list">
          {running.cues.map((cue) => (
            <li key={cue}>{cue}</li>
          ))}
        </ul>
      )}

      {!selected && (
      <div className="mode-toggle mode-toggle-3" role="tablist" aria-label="Content mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "exercises"}
          className={mode === "exercises" ? "active" : ""}
          onClick={() => onModeChange("exercises")}
        >
          <Dumbbell size={16} /> {running ? "Train" : "Exercises"}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "stretches"}
          className={mode === "stretches" ? "active" : ""}
          onClick={() => onModeChange("stretches")}
        >
          <Sparkles size={16} /> Stretches
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "learn"}
          className={mode === "learn" ? "active" : ""}
          onClick={() => onModeChange("learn")}
        >
          <BookOpen size={16} /> Learn
        </button>
      </div>
      )}

      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key={selected.exerciseId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="detail-scroll"
          >
            <button type="button" className="back-link" onClick={() => onSelect(null)}>
              <ArrowLeft size={16} /> Back to list
            </button>
            <ExerciseDetail item={selected} accent={muscle.color} mode={mode} />
          </motion.div>
        ) : mode === "learn" ? (
          <MuscleLearnPanel
            muscle={muscle}
            onRelatedSelect={onRelatedSelect ?? (() => {})}
          />
        ) : (
          <motion.div
            key={`${mode}-list`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="card-list"
          >
            {loading && (
              <div className="state-block">
                <LoaderCircle className="spin" size={22} />
                <p>Loading {running ? "running " : ""}{mode === "stretches" ? "stretches" : mode}…</p>
              </div>
            )}

            {!loading && error && (
              <div className="state-block error">
                <p>{error}</p>
              </div>
            )}

            {!loading &&
              !error &&
              items.map((item) => (
                <button
                  type="button"
                  key={item.exerciseId}
                  className="movement-card media-card"
                  onClick={() => onSelect(item)}
                >
                  <div className="gif-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.gifUrl} alt="" loading="lazy" />
                  </div>
                  <div className="movement-meta">
                    <div className="chip-row">
                      {(item.equipments ?? []).slice(0, 2).map((eq) => (
                        <span className="chip" key={eq}>
                          {eq}
                        </span>
                      ))}
                    </div>
                    <h3>{displayExerciseName(item.name)}</h3>
                    <p>
                      Targets {(item.targetMuscles ?? []).join(", ") || muscle.name}
                      {(item.secondaryMuscles?.length ?? 0) > 0
                        ? ` · also ${item.secondaryMuscles.slice(0, 2).join(", ")}`
                        : ""}
                    </p>
                  </div>
                </button>
              ))}

            {!loading && !error && items.length === 0 && (
              <p className="empty">
                {running
                  ? `No running-focused ${mode} found for this muscle yet.`
                  : `No ${mode} found for this muscle yet.`}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="api-credit">
        {mode === "learn" ? (
          <>
            Anatomical illustrations via{" "}
            <a href="https://openstax.org/details/books/anatomy-and-physiology-2e" target="_blank" rel="noreferrer">
              OpenStax <ExternalLink size={12} />
            </a>{" "}
            (CC BY 4.0) · body map via react-muscle-highlighter
          </>
        ) : (
          <>
            Visuals &amp; data via{" "}
            <a href="https://oss.exercisedb.dev" target="_blank" rel="noreferrer">
              ExerciseDB <ExternalLink size={12} />
            </a>{" "}
            / AscendAPI · body map via react-muscle-highlighter
            {running ? " · running-curated picks" : ""}
          </>
        )}
      </p>
    </div>
  );
}

function ExerciseDetail({
  item,
  accent,
  mode,
}: {
  item: EdbExercise;
  accent: string;
  mode: Mode;
}) {
  return (
    <article className="movement-detail">
      <div className="gif-hero" style={{ borderColor: `${accent}55` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.gifUrl} alt={`Demonstration of ${item.name}`} />
      </div>
      <p className="lead">
        {mode === "stretches"
          ? "Follow the steps below and breathe into the stretch — stop shy of sharp pain."
          : "Watch the demonstration, then match the form cues in each step."}
      </p>

      <div className="stat-grid">
        <div>
          <span>Primary</span>
          <strong>{formatMeta(item.targetMuscles)}</strong>
        </div>
        <div>
          <span>Secondary</span>
          <strong>{formatMeta(item.secondaryMuscles)}</strong>
        </div>
        <div>
          <span>Equipment</span>
          <strong>{formatMeta(item.equipments, "body weight")}</strong>
        </div>
        <div>
          <span>Region</span>
          <strong>{formatMeta(item.bodyParts)}</strong>
        </div>
      </div>

      <section className="steps-section">
        <h4>
          <ListChecks size={16} /> Step-by-step
        </h4>
        {(item.instructions ?? []).length > 0 ? (
          <ol className="steps">
            {(item.instructions ?? []).map((step, i) => (
              <li key={`${item.exerciseId}-${i}`}>
                <div className="step-content">
                  <p>{step}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="steps-fallback">
            Watch the GIF demonstration and match the body position carefully.
          </p>
        )}
      </section>

      {(item.equipments?.length ?? 0) > 0 && (
        <p className="secondary-note">
          <Wrench size={14} /> Gear: {item.equipments.join(" · ")}
        </p>
      )}
    </article>
  );
}

function formatMeta(values: string[] | undefined, fallback = "—") {
  if (!values?.length) return fallback;
  return values.map((v) => v.replace(/\b\w/g, (c) => c.toUpperCase())).join(", ");
}
