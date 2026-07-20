"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getMuscle,
  muscles,
  type EdbExercise,
  type Gender,
  type Mode,
  type MuscleId,
  type ViewSide,
} from "@/data/muscles";
import {
  getRunningMuscle,
  runningMuscleIds,
  runningMuscles,
  type AppSection,
} from "@/data/running";
import { getRelatedMuscleIds } from "@/data/anatomy";
import { DetailPanel } from "./DetailPanel";
import { AnatomyViewer } from "./AnatomyViewer";

export function WorkoutApp() {
  const [section, setSection] = useState<AppSection>("anatomy");
  const [selectedId, setSelectedId] = useState<MuscleId | null>("chest");
  const [runningMuscleId, setRunningMuscleId] = useState<MuscleId>("calves");
  const [view, setView] = useState<ViewSide>("front");
  const [gender, setGender] = useState<Gender>("male");
  const [mode, setMode] = useState<Mode>("exercises");
  const [items, setItems] = useState<EdbExercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mediaNote, setMediaNote] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<EdbExercise | null>(null);

  const activeMuscleId = section === "running" ? runningMuscleId : selectedId;
  const muscle = activeMuscleId ? getMuscle(activeMuscleId) : null;
  const runningFocus = getRunningMuscle(runningMuscleId);

  useEffect(() => {
    if (mode === "learn") {
      setLoading(false);
      setError(null);
      setMediaNote(null);
      setSelectedItem(null);
    }
  }, [mode]);

  useEffect(() => {
    if (!activeMuscleId || mode === "learn") return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);
    setMediaNote(null);
    setSelectedItem(null);

    const url =
      section === "running"
        ? `/api/running?muscle=${activeMuscleId}&mode=${mode}&gender=${gender}`
        : `/api/exercises?muscle=${activeMuscleId}&mode=${mode}&gender=${gender}`;

    fetch(url, { signal: controller.signal })
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Failed to load");
        setItems(json.data ?? []);
        setMediaNote(typeof json.mediaNote === "string" ? json.mediaNote : null);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setItems([]);
        setMediaNote(null);
        setError(err instanceof Error ? err.message : "Failed to load exercises");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [section, activeMuscleId, mode, gender]);

  function handleSelect(id: MuscleId) {
    if (section === "running") {
      if (!runningMuscleIds.includes(id)) return;
      setRunningMuscleId(id);
    } else {
      setSelectedId(id);
    }
    const m = getMuscle(id);
    if (m && !m.views.includes(view) && m.views.length === 1) {
      setView(m.views[0]);
    }
  }

  function handleRelatedSelect(id: MuscleId) {
    handleSelect(id);
    setMode("learn");
  }

  const relatedIds =
    mode === "learn" && activeMuscleId ? getRelatedMuscleIds(activeMuscleId) : [];

  function switchSection(next: AppSection) {
    setSection(next);
    setMode("exercises");
    setSelectedItem(null);
    if (next === "running") {
      const m = getMuscle(runningMuscleId);
      if (m && !m.views.includes(view) && m.views.length === 1) {
        setView(m.views[0]);
      }
    }
  }

  const railMuscles =
    section === "running"
      ? runningMuscles.map((r) => getMuscle(r.muscleId)).filter(Boolean)
      : muscles;

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
            <p className="brand-name">Workout</p>
            <p className="brand-tag">Anatomy-led training</p>
          </div>
        </motion.div>

        <div className="header-actions">
          <nav className="section-toggle" aria-label="App section">
            <button
              type="button"
              className={section === "anatomy" ? "active" : ""}
              onClick={() => switchSection("anatomy")}
            >
              Anatomy
            </button>
            <button
              type="button"
              className={section === "running" ? "active" : ""}
              onClick={() => switchSection("running")}
            >
              Running
            </button>
          </nav>
          <motion.p
            className="header-cue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {section === "running"
              ? "Pick a stride muscle. Train it. Stretch it for the run."
              : "Select a muscle. Train it. Stretch it. Learn about it."}
          </motion.p>
        </div>
      </header>

      <div className="workspace">
        <section className="stage-column">
          <AnatomyViewer
            selected={activeMuscleId}
            view={view}
            gender={gender}
            onSelect={handleSelect}
            onViewChange={setView}
            onGenderChange={setGender}
            allowedIds={section === "running" ? runningMuscleIds : undefined}
            relatedIds={relatedIds}
            labelEyebrow={section === "running" ? "Stride muscle" : "Muscle focus"}
          />

          <div className="muscle-rail" aria-label="Muscle quick select">
            {railMuscles.map((m) =>
              m ? (
                <button
                  key={m.id}
                  type="button"
                  className={`rail-chip ${activeMuscleId === m.id ? "active" : ""}`}
                  style={{ ["--chip" as string]: m.color }}
                  onClick={() => handleSelect(m.id)}
                >
                  <i style={{ background: m.color }} />
                  {m.name}
                </button>
              ) : null,
            )}
          </div>
        </section>

        <section className="panel-column">
          {muscle ? (
            <DetailPanel
              muscle={muscle}
              mode={mode}
              items={items}
              loading={loading}
              error={error}
              mediaNote={mediaNote}
              selected={selectedItem}
              onSelect={setSelectedItem}
              onModeChange={setMode}
              onRelatedSelect={handleRelatedSelect}
              running={section === "running" ? runningFocus : undefined}
            />
          ) : (
            <div className="detail-panel empty-panel">
              <h2>Choose a muscle</h2>
              <p>
                {section === "running"
                  ? "Tap a highlighted stride muscle to see running-specific training and stretches."
                  : "Tap the anatomy map or use the muscle rail to explore exercises, stretches, and anatomy."}
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
