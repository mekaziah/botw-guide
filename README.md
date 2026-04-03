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

## Termux/Android Setup Notes (Important for ARM64 Devices)

If you are running this project on Termux (Android ARM64), you may encounter issues due to file system permissions and native module compatibility. Follow these steps:

1.  **Move the project to internal storage:** If you cloned the repository to external storage (e.g., `/storage/emulated/0/...`), `pnpm install` will fail due to symlink permissions. Move the entire `botw-guide` directory to Termux's internal storage:
    ```bash
    mv /path/to/external/botw-guide ~/botw-guide
    cd ~/botw-guide
    ```
2.  **Clean and reinstall dependencies:**
    ```bash
    rm -rf node_modules pnpm-lock.yaml artifacts/botw-guide/node_modules artifacts/botw-guide/pnpm-lock.yaml
    pnpm install
    ```
3.  **Vite Configuration for Termux (Bypass lightningcss)**: Due to native module issues with `lightningcss` on Android ARM64, the `@tailwindcss/vite` plugin will prevent the dev server from starting. To work around this:
    *   **Edit `vite.config.ts`**: Remove the `import tailwindcss from "@tailwindcss/vite";` line and the `tailwindcss(),` plugin from the `plugins` array.
    *   **Disable Vite's CSS processing**: Add the following to your `vite.config.ts`'s `defineConfig` object to prevent Vite from attempting to use `lightningcss` internally:
        ```typescript
        export default defineConfig({
          // ...other config
          css: {
            postcss: null,
            lightningcss: false,
          },
          plugins: [
            react(),
            // ...other plugins
          ],
          // ...
        });
        ```
    *   **Disable HMR overlay (Optional but Recommended)**: To prevent generic runtime error overlays in Termux:
        ```typescript
        export default defineConfig({
          // ...
          server: {
            // ...
            hmr: {
              overlay: false,
            },
          },
          // ...
        });
        ```
4.  **Use Tailwind CSS Play CDN & Custom Colors**:
    *   **Edit `artifacts/botw-guide/index.html`**: Ensure the Tailwind CSS Play CDN script is included in the `<head>` section:
        ```html
        <head>
          <!-- ... other head elements -->
          <script src="https://cdn.tailwindcss.com"></script>
          <!-- ... -->
        </head>
        ```
    *   **Inject Custom Color Scheme (Optional)**: To replicate the original guide's dark forest/gold theme, add these custom CSS variables within a `<style>` block in `index.html` (e.g., just after the Tailwind CDN script in `<head>`):
        ```html
        <head>
          <!-- ... -->
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            :root {
              --color-background: #2F362C; /* Dark forest green/brown */
              --color-text: #E0E0E0;     /* Light, off-white/parchment */
              --color-accent: #D4AF37;   /* Golden yellow accent */
            }
            body {
              background-color: var(--color-background);
              color: var(--color-text);
            }
            /* You may need to apply --color-accent to specific elements using inline styles or global Tailwind classes */
          </style>
        </head>
        ```

## Run locally

```bash
# Ensure you are in the project root: cd ~/botw-guide/
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/botw-guide run dev
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
