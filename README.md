# Workout — Anatomy-led Training Lab

Interactive workout web app: select a muscle on a **real anatomical body map**, then browse **exercises** and **stretches** with **animated GIF demos** and step-by-step coaching.

## Features

- Anatomical SVG body map (male/female, front/back) via [`react-muscle-highlighter`](https://www.npmjs.com/package/react-muscle-highlighter)
- Live exercise & stretch data from [ExerciseDB](https://oss.exercisedb.dev) (AscendAPI free tier)
- **Running mode** — select stride muscles (calves, glutes, hamstrings, etc.) and browse running-focused strength & stretch work with GIF demos
- Animated demonstration GIFs for each movement
- Instructions, equipment, primary/secondary muscles
- Responsive desktop + mobile layout

## Stack

- Next.js (App Router) + TypeScript
- `react-muscle-highlighter`
- ExerciseDB HTTP API (proxied via `/api/exercises`)
- Tailwind CSS + Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Attribution

Exercise metadata and GIF media are provided by **ExerciseDB / AscendAPI** ([oss.exercisedb.dev](https://oss.exercisedb.dev)). Free-tier use is for personal, educational, and non-commercial projects — see their docs for commercial licensing.

Body anatomy UI powered by **react-muscle-highlighter** (MIT).

## Repo

https://github.com/christopherAlberts/Workout
