"use client";

import type { PoseKind } from "@/data/types";

type Props = {
  pose: PoseKind;
  accent?: string;
  title?: string;
};

/** Stylized instructional figure — silhouette + motion arcs for form reference */
export function PoseIllustration({ pose, accent = "#c8f542", title }: Props) {
  return (
    <div className="pose-frame" aria-hidden={!title}>
      {title && <span className="sr-only">{title}</span>}
      <svg viewBox="0 0 200 200" className="pose-svg" role="img">
        <defs>
          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a222c" stopOpacity="0" />
            <stop offset="100%" stopColor="#1a222c" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill="url(#glow)" />
        <ellipse cx="100" cy="178" rx="55" ry="8" fill="url(#floor)" />
        <g
          fill="none"
          stroke="#e8ebe6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {renderPose(pose, accent)}
        </g>
      </svg>
    </div>
  );
}

function Head({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r="10" fill="#e8ebe6" stroke="none" />;
}

function renderPose(pose: PoseKind, accent: string) {
  switch (pose) {
    case "pushup":
      return (
        <>
          <Head x={48} y={78} />
          <path d="M58 85 L120 95 L155 110" />
          <path d="M78 88 L70 130 M110 98 L118 138" />
          <path d="M58 85 L42 105 M58 85 L72 108" stroke={accent} />
          <path d="M40 130 L75 130 M115 138 L155 138" strokeWidth="4" opacity="0.5" />
        </>
      );
    case "bench-press":
      return (
        <>
          <rect x="40" y="100" width="120" height="10" rx="2" fill="#2a3340" stroke="none" />
          <Head x={100} y={72} />
          <path d="M100 82 L100 100" />
          <path d="M55 88 L100 95 L145 88" stroke={accent} />
          <path d="M45 88 L55 88 M145 88 L155 88" />
        </>
      );
    case "fly":
      return (
        <>
          <rect x="45" y="105" width="110" height="8" rx="2" fill="#2a3340" stroke="none" />
          <Head x={100} y={75} />
          <path d="M100 85 L100 105" />
          <path d="M55 95 Q100 130 145 95" stroke={accent} />
          <circle cx="50" cy="95" r="6" fill={accent} stroke="none" />
          <circle cx="150" cy="95" r="6" fill={accent} stroke="none" />
        </>
      );
    case "overhead-press":
      return (
        <>
          <Head x={100} y={48} />
          <path d="M100 58 L100 110" />
          <path d="M100 70 L70 55 M100 70 L130 55" stroke={accent} />
          <path d="M70 55 L70 40 M130 55 L130 40" />
          <path d="M85 110 L100 155 L115 110" />
          <path d="M78 155 L122 155" strokeWidth="4" opacity="0.45" />
        </>
      );
    case "lateral-raise":
      return (
        <>
          <Head x={100} y={50} />
          <path d="M100 60 L100 115" />
          <path d="M50 90 L100 75 L150 90" stroke={accent} />
          <path d="M88 115 L100 155 L112 115" />
        </>
      );
    case "curl":
    case "hammer-curl":
      return (
        <>
          <Head x={100} y={45} />
          <path d="M100 55 L100 115" />
          <path d="M100 75 L78 95 L78 70" stroke={accent} />
          <path d="M100 75 L122 105" />
          <path d="M88 115 L100 155 L112 115" />
          <circle cx="78" cy="64" r="7" fill={accent} stroke="none" opacity="0.85" />
        </>
      );
    case "tricep-extension":
    case "overhead-triceps":
      return (
        <>
          <Head x={100} y={55} />
          <path d="M100 65 L100 118" />
          <path d="M100 70 L100 40 L115 55" stroke={accent} />
          <path d="M88 118 L100 158 L112 118" />
        </>
      );
    case "dip":
      return (
        <>
          <rect x="55" y="70" width="90" height="12" rx="2" fill="#2a3340" stroke="none" />
          <Head x={100} y={55} />
          <path d="M100 65 L100 105" />
          <path d="M75 82 L100 75 L125 82" stroke={accent} />
          <path d="M90 105 L100 140 L110 105" />
        </>
      );
    case "wrist-curl":
    case "wrist-flexor":
      return (
        <>
          <Head x={70} y={60} />
          <path d="M70 70 L90 110 L130 105" />
          <path d="M130 105 L155 95" stroke={accent} />
          <path d="M155 95 L165 110" />
          <rect x="95" y="108" width="50" height="10" rx="2" fill="#2a3340" stroke="none" />
        </>
      );
    case "crunch":
      return (
        <>
          <path d="M40 140 L160 140" strokeWidth="3" opacity="0.35" />
          <Head x={70} y={95} />
          <path d="M70 105 Q100 95 120 120" stroke={accent} />
          <path d="M120 120 L155 140" />
          <path d="M120 120 L140 100" />
        </>
      );
    case "plank":
      return (
        <>
          <Head x={45} y={95} />
          <path d="M55 100 L150 100" stroke={accent} />
          <path d="M70 100 L65 130 M130 100 L135 130" />
          <path d="M55 100 L48 120" />
        </>
      );
    case "side-bend":
    case "oblique-reach":
      return (
        <>
          <Head x={115} y={45} />
          <path d="M110 55 Q95 90 100 120" stroke={accent} />
          <path d="M100 70 L130 60" />
          <path d="M95 70 L75 95" />
          <path d="M90 120 L100 158 L110 120" />
        </>
      );
    case "squat":
      return (
        <>
          <Head x={100} y={55} />
          <path d="M100 65 L100 105" />
          <path d="M100 80 L75 95 M100 80 L125 95" />
          <path d="M85 105 L70 145 M115 105 L130 145" stroke={accent} />
          <path d="M100 105 L100 125" />
          <circle cx="100" cy="78" r="10" fill={accent} stroke="none" opacity="0.5" />
        </>
      );
    case "lunge":
      return (
        <>
          <Head x={100} y={45} />
          <path d="M100 55 L100 100" />
          <path d="M100 75 L80 85 M100 75 L120 90" />
          <path d="M90 100 L70 150 M110 100 L145 150" stroke={accent} />
        </>
      );
    case "rdl":
      return (
        <>
          <Head x={70} y={70} />
          <path d="M78 78 L110 100 L100 150" stroke={accent} />
          <path d="M110 100 L140 95" />
          <path d="M100 115 L75 140" />
          <circle cx="145" cy="95" r="8" fill={accent} stroke="none" />
        </>
      );
    case "hip-thrust":
      return (
        <>
          <rect x="35" y="90" width="40" height="14" rx="2" fill="#2a3340" stroke="none" />
          <Head x={50} y={75} />
          <path d="M60 85 L110 85 L150 120" stroke={accent} />
          <path d="M110 85 L110 115" />
          <path d="M145 120 L160 120" />
        </>
      );
    case "calf-raise":
      return (
        <>
          <Head x={100} y={40} />
          <path d="M100 50 L100 120" />
          <path d="M100 70 L85 90 M100 70 L115 90" />
          <path d="M90 120 L100 155 L110 120" stroke={accent} />
          <path d="M85 155 L115 155" strokeWidth="3" opacity="0.4" />
          <path d="M100 145 L100 155" strokeWidth="6" />
        </>
      );
    case "shrug":
      return (
        <>
          <Head x={100} y={48} />
          <path d="M100 58 L100 118" />
          <path d="M100 75 L70 95 M100 75 L130 95" stroke={accent} />
          <path d="M88 118 L100 155 L112 118" />
          <path d="M78 62 Q100 48 122 62" strokeWidth="3" opacity="0.6" />
        </>
      );
    case "row":
      return (
        <>
          <Head x={65} y={70} />
          <path d="M72 78 L115 105 L105 150" stroke={accent} />
          <path d="M100 95 L130 80" />
          <path d="M105 120 L80 140" />
          <circle cx="135" cy="78" r="7" fill={accent} stroke="none" />
        </>
      );
    case "pulldown":
      return (
        <>
          <path d="M50 40 L150 40" strokeWidth="4" opacity="0.5" />
          <Head x={100} y={85} />
          <path d="M100 95 L100 135" />
          <path d="M60 45 L85 100 M140 45 L115 100" stroke={accent} />
          <path d="M88 135 L100 165 L112 135" />
        </>
      );
    case "back-extension":
      return (
        <>
          <rect x="70" y="110" width="60" height="12" rx="2" fill="#2a3340" stroke="none" />
          <Head x={100} y={55} />
          <path d="M100 65 L100 115" stroke={accent} />
          <path d="M100 115 L85 150 M100 115 L115 150" />
        </>
      );
    case "adductor-squeeze":
      return (
        <>
          <Head x={100} y={50} />
          <path d="M100 60 L100 110" />
          <path d="M100 110 L70 150 M100 110 L130 150" />
          <circle cx="100" cy="125" r="14" fill={accent} stroke="none" opacity="0.55" />
          <path d="M85 130 L115 130" stroke={accent} strokeWidth="3" />
        </>
      );
    case "chest-opener":
    case "doorway-stretch":
      return (
        <>
          <path d="M55 40 L55 160" strokeWidth="3" opacity="0.35" />
          <Head x={100} y={55} />
          <path d="M100 65 L100 120" />
          <path d="M100 80 L55 70" stroke={accent} />
          <path d="M100 80 L130 100" />
          <path d="M88 120 L100 158 L112 120" />
        </>
      );
    case "cross-body":
      return (
        <>
          <Head x={100} y={48} />
          <path d="M100 58 L100 118" />
          <path d="M70 85 L130 85" stroke={accent} />
          <path d="M130 85 L145 100" />
          <path d="M88 118 L100 155 L112 118" />
        </>
      );
    case "cobra":
      return (
        <>
          <path d="M35 145 L165 145" strokeWidth="3" opacity="0.3" />
          <Head x={55} y={85} />
          <path d="M65 95 Q110 70 150 140" stroke={accent} />
          <path d="M85 115 L75 140" />
        </>
      );
    case "quad-stand":
      return (
        <>
          <Head x={100} y={42} />
          <path d="M100 52 L100 115" />
          <path d="M100 115 L85 155" />
          <path d="M100 115 L120 130 L105 95" stroke={accent} />
          <path d="M100 75 L80 90" />
        </>
      );
    case "forward-fold":
      return (
        <>
          <Head x={100} y={120} />
          <path d="M100 110 L100 70" stroke={accent} />
          <path d="M100 70 L70 150 M100 70 L130 150" />
          <path d="M100 95 L85 115 M100 95 L115 115" />
        </>
      );
    case "pigeon":
      return (
        <>
          <path d="M40 150 L160 150" strokeWidth="3" opacity="0.3" />
          <Head x={70} y={70} />
          <path d="M80 80 L120 110" stroke={accent} />
          <path d="M120 110 L145 90 M120 110 L150 145" />
          <path d="M120 110 L90 145" />
        </>
      );
    case "wall-calf":
      return (
        <>
          <path d="M160 40 L160 160" strokeWidth="3" opacity="0.35" />
          <Head x={90} y={55} />
          <path d="M95 65 L110 110" />
          <path d="M110 110 L145 100" stroke={accent} />
          <path d="M110 110 L85 155" />
          <path d="M100 80 L120 75" />
        </>
      );
    case "neck-trap":
      return (
        <>
          <Head x={110} y={50} />
          <path d="M105 60 L100 115" />
          <path d="M100 75 L75 95 M100 75 L125 90" />
          <path d="M88 115 L100 155 L112 115" />
          <path d="M110 42 Q125 55 118 70" stroke={accent} strokeWidth="3" />
        </>
      );
    case "lat-hang":
      return (
        <>
          <path d="M50 40 L150 40" strokeWidth="4" opacity="0.5" />
          <Head x={100} y={85} />
          <path d="M70 42 L100 95 L130 42" stroke={accent} />
          <path d="M100 95 L100 145" />
          <path d="M90 145 L110 145" strokeWidth="3" opacity="0.4" />
        </>
      );
    case "child-pose":
      return (
        <>
          <path d="M40 150 L160 150" strokeWidth="3" opacity="0.3" />
          <Head x={55} y={115} />
          <path d="M65 120 Q100 100 150 120" stroke={accent} />
          <path d="M100 115 L100 145" />
          <path d="M80 145 L120 145" />
        </>
      );
    case "butterfly":
      return (
        <>
          <Head x={100} y={55} />
          <path d="M100 65 L100 110" />
          <path d="M100 110 L65 140 M100 110 L135 140" stroke={accent} />
          <path d="M65 140 L100 130 L135 140" />
          <path d="M85 80 L70 95 M115 80 L130 95" />
        </>
      );
    default:
      return (
        <>
          <Head x={100} y={50} />
          <path d="M100 60 L100 120" />
          <path d="M70 85 L130 85" />
          <path d="M85 120 L100 160 L115 120" />
        </>
      );
  }
}
