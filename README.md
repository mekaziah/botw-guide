# Zelda: Breath of the Wild — Field Guide

An interactive web guide for Breath of the Wild. Fast, mobile-first, and designed for quick mid-game reference — no videos, just clear step-by-step text.

## Features

- **Interactive Hyrule Map** — 337 markers across 7 categories: Shrines, Hidden Shrine quests, Towers, Divine Beasts, notable Chests, Korok Seeds, and Stables/Towns. Click any marker to track your progress. Filters, a collapsible legend, and localStorage persistence included.
- **Main Quest guide** — full walkthrough from the Great Plateau through Calamity Ganon
- **All 120 Shrines** — region-by-region with puzzle solutions
- **4 Divine Beasts** — entry requirements and terminal/boss walkthroughs
- **Korok Seeds** — all 8 puzzle types explained with location hints
- **Cooking system** — stat-boost recipes, elixirs, and ingredient tips
- **Gear guide** — armour sets, upgrade materials, and best weapons by stage
- **Tips & Tricks** — stamina, combat, climbing, and progression shortcuts

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [pnpm](https://pnpm.io/) v8 or later

Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

## Install

```bash
git clone https://github.com/mekaziah/botw-guide.git
cd botw-guide
pnpm install
```

## Run locally

```bash
pnpm --filter @workspace/botw-guide run dev
```

Then open [http://localhost:5173/](http://localhost:5173/) in your browser (the port may differ — check the terminal output).

## Build for production

```bash
pnpm --filter @workspace/botw-guide run build
```

Output goes to `artifacts/botw-guide/dist/`.

## Project structure

```
artifacts/
  botw-guide/          # Main React + Vite web app
    src/
      pages/           # One file per guide section (Map, Shrines, Cooking, …)
      components/      # Nav, shared UI
      data/            # mapLocations.ts — all 337 map markers
    public/
      hyrule-map.png   # Parchment-style Hyrule map image
```

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- react-leaflet (interactive map)
- Cinzel font (headings)
- localStorage (progress persistence, no backend)
