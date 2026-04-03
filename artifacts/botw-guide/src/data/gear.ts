export interface GearItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  location: string;
  steps: string[];
  stats: string;
  setBonus?: string;
  tip: string;
  videoUrl: string;
  requiresAmiibo?: boolean;
  requiresDLC?: boolean;
}

export const gearCategories = [
  "Armor Sets",
  "Weapons",
  "Bows",
  "Shields",
  "Champion Abilities",
];

// YouTube search URL helper (always current, always relevant)
function yt(query: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent("botw " + query + " location guide")}`;
}

export const gearItems: GearItem[] = [

  // ────────────────────────────────────────────────────────────
  // ARMOR SETS
  // ────────────────────────────────────────────────────────────

  {
    id: "hylian-set",
    name: "Hylian Set",
    category: "Armor Sets",
    location: "Hateno Village — Ventest Clothing Boutique",
    steps: [
      "Travel to Hateno Village (east Necluda region).",
      "Find the Ventest Clothing Boutique — the shop just east of the dye shop.",
      "Buy Hylian Hood (60r), Hylian Tunic (120r), Hylian Trousers (90r).",
      "Upgrade at any Great Fairy Fountain for increased defence.",
    ],
    stats: "Defence 3 per piece (9 total). Balanced, all-purpose armor.",
    setBonus: "None",
    tip: "Your best early-game armor. Buy it immediately on reaching Hateno — it's affordable and upgrades well.",
    videoUrl: yt("hylian set armor"),
  },
  {
    id: "soldiers-set",
    name: "Soldier's Set",
    category: "Armor Sets",
    location: "Hateno Village — Ventest Clothing Boutique",
    steps: [
      "Travel to Hateno Village.",
      "Buy Soldier's Helm (800r), Soldier's Armor (600r), Soldier's Greaves (500r) from Ventest shop.",
      "Note: high cost — farm rupees via Lynel weapons or ore deposits first.",
    ],
    stats: "Defence 7 per piece (21 total) — highest buyable defence.",
    setBonus: "None",
    tip: "Best defence of any purchasable set. Expensive but worth it for mid-game survivability before you get Ancient Armor.",
    videoUrl: yt("soldier armor set"),
  },
  {
    id: "stealth-set",
    name: "Stealth Set (Sheikah Armor)",
    category: "Armor Sets",
    location: "Kakariko Village — Enchanted shop",
    steps: [
      "Arrive in Kakariko Village (follow the Impa main quest).",
      "Locate the Enchanted clothing shop east of the main path.",
      "Purchase Stealth Mask (500r), Stealth Chest Guard (1,000r), Stealth Tights (800r).",
      "Upgrade twice at a Great Fairy for maximum stealth.",
    ],
    stats: "Defence 2 per piece. Reduces noise when moving.",
    setBonus: "Full set: Night Speed Up — move faster at night.",
    tip: "Invaluable for catching wild horses, avoiding Yiga ambushes, and approaching sleeping enemies for a critical hit.",
    videoUrl: yt("stealth sheikah armor set"),
  },
  {
    id: "snowquill-set",
    name: "Snowquill Set",
    category: "Armor Sets",
    location: "Rito Village — Brazen Beak shop",
    steps: [
      "Travel to Rito Village in the Tabantha Frontier (northwest).",
      "Find the Brazen Beak armor shop near the bottom of the village.",
      "Buy Snowquill Headdress (1,000r), Snowquill Tunic (600r), Snowquill Trousers (800r).",
      "Equip all three to gain cold immunity without needing food.",
    ],
    stats: "Defence 3 per piece. Single piece gives cold resistance, full set gives immunity.",
    setBonus: "Full set: Unfreezable — immune to ice attacks.",
    tip: "Essential before heading to Hebra Mountains or Vah Medoh. Buy this before attempting the cold regions.",
    videoUrl: yt("snowquill armor rito village"),
  },
  {
    id: "flamebreaker-set",
    name: "Flamebreaker Armor",
    category: "Armor Sets",
    location: "Goron City — Ripped and Shredded shop",
    steps: [
      "Reach Goron City on Death Mountain (follow the Vah Rudania main quest trail).",
      "Enter Ripped and Shredded shop at the top of the city.",
      "Buy Flamebreaker Helm (2,000r), Flamebreaker Armor (600r), Flamebreaker Boots (700r).",
      "Alternatively, earn the Flamebreaker Armor free by completing 'Fireproof Lizard Roundup' side quest near Foothill Stable.",
    ],
    stats: "Defence 3 per piece. Provides flame guard, preventing burn damage.",
    setBonus: "Full set: Fireproof — complete immunity to fire and lava environments.",
    tip: "You need at least the Flamebreaker Armor to enter Eldin Canyon safely. Get the free one from the side quest before spending rupees.",
    videoUrl: yt("flamebreaker armor goron city"),
  },
  {
    id: "desert-voe-set",
    name: "Desert Voe Set",
    category: "Armor Sets",
    location: "Gerudo Town — Gerudo Secret Club",
    steps: [
      "Reach Gerudo Town (southwest desert). Requires male-Link disguise: equip Gerudo Clothes first.",
      "Find the Secret Club door on the east wall of town — say the password 'GSC♦' (learned from eavesdropping on women near the jewelry shop).",
      "Buy Desert Voe Headband (450r), Desert Voe Spaulder (1,300r), Desert Voe Trousers (650r).",
    ],
    stats: "Defence 3 per piece. Heat and shock resistance.",
    setBonus: "Full set: Shock Damage Resist Up — strong lightning resistance.",
    tip: "Great for the Gerudo Desert region and fighting Vah Naboris. The shock resistance also helps when fighting Lynels.",
    videoUrl: yt("desert voe set gerudo secret club"),
  },
  {
    id: "gerudo-clothes",
    name: "Gerudo Clothes (Vai Disguise)",
    category: "Armor Sets",
    location: "Kara Kara Bazaar — Vilia the merchant",
    steps: [
      "Travel to Kara Kara Bazaar, the oasis just before Gerudo Town.",
      "Climb to the roof of the inn and talk to the large cloaked figure (Vilia).",
      "Pay 600 rupees for Gerudo Top and Gerudo Veil.",
      "Equip both to disguise Link as a woman and enter Gerudo Town.",
    ],
    stats: "Defence 3 (Veil) + 4 (Top). Required for entry into Gerudo Town.",
    setBonus: "None",
    tip: "Mandatory for the Vah Naboris quest. You can buy better replacements inside town later, but these get you in the door.",
    videoUrl: yt("gerudo town disguise link vai outfit"),
  },
  {
    id: "zora-set",
    name: "Zora Armor",
    category: "Armor Sets",
    location: "Zora's Domain — quest rewards + shrine chest",
    steps: [
      "Zora Armor: Complete the 'Divine Beast Vah Ruta' main quest. King Dorephan gives it to you after speaking with him in Zora's Domain.",
      "Zora Greaves: Complete the 'Lynel Safari' side quest. Show Laflat a picture of a Lynel (take one with your Sheikah Slate camera).",
      "Zora Helm: Found in a chest in Toto Sah Shrine (north of Zora's Domain, near Veiled Falls waterfall).",
    ],
    stats: "Defence 3 per piece. Zora Armor increases swim speed.",
    setBonus: "Full set: Swim Up Waterfalls — launch up waterfalls with a spin dash.",
    tip: "The waterfall climbing ability unlocks countless hidden areas and shrines. Upgrade at Great Fairies early — it pairs beautifully with the Climbing Set.",
    videoUrl: yt("zora armor full set greaves helm"),
  },
  {
    id: "rubber-set",
    name: "Rubber Armor",
    category: "Armor Sets",
    location: "Three separate shrine quest areas",
    steps: [
      "Rubber Helm: Complete 'Thunder Magnet' shrine quest at Shoda Sah Shrine (Calora Lake, Faron region). Place the metal box on top of the hill to trigger lightning.",
      "Rubber Armor: Complete 'A Song of Storms' shrine quest at Qukah Nata Shrine. Play the song on the drums at Calora Lake pavilion during a storm.",
      "Rubber Tights: Complete 'Test of Thunder' shrine quest at Tawa Jinn Shrine (Mount Rhoam, Central Hyrule). Move all three orbs to their pedestals.",
    ],
    stats: "Defence 3 per piece. Shock resistance on each piece.",
    setBonus: "Full set: Unshockable — full immunity to lightning.",
    tip: "Wear this for Vah Naboris and thunderstorm exploration. Full set lets you freely use metal weapons in rain without risk.",
    videoUrl: yt("rubber armor full set location"),
  },
  {
    id: "climbing-set",
    name: "Climbing Gear",
    category: "Armor Sets",
    location: "Three shrine treasure chests",
    steps: [
      "Climber's Bandana: Ree Dahee Shrine — Dueling Peaks (central Hyrule). The chest is inside the shrine.",
      "Climbing Gear (chest): Chaas Qeta Shrine — Necluda Sea island. Warp to Muwo Jeem Shrine and glide southeast to the island.",
      "Climbing Boots: Tahno O'ah Shrine — Mount Lanayru. Climb the mountain east of Hateno Village; the shrine is near the summit.",
    ],
    stats: "Defence 1 per piece. Stamina wheel decreases slower while climbing.",
    setBonus: "Full set: Climbing Jump Stamina Up — lets you jump off walls while climbing (wall jump).",
    tip: "The wall-jump ability is the single biggest mobility upgrade in the game. Upgrade to tier 2 and you can scale almost anything in any weather without stopping.",
    videoUrl: yt("climbing gear set all three pieces"),
  },
  {
    id: "barbarian-set",
    name: "Barbarian Armor",
    category: "Armor Sets",
    location: "Three Lomei Labyrinths (treasure chests)",
    steps: [
      "Barbarian Helm: Lomei Labyrinth Island — far northeast of Akkala. Navigate the labyrinth top to find the Tu Ka'loh Shrine and chest.",
      "Barbarian Armor: South Lomei Labyrinth — Gerudo Desert (south of Arbiter's Grounds area). Find the Dila Maag Shrine inside.",
      "Barbarian Leg Wraps: Lomei Labyrinth — northeast Akkala Highlands. Find the Ke'nai Shakah Shrine and chest inside.",
    ],
    stats: "Defence 4 per piece. Charge attack damage up on each piece.",
    setBonus: "Full set: Attack Up — charge attacks deal 50% more damage.",
    tip: "The strongest attack-boosting armor in the game (without amiibo). Pair with attack-up food + Master Sword charge attacks to kill Lynels in seconds.",
    videoUrl: yt("barbarian armor all three labyrinths"),
  },
  {
    id: "ancient-armor-set",
    name: "Ancient Armor",
    category: "Armor Sets",
    location: "Akkala Ancient Tech Lab — buy from Robbie",
    steps: [
      "Reach Akkala Ancient Tech Lab (far northeast Akkala region).",
      "Complete Robbie's quest 'Robbie's Research' — light the furnace using a blue flame from Akkala Tower (carry in a torch).",
      "Ancient Helm: 2,000r + 2 Ancient Shafts + 1 Ancient Core.",
      "Ancient Cuirass: 2,000r + 2 Ancient Springs + 1 Ancient Gear.",
      "Ancient Greaves: 2,000r + 2 Ancient Gears + 1 Ancient Shaft.",
      "Farm ancient parts from Guardians: Stalkers (overworld), Decayed Guardians, and Hinoxes drop them.",
    ],
    stats: "Defence 4 per piece. Guardian resist on each piece.",
    setBonus: "Full set: Ancient Proficiency — +80% damage with Ancient/Guardian weapons.",
    tip: "The most powerful general-purpose armor in the late game. Full set + Ancient weapons = trivialize every Guardian encounter. Best endgame choice.",
    videoUrl: yt("ancient armor set robbie akkala"),
  },
  {
    id: "radiant-set",
    name: "Radiant Set",
    category: "Armor Sets",
    location: "Kakariko Village — Enchanted shop",
    steps: [
      "Return to the Enchanted shop in Kakariko Village.",
      "Buy Radiant Mask (500r), Radiant Shirt (1,000r), Radiant Tights (800r).",
      "Upgrade at a Great Fairy to unlock the glow-in-dark bone aesthetic.",
    ],
    stats: "Defence 3 per piece. Bone weapon proficiency (increases bone weapon attack).",
    setBonus: "Full set: Disguise — Stal enemies ignore you completely.",
    tip: "The Stal enemy disguise lets you walk through Stal hordes unnoticed. Also looks incredible when upgraded — glows in the dark.",
    videoUrl: yt("radiant armor set kakariko"),
  },
  {
    id: "dark-link-set",
    name: "Dark Link Set (Shadow Armor)",
    category: "Armor Sets",
    location: "Kilton's shop — Fang and Bone (night only)",
    steps: [
      "Find Kilton to unlock Fang and Bone: he first appears near Skull Lake in the Akkala region at night.",
      "Talk to him once to unlock his shop — it then appears at night near every major village.",
      "Earn Mon currency by selling monster parts to Kilton (Monster Extract, Moblin parts, Lizalfos tails, etc.).",
      "Dark Hood: 999 Mon. Dark Tunic: 999 Mon. Dark Trousers: 999 Mon.",
    ],
    stats: "Defence 3 per piece. Speed up at night on each piece.",
    setBonus: "Full set: Night Speed Up — move significantly faster at night.",
    tip: "Combine with Stealth Set effect for insane night mobility. Also the slickest-looking set — fully upgraded it looks like pure shadow with red eyes.",
    videoUrl: yt("dark link shadow armor kilton fang bone"),
  },
  {
    id: "thunder-helm",
    name: "Thunder Helm",
    category: "Armor Sets",
    location: "Gerudo Town — Riju's reward",
    steps: [
      "Complete the Vah Naboris main quest.",
      "After freeing Naboris, talk to Riju in Gerudo Town.",
      "She tasks you with completing four side quests from Gerudo townspeople: 'The Search for Barta', 'The Mystery Polluter', 'Medicinal Molduga', 'The Eighth Heroine'.",
      "Complete all four, report back to Riju — she gifts you the Thunder Helm.",
    ],
    stats: "Defence 3. Full lightning immunity as a single piece.",
    setBonus: "N/A — single unique piece.",
    tip: "One of the most useful single-item rewards in the game. Permanent lightning immunity from one helmet slot means you can wear other armor freely in storms.",
    videoUrl: yt("thunder helm gerudo riju side quests"),
  },
  {
    id: "sand-boots-snow-boots",
    name: "Sand Boots & Snow Boots",
    category: "Armor Sets",
    location: "Gerudo region — Bozai side quests",
    steps: [
      "Sand Boots: Find Bozai, the man jogging around Gerudo Town exterior while you're in Vai disguise. Complete 'The Eighth Heroine' — take a photo of the broken heroine statue in the Gerudo Highlands and return to him.",
      "Snow Boots: Immediately after receiving Sand Boots, accept Bozai's second quest 'The Forgotten Sword'. Find the sword in the snow (northeast of the eighth heroine statue) and return — he gives you Snow Boots.",
    ],
    stats: "Sand Boots: Defence 3, no speed penalty on sand. Snow Boots: Defence 3, no speed penalty on snow.",
    setBonus: "N/A — individual pieces.",
    tip: "These prevent you from sinking and slowing in Gerudo Desert sand and Hebra snow — a major quality-of-life upgrade for those regions.",
    videoUrl: yt("sand boots snow boots bozai gerudo"),
  },
  {
    id: "phantom-armor",
    name: "Phantom Armor",
    category: "Armor Sets",
    location: "Treasure chests — three hidden locations",
    steps: [
      "Phantom Helmet: Hyrule Castle — Library chest. Enter from the west docks, go through the library.",
      "Phantom Armor: Hyrule Castle — Guards' Chamber chest. East wing, past the guardroom.",
      "Phantom Greaves: Faron Woods — Floria River chest. Southeast of Lake Floria, check the ruins near the small island.",
    ],
    stats: "Defence 8 per piece — highest single-piece base defence in the game. Attack Up on each piece.",
    setBonus: "None (no set bonus, but the attack boost is massive).",
    tip: "Incredible attack boost and huge base defence. Cannot be upgraded at Great Fairies, but the raw stats are better than most alternatives before late-game upgrades.",
    videoUrl: yt("phantom armor chest locations hyrule"),
  },

  // ────────────────────────────────────────────────────────────
  // WEAPONS
  // ────────────────────────────────────────────────────────────

  {
    id: "master-sword",
    name: "Master Sword",
    category: "Weapons",
    location: "Korok Forest — Lost Woods (north of Woodland Tower)",
    steps: [
      "Navigate the Lost Woods: follow the direction embers blow, pass through the glowing entrance.",
      "Arrive at Korok Forest and find the Master Sword pedestal in the clearing.",
      "Approach and attempt to pull it — you need 13 full heart containers (not temporary bonus hearts).",
      "If you don't have 13 hearts yet: trade Spirit Orbs at Goddess Statues (4 orbs = 1 heart).",
      "Each shrine gives 1 Spirit Orb — you need 40 shrines worth of orbs from scratch (minus Great Plateau 4).",
    ],
    stats: "30 base damage (60 vs Guardians and Calamity enemies). Never permanently breaks — recharges in ~10 minutes.",
    tip: "Keep it equipped for Guardian and dungeon fights. Swap to disposable weapons for regular combat to save the charge. Best weapon for Hyrule Castle.",
    videoUrl: "https://www.youtube.com/watch?v=NdovJHMqXeE",
  },
  {
    id: "savage-lynel-crusher",
    name: "Savage Lynel Crusher",
    category: "Weapons",
    location: "Dropped by Silver Lynels",
    steps: [
      "Defeat 4 Divine Beasts to trigger Silver Lynel spawns across Hyrule.",
      "Silver Lynel locations: Ploymus Mountain (Zora's Domain), Akkala Highlands (near Ancient Lab), Lanayru Road East (east of Zora's Domain), North Akkala Valley.",
      "Defeat a Silver Lynel — they always drop a Savage Lynel weapon (sword, bow, or crusher).",
      "Use Blood Moon respawn to farm them repeatedly for fresh weapons.",
    ],
    stats: "78 base damage. Two-handed. Highest base damage two-handed weapon.",
    tip: "Save it for Ganon. During Lynel farms, use it to kill the next Lynel and then loot a fresh one from the corpse.",
    videoUrl: yt("savage lynel crusher silver lynel farm"),
  },
  {
    id: "royal-guard-claymore",
    name: "Royal Guard's Claymore",
    category: "Weapons",
    location: "Hyrule Castle — Guards' Chambers and various chests",
    steps: [
      "Enter Hyrule Castle (best entry: north entrance, glide from Hyrule Castle Town ruins).",
      "Navigate to the Guards' Chambers in the east wing.",
      "Open chests — Royal Guard weapons appear in multiple rooms throughout the castle.",
      "Also found on Royal Guard Lynels inside the castle.",
    ],
    stats: "72 base damage. Very low durability.",
    tip: "Extremely powerful but fragile — treat it as a single-fight weapon. Use it exclusively on major bosses and don't swing at rocks.",
    videoUrl: yt("royal guard claymore hyrule castle"),
  },
  {
    id: "ancient-battle-axe",
    name: "Ancient Battle Axe++",
    category: "Weapons",
    location: "Akkala Ancient Tech Lab — Robbie's shop",
    steps: [
      "Light the furnace with blue flame to unlock Robbie's shop (see Ancient Armor steps above).",
      "Ancient Battle Axe++: 1,000r + 2 Ancient Shafts + 1 Ancient Core.",
      "Stock up on ancient parts by farming Guardians and Hinoxes.",
    ],
    stats: "60 damage base. +50% damage bonus against all Guardian enemies.",
    tip: "Best weapon for Guardian killing in the mid-game before you have the full Ancient Armor bonus. Pair with Ancient Shield for an impenetrable Guardian setup.",
    videoUrl: yt("ancient battle axe robbie akkala tech lab"),
  },
  {
    id: "royal-claymore",
    name: "Royal Claymore",
    category: "Weapons",
    location: "Found throughout Hyrule — Lizalfos camps, chests, drops",
    steps: [
      "Check Lizalfos and Lynel camps in Eldin and Akkala regions.",
      "Strong enemies at Hyrule Castle environs carry them.",
      "Also found in chests throughout Hyrule Castle.",
    ],
    stats: "52 base damage. Good durability for a two-hander.",
    tip: "Best freely available two-handed weapon before Silver Lynel weapons. Farm Hyrule Castle enemies for Royal weapon drops.",
    videoUrl: yt("royal claymore location botw"),
  },

  // ────────────────────────────────────────────────────────────
  // BOWS
  // ────────────────────────────────────────────────────────────

  {
    id: "savage-lynel-bow",
    name: "Savage Lynel Bow",
    category: "Bows",
    location: "Dropped by Silver Lynels",
    steps: [
      "Farm Silver Lynels (see Savage Lynel Crusher above).",
      "Each Silver Lynel drops one Savage Lynel Bow on death.",
      "Use Blood Moon to respawn and farm repeatedly.",
    ],
    stats: "32 damage x3 arrows simultaneously — effective 96 damage per shot.",
    tip: "Three arrows that hit the same close-range target deal triple damage. Best bow DPS in the game. Aim at weak points.",
    videoUrl: yt("savage lynel bow farming"),
  },
  {
    id: "great-eagle-bow",
    name: "Great Eagle Bow",
    category: "Bows",
    location: "Rito Village — Harth the bowyer",
    steps: [
      "Complete the Vah Medoh Divine Beast quest.",
      "After freeing Vah Medoh, talk to Harth in Rito Village (the bowyer/craftsman).",
      "He gives you the Great Eagle Bow as a reward.",
      "If it breaks: return to Harth with 5 Swallow Feathers, 5 bundles of Wood, and 1 Diamond — he rebuilds it for free.",
    ],
    stats: "28 damage x3 arrows. Very fast draw speed.",
    tip: "Three arrows in a spread pattern makes close-range headshots nearly guaranteed. Fast draw is perfect for Lynel mounted archery.",
    videoUrl: "https://www.youtube.com/watch?v=Tz5SV-8iZoU",
  },
  {
    id: "ancient-bow",
    name: "Ancient Bow",
    category: "Bows",
    location: "Akkala Ancient Tech Lab — Robbie's shop",
    steps: [
      "Unlock Robbie's shop (light furnace with blue flame).",
      "Ancient Bow: 1,000r + 2 Ancient Springs + 1 Ancient Gear.",
      "Stock ancient parts from Guardian farming.",
    ],
    stats: "44 base damage. Fires in a perfectly straight trajectory with zero drop.",
    tip: "No arrow drop makes long-range shots trivially easy. Essential for shooting far-off targets like Guardian eyes and Hinox eyes.",
    videoUrl: yt("ancient bow akkala tech lab"),
  },
  {
    id: "twilight-bow",
    name: "Twilight Bow",
    category: "Bows",
    location: "Zelda amiibo (Archer)",
    steps: [
      "Tap the Zelda (Archer) amiibo from the Super Smash Bros. or BotW line.",
      "Has a small chance to drop from the amiibo chest each day.",
      "Tap once per day until it appears.",
    ],
    stats: "30 damage. Fires Light Arrows that deal massive damage to bosses. Never runs out of Light Arrows.",
    tip: "The ultimate boss-killing bow. Light Arrows deal enormous bonus damage to Ganon. Only obtainable via amiibo.",
    videoUrl: yt("twilight bow zelda amiibo"),
    requiresAmiibo: true,
  },

  // ────────────────────────────────────────────────────────────
  // SHIELDS
  // ────────────────────────────────────────────────────────────

  {
    id: "hylian-shield",
    name: "Hylian Shield",
    category: "Shields",
    location: "Hyrule Castle — Lockup (underground prison)",
    steps: [
      "Enter Hyrule Castle from the north (swim up the moat or glide from the cliffs).",
      "Navigate to the underground Lockup — descend to the basement level, follow the prison corridor.",
      "Defeat the Stalnox skeleton monster that guards the cell with the chest.",
      "Open the chest to claim the Hylian Shield.",
      "If it breaks: buy a replacement from Granté at Tarrey Town (3,000 rupees) after completing 'From the Ground Up' quest.",
    ],
    stats: "90 durability — highest shield guard in the game. 90 shield guard stat.",
    tip: "Equip this and forget about shields. It takes enormous punishment and can even handle a few Guardian beams. Never use it for shield surfing — that destroys durability fast.",
    videoUrl: "https://www.youtube.com/watch?v=6n97M4GRuGo",
  },
  {
    id: "ancient-shield",
    name: "Ancient Shield",
    category: "Shields",
    location: "Akkala Ancient Tech Lab — Robbie's shop",
    steps: [
      "Unlock Robbie's shop (light furnace).",
      "Ancient Shield: 1,000r + 2 Ancient Springs + 1 Ancient Screw.",
      "Equip it as your active shield when fighting Guardians.",
    ],
    stats: "70 shield guard. Automatically reflects Guardian laser beams — no perfect parry timing required.",
    tip: "Walk straight at a Guardian with this equipped. It auto-parries every laser without any button input. Makes Guardian farming completely safe.",
    videoUrl: yt("ancient shield guardian reflect robbie"),
  },
  {
    id: "royal-shield",
    name: "Royal Shield",
    category: "Shields",
    location: "Hyrule Castle — chests and enemy drops",
    steps: [
      "Find in chests throughout Hyrule Castle.",
      "Dropped by Royal Guard enemies inside the castle.",
      "Occasionally found on enemies near Hyrule Castle Town.",
    ],
    stats: "55 shield guard. Good durability.",
    tip: "Best freely farmable shield before the Hylian Shield. Keep a few in stock — Hyrule Castle always has them.",
    videoUrl: yt("royal shield location hyrule castle"),
  },

  // ────────────────────────────────────────────────────────────
  // CHAMPION ABILITIES
  // ────────────────────────────────────────────────────────────

  {
    id: "revalis-gale",
    name: "Revali's Gale",
    category: "Champion Abilities",
    location: "Unlocked by completing Vah Medoh Divine Beast (Rito Village)",
    steps: [
      "Travel to Rito Village (northwest — Tabantha Frontier region).",
      "Talk to Teba at the Flight Range to start Vah Medoh.",
      "Shoot 5 Vah Medoh cannons while riding air currents on your paraglider.",
      "Board Vah Medoh, solve the internal puzzles by rotating the Beast's body.",
      "Activate all terminals, then defeat Windblight Ganon.",
      "Revali's spirit grants you the Gale on completion.",
    ],
    stats: "Press and hold L to create a massive updraft, then glide. Recharges in 6 minutes. Can be used 3 times before needing a short rest between bursts with upgrades.",
    tip: "Do this FIRST out of all Divine Beasts. It replaces climbing for the rest of the game — just launch and glide. Use it every single time the cooldown is ready.",
    videoUrl: "https://www.youtube.com/watch?v=FjF5zMXCKo4",
  },
  {
    id: "miphas-grace",
    name: "Mipha's Grace",
    category: "Champion Abilities",
    location: "Unlocked by completing Vah Ruta Divine Beast (Zora's Domain)",
    steps: [
      "Travel to Zora's Domain (Lanayru region, northeast).",
      "Collect 20 Shock Arrows from the Lynel on Ploymus Mountain (bring Zora Armor for waterfall climbing).",
      "Board Vah Ruta, use Cryonis to raise/lower water wheels and solve puzzles.",
      "Defeat Waterblight Ganon — use Stasis to freeze it during the second phase.",
      "Mipha's spirit grants you the Grace on completion.",
    ],
    stats: "When Link dies, automatically revives him with full health + up to 5 bonus temporary hearts. Recharges in 24 minutes.",
    tip: "A death safety net. Let it trigger once per difficult fight, then play cautiously. The 24-minute recharge means you only get it a few times per game session — don't waste it on avoidable deaths.",
    videoUrl: "https://www.youtube.com/watch?v=9M5iDrFUYRA",
  },
  {
    id: "daruks-protection",
    name: "Daruk's Protection",
    category: "Champion Abilities",
    location: "Unlocked by completing Vah Rudania Divine Beast (Death Mountain)",
    steps: [
      "Travel to Goron City on Death Mountain (wear Flamebreaker Armor).",
      "Complete the Yunobo side quests to reach Vah Rudania.",
      "Board Vah Rudania — navigate its tilting floors and solve the torch-lighting puzzles.",
      "Defeat Fireblight Ganon — use bomb arrows on its hand when the shield is down.",
      "Daruk's spirit grants you Protection on completion.",
    ],
    stats: "Automatically negates Guardian laser beams. Triggers 3 times before needing recharge. Recharges in 8 minutes.",
    tip: "Three free Guardian laser deflections per charge. Walk toward Guardian Stalkers with this active — no parry needed. Makes Guardian farming trivially safe alongside the Ancient Shield.",
    videoUrl: "https://www.youtube.com/watch?v=H1HpMsHxEpk",
  },
  {
    id: "urbosas-fury",
    name: "Urbosa's Fury",
    category: "Champion Abilities",
    location: "Unlocked by completing Vah Naboris Divine Beast (Gerudo Desert)",
    steps: [
      "Travel to Gerudo Town (southwest — Gerudo Desert).",
      "Disguise as Vai (buy Gerudo Clothes from Kara Kara Bazaar).",
      "Complete Riju's quest — retrieve the Thunder Helm from Yiga Clan Hideout.",
      "Board Vah Naboris — rotate the three rings to align the circuit patterns.",
      "Defeat Thunderblight Ganon — dodge its lightning-fast sword charges, then stun it with a metal object during the magnetic phase.",
      "Urbosa's spirit grants you the Fury on completion.",
    ],
    stats: "Hold attack button to charge a lightning strike that releases with your melee hit. Massive AOE damage. Recharges in 12 minutes.",
    tip: "Charge it and unleash on a group of enemies. Deals double damage to wet enemies — dump a bucket of water first, or fight in the rain. Best for clearing camps.",
    videoUrl: "https://www.youtube.com/watch?v=DX2G8B6wnhs",
  },
];
