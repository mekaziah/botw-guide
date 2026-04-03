export interface KorokRegion {
  id: string;
  name: string;
  total: number;
  description: string;
}

export interface KorokSeedType {
  type: string;
  description: string;
  tip: string;
  icon: string;
}

export const korokRegions: KorokRegion[] = [
  { id: "great-plateau", name: "Great Plateau", total: 13, description: "The starting area. Many are hidden under rocks or in pinwheel puzzles." },
  { id: "akkala", name: "Akkala", total: 35, description: "Northeast region. Dense forests hide many offering bowls and acorn targets." },
  { id: "eldin", name: "Eldin", total: 36, description: "Volcanic region near Death Mountain. Look for seeds under rocks on ledges." },
  { id: "lanayru", name: "Lanayru", total: 53, description: "Eastern region with lots of water. Many seeds require swimming or Cryonis." },
  { id: "necluda", name: "Necluda", total: 48, description: "Southeast region. Mix of field and coastal seeds. Many offering bowls." },
  { id: "faron", name: "Faron", total: 28, description: "Jungle region. Tree canopy hides many balloon and acorn targets." },
  { id: "dueling-peaks", name: "Dueling Peaks", total: 23, description: "Twin mountain region. Many seeds on the mountain faces and rivers below." },
  { id: "lake", name: "Lake", total: 24, description: "Around Lake Hylia. Many require diving or Cryonis pillar bridges." },
  { id: "ridgeland", name: "Ridgeland", total: 36, description: "West central region. Thunderstorm area makes some seeds tricky to reach." },
  { id: "tabantha", name: "Tabantha", total: 32, description: "Northwest region. High altitude cliffs hide many seeds." },
  { id: "hebra", name: "Hebra", total: 50, description: "Snowy northwest mountains. Many seeds hidden under snow or in ice puzzles." },
  { id: "gerudo", name: "Gerudo", total: 31, description: "Desert region. Sand dunes cover seeds — look for patterns in the sand." },
  { id: "wasteland", name: "Wasteland", total: 18, description: "Gerudo desert edge. Puzzle stones and buried seeds in sand." },
  { id: "great-hyrule-forest", name: "Great Hyrule Forest", total: 30, description: "Korok Forest area. Dense woodland with many tree puzzles." },
  { id: "central-hyrule", name: "Central Hyrule", total: 65, description: "Most dangerous region — guardian territory. Very high seed concentration." },
];

export const korokSeedTypes: KorokSeedType[] = [
  {
    type: "Rock Lift",
    description: "A suspicious rock sitting alone on a flat surface. Pick it up to reveal the seed.",
    tip: "These are the most common type. Look for rocks that seem oddly placed — on top of posts, lone rocks in the middle of fields, rocks on elevated ledges.",
    icon: "circle"
  },
  {
    type: "Acorn Target",
    description: "A hanging acorn in a metal cage. Shoot it with an arrow to reveal the seed.",
    tip: "Look up into trees and rock formations. Some acorns are moving. Use stasis to freeze moving targets.",
    icon: "target"
  },
  {
    type: "Balloon Target",
    description: "A yellow balloon floating in the air. Shoot it with an arrow.",
    tip: "Balloons often appear near pinwheel towers. Multiple balloons may appear — shoot all within the time limit.",
    icon: "circle"
  },
  {
    type: "Offering Bowl",
    description: "A stone bowl with an apple or flower arrangement. Complete the pattern.",
    tip: "Look for bowls with apples near similar patterns in the environment. Match the arrangement — add the missing item.",
    icon: "flower"
  },
  {
    type: "Pinwheel Puzzle",
    description: "A pinwheel on a post. Walking near it spawns targets to shoot.",
    tip: "Walk directly up to the pinwheel and it activates. Then quickly look for and shoot the acorns or balloons it reveals.",
    icon: "wind"
  },
  {
    type: "Sparkling Leaves",
    description: "Golden leaves falling from a specific tree or location. Interact with the sparkle.",
    tip: "These golden sparkles appear in trees, on rocks, or floating over water. Walk into them or dive toward them.",
    icon: "sparkles"
  },
  {
    type: "Race to the Finish",
    description: "Step on a glowing circle — a matching circle appears elsewhere. Race to it before time runs out.",
    tip: "These often require running or Paragliding. Look for the second circle immediately after stepping on the first.",
    icon: "timer"
  },
  {
    type: "Block Puzzle",
    description: "Stone blocks need to be arranged to match a pattern on the ground.",
    tip: "Use Magnesis or Stasis to push blocks into position. Climb above to see the full pattern." ,
    icon: "grid"
  },
  {
    type: "Missing Flower",
    description: "A ring of flowers with one missing. Place a flower to complete the ring.",
    tip: "The missing flower is usually nearby — look around the immediate area. Pick it up and place it in the gap.",
    icon: "flower"
  },
  {
    type: "Stone Circle",
    description: "A circle of rocks with one out of place. Move the odd stone into position.",
    tip: "Use Magnesis if the stone is metal, or just pick it up. The correct position is obvious once you see the full circle.",
    icon: "circle"
  },
];

export const korokTips = [
  "Complete shrines first — the shrine sensor makes exploration much more rewarding before hunting Koroks.",
  "Get the Champion's Tunic which doesn't help directly but pair with Sheikah Sensor to ping both shrines and Koroks at once.",
  "Blood Moons reset some Korok puzzle elements — if a puzzle seems broken, come back after a Blood Moon.",
  "Use the Sheikah Sensor+ (upgraded) and set it to Korok Seeds — it pings when you're near one.",
  "Climbing to high vantage points reveals Korok sparkles from above that are invisible from ground level.",
  "Diving into deep water often reveals seeds at the bottom — equip Zora Armor for faster swimming.",
  "Check the tips of every tree, top of every pillar, and underside of every bridge.",
  "Hestu in Korok Forest accepts seeds in exchange for inventory upgrades. Weapon slots first, then bow, then shield.",
  "You need 441 seeds for all inventory upgrades. The remaining 459 seeds reward Hestu's Gift — a golden poop.",
  "Interactive elements like wind-blown leaves or suspicious dirt piles almost always hide a Korok seed.",
];
