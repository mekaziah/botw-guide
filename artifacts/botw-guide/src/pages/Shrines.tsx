import { useState, useEffect } from "react";
import { shrines, shrineRegions, type Shrine } from "@/data/shrines";
import { CheckCircle2, Circle, Filter } from "lucide-react";

const STORAGE_KEY = "botw-completed-shrines";

function loadCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveCompleted(set: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
}

const typeColors: Record<Shrine["type"], string> = {
  Rune: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Combat: "text-red-400 bg-red-400/10 border-red-400/20",
  Riddle: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Movement: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Blessing: "text-green-400 bg-green-400/10 border-green-400/20",
};

export default function Shrines() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  useEffect(() => {
    setCompleted(loadCompleted());
  }, []);

  const toggleShrine = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      saveCompleted(next);
      return next;
    });
  };

  const filtered = shrines.filter((s) => {
    if (selectedRegion !== "All" && s.region !== selectedRegion) return false;
    if (selectedType !== "All" && s.type !== selectedType) return false;
    return true;
  });

  const totalCompleted = shrines.filter((s) => completed.has(s.id)).length;
  const pct = Math.round((totalCompleted / shrines.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">Reference</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-foreground mb-3">120 Shrines</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Every shrine in Hyrule organized by region. Check them off as you complete them — your progress is saved automatically.
        </p>
      </div>

      {/* Progress bar */}
      <div className="bg-card border border-border rounded-xl p-5 mb-6" data-testid="shrine-progress">
        <div className="flex justify-between mb-2 text-sm">
          <span className="font-medium text-foreground">Progress</span>
          <span className="text-primary font-mono">{totalCompleted} / {shrines.length} ({pct}%)</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Each shrine gives 1 Spirit Orb. 4 orbs = 1 heart container or stamina vessel.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <Filter size={16} className="text-muted-foreground" />
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          data-testid="shrine-filter-region"
          className="bg-card border border-border rounded-md px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="All">All Regions</option>
          {shrineRegions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          data-testid="shrine-filter-type"
          className="bg-card border border-border rounded-md px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="All">All Types</option>
          {(["Rune", "Combat", "Riddle", "Movement", "Blessing"] as const).map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <span className="text-xs text-muted-foreground ml-auto">{filtered.length} shown</span>
      </div>

      {/* Shrine list */}
      <div className="space-y-2">
        {filtered.map((shrine) => {
          const done = completed.has(shrine.id);
          return (
            <div
              key={shrine.id}
              data-testid={`shrine-item-${shrine.id}`}
              className={`bg-card border rounded-lg p-4 transition-colors ${done ? "border-primary/30 bg-primary/5" : "border-border"}`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleShrine(shrine.id)}
                  className="flex-shrink-0 mt-0.5 transition-colors"
                  aria-label={done ? "Mark incomplete" : "Mark complete"}
                  data-testid={`shrine-toggle-${shrine.id}`}
                >
                  {done ? (
                    <CheckCircle2 size={20} className="text-primary" />
                  ) : (
                    <Circle size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-medium text-sm ${done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                      {shrine.name}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${typeColors[shrine.type]}`}>
                      {shrine.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-xs text-muted-foreground">{shrine.region}</span>
                    <span className="text-muted-foreground/40 text-xs">—</span>
                    <span className="text-xs text-muted-foreground italic">{shrine.puzzle}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{shrine.tip}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground text-sm">
          No shrines match your filters.
        </div>
      )}
    </div>
  );
}
