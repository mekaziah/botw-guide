import { useState } from "react";
import { divineBeastData, type DivineBeast } from "@/data/divineBeasts";
import { ChevronDown, ChevronUp, Swords, CheckCircle2 } from "lucide-react";

const difficultyColors = {
  Easy: "text-green-400 bg-green-400/10 border-green-400/20",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Hard: "text-red-400 bg-red-400/10 border-red-400/20",
};

const beastColors: Record<string, string> = {
  medoh: "border-blue-400/30 bg-blue-400/5",
  ruta: "border-cyan-400/30 bg-cyan-400/5",
  naboris: "border-yellow-400/30 bg-yellow-400/5",
  rudania: "border-orange-400/30 bg-orange-400/5",
};

function StepList({ steps, label }: { steps: DivineBeast["approachSteps"]; label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-muted/30 hover:bg-muted/50 transition-colors text-left"
        onClick={() => setOpen(!open)}
        data-testid={`section-toggle-${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span className="font-medium text-sm text-foreground">{label}</span>
        {open ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
      </button>
      {open && (
        <div className="divide-y divide-border">
          {steps.map((step) => (
            <div key={step.number} className="px-4 py-3 bg-card">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{step.action}</p>
                  {step.tip && (
                    <div className="mt-1.5 flex gap-2">
                      <CheckCircle2 size={13} className="text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.tip}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DivineBeasts() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">Walkthrough</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-foreground mb-3">Divine Beasts</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Full step-by-step guides for all four divine beasts — how to reach them, interior puzzles, and boss strategies.
          Expand each section for details.
        </p>
      </div>

      <div className="space-y-6">
        {divineBeastData.map((beast) => (
          <div
            key={beast.id}
            data-testid={`beast-card-${beast.id}`}
            className={`bg-card border rounded-xl overflow-hidden ${beastColors[beast.id] || "border-border"}`}
          >
            {/* Header */}
            <div className="p-5 border-b border-border">
              <div className="flex items-start gap-4 justify-between flex-wrap gap-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h2 className="font-cinzel text-xl font-bold text-foreground">{beast.name}</h2>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${difficultyColors[beast.difficulty]}`}>
                      {beast.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{beast.village} — Champion: {beast.champion}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Requires: {beast.prerequisite}</p>
                </div>
              </div>

              {/* Reward */}
              <div className="mt-4 bg-primary/10 border border-primary/20 rounded-lg p-3">
                <p className="text-xs font-mono text-primary uppercase tracking-wide mb-1">Champion Ability Reward</p>
                <p className="text-sm font-medium text-foreground">{beast.reward}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{beast.rewardDesc}</p>
              </div>
            </div>

            {/* Steps */}
            <div className="p-5 space-y-3">
              <StepList steps={beast.approachSteps} label="How to Reach It" />
              <StepList steps={beast.interiorSteps} label="Interior Puzzle" />
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="px-4 py-3 bg-red-500/10 border-b border-border flex items-center gap-2">
                  <Swords size={16} className="text-red-400" />
                  <span className="font-medium text-sm text-foreground">Boss: {beast.bossName}</span>
                </div>
                <div className="divide-y divide-border">
                  {beast.bossSteps.map((step) => (
                    <div key={step.number} className="px-4 py-3 bg-card">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-400/10 border border-red-400/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-red-400">{step.number}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{step.action}</p>
                          {step.tip && (
                            <div className="mt-1.5 flex gap-2">
                              <CheckCircle2 size={13} className="text-primary flex-shrink-0 mt-0.5" />
                              <p className="text-xs text-muted-foreground leading-relaxed">{step.tip}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
