"use client";

import { useState, type CSSProperties } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { muscles, getMuscle } from "@/data/muscles";
import { getExercisesForMuscle } from "@/data/exercises";
import { getStretchesForMuscle } from "@/data/stretches";
import type { Exercise, MuscleId, Mode, Stretch, ViewSide } from "@/data/types";
import { DetailPanel } from "./DetailPanel";

const AnatomyViewer = dynamic(
  () => import("./AnatomyViewer").then((m) => m.AnatomyViewer),
  {
    ssr: false,
    loading: () => (
      <div className="anatomy-stage anatomy-loading">
        <div className="spinner" />
        <p>Loading 3D anatomy…</p>
      </div>
    ),
  },
);

export function WorkoutApp() {
  const [selectedId, setSelectedId] = useState<MuscleId | null>("chest");
  const [view, setView] = useState<ViewSide>("front");
  const [mode, setMode] = useState<Mode>("exercises");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedStretch, setSelectedStretch] = useState<Stretch | null>(null);

  const muscle = selectedId ? getMuscle(selectedId) : null;
  const exercises = selectedId ? getExercisesForMuscle(selectedId) : [];
  const stretches = selectedId ? getStretchesForMuscle(selectedId) : [];

  function handleSelect(id: MuscleId) {
    setSelectedId(id);
    setSelectedExercise(null);
    setSelectedStretch(null);
    const m = getMuscle(id);
    if (m && !m.views.includes(view) && m.views.length === 1) {
      setView(m.views[0]);
    }
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <motion.div
          className="brand"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="brand-mark" aria-hidden />
          <div>
            <p className="brand-name">FORMA</p>
            <p className="brand-tag">Anatomy-led training</p>
          </div>
        </motion.div>
        <motion.p
          className="header-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          Select a muscle. Train it. Stretch it.
        </motion.p>
      </header>

      <div className="workspace">
        <section className="stage-column">
          <AnatomyViewer
            selected={selectedId}
            view={view}
            onSelect={handleSelect}
            onViewChange={setView}
          />

          <div className="muscle-rail" aria-label="Muscle quick select">
            {muscles.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`rail-chip ${selectedId === m.id ? "active" : ""}`}
                  style={{ "--chip": m.color } as CSSProperties}
                onClick={() => handleSelect(m.id)}
              >
                <i style={{ background: m.color }} />
                {m.name}
              </button>
            ))}
          </div>
        </section>

        <section className="panel-column">
          {muscle ? (
            <DetailPanel
              muscle={muscle}
              mode={mode}
              exercises={exercises}
              stretches={stretches}
              selectedExercise={selectedExercise}
              selectedStretch={selectedStretch}
              onSelectExercise={setSelectedExercise}
              onSelectStretch={setSelectedStretch}
              onModeChange={setMode}
            />
          ) : (
            <div className="detail-panel empty-panel">
              <h2>Choose a muscle</h2>
              <p>Tap the 3D body or use the muscle rail to explore exercises and stretches.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
