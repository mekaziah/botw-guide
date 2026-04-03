import { useState } from "react";
import { gearItems, gearCategories, type GearItem } from "@/data/gear";
import { MapPin, Swords, Shield, Star, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Weapons":           <Swords size={13} />,
  "Armor Sets":        <Shield size={13} />,
  "Champion Abilities":<Star   size={13} />,
  "Shields":           <Shield size={13} />,
  "Bows":              <Star   size={13} />,
};

function GearCard({ item }: { item: GearItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-cinzel text-sm font-bold text-foreground leading-tight">{item.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{item.category}</p>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            {item.requiresAmiibo && (
              <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded px-1.5 py-0.5 font-mono uppercase">amiibo</span>
            )}
            {item.requiresDLC && (
              <span className="text-[10px] bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded px-1.5 py-0.5 font-mono uppercase">DLC</span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
          <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-0.5">Stats</p>
          <p className="text-xs text-foreground leading-relaxed">{item.stats}</p>
          {item.setBonus && item.setBonus !== "None" && item.setBonus !== "N/A — single unique piece." && item.setBonus !== "N/A — individual pieces." && (
            <p className="text-xs text-primary/80 mt-1 leading-relaxed"><span className="font-semibold">Set bonus:</span> {item.setBonus}</p>
          )}
        </div>

        {/* Location */}
        <div className="flex items-start gap-1.5">
          <MapPin size={12} className="text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground leading-relaxed">{item.location}</p>
        </div>
      </div>

      {/* Steps — collapsible */}
      <div className="border-t border-border">
        <button
          className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors"
          onClick={() => setExpanded(v => !v)}
        >
          <span>Step-by-step</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {expanded && (
          <div className="px-4 pb-3 flex flex-col gap-1.5">
            {item.steps.map((step, i) => (
              <div key={i} className="flex gap-2.5 items-start">
                <span className="text-primary font-bold text-xs mt-0.5 flex-shrink-0 font-cinzel">{i + 1}.</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tip + Video link */}
      <div className="mt-auto border-t border-border bg-muted/20 px-4 py-3 flex flex-col gap-2">
        <p className="text-xs text-muted-foreground leading-relaxed">{item.tip}</p>
        <a
          href={item.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <span>▶</span>
          <span>Video guide</span>
          <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
}

export default function Gear() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = gearItems.filter(g => {
    const matchCat  = selectedCategory === "All" || g.category === selectedCategory;
    const matchSearch = search.trim() === "" || g.name.toLowerCase().includes(search.toLowerCase()) || g.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Page header */}
      <div className="mb-8">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">Complete Reference</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-foreground mb-3">All Gear & Equipment</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Every armor set, best-in-slot weapon, bow, shield, and Champion Ability — with exact step-by-step
          instructions and a direct video guide link for each one.
        </p>
      </div>

      {/* Priority picks */}
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-8">
        <h2 className="font-cinzel text-sm font-semibold text-primary mb-3 uppercase tracking-widest">Recommended Priority Order</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-muted-foreground">
          {[
            ["1", "Snowquill Set — before entering Hebra or attempting Vah Medoh"],
            ["2", "Revali's Gale — do Vah Medoh first, it transforms all exploration"],
            ["3", "Flamebreaker Armor — before Death Mountain / Vah Rudania"],
            ["4", "Stealth Set — Kakariko Village, buy early for horses and sneaking"],
            ["5", "Zora Armor — needed for the Vah Ruta quest waterfalls"],
            ["6", "Ancient Armor + Weapons — mid-game, farm Guardians for parts"],
            ["7", "Hylian Shield — Hyrule Castle Lockup, best shield in the game"],
            ["8", "Master Sword — 13 hearts minimum, worth grinding for"],
            ["9", "Climbing Gear — all three shrine chests, wall-jump is game-changing"],
            ["10", "Barbarian Armor — three Lomei Labyrinths, best attack set"],
          ].map(([n, text]) => (
            <div key={n} className="flex gap-2 items-start">
              <span className="text-primary font-bold font-cinzel text-xs mt-0.5 flex-shrink-0">{n}.</span>
              <span className="text-xs leading-relaxed">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search + category filters */}
      <div className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Search gear by name or location…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedCategory === "All" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"}`}
          >
            All ({gearItems.length})
          </button>
          {gearCategories.map(cat => {
            const count = gearItems.filter(g => g.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors flex items-center gap-1.5 ${selectedCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"}`}
              >
                {categoryIcons[cat]}
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      {(selectedCategory !== "All" || search) && (
        <p className="text-xs text-muted-foreground mb-4">
          Showing {filtered.length} of {gearItems.length} items
        </p>
      )}

      {/* Gear grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(item => <GearCard key={item.id} item={item} />)}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-sm">No gear found matching "{search}"</p>
          <button onClick={() => setSearch("")} className="mt-2 text-xs text-primary hover:underline">Clear search</button>
        </div>
      )}
    </div>
  );
}
