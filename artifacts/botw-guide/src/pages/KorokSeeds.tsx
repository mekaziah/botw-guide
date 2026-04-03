import { useState, useEffect } from "react";
import { korokRegions, korokSeedTypes, korokTips } from "@/data/koroks";
import { Leaf, CheckCircle2, Lightbulb } from "lucide-react";

const STORAGE_KEY = "botw-korok-completed";
const TOTAL_SEEDS = 900;

function loadProgress(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data: Record<string, number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function KorokSeeds() {
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const totalFound = Object.values(progress).reduce((a, b) => a + b, 0);
  const pct = Math.round((totalFound / TOTAL_SEEDS) * 100);

  const updateRegion = (id: string, max: number, value: string) => {
    const num = Math.max(0, Math.min(max, parseInt(value) || 0));
    setProgress((prev) => {
      const next = { ...prev, [id]: num };
      saveProgress(next);
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">Collectibles</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-foreground mb-3">Korok Seeds</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          There are 900 Korok Seeds hidden across Hyrule. Track your progress by region and learn the types to find them faster.
          You only need 441 for all inventory upgrades.
        </p>
      </div>

      {/* Overall progress */}
      <div className="bg-card border border-border rounded-xl p-5 mb-6" data-testid="korok-overall-progress">
        <div className="flex justify-between mb-2 text-sm">
          <span className="font-medium text-foreground">Total Seeds Found</span>
          <span className="text-primary font-mono">{totalFound} / {TOTAL_SEEDS} ({pct}%)</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, hsl(138 40% 35%), hsl(41 72% 47%))"
            }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>441 seeds = all inventory upgrades</span>
          <span>900 = Hestu's Gift</span>
        </div>
      </div>

      {/* Region trackers */}
      <div className="mb-10">
        <h2 className="font-cinzel text-lg font-semibold text-foreground mb-4">Seeds by Region</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {korokRegions.map((region) => {
            const found = progress[region.id] || 0;
            const regionPct = Math.round((found / region.total) * 100);
            return (
              <div key={region.id} data-testid={`korok-region-${region.id}`} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Leaf size={14} className="text-green-400" />
                    <span className="font-medium text-sm text-foreground">{region.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={region.total}
                      value={found}
                      onChange={(e) => updateRegion(region.id, region.total, e.target.value)}
                      data-testid={`korok-input-${region.id}`}
                      className="w-14 text-center bg-muted border border-border rounded-md px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <span className="text-xs text-muted-foreground">/ {region.total}</span>
                  </div>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: `${regionPct}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{region.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Seed types */}
      <div className="mb-10">
        <h2 className="font-cinzel text-lg font-semibold text-foreground mb-4">Korok Seed Types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {korokSeedTypes.map((type) => (
            <div key={type.type} data-testid={`korok-type-${type.type}`} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-medium text-sm text-foreground mb-1">{type.type}</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{type.description}</p>
              <div className="flex gap-2">
                <CheckCircle2 size={13} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-primary/80 leading-relaxed">{type.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div>
        <h2 className="font-cinzel text-lg font-semibold text-foreground mb-4">Hunting Tips</h2>
        <div className="space-y-2">
          {korokTips.map((tip, i) => (
            <div key={i} className="flex gap-3 bg-card border border-border rounded-lg p-3">
              <Lightbulb size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
