import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// PORT and BASE_PATH fall back to sensible local-dev defaults when not provided
// by the host environment (e.g. running outside Replit).
const port     = Number(process.env.PORT     ?? "5173");
const basePath =        process.env.BASE_PATH ?? "/";

// Replit-only overlay — only loaded when running inside Replit
const replitPlugins =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID
    ? await Promise.all([
        import("@replit/vite-plugin-runtime-error-modal").then((m) => m.default()),
        import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer({ root: path.resolve(import.meta.dirname, "..") }),
        ),
        import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
      ])
    : [];

export default defineConfig({
  base: basePath,
  css: {
    postcss: null,
    lightningcss: false,
  },
  plugins: [
    react(),
<<<<<<< HEAD


    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
=======
    tailwindcss(),
    ...replitPlugins,
>>>>>>> fae2da11eae68c1465962775068c8d9d77c7374c
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
<<<<<<< HEAD
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    hmr: {
      overlay: false,
    },
=======
>>>>>>> fae2da11eae68c1465962775068c8d9d77c7374c
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
