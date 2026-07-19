"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MuscleId, ViewSide } from "@/data/types";
import { muscles } from "@/data/muscles";

type Props = {
  selected: MuscleId | null;
  hovered: MuscleId | null;
  view: ViewSide;
  onSelect: (id: MuscleId) => void;
  onHover: (id: MuscleId | null) => void;
};

const colorMap = Object.fromEntries(muscles.map((m) => [m.id, m.color])) as Record<
  MuscleId,
  string
>;

function MuscleMesh({
  id,
  geometry,
  position,
  rotation,
  scale,
  selected,
  hovered,
  view,
  onSelect,
  onHover,
}: {
  id: MuscleId;
  geometry: "sphere" | "box" | "capsule";
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  selected: MuscleId | null;
  hovered: MuscleId | null;
  view: ViewSide;
  onSelect: (id: MuscleId) => void;
  onHover: (id: MuscleId | null) => void;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const isActive = selected === id;
  const isHover = hovered === id;

  const base = colorMap[id];
  const color = useMemo(() => {
    if (isActive) return base;
    if (isHover) return base;
    if (selected) return "#3d4550";
    return "#5c6672";
  }, [isActive, isHover, selected, base]);

  useFrame((_, dt) => {
    if (!mesh.current) return;
    const mat = mesh.current.material as THREE.MeshStandardMaterial;
    const targetEmissive = isActive || isHover ? 0.45 : 0;
    mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetEmissive, dt * 8);
    const targetScale = isActive ? 1.06 : isHover ? 1.03 : 1;
    const s = mesh.current.scale;
    const baseScale = typeof scale === "number" ? [scale, scale, scale] : scale ?? [1, 1, 1];
    s.x = THREE.MathUtils.lerp(s.x, baseScale[0] * targetScale, dt * 10);
    s.y = THREE.MathUtils.lerp(s.y, baseScale[1] * targetScale, dt * 10);
    s.z = THREE.MathUtils.lerp(s.z, baseScale[2] * targetScale, dt * 10);
  });

  const muscleMeta = muscles.find((m) => m.id === id);
  if (muscleMeta && !muscleMeta.views.includes(view)) return null;

  return (
    <mesh
      ref={mesh}
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
        onHover(id);
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
        onHover(null);
      }}
    >
      {geometry === "sphere" && <sphereGeometry args={[1, 24, 24]} />}
      {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
      {geometry === "capsule" && <capsuleGeometry args={[0.5, 1, 6, 12]} />}
      <meshStandardMaterial
        color={color}
        emissive={base}
        emissiveIntensity={0}
        roughness={0.45}
        metalness={0.15}
        transparent
        opacity={selected && !isActive && !isHover ? 0.35 : 0.95}
      />
    </mesh>
  );
}

function TorsoShell() {
  return (
    <group>
      {/* Head */}
      <mesh position={[0, 2.55, 0]}>
        <sphereGeometry args={[0.42, 24, 24]} />
        <meshStandardMaterial color="#6b7380" roughness={0.5} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 2.1, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.28, 16]} />
        <meshStandardMaterial color="#5a6270" roughness={0.5} />
      </mesh>
      {/* Pelvis base */}
      <mesh position={[0, 0.15, 0]} scale={[0.9, 0.35, 0.55]}>
        <sphereGeometry args={[0.55, 20, 20]} />
        <meshStandardMaterial color="#4e5663" roughness={0.55} />
      </mesh>
    </group>
  );
}

export function AnatomicalBody({ selected, hovered, view, onSelect, onHover }: Props) {
  const group = useRef<THREE.Group>(null);
  const targetRot = view === "back" ? Math.PI : 0;

  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRot, dt * 4);
  });

  const shared = { selected, hovered, view, onSelect, onHover };

  return (
    <group ref={group} position={[0, -0.9, 0]}>
      <TorsoShell />

      {/* Chest */}
      <MuscleMesh
        id="chest"
        geometry="box"
        position={[0, 1.45, 0.22]}
        scale={[1.15, 0.7, 0.35]}
        {...shared}
      />
      {/* Abs */}
      <MuscleMesh
        id="abs"
        geometry="box"
        position={[0, 0.7, 0.2]}
        scale={[0.7, 0.85, 0.28]}
        {...shared}
      />
      {/* Obliques L/R as one selectable via wrappers — use two meshes same id */}
      <MuscleMesh
        id="obliques"
        geometry="box"
        position={[-0.42, 0.75, 0.08]}
        rotation={[0, 0, 0.25]}
        scale={[0.28, 0.85, 0.35]}
        {...shared}
      />
      <MuscleMesh
        id="obliques"
        geometry="box"
        position={[0.42, 0.75, 0.08]}
        rotation={[0, 0, -0.25]}
        scale={[0.28, 0.85, 0.35]}
        {...shared}
      />

      {/* Shoulders */}
      <MuscleMesh
        id="shoulders"
        geometry="sphere"
        position={[-0.78, 1.7, 0]}
        scale={[0.38, 0.32, 0.32]}
        {...shared}
      />
      <MuscleMesh
        id="shoulders"
        geometry="sphere"
        position={[0.78, 1.7, 0]}
        scale={[0.38, 0.32, 0.32]}
        {...shared}
      />

      {/* Biceps */}
      <MuscleMesh
        id="biceps"
        geometry="capsule"
        position={[-1.05, 1.15, 0.08]}
        rotation={[0, 0, 0.2]}
        scale={[0.32, 0.45, 0.32]}
        {...shared}
      />
      <MuscleMesh
        id="biceps"
        geometry="capsule"
        position={[1.05, 1.15, 0.08]}
        rotation={[0, 0, -0.2]}
        scale={[0.32, 0.45, 0.32]}
        {...shared}
      />

      {/* Triceps (more visible from back but present) */}
      <MuscleMesh
        id="triceps"
        geometry="capsule"
        position={[-1.1, 1.15, -0.12]}
        rotation={[0, 0, 0.2]}
        scale={[0.28, 0.45, 0.28]}
        {...shared}
      />
      <MuscleMesh
        id="triceps"
        geometry="capsule"
        position={[1.1, 1.15, -0.12]}
        rotation={[0, 0, -0.2]}
        scale={[0.28, 0.45, 0.28]}
        {...shared}
      />

      {/* Forearms */}
      <MuscleMesh
        id="forearms"
        geometry="capsule"
        position={[-1.25, 0.45, 0]}
        rotation={[0, 0, 0.15]}
        scale={[0.24, 0.4, 0.24]}
        {...shared}
      />
      <MuscleMesh
        id="forearms"
        geometry="capsule"
        position={[1.25, 0.45, 0]}
        rotation={[0, 0, -0.15]}
        scale={[0.24, 0.4, 0.24]}
        {...shared}
      />

      {/* Quads */}
      <MuscleMesh
        id="quads"
        geometry="capsule"
        position={[-0.32, -0.7, 0.08]}
        scale={[0.4, 0.7, 0.4]}
        {...shared}
      />
      <MuscleMesh
        id="quads"
        geometry="capsule"
        position={[0.32, -0.7, 0.08]}
        scale={[0.4, 0.7, 0.4]}
        {...shared}
      />

      {/* Adductors */}
      <MuscleMesh
        id="adductors"
        geometry="capsule"
        position={[-0.14, -0.55, 0.02]}
        rotation={[0, 0, 0.35]}
        scale={[0.22, 0.5, 0.25]}
        {...shared}
      />
      <MuscleMesh
        id="adductors"
        geometry="capsule"
        position={[0.14, -0.55, 0.02]}
        rotation={[0, 0, -0.35]}
        scale={[0.22, 0.5, 0.25]}
        {...shared}
      />

      {/* Hamstrings */}
      <MuscleMesh
        id="hamstrings"
        geometry="capsule"
        position={[-0.32, -0.7, -0.12]}
        scale={[0.36, 0.65, 0.36]}
        {...shared}
      />
      <MuscleMesh
        id="hamstrings"
        geometry="capsule"
        position={[0.32, -0.7, -0.12]}
        scale={[0.36, 0.65, 0.36]}
        {...shared}
      />

      {/* Glutes */}
      <MuscleMesh
        id="glutes"
        geometry="sphere"
        position={[-0.28, -0.05, -0.25]}
        scale={[0.4, 0.35, 0.28]}
        {...shared}
      />
      <MuscleMesh
        id="glutes"
        geometry="sphere"
        position={[0.28, -0.05, -0.25]}
        scale={[0.4, 0.35, 0.28]}
        {...shared}
      />

      {/* Calves */}
      <MuscleMesh
        id="calves"
        geometry="capsule"
        position={[-0.32, -1.7, -0.05]}
        scale={[0.28, 0.5, 0.3]}
        {...shared}
      />
      <MuscleMesh
        id="calves"
        geometry="capsule"
        position={[0.32, -1.7, -0.05]}
        scale={[0.28, 0.5, 0.3]}
        {...shared}
      />

      {/* Traps */}
      <MuscleMesh
        id="traps"
        geometry="box"
        position={[0, 1.85, -0.15]}
        scale={[0.95, 0.35, 0.3]}
        {...shared}
      />

      {/* Lats */}
      <MuscleMesh
        id="lats"
        geometry="box"
        position={[-0.55, 1.15, -0.15]}
        rotation={[0, 0, 0.4]}
        scale={[0.45, 0.9, 0.25]}
        {...shared}
      />
      <MuscleMesh
        id="lats"
        geometry="box"
        position={[0.55, 1.15, -0.15]}
        rotation={[0, 0, -0.4]}
        scale={[0.45, 0.9, 0.25]}
        {...shared}
      />

      {/* Lower back */}
      <MuscleMesh
        id="lower-back"
        geometry="box"
        position={[0, 0.65, -0.22]}
        scale={[0.55, 0.7, 0.25]}
        {...shared}
      />

      {/* Subtle breath ambient idle */}
      <IdleGlow />
    </group>
  );
}

function IdleGlow() {
  const light = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    if (!light.current) return;
    light.current.intensity = 0.35 + Math.sin(clock.elapsedTime * 1.2) * 0.08;
  });
  return <pointLight ref={light} position={[0, 1.2, 2.5]} color="#c8f542" intensity={0.4} />;
}
