import { quests } from "@/data/quests";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function MainQuest() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">Walkthrough</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-foreground mb-3">Main Story</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          The main quest is divided into three phases. Complete the Great Plateau first to unlock the full world, then tackle
          the Divine Beasts in any order, then face Calamity Ganon.
        </p>
      </div>

      {/* Recommended order banner */}
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-8 flex gap-3">
        <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-primary mb-1">Recommended Divine Beast Order</p>
          <p className="text-sm text-muted-foreground">
            Vah Medoh (easiest) → Vah Ruta → Vah Rudania → Vah Naboris (hardest). Then Calamity Ganon.
          </p>
        </div>
      </div>

      {/* Quest sections */}
      <div className="space-y-10">
        {quests.map((quest, qi) => (
          <div key={quest.id} data-testid={`quest-section-${quest.id}`}>
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <span className="font-cinzel text-primary font-bold text-sm">{qi + 1}</span>
              </div>
              <div>
                <h2 className="font-cinzel text-xl font-semibold text-foreground">{quest.title}</h2>
                <p className="text-muted-foreground text-sm mt-1">{quest.description}</p>
              </div>
            </div>

            <div className="ml-14 space-y-3">
              {quest.steps.map((step) => (
                <div key={step.number} className="bg-card border border-border rounded-lg p-4" data-testid={`quest-step-${quest.id}-${step.number}`}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">{step.action}</p>
                      {step.tip && (
                        <div className="mt-2 flex gap-2">
                          <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground text-xs leading-relaxed">{step.tip}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <div className="mt-12 bg-card border border-border rounded-xl p-6">
        <h3 className="font-cinzel font-semibold text-foreground mb-3">After Main Quest</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-primary">—</span> Complete all 120 shrines for 30 heart containers</li>
          <li className="flex gap-2"><span className="text-primary">—</span> Hunt Korok Seeds to expand weapon/bow/shield slots</li>
          <li className="flex gap-2"><span className="text-primary">—</span> Upgrade armor sets at Great Fairy Fountains</li>
          <li className="flex gap-2"><span className="text-primary">—</span> Recover all 18 memories for the true ending</li>
        </ul>
      </div>
    </div>
  );
}
