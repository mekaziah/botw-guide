import { useState } from "react";
import { Link } from "wouter";
import { Map, Sword, Castle, Leaf, Utensils, Shield, Lightbulb, Search } from "lucide-react";
import { shrines } from "@/data/shrines";
import { recipes } from "@/data/recipes";
import { tips } from "@/data/tips";
import { gearItems } from "@/data/gear";

const sections = [
  {
    href: "/main-quest",
    title: "Main Quest",
    description: "Step-by-step walkthrough from the Great Plateau to defeating Calamity Ganon.",
    icon: <Map size={28} className="text-primary" />,
    tag: "Story",
  },
  {
    href: "/shrines",
    title: "120 Shrines",
    description: "Every shrine by region with puzzle type, tip, and a personal completion tracker.",
    icon: <Sword size={28} className="text-primary" />,
    tag: "120 Total",
  },
  {
    href: "/divine-beasts",
    title: "Divine Beasts",
    description: "Full walkthroughs for Vah Medoh, Ruta, Naboris, and Rudania — interior + boss.",
    icon: <Castle size={28} className="text-primary" />,
    tag: "4 Beasts",
  },
  {
    href: "/korok-seeds",
    title: "Korok Seeds",
    description: "900 seeds by region — types, tips, and a progress tracker.",
    icon: <Leaf size={28} className="text-primary" />,
    tag: "900 Seeds",
  },
  {
    href: "/cooking",
    title: "Cooking & Recipes",
    description: "Best recipes for HP, stamina, resistance, stealth, and elixirs — with ingredients.",
    icon: <Utensils size={28} className="text-primary" />,
    tag: "30+ Recipes",
  },
  {
    href: "/gear",
    title: "Best Gear",
    description: "Master Sword, champion abilities, armor sets, and best weapons by category.",
    icon: <Shield size={28} className="text-primary" />,
    tag: "Essential",
  },
  {
    href: "/tips",
    title: "Tips & Tricks",
    description: "Combat, exploration, cooking, inventory, and movement tips from seasoned players.",
    icon: <Lightbulb size={28} className="text-primary" />,
    tag: "Pro Tips",
  },
];

interface SearchResult {
  title: string;
  subtitle: string;
  href: string;
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  shrines.forEach((s) => {
    results.push({ title: s.name, subtitle: `Shrine — ${s.region} — ${s.puzzle}`, href: "/shrines" });
  });

  recipes.forEach((r) => {
    results.push({ title: r.name, subtitle: `Recipe — ${r.category} — ${r.effect}`, href: "/cooking" });
  });

  tips.forEach((t) => {
    results.push({ title: t.title, subtitle: `Tip — ${t.category} — ${t.content.substring(0, 60)}...`, href: "/tips" });
  });

  gearItems.forEach((g) => {
    results.push({ title: g.name, subtitle: `Gear — ${g.category} — ${g.stats}`, href: "/gear" });
  });

  return results;
}

const searchIndex = buildSearchIndex();

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.trim().length < 2) {
      setSearchResults([]);
      return;
    }
    const lower = q.toLowerCase();
    const results = searchIndex
      .filter((r) => r.title.toLowerCase().includes(lower) || r.subtitle.toLowerCase().includes(lower))
      .slice(0, 8);
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-card to-background border-b border-border">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(45deg, hsl(41 72% 47%) 0px, transparent 1px, transparent 20px, hsl(41 72% 47%) 21px)",
          backgroundSize: "30px 30px"
        }} />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <svg width="60" height="60" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <polygon points="14,2 21,14 7,14" fill="hsl(41 72% 47%)" />
              <polygon points="7,14 14,26 0,26" fill="hsl(41 72% 47%)" />
              <polygon points="21,14 28,26 14,26" fill="hsl(41 72% 47%)" />
            </svg>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-foreground mb-3 tracking-wide">
            Hyrule Field Guide
          </h1>
          <p className="font-cinzel text-primary text-lg mb-2 tracking-widest uppercase text-sm">
            Breath of the Wild
          </p>
          <p className="text-muted-foreground mt-4 mb-8 text-base max-w-xl mx-auto">
            The fastest, clearest BotW reference guide. Step-by-step walkthroughs, no videos.
            Find what you need in seconds.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                placeholder="Search shrines, recipes, tips, gear..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                data-testid="search-input"
                className="w-full bg-card border border-border rounded-lg pl-11 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
              />
            </div>

            {searchResults.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50" data-testid="search-results">
                {searchResults.map((r, i) => (
                  <Link key={i} href={r.href} onClick={() => { setQuery(""); setSearchResults([]); }}>
                    <div className="px-4 py-3 hover:bg-muted/40 border-b border-border last:border-0 cursor-pointer transition-colors" data-testid={`search-result-${i}`}>
                      <div className="text-sm font-medium text-foreground">{r.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 truncate">{r.subtitle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Guide sections grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-cinzel text-xl font-semibold text-muted-foreground mb-8 tracking-widest uppercase text-sm">
          Guide Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} data-testid={`section-card-${section.href.replace("/", "")}`}>
              <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{section.tag}</span>
                </div>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:bg-primary/15 transition-colors">
                  {section.icon}
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick tip */}
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-xl p-6">
          <h3 className="font-cinzel text-primary font-semibold mb-2">New to the Guide?</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Start with the <Link href="/main-quest" className="text-primary hover:underline">Main Quest</Link> for the story path,
            or jump to <Link href="/divine-beasts" className="text-primary hover:underline">Divine Beasts</Link> if you're stuck on a titan.
            Use the search bar above to instantly find any shrine, recipe, or gear item by name.
          </p>
        </div>
      </div>
    </div>
  );
}
