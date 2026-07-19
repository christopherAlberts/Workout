"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { AnatomicalBody } from "./AnatomicalBody";
import type { MuscleId, ViewSide } from "@/data/types";
import { getMuscle } from "@/data/muscles";
import { RotateCcw } from "lucide-react";

type Props = {
  selected: MuscleId | null;
  view: ViewSide;
  onSelect: (id: MuscleId) => void;
  onViewChange: (view: ViewSide) => void;
};

export function AnatomyViewer({ selected, view, onSelect, onViewChange }: Props) {
  const [hovered, setHovered] = useState<MuscleId | null>(null);
  const label = hovered
    ? getMuscle(hovered)?.name
    : selected
      ? getMuscle(selected)?.name
      : "Click a muscle";

  return (
    <div className="anatomy-stage">
      <div className="anatomy-toolbar">
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
        <p className="anatomy-hint">
          <RotateCcw size={14} aria-hidden /> Drag to orbit · Scroll to zoom
        </p>
      </div>

      <div className="anatomy-canvas-wrap">
        <Canvas
          camera={{ position: [0, 0.4, 5.2], fov: 38 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true }}
        >
          <color attach="background" args={["#12161c"]} />
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 6, 3]} intensity={1.15} color="#fff6e8" />
          <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#7ec8ff" />
          <Suspense fallback={null}>
            <AnatomicalBody
              selected={selected}
              hovered={hovered}
              view={view}
              onSelect={onSelect}
              onHover={setHovered}
            />
            <Environment preset="city" />
            <ContactShadows
              position={[0, -2.85, 0]}
              opacity={0.45}
              scale={8}
              blur={2.5}
              far={4}
            />
          </Suspense>
          <OrbitControls
            enablePan={false}
            minDistance={3.5}
            maxDistance={7}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.7}
            target={[0, 0.1, 0]}
          />
        </Canvas>

        <div className="anatomy-label" aria-live="polite">
          <span className="anatomy-label-eyebrow">Muscle focus</span>
          <strong>{label}</strong>
        </div>
      </div>
    </div>
  );
}
