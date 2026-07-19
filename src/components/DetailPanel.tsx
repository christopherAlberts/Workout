"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Dumbbell,
  Flame,
  ListChecks,
  Sparkles,
  Target,
  AlertTriangle,
} from "lucide-react";
import type { Exercise, Muscle, Stretch, Mode } from "@/data/types";
import { PoseIllustration } from "./PoseIllustration";

type Props = {
  muscle: Muscle;
  mode: Mode;
  exercises: Exercise[];
  stretches: Stretch[];
  selectedExercise: Exercise | null;
  selectedStretch: Stretch | null;
  onSelectExercise: (ex: Exercise | null) => void;
  onSelectStretch: (st: Stretch | null) => void;
  onModeChange: (mode: Mode) => void;
};

export function DetailPanel({
  muscle,
  mode,
  exercises,
  stretches,
  selectedExercise,
  selectedStretch,
  onSelectExercise,
  onSelectStretch,
  onModeChange,
}: Props) {
  const detail = mode === "exercises" ? selectedExercise : selectedStretch;

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
          onClick={() => {
            onModeChange("exercises");
            onSelectStretch(null);
          }}
        >
          <Dumbbell size={16} /> Exercises
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "stretches"}
          className={mode === "stretches" ? "active" : ""}
          onClick={() => {
            onModeChange("stretches");
            onSelectExercise(null);
          }}
        >
          <Sparkles size={16} /> Stretches
        </button>
      </div>

      <AnimatePresence mode="wait">
        {detail ? (
          <motion.div
            key={detail.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="detail-scroll"
          >
            <button
              type="button"
              className="back-link"
              onClick={() =>
                mode === "exercises" ? onSelectExercise(null) : onSelectStretch(null)
              }
            >
              <ArrowLeft size={16} /> Back to list
            </button>

            {mode === "exercises" && selectedExercise && (
              <ExerciseDetail exercise={selectedExercise} accent={muscle.color} />
            )}
            {mode === "stretches" && selectedStretch && (
              <StretchDetail stretch={selectedStretch} accent={muscle.color} />
            )}
          </motion.div>
        ) : (
          <motion.div
            key={`${mode}-list`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="card-list"
          >
            {mode === "exercises"
              ? exercises.map((ex) => (
                  <button
                    type="button"
                    key={ex.id}
                    className="movement-card"
                    onClick={() => onSelectExercise(ex)}
                  >
                    <PoseIllustration pose={ex.pose} accent={muscle.color} />
                    <div className="movement-meta">
                      <div className="chip-row">
                        <span className={`chip diff-${ex.difficulty}`}>{ex.difficulty}</span>
                        <span className="chip">{ex.equipment}</span>
                      </div>
                      <h3>{ex.name}</h3>
                      <p>{ex.summary}</p>
                      <span className="meta-line">
                        <Flame size={14} /> {ex.sets} sets · {ex.reps}
                      </span>
                    </div>
                  </button>
                ))
              : stretches.map((st) => (
                  <button
                    type="button"
                    key={st.id}
                    className="movement-card"
                    onClick={() => onSelectStretch(st)}
                  >
                    <PoseIllustration pose={st.pose} accent={muscle.color} />
                    <div className="movement-meta">
                      <div className="chip-row">
                        <span className={`chip diff-${st.difficulty}`}>{st.difficulty}</span>
                        <span className="chip">
                          <Clock size={12} /> {st.hold}
                        </span>
                      </div>
                      <h3>{st.name}</h3>
                      <p>{st.summary}</p>
                    </div>
                  </button>
                ))}
            {(mode === "exercises" ? exercises : stretches).length === 0 && (
              <p className="empty">Content coming soon for this muscle.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExerciseDetail({ exercise, accent }: { exercise: Exercise; accent: string }) {
  return (
    <article className="movement-detail">
      <PoseIllustration pose={exercise.pose} accent={accent} title={exercise.name} />
      <h3>{exercise.name}</h3>
      <p className="lead">{exercise.summary}</p>

      <div className="stat-grid">
        <div>
          <span>Sets</span>
          <strong>{exercise.sets}</strong>
        </div>
        <div>
          <span>Reps</span>
          <strong>{exercise.reps}</strong>
        </div>
        <div>
          <span>Rest</span>
          <strong>{exercise.rest}</strong>
        </div>
        <div>
          <span>Level</span>
          <strong className="capitalize">{exercise.difficulty}</strong>
        </div>
      </div>

      <section>
        <h4>
          <Target size={16} /> Why it works
        </h4>
        <p>{exercise.whyItWorks}</p>
      </section>

      <section>
        <h4>
          <ListChecks size={16} /> Step-by-step
        </h4>
        <ol className="steps">
          {exercise.steps.map((s) => (
            <li key={s.label}>
              <strong>{s.label}</strong>
              <span>{s.cue}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h4>Form cues</h4>
        <ul>
          {exercise.formCues.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>
          <AlertTriangle size={16} /> Common mistakes
        </h4>
        <ul className="mistakes">
          {exercise.commonMistakes.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <p className="secondary-note">
        Also works: {exercise.secondaryMuscles.join(" · ")}
      </p>
    </article>
  );
}

function StretchDetail({ stretch, accent }: { stretch: Stretch; accent: string }) {
  return (
    <article className="movement-detail">
      <PoseIllustration pose={stretch.pose} accent={accent} title={stretch.name} />
      <h3>{stretch.name}</h3>
      <p className="lead">{stretch.summary}</p>

      <div className="stat-grid">
        <div>
          <span>Hold</span>
          <strong>{stretch.hold}</strong>
        </div>
        <div>
          <span>When</span>
          <strong>{stretch.frequency}</strong>
        </div>
        <div>
          <span>Level</span>
          <strong className="capitalize">{stretch.difficulty}</strong>
        </div>
      </div>

      <section>
        <h4>
          <Sparkles size={16} /> Benefits
        </h4>
        <p>{stretch.benefits}</p>
      </section>

      <section>
        <h4>
          <ListChecks size={16} /> How to
        </h4>
        <ol className="steps">
          {stretch.howTo.map((s) => (
            <li key={s.label}>
              <strong>{s.label}</strong>
              <span>{s.cue}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h4>Tips</h4>
        <ul>
          {stretch.tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>
          <AlertTriangle size={16} /> Avoid
        </h4>
        <ul className="mistakes">
          {stretch.avoid.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
