import { useEffect, useState, useRef } from "react";
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  shrineMarkers,
  towerMarkers,
  divineBeastMarkers,
  stableMarkers,
  hiddenShrineMarkers,
  chestMarkers,
  korokMarkers,
  MapMarker,
} from "../data/mapLocations";

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;

const MAP_SIZE = 8192;
const BOUNDS: L.LatLngBoundsExpression = [[0, 0], [MAP_SIZE, MAP_SIZE]];
const STORAGE_KEY = "botw-map-checked";

function loadChecked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch { return new Set(); }
}
function saveChecked(s: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...s]));
}
function coord(m: MapMarker): L.LatLng {
  return L.latLng(MAP_SIZE - m.y, m.x);
}

type CategoryKey = "shrine" | "tower" | "divine-beast" | "stable" | "hidden-shrine" | "chest" | "korok";

interface CatCfg {
  label: string;
  shortLabel: string;
  color: string;
  checkedColor: string;
  shape: "circle" | "square" | "diamond" | "star" | "triangle" | "pentagon";
  size: number;
}

const CATEGORY_CONFIG: Record<CategoryKey, CatCfg> = {
  shrine:          { label: "Shrines",        shortLabel: "Shrines",  color: "#c2a030", checkedColor: "#3a7a3a", shape: "circle",  size: 16 },
  tower:           { label: "Towers",          shortLabel: "Towers",   color: "#4a90d9", checkedColor: "#3a7a3a", shape: "square",  size: 18 },
  "divine-beast":  { label: "Divine Beasts",   shortLabel: "Beasts",   color: "#e06030", checkedColor: "#3a7a3a", shape: "diamond", size: 22 },
  stable:          { label: "Stables / Towns", shortLabel: "Stables",  color: "#9c7a52", checkedColor: "#888",    shape: "circle",  size: 13 },
  "hidden-shrine": { label: "Hidden Shrines",  shortLabel: "Hidden",   color: "#8a4db8", checkedColor: "#3a7a3a", shape: "star",    size: 18 },
  chest:           { label: "Chests",          shortLabel: "Chests",   color: "#d4a800", checkedColor: "#3a7a3a", shape: "pentagon",size: 15 },
  korok:           { label: "Korok Seeds",     shortLabel: "Koroks",   color: "#3aaa50", checkedColor: "#2a6a30", shape: "triangle",size: 13 },
};

function shapeHtml(shape: CatCfg["shape"], r: number, color: string, checked: boolean): string {
  const border  = checked ? "#2a5a2a" : "#111";
  const fill    = checked ? "#3a7a3a" : color;
  const op      = checked ? 0.55 : 1;
  const tick    = checked ? `<span style="color:#fff;font-size:${r * 0.55}px;line-height:1;">✓</span>` : "";

  if (shape === "circle") return `<div style="width:${r}px;height:${r}px;background:${fill};border:2px solid ${border};border-radius:50%;opacity:${op};box-shadow:0 0 5px rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;cursor:pointer;">${tick}</div>`;
  if (shape === "square") return `<div style="width:${r}px;height:${r}px;background:${fill};border:2px solid ${border};border-radius:2px;opacity:${op};box-shadow:0 0 5px rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;cursor:pointer;">${tick}</div>`;
  if (shape === "diamond") return `<div style="width:${r}px;height:${r}px;background:${fill};border:2px solid ${border};opacity:${op};box-shadow:0 0 6px rgba(0,0,0,.8);transform:rotate(45deg);cursor:pointer;display:flex;align-items:center;justify-content:center;"><span style="transform:rotate(-45deg);color:#fff;font-size:${r*0.4}px;">${checked ? "✓" : ""}</span></div>`;
  if (shape === "triangle") return `<div style="width:0;height:0;border-left:${r/2}px solid transparent;border-right:${r/2}px solid transparent;border-bottom:${r}px solid ${fill};filter:drop-shadow(0 0 3px rgba(0,0,0,.7));opacity:${op};cursor:pointer;"></div>`;
  if (shape === "star") return `<div style="width:${r}px;height:${r}px;background:${fill};clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);opacity:${op};box-shadow:0 0 5px rgba(0,0,0,.6);cursor:pointer;display:flex;align-items:center;justify-content:center;">${tick}</div>`;
  if (shape === "pentagon") return `<div style="width:${r}px;height:${r}px;background:${fill};clip-path:polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%);opacity:${op};box-shadow:0 0 5px rgba(0,0,0,.6);cursor:pointer;display:flex;align-items:center;justify-content:center;">${tick}</div>`;
  return "";
}

function makeIcon(cat: CategoryKey, checked: boolean): L.DivIcon {
  const cfg = CATEGORY_CONFIG[cat];
  return L.divIcon({
    className: "",
    iconAnchor: [cfg.size / 2, cfg.size / 2],
    iconSize:   [cfg.size, cfg.size],
    html: shapeHtml(cfg.shape, cfg.size, cfg.color, checked),
  });
}

function MapControls({ onReset, onLegend, legendOpen }: { onReset: () => void; onLegend: () => void; legendOpen: boolean }) {
  const map = useMap();
  return (
    <div className="map-controls">
      <button onClick={() => map.zoomIn()}  className="map-btn" title="Zoom In">+</button>
      <button onClick={() => map.zoomOut()} className="map-btn" title="Zoom Out">−</button>
      <button onClick={() => map.setView([MAP_SIZE / 2, MAP_SIZE / 2], -3)} className="map-btn" title="Reset View">⌂</button>
      <button onClick={onLegend} className={`map-btn map-btn-legend ${legendOpen ? "active" : ""}`} title="Toggle Legend">≡</button>
      <button onClick={onReset}  className="map-btn map-btn-danger" title="Reset checkmarks">↺</button>
    </div>
  );
}

type Filter = "all" | CategoryKey;

const ALL_SOURCES: { key: CategoryKey; markers: MapMarker[] }[] = [
  { key: "shrine",         markers: shrineMarkers },
  { key: "hidden-shrine",  markers: hiddenShrineMarkers },
  { key: "tower",          markers: towerMarkers },
  { key: "divine-beast",   markers: divineBeastMarkers },
  { key: "chest",          markers: chestMarkers },
  { key: "korok",          markers: korokMarkers },
  { key: "stable",         markers: stableMarkers },
];

export default function Map() {
  const [checked,     setChecked]     = useState<Set<string>>(loadChecked);
  const [filter,      setFilter]      = useState<Filter>("all");
  const [showChecked, setShowChecked] = useState(true);
  const [legendOpen,  setLegendOpen]  = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { saveChecked(checked); }, [checked]);

  function toggle(id: string) {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function resetAll() {
    if (confirm("Reset all map checkmarks?")) setChecked(new Set());
  }

  const allMarkers = ALL_SOURCES.flatMap(s => s.markers);
  const visible = allMarkers.filter(m => {
    if (filter !== "all" && m.category !== filter) return false;
    if (!showChecked && checked.has(m.id)) return false;
    return true;
  });

  const totalDone  = allMarkers.filter(m => checked.has(m.id)).length;
  const totalCount = allMarkers.length;

  return (
    <div className="map-page">
      {/* ── Compact header ─────────────────────────── */}
      <div className="map-header">
        {/* Row 1: title + overall progress */}
        <div className="map-header-top">
          <h1 className="map-title-text">Hyrule Map</h1>
          <div className="map-overall-progress">
            <span className="map-overall-num">{totalDone}</span>
            <span className="map-overall-sep">/</span>
            <span className="map-overall-total">{totalCount}</span>
            <span className="map-overall-label">done</span>
          </div>
        </div>

        {/* Row 2: per-category stats — scrolls horizontally on mobile */}
        <div className="map-stats-row">
          {ALL_SOURCES.filter(s => s.key !== "stable").map(({ key, markers }) => {
            const done = markers.filter(m => checked.has(m.id)).length;
            const cfg  = CATEGORY_CONFIG[key];
            return (
              <button
                key={key}
                className={`map-stat-chip ${filter === key ? "active" : ""}`}
                style={{ borderColor: filter === key ? cfg.color : "transparent", color: cfg.color }}
                onClick={() => setFilter(filter === key ? "all" : key)}
                title={`Filter: ${cfg.label}`}
              >
                <span className="map-stat-chip-num">{done}/{markers.length}</span>
                <span className="map-stat-chip-label">{cfg.shortLabel}</span>
              </button>
            );
          })}

          {/* Show-completed toggle as a chip */}
          <button
            className={`map-stat-chip map-toggle-chip ${showChecked ? "active" : ""}`}
            onClick={() => setShowChecked(v => !v)}
            title="Toggle completed markers"
          >
            <span className="map-stat-chip-num">{showChecked ? "●" : "○"}</span>
            <span className="map-stat-chip-label">Done</span>
          </button>
        </div>
      </div>

      {/* ── Map ───────────────────────────────────── */}
      <div className="map-wrap" ref={containerRef}>
        <MapContainer
          center={[MAP_SIZE / 2, MAP_SIZE / 2]}
          zoom={-3}
          minZoom={-3}
          maxZoom={3}
          crs={L.CRS.Simple}
          style={{ width: "100%", height: "100%" }}
          zoomControl={false}
          maxBounds={[[-200, -200], [MAP_SIZE + 200, MAP_SIZE + 200]]}
          maxBoundsViscosity={0.8}
        >
          <ImageOverlay url={`${import.meta.env.BASE_URL}hyrule-map.png`} bounds={BOUNDS} attribution="" />

          {visible.map(marker => (
            <Marker
              key={marker.id}
              position={coord(marker)}
              icon={makeIcon(marker.category as CategoryKey, checked.has(marker.id))}
              eventHandlers={{ click: () => toggle(marker.id) }}
            >
              <Popup className="map-popup">
                <div className="popup-inner">
                  <div
                    className="popup-cat-badge"
                    style={{ background: CATEGORY_CONFIG[marker.category as CategoryKey].color }}
                  >
                    {CATEGORY_CONFIG[marker.category as CategoryKey].label}
                  </div>
                  <div className="popup-header">
                    <strong>{marker.name}</strong>
                    {marker.region && <span className="popup-region">{marker.region}</span>}
                  </div>
                  {marker.puzzle && <div className="popup-puzzle">{marker.puzzle}</div>}
                  {marker.note   && <div className="popup-note">{marker.note}</div>}
                  <button
                    className={`popup-check-btn ${checked.has(marker.id) ? "checked" : ""}`}
                    onClick={() => toggle(marker.id)}
                  >
                    {checked.has(marker.id) ? "✓ Completed — Tap to undo" : "Mark as Complete"}
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}

          <MapControls onReset={resetAll} onLegend={() => setLegendOpen(o => !o)} legendOpen={legendOpen} />
        </MapContainer>

        {/* ── Legend drawer ─────────────────────────── */}
        <div className={`map-legend ${legendOpen ? "open" : ""}`}>
          <div className="map-legend-title">Legend <span className="map-legend-hint">tap row to filter</span></div>
          {ALL_SOURCES.map(({ key, markers }) => {
            const cfg  = CATEGORY_CONFIG[key];
            const done = markers.filter(m => checked.has(m.id)).length;
            const isActive = filter === key;
            return (
              <div
                key={key}
                className={`legend-item ${isActive ? "legend-item-active" : ""}`}
                onClick={() => setFilter(isActive ? "all" : key)}
              >
                <span
                  className="legend-dot"
                  style={{
                    background: cfg.color,
                    borderRadius: cfg.shape === "circle" ? "50%" : cfg.shape === "square" ? "2px" : "3px",
                  }}
                />
                <span className="legend-label">{cfg.label}</span>
                <span className="legend-count" style={{ color: cfg.color }}>{done}/{markers.length}</span>
              </div>
            );
          })}
          <div className="legend-item" style={{ opacity: 0.7 }}>
            <span className="legend-dot" style={{ background: "#3a7a3a", borderRadius: "50%" }} />
            <span className="legend-label">Completed</span>
          </div>
        </div>

        {/* Backdrop to close legend on mobile */}
        {legendOpen && (
          <div className="map-legend-backdrop" onClick={() => setLegendOpen(false)} />
        )}
      </div>
    </div>
  );
}
