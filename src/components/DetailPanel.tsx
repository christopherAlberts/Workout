"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Dumbbell,
  ExternalLink,
  ListChecks,
  LoaderCircle,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { EdbExercise, Mode, Muscle } from "@/data/muscles";

type Props = {
  muscle: Muscle;
  mode: Mode;
  items: EdbExercise[];
  loading: boolean;
  error: string | null;
  selected: EdbExercise | null;
  onSelect: (item: EdbExercise | null) => void;
  onModeChange: (mode: Mode) => void;
};

export function DetailPanel({
  muscle,
  mode,
  items,
  loading,
  error,
  selected,
  onSelect,
  onModeChange,
}: Props) {
  return (
    <div className="detail-panel">
      <header className="detail-header">
        <div
          className="muscle-swatch"
          style={{ background: muscle.color, boxShadow: `0 0 28px ${muscle.color}55` }}
        />
        <div>
          <p className="eyebrow">Selected muscle</p>
          <h2>{muscle.name}</h2>
          <p className="latin">{muscle.latin}</p>
        </div>
      </header>

      <p className="muscle-blurb">{muscle.description}</p>

      <div className="mode-toggle" role="tablist" aria-label="Content mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "exercises"}
          className={mode === "exercises" ? "active" : ""}
          onClick={() => onModeChange("exercises")}
        >
          <Dumbbell size={16} /> Exercises
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
      </div>

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
                <p>Loading {mode} from ExerciseDB…</p>
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
                    <h3>{item.name}</h3>
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
              <p className="empty">No {mode} found for this muscle yet.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="api-credit">
        Visuals &amp; data via{" "}
        <a href="https://oss.exercisedb.dev" target="_blank" rel="noreferrer">
          ExerciseDB <ExternalLink size={12} />
        </a>{" "}
        / AscendAPI · body map via react-muscle-highlighter
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
      <h3 className="capitalize">{item.name}</h3>
      <p className="lead">
        {mode === "stretches"
          ? "Follow the steps below and breathe into the stretch — stop shy of sharp pain."
          : "Watch the demonstration, then match the form cues in each step."}
      </p>

      <div className="stat-grid">
        <div>
          <span>Primary</span>
          <strong>{(item.targetMuscles ?? []).join(", ") || "—"}</strong>
        </div>
        <div>
          <span>Secondary</span>
          <strong>{(item.secondaryMuscles ?? []).join(", ") || "—"}</strong>
        </div>
        <div>
          <span>Equipment</span>
          <strong>{(item.equipments ?? []).join(", ") || "body weight"}</strong>
        </div>
        <div>
          <span>Region</span>
          <strong>{(item.bodyParts ?? []).join(", ") || "—"}</strong>
        </div>
      </div>

      <section>
        <h4>
          <ListChecks size={16} /> Step-by-step
        </h4>
          {(item.instructions ?? []).length > 0 ? (
            <ol className="steps">
              {(item.instructions ?? []).map((step, i) => (
                <li key={`${item.exerciseId}-${i}`}>
                  <strong>Step {i + 1}</strong>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p>Watch the GIF demonstration and match the body position carefully.</p>
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
