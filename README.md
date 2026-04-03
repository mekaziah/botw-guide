# Zelda: Breath of the Wild — Field Guide

An interactive web guide for Breath of the Wild. Fast, mobile-first, and designed for quick mid-game reference — no videos, just clear step-by-step text.

## Features

- **Interactive Hyrule Map** — 337 markers across 7 categories: Shrines, Hidden Shrine quests, Towers, Divine Beasts, notable Chests, Korok Seeds, and Stables/Towns. Click any marker to track your progress. Per-category filters, a collapsible legend, and localStorage persistence included. Mobile-optimised with compact header, horizontally scrollable filter chips, and slide-up legend drawer.
- **Main Quest guide** — full walkthrough from the Great Plateau through Calamity Ganon
- **All 120 Shrines** — region-by-region with puzzle solutions
- **4 Divine Beasts** — entry requirements, terminal solutions, and boss walkthroughs
- **Korok Seeds** — all 8 puzzle types explained with location hints
- **Cooking system** — stat-boost recipes, elixirs, and ingredient tips
- **Complete Gear guide** — 33 items across 5 categories (Armor Sets, Weapons, Bows, Shields, Champion Abilities). Every item has exact step-by-step acquisition instructions, stats, set bonus info, a pro tip, and a direct video guide link. Searchable by name or location. Includes priority order recommendations.
- **Tips & Tricks** — stamina, combat, climbing, and progression shortcuts

## Gear covered

| Category | Items |
|---|---|
| Armor Sets (17) | Hylian, Soldier's, Stealth (Sheikah), Snowquill, Flamebreaker, Desert Voe, Gerudo Clothes, Zora Armor, Rubber Armor, Climbing Gear, Barbarian Armor, Ancient Armor, Radiant Armor, Dark Link Set, Thunder Helm, Sand/Snow Boots, Phantom Armor |
| Weapons (5) | Master Sword, Savage Lynel Crusher, Royal Guard's Claymore, Ancient Battle Axe++, Royal Claymore |
| Bows (4) | Savage Lynel Bow, Great Eagle Bow, Ancient Bow, Twilight Bow |
| Shields (3) | Hylian Shield, Ancient Shield, Royal Shield |
| Champion Abilities (4) | Revali's Gale, Mipha's Grace, Daruk's Protection, Urbosa's Fury |

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
pnpm --filter @workspace/botw-guide run start
```

Then open [http://localhost:5173/](http://localhost:5173/) in your browser.

> `start` sets `PORT=5173` and `BASE_PATH=/` automatically — no extra configuration needed.

## Preview the production build

```bash
pnpm --filter @workspace/botw-guide run build
pnpm --filter @workspace/botw-guide run preview
```

Preview opens at [http://localhost:4173/](http://localhost:4173/). Build output goes to `artifacts/botw-guide/dist/public/`.

## Project structure

```
artifacts/
  botw-guide/              # Main React + Vite web app
    src/
      pages/               # One file per guide section (Map, Shrines, Gear, …)
      components/          # Nav, shared UI
      data/
        gear.ts            # All 33 gear items with steps, stats, set bonuses, video links
        mapLocations.ts    # All 337 interactive map markers
        shrines.ts         # All 120 shrines
        divineBeasts.ts    # Divine Beast walkthroughs
        recipes.ts         # Cooking recipes
        koroks.ts          # Korok seed locations
    public/
      hyrule-map.png       # Parchment-style Hyrule map image
```

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- react-leaflet (interactive map)
- Cinzel font (headings)
- localStorage (progress persistence — no backend required)
