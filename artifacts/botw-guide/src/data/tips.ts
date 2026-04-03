export interface Tip {
  id: string;
  category: string;
  title: string;
  content: string;
}

export const tipCategories = ["Combat", "Climbing & Movement", "Cooking", "Inventory", "Exploration", "Rupees & Resources", "Horses"];

export const tips: Tip[] = [
  // Combat
  { id: "flurry-rush", category: "Combat", title: "Master the Flurry Rush", content: "Dodge just before an enemy's attack connects. If timed right, time slows and you get a series of rapid free attacks. This is the most powerful combat technique in the game." },
  { id: "perfect-guard", category: "Combat", title: "Perfect Guard (Parry) Timing", content: "Tap the L button the instant before an attack hits your shield. This deflects the attack and often knocks enemies back. Guardian beams, when perfectly parried, fly back and deal massive damage." },
  { id: "stasis-attack", category: "Combat", title: "Stasis + Multiple Hits = Launcher", content: "Use Stasis on an enemy or boulder, then hit it as many times as possible. When Stasis ends, all stored kinetic energy releases at once, launching it with tremendous force." },
  { id: "headshot-dmg", category: "Combat", title: "Headshots Deal Triple Damage", content: "Aim for the head (or glowing eye on Guardians) for a critical hit. Hold ZL to lock on, then adjust aim slightly upward. Headshots stagger humanoid enemies, opening them for follow-up attacks." },
  { id: "bomb-arrows-water", category: "Combat", title: "Never Shoot Bomb Arrows in Rain", content: "Bomb arrows explode in your face when shot in the rain. Switch to regular arrows during wet weather. This also applies near waterfalls." },
  { id: "ancient-arrow", category: "Combat", title: "Ancient Arrows Disintegrate Guardians", content: "A single Ancient Arrow shot at a Guardian's eye is an instant kill. Very expensive to make but essential for difficult Guardian encounters. Never waste them on regular enemies." },
  { id: "lynel-stasis", category: "Combat", title: "Mount Lynels Mid-Fight", content: "When a Lynel staggers after hitting its face repeatedly with arrows, sprint toward it and press A to mount it. Swing your weapon rapidly while riding — this deals massive damage and doesn't consume durability." },
  { id: "campfire-skip", category: "Combat", title: "Blood Moon Timing Trick", content: "Blood Moons happen at midnight. If you need a Blood Moon to respawn enemies, sit at a campfire and select 'Wait until night' twice. If a moon hasn't occurred recently, it will trigger that night." },
  { id: "windbomb", category: "Combat", title: "Shield Surfing as Escape", content: "Hold ZL + A on any slope to shield surf and quickly escape dangerous situations. It works great as a getaway from Guardian laser spam." },

  // Climbing & Movement
  { id: "rain-climbing", category: "Climbing & Movement", title: "Climbing in Rain is Impossible — Plan Around It", content: "Rain makes all surfaces slippery. Wait under shelter or by a campfire for the rain to pass. Wet weather is excellent for sneaking though." },
  { id: "paraglider-timing", category: "Climbing & Movement", title: "Jump at Peak Stamina for Best Paraglider Range", content: "Hold forward + Paraglider from high ground. Stamina drains slower when you have height. Always reach the highest point before opening the Paraglider for maximum horizontal distance." },
  { id: "climb-diagonal", category: "Climbing & Movement", title: "Climb at a Diagonal to Save Stamina", content: "Climbing straight up drains stamina fastest. Moving diagonally while climbing uses slightly less stamina per vertical meter. Significant over long climbs." },
  { id: "shield-jump", category: "Climbing & Movement", title: "Shield Jump Trick", content: "While running, press ZL, then jump (X), then press A to launch off the shield. This gives you extra horizontal distance off ledges without using stamina." },
  { id: "horse-shortcuts", category: "Climbing & Movement", title: "Horses Are Faster Than Running (But Not Revali)", content: "A fully leveled horse with 5-star speed is the fastest land transport. However, Revali's Gale + gliding is often faster for crossing terrain with obstacles." },
  { id: "revali-abuse", category: "Climbing & Movement", title: "Spam Revali's Gale Every Cooldown", content: "Revali's Gale recharges in 6 minutes. Never let it sit unused — activate it every time it's ready during exploration. Over an hour, this saves enormous climbing time." },

  // Cooking
  { id: "cooking-multiples", category: "Cooking", title: "5 of the Same Ingredient Gives Maximum Effect", content: "Cooking five identical ingredients maximizes that food's effect. Five Spicy Peppers = maximum cold resistance duration. Five Hearty Truffles = maximum bonus hearts." },
  { id: "cooking-durian", category: "Cooking", title: "Hearty Durian is the Best End-Game Food", content: "One Hearty Durian gives 4 bonus hearts. Five Hearty Durians give 20 bonus hearts and full heal. Grow them in Faron's jungle. This is what most speedrunners stock for Ganon." },
  { id: "campfire-cooking", category: "Cooking", title: "You Can Cook on Any Fire — Even Enemy Campfires", content: "Walk up to any lit brazier or campfire and press A. You don't need your own cooking pot. Bokoblin camps, stable fires, and shrine fires all work." },
  { id: "monster-parts-elixirs", category: "Cooking", title: "Always Add Monster Parts to Elixirs", content: "Critter + monster part = elixir. The monster part tier determines duration and potency: Bokoblin Horn (low), Lizalfos Tail (medium), Lynel Horn (high). Never cook critters alone." },
  { id: "cooking-fairies", category: "Cooking", title: "Cook Multiple Fairies for Powerful Tonics", content: "One fairy in a pot heals a tiny amount. Four fairies together create an extremely powerful tonic. The healing scales dramatically with quantity — always combine them." },

  // Inventory
  { id: "inventory-upgrade", category: "Inventory", title: "Upgrade Weapon Slots First at Hestu", content: "Visit Hestu in Korok Forest. Always spend Korok Seeds on weapon slots first — you'll find more weapons than you have slots early on. Bow and shield slots are secondary priorities." },
  { id: "weapon-transfer", category: "Inventory", title: "Pick Up Weapons Before They Break", content: "When a weapon is about to break, it flashes. Before the final hit, swap it out via the item menu and pick up an enemy's dropped weapon. You can then use the nearly-broken weapon without losing it from your slots." },
  { id: "drop-keep", category: "Inventory", title: "Drop Items to Save Them From Breaking", content: "Dropping a weapon removes it from combat. You can then pick it back up in a safer moment. Useful for preserving rare weapons during intense fights." },
  { id: "octorok-repair", category: "Inventory", title: "Octoroks Can Repair Weapons", content: "Rock Octoroks in Eldin (Death Mountain) will suck in and spit out weapons. This repairs the weapon and occasionally adds a bonus modifier. Stand near one with a worn weapon and let it swallow it." },

  // Exploration
  { id: "tower-first", category: "Exploration", title: "Always Activate Towers Before Exploring", content: "Each region tower reveals the full map. Activate the tower first so you can see terrain, shrines marked by your sensor, and plan routes efficiently." },
  { id: "shrine-sensor", category: "Exploration", title: "Upgrade the Sheikah Sensor to Track Koroks", content: "After completing Robbie's quest in Akkala, you can upgrade the Sheikah Sensor+ to ping Korok Seeds. This is invaluable for collecting all 900 seeds without a guide." },
  { id: "amiibo-drops", category: "Exploration", title: "Suspicious Locations Are Always Rewarded", content: "Any location that looks slightly unusual — a lone rock, a circle of trees, a suspicious pile of leaves, fish in a circular pattern — almost always has a Korok seed or hidden chest." },
  { id: "blood-moon-respawn", category: "Exploration", title: "Blood Moon Respawns All Enemies and Resources", content: "After a Blood Moon, every enemy in the overworld respawns. This includes Lynels, which drop rare parts. Plan farming routes to take advantage of Blood Moons." },
  { id: "memory-rewards", category: "Exploration", title: "All 18 Memories Unlock the True Ending", content: "Recovering all 18 Recovered Memories (found at the marked locations on your map) unlocks an extended ending cutscene and Zelda's true fate. Worth doing before fighting Ganon." },

  // Rupees & Resources
  { id: "horse-sell", category: "Rupees & Resources", title: "Luminous Stone Mining for Easy Rupees", content: "Luminous Stones appear throughout Hyrule near mountain bases. Sell them to the researcher at Zora's Domain for 20 rupees each. She'll trade them for gems over time." },
  { id: "star-fragment", category: "Rupees & Resources", title: "Shoot Stars for Rupees", content: "When you see a shooting star, track where it lands and go there. Star Fragments sell for 300 rupees or can be used for powerful armor upgrades." },
  { id: "treasure-chest-detector", category: "Rupees & Resources", title: "Treasure Chests Glow on the Sheikah Sensor", content: "Once you have the Sheikah Sensor, it can detect buried and hidden chests nearby. Sweep areas you think might have loot." },
  { id: "guardian-parts-sell", category: "Rupees & Resources", title: "Sell Ancient Materials for Rupees Early", content: "Ancient Springs, Gears, and Shafts sell for 30-60 rupees each. Early game, you don't need them for armor. Sell the excess from defeated Guardians for easy rupee income." },

  // Horses
  { id: "horse-max-stats", category: "Horses", title: "Best Wild Horse: 5-4-4 or 4-5-4 Stats", content: "Wild horses in Akkala and Ridgeland sometimes have max stats. Check with the stable keeper after registering. The Spotted horse in Akkala often has 5 speed. Royal horses have guaranteed high stats." },
  { id: "horse-call-distance", category: "Horses", title: "Increase Bond to Call from Far Away", content: "Feed your horse apples and pat it at stables to increase bond. Max bond lets you call it from great distances using the whistle (down button)." },
  { id: "horse-armor", category: "Horses", title: "Horse Armor is Cosmetic Only", content: "Horse armor (saddles and bridles) from amiibos or DLC is purely cosmetic. Focus on the horse's speed and stamina stats, not its outfit." },
];
