import { useState } from "react";
import { tips, tipCategories, type Tip } from "@/data/tips";
import { Lightbulb } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Combat": "text-red-400",
  "Climbing & Movement": "text-blue-400",
  "Cooking": "text-yellow-400",
  "Inventory": "text-purple-400",
  "Exploration": "text-green-400",
  "Rupees & Resources": "text-primary",
  "Horses": "text-orange-400",
};

function TipCard({ tip }: { tip: Tip }) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 flex gap-3" data-testid={`tip-card-${tip.id}`}>
      <Lightbulb size={16} className={`flex-shrink-0 mt-0.5 ${categoryColors[tip.category] || "text-primary"}`} />
      <div>
        <p className="text-sm font-semibold text-foreground mb-1">{tip.title}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">{tip.content}</p>
      </div>
    </div>
  );
}

export default function Tips() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = selectedCategory === "All"
    ? tips
    : tips.filter((t) => t.category === selectedCategory);

  const grouped: Record<string, Tip[]> = {};
  if (selectedCategory === "All") {
    tipCategories.forEach((cat) => {
      const catTips = tips.filter((t) => t.category === cat);
      if (catTips.length > 0) grouped[cat] = catTips;
    });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">Reference</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-foreground mb-3">Tips & Tricks</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Bite-sized pro tips that will change how you play. Organized by category for quick reference mid-game.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("All")}
          data-testid="tips-category-all"
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            selectedCategory === "All" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {tipCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            data-testid={`tips-category-${cat.toLowerCase().replace(/[\s&]+/g, "-")}`}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors flex items-center gap-1.5 ${
              selectedCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedCategory === cat ? "bg-primary-foreground" : categoryColors[cat]?.split(" ")[0]?.replace("text-", "bg-") || "bg-primary"}`} />
            {cat}
          </button>
        ))}
      </div>

      {/* Tips display */}
      {selectedCategory === "All" ? (
        <div className="space-y-8">
          {Object.entries(grouped).map(([cat, catTips]) => (
            <div key={cat}>
              <div className="flex items-center gap-2 mb-3">
                <h2 className={`font-cinzel text-base font-semibold ${categoryColors[cat] || "text-foreground"}`}>{cat}</h2>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground font-mono">{catTips.length} tips</span>
              </div>
              <div className="space-y-2">
                {catTips.map((tip) => (
                  <TipCard key={tip.id} tip={tip} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      )}
    </div>
  );
}
