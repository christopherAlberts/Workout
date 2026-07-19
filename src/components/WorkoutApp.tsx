"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { muscles, getMuscle, type EdbExercise, type Gender, type Mode, type MuscleId, type ViewSide } from "@/data/muscles";
import { DetailPanel } from "./DetailPanel";
import { AnatomyViewer } from "./AnatomyViewer";

export function WorkoutApp() {
  const [selectedId, setSelectedId] = useState<MuscleId | null>("chest");
  const [view, setView] = useState<ViewSide>("front");
  const [gender, setGender] = useState<Gender>("male");
  const [mode, setMode] = useState<Mode>("exercises");
  const [items, setItems] = useState<EdbExercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<EdbExercise | null>(null);

  const muscle = selectedId ? getMuscle(selectedId) : null;

  useEffect(() => {
    if (!selectedId) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);
    setSelectedItem(null);

    fetch(`/api/exercises?muscle=${selectedId}&mode=${mode}`, {
      signal: controller.signal,
    })
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Failed to load");
        setItems(json.data ?? []);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setItems([]);
        setError(err instanceof Error ? err.message : "Failed to load exercises");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [selectedId, mode]);

  function handleSelect(id: MuscleId) {
    setSelectedId(id);
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
            gender={gender}
            onSelect={handleSelect}
            onViewChange={setView}
            onGenderChange={setGender}
          />

          <div className="muscle-rail" aria-label="Muscle quick select">
            {muscles.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`rail-chip ${selectedId === m.id ? "active" : ""}`}
                style={{ ["--chip" as string]: m.color }}
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
              items={items}
              loading={loading}
              error={error}
              selected={selectedItem}
              onSelect={setSelectedItem}
              onModeChange={setMode}
            />
          ) : (
            <div className="detail-panel empty-panel">
              <h2>Choose a muscle</h2>
              <p>Tap the anatomy map or use the muscle rail to explore exercises and stretches.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
