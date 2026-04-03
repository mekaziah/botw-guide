export interface Recipe {
  id: string;
  name: string;
  category: string;
  ingredients: string[];
  effect: string;
  duration: string;
  tip: string;
}

export const recipeCategories = [
  "HP Recovery",
  "Stamina",
  "Speed Boost",
  "Cold Resistance",
  "Heat Resistance",
  "Stealth",
  "Attack Up",
  "Defense Up",
  "Elixirs",
];

export const recipes: Recipe[] = [
  // HP Recovery
  { id: "hearty-stew", name: "Hearty Mushroom Risotto", category: "HP Recovery", ingredients: ["Hearty Truffle x3", "Hylian Rice", "Goat Butter"], effect: "Temporary hearts +4, full heal", duration: "Until you take damage", tip: "Hearty Truffles are the most reliable HP booster. Find them in forests and caves." },
  { id: "food-of-the-wild", name: "Endura Carrot Sauté", category: "HP Recovery", ingredients: ["Endura Carrot x4"], effect: "Full heal + bonus temporary hearts", duration: "Until damaged", tip: "Endura Carrots from Satori Mountain are the best standalone heart recovery item in the game." },
  { id: "fairy-tonic", name: "Fairy Tonic", category: "HP Recovery", ingredients: ["Fairy x4"], effect: "Heals many hearts", duration: "Instant", tip: "Four fairies cooked together create an extremely powerful recovery tonic. Keep fairies for cooking, not just reviving." },
  { id: "energizing-mushroom-skewer", name: "Energizing Mushroom Skewer", category: "HP Recovery", ingredients: ["Stamella Shroom x4"], effect: "Full stamina refill", duration: "Instant", tip: "These shrooms grow near mossy rocks. Perfect before a long climbing session." },
  { id: "hearty-fried-wild-greens", name: "Hearty Fried Wild Greens", category: "HP Recovery", ingredients: ["Big Hearty Radish x1"], effect: "+5 temporary hearts, full restore", duration: "Until damaged", tip: "One Big Hearty Radish alone makes a meal that gives 5 bonus hearts. Best single-ingredient food." },
  { id: "meat-pie", name: "Meat Pie", category: "HP Recovery", ingredients: ["Raw Whole Bird", "Goat Butter", "Tabantha Wheat", "Cane Sugar"], effect: "Heals 12 hearts", duration: "Instant", tip: "Great for stocking up at stables. All ingredients available from general stores." },

  // Stamina
  { id: "energizing-elixir", name: "Energizing Elixir", category: "Stamina", ingredients: ["Restless Cricket", "Bokoblin Horn"], effect: "Restores full stamina wheel", duration: "Instant", tip: "Restless Crickets are found near ponds at night. Very easy to make stamina restorers." },
  { id: "enduring-elixir", name: "Enduring Elixir", category: "Stamina", ingredients: ["Tireless Frog x3", "Bokoblin Horn x1"], effect: "Bonus stamina rings (yellow)", duration: "Until depleted", tip: "Tireless Frogs are rare — found in mountain streams. Worth farming for shrine scaling." },
  { id: "stamina-carrot-stew", name: "Endura Carrot Stew", category: "Stamina", ingredients: ["Endura Carrot x2", "Goat Butter", "Hylian Rice"], effect: "+2 bonus stamina wheels", duration: "Until depleted", tip: "This is what you want before Paragliding across large gaps. Two Endura Carrots minimum." },

  // Speed Boost
  { id: "hasty-mushroom-skewer", name: "Hasty Mushroom Skewer", category: "Speed Boost", ingredients: ["Swift Violet x4"], effect: "Speed boost: medium tier", duration: "4:30", tip: "Swift Violets grow at high altitudes on cliff faces. Worth farming for traversal." },
  { id: "hasty-elixir", name: "Hasty Elixir", category: "Speed Boost", ingredients: ["Hot-Footed Frog x2", "Bokoblin Horn x1"], effect: "Speed boost: medium tier", duration: "3:00", tip: "Hot-Footed Frogs appear near water at night. Easy to catch with stealth." },
  { id: "hasty-poultry", name: "Hasty Fried Wild Greens", category: "Speed Boost", ingredients: ["Swift Carrot x3", "Rock Salt"], effect: "Speed boost: medium tier", duration: "3:30", tip: "Swift Carrots grow near Kakariko Village. Buy them from Rola's produce stand." },

  // Cold Resistance
  { id: "spicy-pepper-stew", name: "Spicy Pepper Stew", category: "Cold Resistance", ingredients: ["Spicy Pepper x2", "Raw Meat x1", "Hylian Shroom x1"], effect: "Level 2 cold resistance", duration: "8:30", tip: "Spicy Peppers grow near warm areas. This stew lets you climb Mount Lanayru without armor." },
  { id: "warming-elixir", name: "Warming Elixir", category: "Cold Resistance", ingredients: ["Summerwing Butterfly", "Bokoblin Horn"], effect: "Level 1 cold resistance", duration: "2:30", tip: "Summerwing Butterflies appear on warm days. Short duration — cook multiple." },
  { id: "spicy-sauteed-peppers", name: "Spicy Sautéed Peppers", category: "Cold Resistance", ingredients: ["Spicy Pepper x5"], effect: "Level 2 cold resistance", duration: "12:30", tip: "Five peppers alone give the longest cold resistance of any recipe. Stock up in Kakariko area." },

  // Heat Resistance
  { id: "chilly-elixir", name: "Chilly Elixir", category: "Heat Resistance", ingredients: ["Cold Darner x2", "Bokoblin Horn x1"], effect: "Level 2 heat resistance", duration: "5:30", tip: "Cold Darners appear in cold mountain areas. The best heat resistance without Flamebreaker Armor." },
  { id: "chilly-sauteed-greens", name: "Chilly Sautéed Greens", category: "Heat Resistance", ingredients: ["Cool Safflina x3", "Hylian Shroom"], effect: "Level 1 heat resistance", duration: "6:30", tip: "Cool Safflinas grow near Eldin's volcanic rocks." },
  { id: "chilly-mushroom", name: "Chilly Mushroom Skewer", category: "Heat Resistance", ingredients: ["Chillshroom x4"], effect: "Level 2 heat resistance", duration: "9:00", tip: "Chillshrooms grow in Hebra and Lanayru regions. Best single-ingredient heat resist." },

  // Stealth
  { id: "sneaky-elixir", name: "Sneaky Elixir", category: "Stealth", ingredients: ["Sunset Firefly x3", "Bokoblin Horn x1"], effect: "Level 2 stealth up", duration: "6:00", tip: "Sunset Fireflies appear at night in forests. This elixir lets you sneak past Yiga Clan guards." },
  { id: "sneaky-fried-greens", name: "Sneaky Fried Wild Greens", category: "Stealth", ingredients: ["Blue Nightshade x4"], effect: "Level 2 stealth up", duration: "8:00", tip: "Blue Nightshade grows at night in Necluda. Perfect for Hyrule Castle infiltration." },
  { id: "sneaky-mushroom", name: "Sneaky Mushroom Skewer", category: "Stealth", ingredients: ["Silent Shroom x4"], effect: "Level 3 stealth up", duration: "5:00", tip: "Silent Shrooms are rare but give Level 3 stealth. Hard to beat for complete invisibility." },

  // Attack Up
  { id: "mighty-simmered-fruit", name: "Mighty Simmered Fruit", category: "Attack Up", ingredients: ["Mighty Bananas x4"], effect: "Attack power up: medium", duration: "2:00", tip: "Monkeys will attack you if you pick their bananas in Faron. Use Stasis to grab them safely." },
  { id: "mighty-elixir", name: "Mighty Elixir", category: "Attack Up", ingredients: ["Bladed Rhino Beetle x2", "Bokoblin Horn x2"], effect: "Attack power up: medium", duration: "3:00", tip: "Bladed Rhino Beetles cling to trees in forested areas. Worth farming for boss fights." },
  { id: "mighty-mushroom", name: "Mighty Mushroom Skewer", category: "Attack Up", ingredients: ["Razorshroom x4"], effect: "Attack power up: medium", duration: "4:00", tip: "Razorshrooms grow near Eldin's volcanic rocks. Great pre-combat boost." },

  // Defense Up
  { id: "tough-elixir", name: "Tough Elixir", category: "Defense Up", ingredients: ["Rugged Rhino Beetle x2", "Bokoblin Horn x2"], effect: "Defense up: medium", duration: "3:00", tip: "Rugged Rhino Beetles are similar to Bladed ones but tougher. Found in same wooded areas." },
  { id: "tough-mushroom", name: "Tough Mushroom Skewer", category: "Defense Up", ingredients: ["Ironshroom x4"], effect: "Defense up: medium", duration: "4:30", tip: "Ironshrooms look like grey mushrooms in humid cave areas. Stock up for fighting Lynels." },
  { id: "armor-stew", name: "Tough Meat-Stuffed Pumpkin", category: "Defense Up", ingredients: ["Fortified Pumpkin x2", "Raw Whole Bird", "Goat Butter", "Hylian Rice"], effect: "Defense up: high", duration: "7:00", tip: "Fortified Pumpkins from Kakariko Village give the best defense food bonus in the game." },

  // Elixirs
  { id: "fireproof-elixir", name: "Fireproof Elixir", category: "Elixirs", ingredients: ["Fireproof Lizard x3", "Bokoblin Horn x1"], effect: "Flame Guard: fireproofing", duration: "5:00", tip: "Essential before entering Death Mountain. Buy Fireproof Lizards from Offrak near the road." },
  { id: "electric-elixir", name: "Electro Elixir", category: "Elixirs", ingredients: ["Electric Darner x2", "Lizalfos Tail x1"], effect: "Shock resistance: level 2", duration: "4:30", tip: "Necessary when fighting Thunderblight Ganon. Also great for Vah Naboris approach." },
  { id: "lynel-elixir", name: "Mighty Elixir (max)", category: "Elixirs", ingredients: ["Lynel Horn", "Bladed Rhino Beetle x3"], effect: "Attack power up: high", duration: "8:30", tip: "Lynel Horns give the strongest potion multiplier. Make these before fighting Moldugas or Lynels." },
];
