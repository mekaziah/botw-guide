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

If you are running this project on Termux (Android ARM64), you may encounter issues due to file system permissions and native module compatibility. Follow these steps for a smooth setup:

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
3.  **Vite Configuration for Termux (Bypass native CSS processing)**: Due to persistent native module issues with `lightningcss` and other PostCSS-related tools on Android ARM64, we completely bypass Vite's internal CSS processing for the development server.
    *   **Remove PostCSS/Tailwind config files**: Delete `postcss.config.js` and `tailwind.config.js` from `artifacts/botw-guide/` if they exist.
    *   **Simplify `vite.config.ts`**: Ensure `vite.config.ts` is clean and does **not** include any `css` configuration (e.g., `postcss: null`, `lightningcss: false`) or `tailwindcss()` plugins, as these can still trigger native module errors. A minimal `vite.config.ts` is preferred.
    *   **Disable HMR overlay (Optional but Recommended)**: To prevent generic runtime error overlays in Termux, ensure your `vite.config.ts` has:
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

## Custom Theming and UI Enhancements (Tailwind CDN Based)

To ensure vibrant, eye-catching, and beautifully detailed pages on Termux, we're leveraging the Tailwind CSS Play CDN and injecting custom CSS for a dark forest/gold theme. This approach avoids native module conflicts while providing extensive styling capabilities.

1.  **Tailwind CSS Play CDN & Global Color Variables**:
    *   **Edit `artifacts/botw-guide/index.html`**: Ensure the Tailwind CSS Play CDN script is included and the custom color variables are defined in a `<style>` block within the `<head>` section:
        ```html
        <head>
          <!-- ... other head elements -->
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
          </style>
        </head>
        ```
2.  **Streamlined `src/index.css`**: The `src/index.css` file is now significantly simplified. It **does not** contain `@tailwind` directives or complex `:root` color definitions. Instead, it focuses on:
    *   Importing fonts (`Cinzel`, `Inter`).
    *   Including `tw-animate-css` for animations.
    *   Defining custom utility classes for UI elements like `.gold-shimmer`.
    *   Applying styles to specific components (e.g., `.map-stat-chip`) using our global CSS variables for a consistent theme.

3.  **Filter Chip Styling (`.map-stat-chip`)**:
    The `.map-stat-chip` class in `src/index.css` provides enhanced styling for interactive filters:
    ```css
    .map-stat-chip {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
      padding: 4px 9px;
      border-radius: 8px;
      border: 1.5px solid transparent;
      background: rgba(47, 54, 44, 0.6); /* Slightly lighter background for chips */
      color: var(--color-text);
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.15s;
      min-width: 52px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
    }

    .map-stat-chip:hover {
      border-color: var(--color-accent); /* Golden border on hover */
      color: var(--color-accent);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4); /* Deeper shadow on hover */
    }

    .map-stat-chip.active {
      background: rgba(212, 175, 55, 0.25); /* More pronounced golden background for active */
      border-color: var(--color-accent); /* Strong golden border for active */
      color: var(--color-accent); /* Golden text for active */
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5); /* Stronger shadow for active */
    }
    .map-stat-chip-label {
      color: var(--color-text); /* Default label color */
    }
    .map-stat-chip.active .map-stat-chip-label {
      color: var(--color-accent); /* Golden label for active */
    }
    ```
    **Note**: For filters to change color on selection, ensure your React components apply the `.active` class to `.map-stat-chip` elements when they are selected (this is a JavaScript concern).

4.  **General Color Depth Utility Classes**:
    New general-purpose CSS classes are available in `src/index.css` to add more color depth to fonts, sections, and boxes across the application:
    ```css
    .text-primary {
      color: var(--color-accent); /* Uses the golden accent color */
    }

    .text-secondary {
      color: rgba(var(--color-text-rgb), 0.7); /* A slightly muted version of the main text color */
    }

    .bg-card {
      background-color: rgba(47, 54, 44, 0.85); /* Darker, slightly transparent background for cards/sections */
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6); /* Prominent shadow for visual depth */
    }

    .border-accent {
      border-color: var(--color-accent); /* Applies the golden accent color to borders */
    }
    ```
    Apply these classes directly to your HTML elements (e.g., `<div className="bg-card">`, `<span className="text-primary">`) in your React components to enhance their appearance.

## Run locally

To run the development server:

```bash
# Ensure you are in the project root: cd ~/botw-guide/
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/botw-guide run dev
```

Then open [http://localhost:5173/](http://localhost:5173/) in your browser (the port may differ — check the terminal output).

**For the current stable build with all styling applied, run the production build and serve it:**

1.  Build:
    ```bash
    cd ~/botw-guide/
    PORT=5173 BASE_PATH=/ pnpm --filter @workspace/botw-guide run build
    ```
2.  Serve (on port 8002):
    ```bash
    cd ~/botw-guide/artifacts/botw-guide/dist/public/
    python3 -m http.server 8002
    ```
    Then open [http://localhost:8002/](http://localhost:8002/) in your browser.

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
- Tailwind CSS (via CDN for Termux compatibility)
- react-leaflet (interactive map)
- Cinzel font (headings)
- localStorage (progress persistence — no backend required)
