import { useState } from "react";
import { gearItems, gearCategories, type GearItem } from "@/data/gear";
import { MapPin, Swords, Star } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Weapons": <Swords size={14} />,
  "Armor Sets": <Star size={14} />,
  "Champion Abilities": <Star size={14} />,
  "Shields": <Star size={14} />,
  "Bows": <Star size={14} />,
};

function GearCard({ item }: { item: GearItem }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-3 h-full" data-testid={`gear-card-${item.id}`}>
      <div>
        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
          <h3 className="font-cinzel text-sm font-bold text-foreground">{item.name}</h3>
        </div>
        <p className="text-xs text-muted-foreground font-mono">{item.category}</p>
      </div>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-2.5">
        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Stats</p>
        <p className="text-xs text-foreground leading-relaxed">{item.stats}</p>
      </div>

      <div>
        <div className="flex items-center gap-1.5 mb-1.5">
          <MapPin size={12} className="text-muted-foreground" />
          <p className="text-xs font-medium text-muted-foreground">{item.location}</p>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{item.howToGet}</p>
      </div>

      <div className="mt-auto bg-muted/30 rounded-lg p-2.5">
        <p className="text-xs text-muted-foreground leading-relaxed leading-relaxed">{item.tip}</p>
      </div>
    </div>
  );
}

export default function Gear() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = selectedCategory === "All"
    ? gearItems
    : gearItems.filter((g) => g.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">Reference</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-foreground mb-3">Best Gear</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          The most important weapons, armor sets, bows, shields, and champion abilities — where to find them and why they matter.
        </p>
      </div>

      {/* Priority picks */}
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-6">
        <h2 className="font-cinzel text-sm font-semibold text-primary mb-3 uppercase tracking-widest">Priority Targets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex gap-2"><span className="text-primary font-bold">1.</span> Unlock Revali's Gale (Vah Medoh) first — transforms exploration</div>
          <div className="flex gap-2"><span className="text-primary font-bold">2.</span> Get Hylian Shield from Hyrule Castle lockup ASAP</div>
          <div className="flex gap-2"><span className="text-primary font-bold">3.</span> Farm 13 hearts then pull the Master Sword</div>
          <div className="flex gap-2"><span className="text-primary font-bold">4.</span> Buy Ancient Shield from Robbie — auto-reflects Guardian beams</div>
          <div className="flex gap-2"><span className="text-primary font-bold">5.</span> Get Climbing Set from three separate shrine chests</div>
          <div className="flex gap-2"><span className="text-primary font-bold">6.</span> Farm Silver Lynels for Savage Lynel weapons late game</div>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory("All")}
          data-testid="gear-category-all"
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            selectedCategory === "All" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({gearItems.length})
        </button>
        {gearCategories.map((cat) => {
          const count = gearItems.filter((g) => g.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              data-testid={`gear-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors flex items-center gap-1.5 ${
                selectedCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryIcons[cat]}
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Gear grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <GearCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
