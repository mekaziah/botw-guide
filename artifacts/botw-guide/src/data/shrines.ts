export interface Shrine {
  id: string;
  name: string;
  region: string;
  type: "Rune" | "Combat" | "Riddle" | "Movement" | "Blessing";
  puzzle: string;
  tip: string;
}

export const shrineRegions = [
  "Great Plateau",
  "Akkala",
  "Eldin",
  "Lanayru",
  "Necluda",
  "Faron",
  "Dueling Peaks",
  "Lake",
  "Ridgeland",
  "Tabantha",
  "Hebra",
  "Gerudo",
  "Wasteland",
  "Great Hyrule Forest",
  "Central Hyrule",
];

export const shrines: Shrine[] = [
  // Great Plateau (4)
  { id: "oman-au", name: "Oman Au Shrine", region: "Great Plateau", type: "Rune", puzzle: "Magnesis Trial", tip: "Use Magnesis to move metal blocks. Lift the metal door on the right wall." },
  { id: "ja-baij", name: "Ja Baij Shrine", region: "Great Plateau", type: "Rune", puzzle: "Bomb Trial", tip: "Use round bombs in the rolling channels, cube bombs to break cracked walls." },
  { id: "keh-namut", name: "Keh Namut Shrine", region: "Great Plateau", type: "Rune", puzzle: "Cryonis Trial", tip: "Create ice pillars to raise water gates and climb waterfalls." },
  { id: "owa-daim", name: "Owa Daim Shrine", region: "Great Plateau", type: "Rune", puzzle: "Stasis Trial", tip: "Freeze the boulder with Stasis and hit it multiple times to send it flying away." },

  // Akkala (9)
  { id: "dah-hesho", name: "Dah Hesho Shrine", region: "Akkala", type: "Combat", puzzle: "A Minor Test of Strength", tip: "Short guardian fight. Dodge to the side and strike the glowing eye." },
  { id: "ke-noh", name: "Ke'noh Shrine", region: "Akkala", type: "Rune", puzzle: "The Laws of Regression", tip: "Use Magnesis to return objects to their positions in reverse order." },
  { id: "ritaag-zumo", name: "Ritaag Zumo Shrine", region: "Akkala", type: "Riddle", puzzle: "Ritaag Zumo's Blessing", tip: "Blessing shrine — no puzzle. Reward for completing the Akkala Ancient Tech Lab quest." },
  { id: "katah-chuki", name: "Katah Chuki Shrine", region: "Akkala", type: "Movement", puzzle: "A Minor Test of Strength", tip: "Guardian fight. Use Ancient Arrows or flurry rush to defeat quickly." },
  { id: "zuna-kai", name: "Zuna Kai Shrine", region: "Akkala", type: "Blessing", puzzle: "Zuna Kai's Blessing", tip: "Blessing shrine. Reward for 'The Skull's Eye' riddle — stand in the skull island's eye socket at night." },
  { id: "luen-minido", name: "Luen Minido Shrine", region: "Akkala", type: "Rune", puzzle: "Aim for Stillness", tip: "Stop spinning platforms with Stasis. Time your jumps carefully." },
  { id: "sah-dahaj", name: "Sah Dahaj Shrine", region: "Akkala", type: "Movement", puzzle: "Power of Fire", tip: "Use torches or fire arrows to light the braziers in the correct sequence." },
  { id: "tutsuwa-nima", name: "Tutsuwa Nima Shrine", region: "Akkala", type: "Movement", puzzle: "A Major Test of Strength", tip: "Hardest guardian fight. Stock up on arrows and bring 3+ meals before entering." },
  { id: "dah-kaso", name: "Dah Kaso Shrine", region: "Akkala", type: "Movement", puzzle: "A Minor Test of Strength", tip: "Guardian fight inside a confined corridor. Use bombs to knock it back." },

  // Eldin (8)
  { id: "shae-mobo", name: "Shae Mobo Shrine", region: "Eldin", type: "Rune", puzzle: "The Blessed Rock", tip: "Use Magnesis to carry rocks along the path. Don't drop them in lava." },
  { id: "gorae-torr", name: "Gorae Torr Shrine", region: "Eldin", type: "Blessing", puzzle: "Gorae Torr's Blessing", tip: "Reward for bringing a Fireproof Lizard to Kima at South Akkala Stable." },
  { id: "sah-dahaj-2", name: "Daqa Koh Shrine", region: "Eldin", type: "Movement", puzzle: "Stalled Flight", tip: "Use updrafts from fire to glide with Paraglider. Aim precisely for the chest platforms." },
  { id: "qua-raym", name: "Qua Raym Shrine", region: "Eldin", type: "Rune", puzzle: "A Controlled Burn", tip: "Set the wooden balls on fire — they expand and plug holes to route water." },
  { id: "kayra-mah", name: "Kayra Mah Shrine", region: "Eldin", type: "Rune", puzzle: "Greedy Hill", tip: "Use Stasis on the rolling ball and hit it uphill. Time carefully." },
  { id: "Shora-hah", name: "Shora Hah Shrine", region: "Eldin", type: "Rune", puzzle: "Blue Flame", tip: "Carry a blue flame torch to all the furnaces. Use Cryonis to create stepping stones." },
  { id: "mo-ra", name: "Mo Ra Shrine", region: "Eldin", type: "Combat", puzzle: "A Major Test of Strength", tip: "Wear Flamebreaker Armor. Use Ancient Arrows for fast victory." },
  { id: "Gorko-Tunnel", name: "Gorko Tunnel Shrine", region: "Eldin", type: "Blessing", puzzle: "A Landscape of a Stable", tip: "Blessing shrine — reward for completing the Eldin horse stable side quest." },

  // Lanayru (11)
  { id: "dagah-keek", name: "Dagah Keek Shrine", region: "Lanayru", type: "Blessing", puzzle: "Dagah Keek's Blessing", tip: "Reward for the 'Lynel Safari' quest at Zora's Domain." },
  { id: "ne-cha", name: "Ne'cha Shrine", region: "Lanayru", type: "Riddle", puzzle: "The Mysterious Eighth", tip: "Riddle: place the correct offering to unlock hidden rooms." },
  { id: "shai-yota", name: "Shai Yota Shrine", region: "Lanayru", type: "Rune", puzzle: "Master the Orb", tip: "Use Cryonis to raise ice pillars and guide the stone orb into the goal." },
  { id: "stritter", name: "Stritter Shrine", region: "Lanayru", type: "Movement", puzzle: "Still Water Drift", tip: "Use Cryonis to carefully navigate a raft through narrow gates." },
  { id: "maka-rah", name: "Maka Rah Shrine", region: "Lanayru", type: "Movement", puzzle: "Steady thy Heart", tip: "Navigate spinning platforms with metal blocks. Use Magnesis to steady each section." },
  { id: "rucco-maag", name: "Rucco Maag Shrine", region: "Lanayru", type: "Rune", puzzle: "Five Flames", tip: "Hit the rotating flame rings with arrows timed from the updraft position." },
  { id: "kaya-wan", name: "Kaya Wan Shrine", region: "Lanayru", type: "Rune", puzzle: "Shields from Water", tip: "Use Cryonis to create barriers protecting you from laser beams." },
  { id: "shai-utoh", name: "Shai Utoh Shrine", region: "Lanayru", type: "Rune", puzzle: "Halt the Tilt", tip: "Tilt the platform to roll the ball into the goal. Use Stasis to pause mid-roll." },
  { id: "mogg-latan", name: "Mogg Latan Shrine", region: "Lanayru", type: "Riddle", puzzle: "Syn and Jot's Blessing", tip: "Riddle shrine: synchronize the two orbs into their slots simultaneously." },
  { id: "daka-tuss", name: "Daka Tuss Shrine", region: "Lanayru", type: "Rune", puzzle: "Sunken Scoop", tip: "Use Magnesis to scoop the orb off the bottom and drop it into the pedestal." },
  { id: "tenoke", name: "Tenoke Shrine", region: "Lanayru", type: "Rune", puzzle: "Rot and Ruin", tip: "Hit the crystal to flip the room. Navigate when it's inverted." },

  // Necluda (9)
  { id: "soh-kofi", name: "Soh Kofi Shrine", region: "Necluda", type: "Blessing", puzzle: "Soh Kofi's Blessing", tip: "Reward for climbing to the top of Mount Lanayru during a Blood Moon." },
  { id: "toto-sah", name: "Toto Sah Shrine", region: "Necluda", type: "Rune", puzzle: "Toto Sah Apparatus", tip: "Tilt the platform so the ball rolls into the correct socket." },
  { id: "tahno-oh", name: "Tahno O'ah Shrine", region: "Necluda", type: "Blessing", puzzle: "Tahno O'ah's Blessing", tip: "Hidden behind a secret wall near Mount Lanayru's peak. Look for sparkling leaves." },
  { id: "jiukoum", name: "Jiukoum Shrine", region: "Necluda", type: "Rune", puzzle: "Built for Rails", tip: "Use Magnesis to push the cart along rails. Ride it to the next platform." },
  { id: "Chaas-Qeta", name: "Chaas Qeta Shrine", region: "Necluda", type: "Combat", puzzle: "A Major Test of Strength", tip: "Island shrine reachable only by Paragliding from the coast. Hard guardian inside." },
  { id: "shoqa-tatone", name: "Shoqa Tatone Shrine", region: "Necluda", type: "Rune", puzzle: "A Major Test of Strength", tip: "Use ancient blades for fast kills. Bring high-damage weapons." },
  { id: "myahm-agana", name: "Myahm Agana Shrine", region: "Necluda", type: "Rune", puzzle: "Myahm Agana Apparatus", tip: "Tilt the maze platform. Flip it completely upside down — the exit is actually on the bottom!" },
  { id: "sheem-dagoze", name: "Sheem Dagoze Shrine", region: "Necluda", type: "Movement", puzzle: "A Minor Test of Strength", tip: "Guardian fight in tight quarters. Bait it into corners." },
  { id: "rok-uwog", name: "Rok Uwog Shrine", region: "Necluda", type: "Rune", puzzle: "Rok Uwog's Blessing", tip: "Reward for completing 'The Three Giant Brothers' quest." },

  // Faron (6)
  { id: "qukah-nata", name: "Qukah Nata Shrine", region: "Faron", type: "Blessing", puzzle: "Qukah Nata's Blessing", tip: "Reward for 'A Song of Storms' quest. Play the thunder drums on the mountain." },
  { id: "yah-rin", name: "Yah Rin Shrine", region: "Faron", type: "Rune", puzzle: "Passing the Flame", tip: "Light a series of torches with fire arrows or a lit branch — don't let the flame go out." },
  { id: "shae-loya", name: "Shae Loya Shrine", region: "Faron", type: "Movement", puzzle: "Aim for the Moment", tip: "Use a bow in midair (slow-mo) to shoot the crystal while gliding past." },
  { id: "Pumaag-Nitae", name: "Pumaag Nitae Shrine", region: "Faron", type: "Rune", puzzle: "A Minor Test of Strength", tip: "Guardian fight near Lurelin Village. Prepare fire arrows." },
  { id: "korgu-chideh", name: "Korgu Chideh Shrine", region: "Faron", type: "Blessing", puzzle: "Korgu Chideh's Blessing", tip: "Island shrine — reward for completing 'Stranded on Eventide' challenge." },
  { id: "loman-au", name: "Loman Au Shrine", region: "Faron", type: "Rune", puzzle: "Pushing Power", tip: "Push heavy stone blocks using Stasis + hammers. Clear the path to the chest." },

  // Dueling Peaks (8)
  { id: "ree-dahee", name: "Ree Dahee Shrine", region: "Dueling Peaks", type: "Rune", puzzle: "Timing is Critical", tip: "Use Stasis to freeze moving platforms at just the right moment." },
  { id: "bosh-kala", name: "Bosh Kala Shrine", region: "Dueling Peaks", type: "Rune", puzzle: "The Wind Guides You", tip: "Ride the wind currents with your Paraglider. Drop off ledges into the updrafts." },
  { id: "ha-dahamar", name: "Ha Dahamar Shrine", region: "Dueling Peaks", type: "Rune", puzzle: "The Water Guides You", tip: "Swim up the waterfalls using the Zora Armor or Cryonis." },
  { id: "kaam-yatak", name: "Kaam Ya'tak Shrine", region: "Dueling Peaks", type: "Rune", puzzle: "Trial of Power", tip: "Break the giant boulder with multiple bomb blasts or Stasis + hammers." },
  { id: "shee-vaneer", name: "Shee Vaneer Shrine", region: "Dueling Peaks", type: "Riddle", puzzle: "Twin Memories", tip: "Pair puzzle with Shee Venath — solve one first, then duplicate the solution in the other." },
  { id: "shee-venath", name: "Shee Venath Shrine", region: "Dueling Peaks", type: "Riddle", puzzle: "Twin Memories", tip: "Pair puzzle with Shee Vaneer — remember the orb layout from one shrine to solve the other." },
  { id: "tah-muhl", name: "Tah Muhl Shrine", region: "Dueling Peaks", type: "Combat", puzzle: "A Minor Test of Strength", tip: "Guardian fight. Perfect dodge into a flurry rush finisher." },
  { id: "daka-tuss-2", name: "Taloh Naeg Shrine", region: "Dueling Peaks", type: "Rune", puzzle: "Teaching and Training", tip: "Learn basic weapon techniques — perfect block and perfect dodge." },

  // Lake (7)
  { id: "Shae-Katha", name: "Shae Katha Shrine", region: "Lake", type: "Blessing", puzzle: "Shae Katha's Blessing", tip: "Reward for the 'Test of Will' spring quest. Offer a Farosh's Scale." },
  { id: "ishto-soh", name: "Ishto Soh Shrine", region: "Lake", type: "Movement", puzzle: "Bravery's Grasp", tip: "Parkour challenge — climb and jump across hanging platforms without falling." },
  { id: "shoqa-tatone-2", name: "Etsu Korima Shrine", region: "Lake", type: "Rune", puzzle: "Cliffside Etchings", tip: "Riddle: match the pattern on the cliff using bomb placements on the correct boulders." },
  { id: "noya-neha", name: "Noya Neha Shrine", region: "Lake", type: "Blessing", puzzle: "Noya Neha's Blessing", tip: "Reward for 'Test of Wood' quest — cross Eventide Island with only wooden weapons." },
  { id: "hylia-shrine", name: "Lake Tower Shrine", region: "Lake", type: "Rune", puzzle: "The Magnitude Rock", tip: "Move a large boulder with Stasis stored kinetic energy to the far platform." },
  { id: "dila-maag", name: "Dila Maag Shrine", region: "Lake", type: "Combat", puzzle: "Dila Maag's Blessing", tip: "Combat blessing — defeat the guardian scout to claim the Spirit Orb." },
  { id: "kee-dafunia", name: "Kee Dafunia Shrine", region: "Lake", type: "Movement", puzzle: "The Melting Point", tip: "Melt ice barriers with fire arrows, navigate through in the correct order." },

  // Ridgeland (9)
  { id: "monya-toma", name: "Monya Toma Shrine", region: "Ridgeland", type: "Rune", puzzle: "Drawing Parabolas", tip: "Practice aiming bombs at angles. Use square bombs for this puzzle." },
  { id: "toh-yahsa", name: "Toh Yahsa Shrine", region: "Ridgeland", type: "Blessing", puzzle: "Toh Yahsa's Blessing", tip: "Hidden under Thundra Plateau — place orbs in correct order during thunderstorm." },
  { id: "zalta-wa", name: "Zalta Wa Shrine", region: "Ridgeland", type: "Rune", puzzle: "Two Orbs to Guide You", tip: "Use Magnesis to guide two orbs simultaneously into their pedestals." },
  { id: "shoda-sah", name: "Shoda Sah Shrine", region: "Ridgeland", type: "Movement", puzzle: "Impeccable Timing", tip: "Time jumps through rotating spiked frames. Wait for the gap and dash through." },
  { id: "maag-halan", name: "Maag Halan Shrine", region: "Ridgeland", type: "Riddle", puzzle: "Secret Stairway", tip: "Find the hidden passage by shooting an arrow through the torch flames." },
  { id: "toto-sah-2", name: "Kaag Eruga Shrine", region: "Ridgeland", type: "Combat", puzzle: "A Minor Test of Strength", tip: "Guardian fight near Hyrule Ridge. Good loot inside including guardian parts." },
  { id: "mijah-rokee", name: "Mijah Rokee Shrine", region: "Ridgeland", type: "Riddle", puzzle: "A Modest Test of Strength", tip: "Riddle: enter the shrine with no weapons, bow, or shield equipped." },
  { id: "rona-kachta", name: "Rona Kachta Shrine", region: "Ridgeland", type: "Rune", puzzle: "Rona Kachta's Blessing", tip: "Hidden shrine discovered via 'A Brother's Roast' quest." },
  { id: "keh-namut-2", name: "Maag No'rah Shrine", region: "Ridgeland", type: "Movement", puzzle: "Guardian Slideshow", tip: "Navigate a gauntlet of guardian beams. Use metal shields to deflect." },

  // Tabantha (9)
  { id: "voo-lota", name: "Voo Lota Shrine", region: "Tabantha", type: "Rune", puzzle: "Our Most Precious Treasure", tip: "Blessing shrine — reward for reuniting the Rito lovers by delivering the letter." },
  { id: "bareeda-naag", name: "Bareeda Naag Shrine", region: "Tabantha", type: "Blessing", puzzle: "Bareeda Naag's Blessing", tip: "Reward for 'Recital at Warbler's Nest' quest. Play the correct melody." },
  { id: "sha-gehma", name: "Sha Gehma Shrine", region: "Tabantha", type: "Rune", puzzle: "Collective Strength", tip: "Use Magnesis to stack heavy blocks to create a staircase path." },
  { id: "tena-ko-sah", name: "Tena Ko'sah Shrine", region: "Tabantha", type: "Combat", puzzle: "A Major Test of Strength", tip: "Hard guardian fight in a wide arena. Stock up on weapons beforehand." },
  { id: "akh-va-quot", name: "Akh Va'quot Shrine", region: "Tabantha", type: "Rune", puzzle: "Windmills", tip: "Activate windmills by creating updrafts with fire arrows on the torch bundles." },
  { id: "hia-miu", name: "Hia Miu Shrine", region: "Tabantha", type: "Riddle", puzzle: "A Cold Snuggle", tip: "Riddle shrine: warm a freezing NPC with a specific number of cooked meals." },
  { id: "rok-uwog-2", name: "Rok Uwog Shrine", region: "Tabantha", type: "Movement", puzzle: "Power of Electricity", tip: "Use shock arrows on metal balls to send current through water paths." },
  { id: "dunba-taag", name: "Dunba Taag Shrine", region: "Tabantha", type: "Movement", puzzle: "Build and Release", tip: "Use your Paraglider in wind currents. Precisely navigate through moving targets." },
  { id: "kah-okeo", name: "Kah Okeo Shrine", region: "Tabantha", type: "Rune", puzzle: "Wind Guide Me", tip: "Guide a ball using wind from fans. Use Stasis to freeze the ball mid-air." },

  // Hebra (12)
  { id: "goma-asaagh", name: "Goma Asaagh Shrine", region: "Hebra", type: "Rune", puzzle: "A Minor Test of Strength", tip: "Guardian fight in the cold mountains. Wear at least 2 levels of cold resistance." },
  { id: "hawa-koth", name: "Hawa Koth Shrine", region: "Hebra", type: "Rune", puzzle: "The Current Solution", tip: "Create electric circuits using metal blocks with Magnesis." },
  { id: "sha-warvo", name: "Sha Warvo Shrine", region: "Hebra", type: "Movement", puzzle: "Path of Hidden Winds", tip: "Follow hidden wind drafts — use your Paraglider and look for swirling leaves." },
  { id: "shada-naw", name: "Shada Naw Shrine", region: "Hebra", type: "Rune", puzzle: "Red Pillars", tip: "Use Cryonis to create ice pillars that match red markers on the ceiling." },
  { id: "rok-uwog-heb", name: "Rok Uwog Shrine", region: "Hebra", type: "Movement", puzzle: "Rok Uwog's Blessing", tip: "Reward for 'The Ancient Rito Song' quest. Play the right notes on the windmill." },
  { id: "lanno-kooh", name: "Lanno Kooh Shrine", region: "Hebra", type: "Rune", puzzle: "Lanno Kooh's Blessing", tip: "Reward for 'Recital at Warbler's Nest' side quest completion." },
  { id: "mozo-shenno", name: "Mozo Shenno Shrine", region: "Hebra", type: "Rune", puzzle: "A Major Test of Strength", tip: "Hardest combat shrine in Hebra. Bring Ancient weapons and hearty meals." },
  { id: "gee-hakim", name: "Gee Ha'kal Shrine", region: "Hebra", type: "Rune", puzzle: "A Minor Test of Strength", tip: "Guardian fight. Reflect its beam back with a perfect shield parry." },
  { id: "maka-rah-heb", name: "Maka Rah Shrine", region: "Hebra", type: "Rune", puzzle: "Steady thy Heart", tip: "Magnesis puzzle with swinging metal platforms over a bottomless pit." },
  { id: "noe-rajee", name: "Noe Rajee Shrine", region: "Hebra", type: "Movement", puzzle: "Face the Frost Pebblits", tip: "Defeat three frost pebblits using fire weapons or an unlit metal blade." },
  { id: "suma-sahma", name: "Suma Sahma Shrine", region: "Hebra", type: "Riddle", puzzle: "Nature's Calling", tip: "Riddle: strip all armor and weapons, then stand in the center at the correct time." },
  { id: "to-quomo", name: "To Quomo Shrine", region: "Hebra", type: "Rune", puzzle: "Snowball Bowling", tip: "Roll snowballs at the pins using the slope. Aim precisely for strikes." },

  // Gerudo (8)
  { id: "daqo-chisay", name: "Daqo Chisay Shrine", region: "Gerudo", type: "Rune", puzzle: "The Two Orbs", tip: "Move two orbs simultaneously using Magnesis. Place both in sockets at the same time." },
  { id: "kema-kosassa", name: "Kema Kosassa Shrine", region: "Gerudo", type: "Rune", puzzle: "A Major Test of Strength", tip: "Hard guardian in the Gerudo desert heat. Bring cold water meals to counter." },
  { id: "hawa-koth-ger", name: "Hawa Koth Shrine", region: "Gerudo", type: "Rune", puzzle: "The Current Solution", tip: "Create complete electric circuits using metal blocks and Magnesis." },
  { id: "kema-zoos", name: "Kema Zoos Shrine", region: "Gerudo", type: "Movement", puzzle: "The Unclimbable Mountain", tip: "Use Stasis to freeze the giant ball and run underneath it." },
  { id: "jee-noh", name: "Jee Noh Shrine", region: "Gerudo", type: "Rune", puzzle: "On the Move", tip: "Grab moving platforms with Magnesis while riding on them." },
  { id: "mis-soh", name: "Mis'soh Shrine", region: "Gerudo", type: "Rune", puzzle: "Burial", tip: "Dig through sand dunes using bombs to reveal hidden paths." },
  { id: "rohta-chigah", name: "Rohta Chigah Shrine", region: "Gerudo", type: "Riddle", puzzle: "Rohta Chigah's Blessing", tip: "Reward for helping all four travelers reach Gerudo Town safely." },
  { id: "raqa-zunzo", name: "Raqa Zunzo Shrine", region: "Gerudo", type: "Blessing", puzzle: "Raqa Zunzo's Blessing", tip: "Reward for completing 'The Undefeated Champ' in Gerudo Town." },

  // Wasteland (5)
  { id: "tho-kayu", name: "Tho Kayu Shrine", region: "Wasteland", type: "Rune", puzzle: "Tho Kayu's Blessing", tip: "Reward for 'The Seven Heroines' quest — place orbs in their hand gestures." },
  { id: "korsh-o-hu", name: "Korsh O'hu Shrine", region: "Wasteland", type: "Blessing", puzzle: "Korsh O'hu's Blessing", tip: "Reward for bringing all seven Heroines' orbs. Final step of the quest chain." },
  { id: "kema-zumosu", name: "Kema Zumosu Shrine", region: "Wasteland", type: "Rune", puzzle: "Energy Surge", tip: "Transfer electricity through water channels. Use metal equipment carefully." },
  { id: "dako-tah", name: "Dako Tah Shrine", region: "Wasteland", type: "Rune", puzzle: "Electric Conduction", tip: "Use Magnesis to move metal balls through electric fields without getting shocked." },
  { id: "sasa-kai", name: "Sasa Kai Shrine", region: "Wasteland", type: "Combat", puzzle: "A Major Test of Strength", tip: "Hardest guardian scout fight. Use Ancient Arrows or stasis for stun." },

  // Great Hyrule Forest (2)
  { id: "keo-ruug", name: "Keo Ruug Shrine", region: "Great Hyrule Forest", type: "Riddle", puzzle: "Fateful Stars", tip: "Count the stars on the ceiling and place the correct number of orbs in each slot." },
  { id: "maag-no-rah", name: "Maag No'rah Shrine", region: "Great Hyrule Forest", type: "Combat", puzzle: "A Modest Test of Strength", tip: "Medium guardian fight in Korok Forest. Quick to complete for the Spirit Orb." },

  // Central Hyrule (7)
  { id: "rona-kachta-2", name: "Katosa Aug Shrine", region: "Central Hyrule", type: "Rune", puzzle: "Katosa Aug Apparatus", tip: "Spin the movable arm with bombs or Magnesis to knock the ball into the goal." },
  { id: "namika-ozz", name: "Namika Ozz Shrine", region: "Central Hyrule", type: "Rune", puzzle: "Namika Ozz's Blessing", tip: "Reward for completing 'Into Vah Medoh' quest." },
  { id: "noya-neha-2", name: "Noya Neha Shrine", region: "Central Hyrule", type: "Blessing", puzzle: "Noya Neha's Blessing", tip: "Hidden under the Central Hyrule Wetlands. Dive into the water to find the entrance." },
  { id: "wahgo-katta", name: "Wahgo Katta Shrine", region: "Central Hyrule", type: "Rune", puzzle: "Metal Connections", tip: "Build a bridge using Magnesis to connect metal beams between platforms." },
  { id: "sheem-dagoze-2", name: "Sheem Dagoze Shrine", region: "Central Hyrule", type: "Combat", puzzle: "A Minor Test of Strength", tip: "Quick guardian fight. Great to farm guardian parts early game." },
  { id: "dako-tah-2", name: "Saas Ko'sah Shrine", region: "Central Hyrule", type: "Combat", puzzle: "A Major Test of Strength", tip: "Three guardians in sequence. Use guardian killers: Thunderwand, ancient equipment." },
  { id: "gee-hakim-2", name: "Gee Ha'kal Shrine", region: "Central Hyrule", type: "Rune", puzzle: "A Minor Test of Strength", tip: "South of Hyrule Castle. Guardian fight with strong laser attacks." },
];
