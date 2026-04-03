import { useState } from "react";
import { recipes, recipeCategories, type Recipe } from "@/data/recipes";
import { Utensils, CheckCircle2, Clock, Sparkles } from "lucide-react";

const categoryColors: Record<string, string> = {
  "HP Recovery": "text-red-400 bg-red-400/10 border-red-400/20",
  "Stamina": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "Speed Boost": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Cold Resistance": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Heat Resistance": "text-orange-400 bg-orange-400/10 border-orange-400/20",
  "Stealth": "text-purple-400 bg-purple-400/10 border-purple-400/20",
  "Attack Up": "text-red-300 bg-red-300/10 border-red-300/20",
  "Defense Up": "text-green-400 bg-green-400/10 border-green-400/20",
  "Elixirs": "text-primary bg-primary/10 border-primary/20",
};

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-3" data-testid={`recipe-card-${recipe.id}`}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-cinzel text-sm font-semibold text-foreground leading-tight">{recipe.name}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 font-mono ${categoryColors[recipe.category] || "text-muted-foreground"}`}>
          {recipe.category}
        </span>
      </div>

      {/* Ingredients */}
      <div>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Ingredients</p>
        <div className="flex flex-wrap gap-1.5">
          {recipe.ingredients.map((ing, i) => (
            <span key={i} className="text-xs bg-muted border border-border rounded-md px-2 py-0.5 text-foreground">
              {ing}
            </span>
          ))}
        </div>
      </div>

      {/* Effect */}
      <div className="flex items-start gap-2">
        <Sparkles size={13} className="text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-medium text-foreground">{recipe.effect}</p>
          {recipe.duration !== "Instant" && (
            <div className="flex items-center gap-1 mt-0.5">
              <Clock size={11} className="text-muted-foreground" />
              <p className="text-xs text-muted-foreground">{recipe.duration}</p>
            </div>
          )}
        </div>
      </div>

      {/* Tip */}
      <div className="flex gap-2 bg-muted/30 rounded-lg p-2.5">
        <CheckCircle2 size={13} className="text-primary flex-shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">{recipe.tip}</p>
      </div>
    </div>
  );
}

export default function Cooking() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = selectedCategory === "All"
    ? recipes
    : recipes.filter((r) => r.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">Reference</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-foreground mb-3">Cooking & Recipes</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          The best recipes for every situation — survival, combat prep, exploration, and boss fights.
          Always combine critters with monster parts for elixirs.
        </p>
      </div>

      {/* Quick tips banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="bg-card border border-border rounded-lg p-3 text-xs text-muted-foreground">
          <span className="text-primary font-medium">Golden Rule: </span>
          5 of the same ingredient maximizes that food's effect — duration and potency.
        </div>
        <div className="bg-card border border-border rounded-lg p-3 text-xs text-muted-foreground">
          <span className="text-primary font-medium">Elixirs: </span>
          Always add monster parts to critters. Parts determine potency tier.
        </div>
        <div className="bg-card border border-border rounded-lg p-3 text-xs text-muted-foreground">
          <span className="text-primary font-medium">Best source: </span>
          Cook at any campfire — stable fires, shrine fires, and enemy camps all work.
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory("All")}
          data-testid="category-all"
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            selectedCategory === "All" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({recipes.length})
        </button>
        {recipeCategories.map((cat) => {
          const count = recipes.filter((r) => r.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              data-testid={`category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                selectedCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Recipe grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Cooking tips */}
      <div className="mt-10 bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Utensils size={18} className="text-primary" />
          <h2 className="font-cinzel text-lg font-semibold text-foreground">Cooking Tips</h2>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-primary">—</span> Never mix effects — conflicting ingredients produce a random item ("Dubious Food")</li>
          <li className="flex gap-2"><span className="text-primary">—</span> Wood + flint + metal weapon = instant campfire for cooking anywhere</li>
          <li className="flex gap-2"><span className="text-primary">—</span> Fairies cook into extremely powerful recovery tonics — worth more cooked than as revives</li>
          <li className="flex gap-2"><span className="text-primary">—</span> Dragon parts (scales, claws, horns) massively extend elixir duration when added</li>
          <li className="flex gap-2"><span className="text-primary">—</span> Cooking during a Blood Moon at midnight gives you a chance for a critical success ("a lot of love")</li>
        </ul>
      </div>
    </div>
  );
}
