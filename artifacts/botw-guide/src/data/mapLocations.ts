export type MarkerCategory = "shrine" | "tower" | "divine-beast" | "stable" | "hidden-shrine" | "chest" | "korok";

export interface MapMarker {
  id: string;
  name: string;
  category: MarkerCategory;
  // Pixel coordinates on the 8192x8192 map (from top-left)
  x: number;
  y: number;
  region?: string;
  puzzle?: string;
  note?: string;
}

// Shrines with approximate map coordinates
export const shrineMarkers: MapMarker[] = [
  // Great Plateau
  { id: "oman-au", name: "Oman Au", category: "shrine", x: 3780, y: 4980, region: "Great Plateau", puzzle: "Magnesis Trial" },
  { id: "ja-baij", name: "Ja Baij", category: "shrine", x: 4120, y: 5050, region: "Great Plateau", puzzle: "Bomb Trial" },
  { id: "keh-namut", name: "Keh Namut", category: "shrine", x: 3600, y: 4820, region: "Great Plateau", puzzle: "Cryonis Trial" },
  { id: "owa-daim", name: "Owa Daim", category: "shrine", x: 3700, y: 5180, region: "Great Plateau", puzzle: "Stasis Trial" },

  // Akkala
  { id: "dah-hesho", name: "Dah Hesho", category: "shrine", x: 6380, y: 1200, region: "Akkala", puzzle: "Minor Test of Strength" },
  { id: "ke-noh", name: "Ke'noh", category: "shrine", x: 6620, y: 1100, region: "Akkala", puzzle: "Laws of Regression" },
  { id: "ritaag-zumo", name: "Ritaag Zumo", category: "shrine", x: 6850, y: 1350, region: "Akkala", puzzle: "Blessing" },
  { id: "katah-chuki", name: "Katah Chuki", category: "shrine", x: 6500, y: 1500, region: "Akkala", puzzle: "Minor Test of Strength" },
  { id: "zuna-kai", name: "Zuna Kai", category: "shrine", x: 7020, y: 1050, region: "Akkala", puzzle: "Zuna Kai Blessing" },
  { id: "luen-minido", name: "Luen Minido", category: "shrine", x: 6780, y: 1600, region: "Akkala", puzzle: "Aim for Stillness" },
  { id: "sah-dahaj", name: "Sah Dahaj", category: "shrine", x: 6200, y: 1300, region: "Akkala", puzzle: "Power of Fire" },
  { id: "tutsuwa-nima", name: "Tutsuwa Nima", category: "shrine", x: 6950, y: 1200, region: "Akkala", puzzle: "Major Test of Strength" },
  { id: "dah-kaso", name: "Dah Kaso", category: "shrine", x: 6300, y: 1450, region: "Akkala", puzzle: "Minor Test of Strength" },

  // Eldin
  { id: "shae-mobo", name: "Shae Mobo", category: "shrine", x: 5150, y: 2050, region: "Eldin", puzzle: "Blessed Rock" },
  { id: "gorae-torr", name: "Gorae Torr", category: "shrine", x: 5400, y: 1700, region: "Eldin", puzzle: "Blessing" },
  { id: "daqa-koh", name: "Daqa Koh", category: "shrine", x: 5600, y: 1900, region: "Eldin", puzzle: "Stalled Flight" },
  { id: "qua-raym", name: "Qua Raym", category: "shrine", x: 4950, y: 2200, region: "Eldin", puzzle: "Controlled Burn" },
  { id: "kayra-mah", name: "Kayra Mah", category: "shrine", x: 5250, y: 1850, region: "Eldin", puzzle: "Greedy Hill" },
  { id: "shora-hah", name: "Shora Hah", category: "shrine", x: 5500, y: 2100, region: "Eldin", puzzle: "Blue Flame" },
  { id: "mo-ra", name: "Mo Ra", category: "shrine", x: 5350, y: 2250, region: "Eldin", puzzle: "Major Test of Strength" },
  { id: "gorko-tunnel", name: "Gorko Tunnel", category: "shrine", x: 5050, y: 2400, region: "Eldin", puzzle: "Blessing" },

  // Lanayru
  { id: "dagah-keek", name: "Dagah Keek", category: "shrine", x: 5850, y: 2100, region: "Lanayru", puzzle: "Blessing" },
  { id: "ne-cha", name: "Ne'cha", category: "shrine", x: 6150, y: 2400, region: "Lanayru", puzzle: "Mysterious Eighth" },
  { id: "shai-yota", name: "Shai Yota", category: "shrine", x: 6400, y: 2700, region: "Lanayru", puzzle: "Master the Orb" },
  { id: "stritter", name: "Stritter", category: "shrine", x: 6600, y: 2900, region: "Lanayru", puzzle: "Still Water Drift" },
  { id: "maka-rah", name: "Maka Rah", category: "shrine", x: 6200, y: 2800, region: "Lanayru", puzzle: "Steady thy Heart" },
  { id: "rucco-maag", name: "Rucco Maag", category: "shrine", x: 5950, y: 2600, region: "Lanayru", puzzle: "Five Flames" },
  { id: "kaya-wan", name: "Kaya Wan", category: "shrine", x: 6350, y: 3100, region: "Lanayru", puzzle: "Shields from Water" },
  { id: "shai-utoh", name: "Shai Utoh", category: "shrine", x: 6100, y: 3300, region: "Lanayru", puzzle: "Halt the Tilt" },
  { id: "mogg-latan", name: "Mogg Latan", category: "shrine", x: 5800, y: 2950, region: "Lanayru", puzzle: "Syn and Jot Blessing" },
  { id: "daka-tuss", name: "Daka Tuss", category: "shrine", x: 6500, y: 3400, region: "Lanayru", puzzle: "Sunken Scoop" },
  { id: "tenoke", name: "Tenoke", category: "shrine", x: 6700, y: 3200, region: "Lanayru", puzzle: "Rot and Ruin" },

  // Necluda
  { id: "soh-kofi", name: "Soh Kofi", category: "shrine", x: 6200, y: 3800, region: "Necluda", puzzle: "Blessing" },
  { id: "toto-sah", name: "Toto Sah", category: "shrine", x: 5900, y: 3600, region: "Necluda", puzzle: "Toto Sah Apparatus" },
  { id: "tahno-oh", name: "Tahno O'ah", category: "shrine", x: 6400, y: 3700, region: "Necluda", puzzle: "Blessing" },
  { id: "jiukoum", name: "Jiukoum", category: "shrine", x: 5700, y: 4000, region: "Necluda", puzzle: "Built for Rails" },
  { id: "chaas-qeta", name: "Chaas Qeta", category: "shrine", x: 6800, y: 4200, region: "Necluda", puzzle: "Major Test of Strength" },
  { id: "shoqa-tatone", name: "Shoqa Tatone", category: "shrine", x: 5500, y: 4300, region: "Necluda", puzzle: "Major Test of Strength" },
  { id: "myahm-agana", name: "Myahm Agana", category: "shrine", x: 5350, y: 4600, region: "Necluda", puzzle: "Myahm Agana Apparatus" },
  { id: "sheem-dagoze", name: "Sheem Dagoze", category: "shrine", x: 5600, y: 4600, region: "Necluda", puzzle: "Minor Test of Strength" },
  { id: "rok-uwog", name: "Rok Uwog", category: "shrine", x: 5800, y: 4500, region: "Necluda", puzzle: "Blessing" },

  // Faron
  { id: "qukah-nata", name: "Qukah Nata", category: "shrine", x: 5000, y: 6200, region: "Faron", puzzle: "Blessing" },
  { id: "yah-rin", name: "Yah Rin", category: "shrine", x: 5400, y: 6000, region: "Faron", puzzle: "Passing the Flame" },
  { id: "shae-loya", name: "Shae Loya", category: "shrine", x: 4800, y: 6400, region: "Faron", puzzle: "Aim for the Moment" },
  { id: "pumaag-nitae", name: "Pumaag Nitae", category: "shrine", x: 5200, y: 6600, region: "Faron", puzzle: "Minor Test of Strength" },
  { id: "korgu-chideh", name: "Korgu Chideh", category: "shrine", x: 5700, y: 6800, region: "Faron", puzzle: "Blessing (Eventide)" },
  { id: "loman-au", name: "Loman Au", category: "shrine", x: 4600, y: 6100, region: "Faron", puzzle: "Pushing Power" },

  // Dueling Peaks
  { id: "ree-dahee", name: "Ree Dahee", category: "shrine", x: 5100, y: 4900, region: "Dueling Peaks", puzzle: "Timing is Critical" },
  { id: "bosh-kala", name: "Bosh Kala", category: "shrine", x: 4600, y: 4700, region: "Dueling Peaks", puzzle: "Wind Guides You" },
  { id: "ha-dahamar", name: "Ha Dahamar", category: "shrine", x: 4850, y: 4800, region: "Dueling Peaks", puzzle: "Water Guides You" },
  { id: "kaam-yatak", name: "Kaam Ya'tak", category: "shrine", x: 5050, y: 5100, region: "Dueling Peaks", puzzle: "Trial of Power" },
  { id: "shee-vaneer", name: "Shee Vaneer", category: "shrine", x: 4780, y: 5000, region: "Dueling Peaks", puzzle: "Twin Memories" },
  { id: "shee-venath", name: "Shee Venath", category: "shrine", x: 5000, y: 5000, region: "Dueling Peaks", puzzle: "Twin Memories" },
  { id: "tah-muhl", name: "Tah Muhl", category: "shrine", x: 4950, y: 4700, region: "Dueling Peaks", puzzle: "Minor Test of Strength" },
  { id: "taloh-naeg", name: "Taloh Naeg", category: "shrine", x: 4700, y: 5100, region: "Dueling Peaks", puzzle: "Teaching and Training" },

  // Lake
  { id: "shae-katha", name: "Shae Katha", category: "shrine", x: 3700, y: 5600, region: "Lake", puzzle: "Blessing" },
  { id: "ishto-soh", name: "Ishto Soh", category: "shrine", x: 4000, y: 6000, region: "Lake", puzzle: "Bravery's Grasp" },
  { id: "etsu-korima", name: "Etsu Korima", category: "shrine", x: 3500, y: 6100, region: "Lake", puzzle: "Cliffside Etchings" },
  { id: "noya-neha", name: "Noya Neha", category: "shrine", x: 3300, y: 6300, region: "Lake", puzzle: "Blessing" },
  { id: "lake-tower-shrine", name: "Hylia Shrine", category: "shrine", x: 3600, y: 5900, region: "Lake", puzzle: "Magnitude Rock" },
  { id: "dila-maag", name: "Dila Maag", category: "shrine", x: 4200, y: 5800, region: "Lake", puzzle: "Blessing" },
  { id: "kee-dafunia", name: "Kee Dafunia", category: "shrine", x: 3800, y: 5800, region: "Lake", puzzle: "Melting Point" },

  // Ridgeland
  { id: "monya-toma", name: "Monya Toma", category: "shrine", x: 2800, y: 3800, region: "Ridgeland", puzzle: "Drawing Parabolas" },
  { id: "toh-yahsa", name: "Toh Yahsa", category: "shrine", x: 2400, y: 3200, region: "Ridgeland", puzzle: "Blessing" },
  { id: "zalta-wa", name: "Zalta Wa", category: "shrine", x: 2600, y: 3600, region: "Ridgeland", puzzle: "Two Orbs to Guide You" },
  { id: "shoda-sah", name: "Shoda Sah", category: "shrine", x: 3000, y: 4000, region: "Ridgeland", puzzle: "Impeccable Timing" },
  { id: "maag-halan", name: "Maag Halan", category: "shrine", x: 2500, y: 4200, region: "Ridgeland", puzzle: "Secret Stairway" },
  { id: "kaag-eruga", name: "Kaag Eruga", category: "shrine", x: 3200, y: 3500, region: "Ridgeland", puzzle: "Minor Test of Strength" },
  { id: "mijah-rokee", name: "Mijah Rokee", category: "shrine", x: 2700, y: 3100, region: "Ridgeland", puzzle: "Modest Test of Strength" },
  { id: "rona-kachta", name: "Rona Kachta", category: "shrine", x: 2900, y: 3300, region: "Ridgeland", puzzle: "Blessing" },
  { id: "maag-no-rah", name: "Maag No'rah", category: "shrine", x: 3100, y: 3700, region: "Ridgeland", puzzle: "Guardian Slideshow" },

  // Tabantha
  { id: "voo-lota", name: "Voo Lota", category: "shrine", x: 1800, y: 2800, region: "Tabantha", puzzle: "Blessing" },
  { id: "bareeda-naag", name: "Bareeda Naag", category: "shrine", x: 1600, y: 2400, region: "Tabantha", puzzle: "Blessing" },
  { id: "sha-gehma", name: "Sha Gehma", category: "shrine", x: 2000, y: 2600, region: "Tabantha", puzzle: "Collective Strength" },
  { id: "tena-ko-sah", name: "Tena Ko'sah", category: "shrine", x: 1900, y: 3000, region: "Tabantha", puzzle: "Major Test of Strength" },
  { id: "akh-va-quot", name: "Akh Va'quot", category: "shrine", x: 1700, y: 2200, region: "Tabantha", puzzle: "Windmills" },
  { id: "hia-miu", name: "Hia Miu", category: "shrine", x: 1400, y: 2000, region: "Tabantha", puzzle: "Cold Snuggle" },
  { id: "rok-uwog-tab", name: "Rok Uwog", category: "shrine", x: 2100, y: 2400, region: "Tabantha", puzzle: "Power of Electricity" },
  { id: "dunba-taag", name: "Dunba Taag", category: "shrine", x: 1600, y: 3200, region: "Tabantha", puzzle: "Build and Release" },
  { id: "kah-okeo", name: "Kah Okeo", category: "shrine", x: 1300, y: 2800, region: "Tabantha", puzzle: "Wind Guide Me" },

  // Hebra
  { id: "goma-asaagh", name: "Goma Asaagh", category: "shrine", x: 1800, y: 1600, region: "Hebra", puzzle: "Minor Test of Strength" },
  { id: "hawa-koth", name: "Hawa Koth", category: "shrine", x: 2200, y: 1400, region: "Hebra", puzzle: "Current Solution" },
  { id: "sha-warvo", name: "Sha Warvo", category: "shrine", x: 1600, y: 1800, region: "Hebra", puzzle: "Hidden Winds" },
  { id: "shada-naw", name: "Shada Naw", category: "shrine", x: 1400, y: 1200, region: "Hebra", puzzle: "Red Pillars" },
  { id: "lanno-kooh", name: "Lanno Kooh", category: "shrine", x: 1200, y: 1600, region: "Hebra", puzzle: "Blessing" },
  { id: "mozo-shenno", name: "Mozo Shenno", category: "shrine", x: 1000, y: 1400, region: "Hebra", puzzle: "Major Test of Strength" },
  { id: "gee-hakal", name: "Gee Ha'kal", category: "shrine", x: 1600, y: 1000, region: "Hebra", puzzle: "Minor Test of Strength" },
  { id: "maka-rah-heb", name: "Maka Rah (Hebra)", category: "shrine", x: 2000, y: 1800, region: "Hebra", puzzle: "Steady thy Heart" },
  { id: "noe-rajee", name: "Noe Rajee", category: "shrine", x: 1200, y: 2000, region: "Hebra", puzzle: "Face the Frost Pebblits" },
  { id: "suma-sahma", name: "Suma Sahma", category: "shrine", x: 900, y: 1800, region: "Hebra", puzzle: "Nature's Calling" },
  { id: "to-quomo", name: "To Quomo", category: "shrine", x: 1800, y: 1200, region: "Hebra", puzzle: "Snowball Bowling" },
  { id: "rok-uwog-heb", name: "Rok Uwog (Hebra)", category: "shrine", x: 1400, y: 1400, region: "Hebra", puzzle: "Blessing" },

  // Gerudo
  { id: "daqo-chisay", name: "Daqo Chisay", category: "shrine", x: 2000, y: 4800, region: "Gerudo", puzzle: "Two Orbs" },
  { id: "kema-kosassa", name: "Kema Kosassa", category: "shrine", x: 1600, y: 5000, region: "Gerudo", puzzle: "Major Test of Strength" },
  { id: "hawa-koth-ger", name: "Hawa Koth (Gerudo)", category: "shrine", x: 1800, y: 5200, region: "Gerudo", puzzle: "Current Solution" },
  { id: "kema-zoos", name: "Kema Zoos", category: "shrine", x: 1400, y: 5400, region: "Gerudo", puzzle: "Unclimbable Mountain" },
  { id: "jee-noh", name: "Jee Noh", category: "shrine", x: 2200, y: 5000, region: "Gerudo", puzzle: "On the Move" },
  { id: "miss-oh", name: "Miss'oh", category: "shrine", x: 1600, y: 5600, region: "Gerudo", puzzle: "Burial" },
  { id: "rohta-chigah", name: "Rohta Chigah", category: "shrine", x: 1200, y: 4800, region: "Gerudo", puzzle: "Blessing" },
  { id: "raqa-zunzo", name: "Raqa Zunzo", category: "shrine", x: 2000, y: 5400, region: "Gerudo", puzzle: "Blessing" },

  // Wasteland
  { id: "tho-kayu", name: "Tho Kayu", category: "shrine", x: 1400, y: 6000, region: "Wasteland", puzzle: "Blessing" },
  { id: "korsh-o-hu", name: "Korsh O'hu", category: "shrine", x: 1200, y: 6200, region: "Wasteland", puzzle: "Blessing" },
  { id: "kema-zumosu", name: "Kema Zumosu", category: "shrine", x: 1600, y: 6400, region: "Wasteland", puzzle: "Energy Surge" },
  { id: "dako-tah", name: "Dako Tah", category: "shrine", x: 1800, y: 6600, region: "Wasteland", puzzle: "Electric Conduction" },
  { id: "sasa-kai", name: "Sasa Kai", category: "shrine", x: 1400, y: 6600, region: "Wasteland", puzzle: "Major Test of Strength" },

  // Great Hyrule Forest
  { id: "keo-ruug", name: "Keo Ruug", category: "shrine", x: 3600, y: 2400, region: "Great Hyrule Forest", puzzle: "Fateful Stars" },
  { id: "maag-no-rah-forest", name: "Maag No'rah", category: "shrine", x: 3400, y: 2600, region: "Great Hyrule Forest", puzzle: "Modest Test of Strength" },

  // Central Hyrule
  { id: "katosa-aug", name: "Katosa Aug", category: "shrine", x: 4400, y: 3800, region: "Central Hyrule", puzzle: "Katosa Aug Apparatus" },
  { id: "namika-ozz", name: "Namika Ozz", category: "shrine", x: 4200, y: 3600, region: "Central Hyrule", puzzle: "Blessing" },
  { id: "noya-neha-cent", name: "Noya Neha", category: "shrine", x: 3800, y: 4200, region: "Central Hyrule", puzzle: "Blessing" },
  { id: "wahgo-katta", name: "Wahgo Katta", category: "shrine", x: 4600, y: 4200, region: "Central Hyrule", puzzle: "Metal Connections" },
  { id: "sheem-dagoze-2", name: "Sheem Dagoze", category: "shrine", x: 4000, y: 4400, region: "Central Hyrule", puzzle: "Minor Test of Strength" },
  { id: "saas-kosah", name: "Saas Ko'sah", category: "shrine", x: 4100, y: 3400, region: "Central Hyrule", puzzle: "Major Test of Strength" },
  { id: "gee-hakal-cent", name: "Gee Ha'kal (Central)", category: "shrine", x: 4300, y: 4400, region: "Central Hyrule", puzzle: "Minor Test of Strength" },
];

// All 15 towers
export const towerMarkers: MapMarker[] = [
  { id: "tower-great-plateau", name: "Great Plateau Tower", category: "tower", x: 3700, y: 5100, region: "Great Plateau" },
  { id: "tower-akkala", name: "Akkala Tower", category: "tower", x: 6800, y: 1200, region: "Akkala" },
  { id: "tower-eldin", name: "Eldin Tower", category: "tower", x: 5200, y: 2000, region: "Eldin" },
  { id: "tower-lanayru", name: "Lanayru Tower", category: "tower", x: 6100, y: 2700, region: "Lanayru" },
  { id: "tower-necluda", name: "Necluda Tower", category: "tower", x: 5700, y: 4200, region: "Necluda" },
  { id: "tower-faron", name: "Faron Tower", category: "tower", x: 4700, y: 6300, region: "Faron" },
  { id: "tower-dueling-peaks", name: "Dueling Peaks Tower", category: "tower", x: 4900, y: 5000, region: "Dueling Peaks" },
  { id: "tower-lake", name: "Lake Tower", category: "tower", x: 3400, y: 5900, region: "Lake" },
  { id: "tower-ridgeland", name: "Ridgeland Tower", category: "tower", x: 2600, y: 3500, region: "Ridgeland" },
  { id: "tower-tabantha", name: "Tabantha Tower", category: "tower", x: 1700, y: 2700, region: "Tabantha" },
  { id: "tower-hebra", name: "Hebra Tower", category: "tower", x: 1400, y: 1600, region: "Hebra" },
  { id: "tower-gerudo", name: "Gerudo Tower", category: "tower", x: 1700, y: 5600, region: "Gerudo" },
  { id: "tower-wasteland", name: "Wasteland Tower", category: "tower", x: 1300, y: 6500, region: "Wasteland" },
  { id: "tower-korok-forest", name: "Woodland Tower", category: "tower", x: 3500, y: 2500, region: "Great Hyrule Forest" },
  { id: "tower-central", name: "Central Tower", category: "tower", x: 4000, y: 3900, region: "Central Hyrule" },
];

// Divine Beast locations
export const divineBeastMarkers: MapMarker[] = [
  { id: "map-medoh", name: "Vah Medoh", category: "divine-beast", x: 1500, y: 2500, note: "Rito Village — Revali's Gale" },
  { id: "map-ruta", name: "Vah Ruta", category: "divine-beast", x: 5500, y: 2300, note: "Zora's Domain — Mipha's Grace" },
  { id: "map-naboris", name: "Vah Naboris", category: "divine-beast", x: 2000, y: 6000, note: "Gerudo Desert — Urbosa's Fury" },
  { id: "map-rudania", name: "Vah Rudania", category: "divine-beast", x: 5400, y: 1600, note: "Death Mountain — Daruk's Protection" },
];

// Major stables (fast travel points)
export const stableMarkers: MapMarker[] = [
  { id: "stable-dueling-peaks", name: "Dueling Peaks Stable", category: "stable", x: 4800, y: 5200 },
  { id: "stable-foothill", name: "Foothill Stable", category: "stable", x: 4900, y: 2800 },
  { id: "stable-south-akkala", name: "South Akkala Stable", category: "stable", x: 6000, y: 1600 },
  { id: "stable-akkala", name: "Akkala Stable", category: "stable", x: 6600, y: 1800 },
  { id: "stable-wetland", name: "Wetland Stable", category: "stable", x: 4800, y: 3600 },
  { id: "stable-woodland", name: "Woodland Stable", category: "stable", x: 3700, y: 3000 },
  { id: "stable-mabe", name: "Mabe Village Stable", category: "stable", x: 3400, y: 4200 },
  { id: "stable-outskirt", name: "Outskirt Stable", category: "stable", x: 3000, y: 4800 },
  { id: "stable-riverside", name: "Riverside Stable", category: "stable", x: 3200, y: 5200 },
  { id: "stable-highland", name: "Highland Stable", category: "stable", x: 4000, y: 5900 },
  { id: "stable-lurelin", name: "Lurelin Village", category: "stable", x: 5500, y: 6700 },
  { id: "stable-rito", name: "Rito Village", category: "stable", x: 1700, y: 2000 },
  { id: "stable-snowfield", name: "Snowfield Stable", category: "stable", x: 1600, y: 1500 },
  { id: "stable-kara-kara", name: "Kara Kara Bazaar", category: "stable", x: 2000, y: 5100 },
  { id: "stable-serenne", name: "Serenne Stable", category: "stable", x: 2600, y: 2800 },
  { id: "stable-mount-lanayru", name: "Mount Lanayru Stable", category: "stable", x: 6200, y: 3700 },
  { id: "stable-foothill-2", name: "Zora's Domain", category: "stable", x: 5900, y: 2100 },
  { id: "stable-gerudo", name: "Gerudo Town", category: "stable", x: 1900, y: 5400 },
  { id: "stable-kakariko", name: "Kakariko Village", category: "stable", x: 5100, y: 3800 },
];

// Hidden shrine entrances — where the quest starts (distinct from shrine location)
export const hiddenShrineMarkers: MapMarker[] = [
  // Akkala
  { id: "hs-tutsuwa", name: "Spring of Power", category: "hidden-shrine", x: 6900, y: 1100, region: "Akkala", note: "Offer Dinraal's scale to the spring at night. The dragon flies north of Death Mountain." },
  { id: "hs-ritaag", name: "Ritaag Zumo Entrance", category: "hidden-shrine", x: 6850, y: 1300, region: "Akkala", note: "Complete the 'Ritaag Zumo's Blessing' quest — find and offer the correct item near the spring island." },
  // Eldin
  { id: "hs-sah-dahaj", name: "Power of Fire", category: "hidden-shrine", x: 6180, y: 1280, region: "Eldin", note: "Light all three torches at South Eldin Mine. Use a Fire Arrow or a lit torch." },
  { id: "hs-qua-raym", name: "A Brother's Roast", category: "hidden-shrine", x: 4920, y: 2180, region: "Eldin", note: "Light the two kilns at Abandoned North Mine. Use a Fire Arrow aimed at each kiln." },
  { id: "hs-kayra-mah", name: "Greedy Hill", category: "hidden-shrine", x: 5230, y: 1820, region: "Eldin", note: "Offer 100 rupees at the glowing bowl at Gorko Lake. Have rupees ready." },
  { id: "hs-gorko", name: "Under Eldin", category: "hidden-shrine", x: 5030, y: 2380, region: "Eldin", note: "Enter through the lava cave on the south side of Death Mountain. Use Fireproof Elixir." },
  { id: "hs-shora-hah", name: "Blue Flame Path", category: "hidden-shrine", x: 5480, y: 2080, region: "Eldin", note: "Carry the Blue Flame torch all the way to the Ancient Furnace near Akkala. Do not let it go out." },
  // Lanayru
  { id: "hs-dagah", name: "Shatter the Gate", category: "hidden-shrine", x: 5830, y: 2080, region: "Lanayru", note: "Strike the gate with a lightning arrow during a thunderstorm in Mikau Lake. Bring electric arrows." },
  { id: "hs-shai-yota", name: "Master the Orb", category: "hidden-shrine", x: 6380, y: 2680, region: "Lanayru", note: "Retrieve the sphere from the bottom of Mikau Lake and roll it to the pedestal. Use Cryonis to assist." },
  { id: "hs-maka-rah", name: "Steady thy Heart Entrance", category: "hidden-shrine", x: 6580, y: 3050, region: "Lanayru", note: "Hidden behind the stone wall on Lanayru Road East. Use Magnesis to reveal the entrance." },
  { id: "hs-daka-tuss", name: "Sunken Cave", category: "hidden-shrine", x: 6480, y: 3380, region: "Lanayru", note: "Dive into the pool at Shrine Island southeast of Lanayru. Use Cryonis to lift out." },
  { id: "hs-stritter", name: "Still Water Entrance", category: "hidden-shrine", x: 6620, y: 2880, region: "Lanayru", note: "Ice the water in Lanayru Promenade after calming Vah Ruta. Cryonis required." },
  // Necluda
  { id: "hs-tahno", name: "Behind the Waterfall", category: "hidden-shrine", x: 6380, y: 3680, region: "Necluda", note: "Swim into the waterfall on Mount Lanayru's east face. Cold weather gear required." },
  { id: "hs-chaas", name: "Chaas Qeta Island", category: "hidden-shrine", x: 6780, y: 4180, region: "Necluda", note: "Reach Chaas Qeta Island in the Necluda Sea. The island strips all your gear on arrival — prepare food." },
  { id: "hs-shoqa", name: "Shoqa Peak Entrance", category: "hidden-shrine", x: 5480, y: 4280, region: "Necluda", note: "Climb to the peak of the mountain northeast of Dueling Peaks. Wind gusts block the path." },
  // Faron
  { id: "hs-qukah", name: "Song of Storms", category: "hidden-shrine", x: 4980, y: 6180, region: "Faron", note: "Talk to Kass near the giant stone ruins in Faron during rain. Then shoot a lightning arrow at the pillar." },
  { id: "hs-korgu", name: "Eventide Island", category: "hidden-shrine", x: 5680, y: 6780, region: "Faron", note: "Reach Eventide Island by sea (southeast Faron coast). All gear stripped on arrival — survive on wits." },
  { id: "hs-pumaag", name: "Tuft Mountain Summit", category: "hidden-shrine", x: 5180, y: 6580, region: "Faron", note: "Climb Tuft Mountain — the shrine is on the peak. Use Revali's Gale for easier ascent." },
  { id: "hs-loman", name: "Pushing Power Start", category: "hidden-shrine", x: 4580, y: 6080, region: "Faron", note: "Near the edge of the Faron Sea cliffs. Look for the cracked floor and use bombs." },
  // Dueling Peaks
  { id: "hs-shee-vaneer", name: "North Peak — Twin Memories", category: "hidden-shrine", x: 4760, y: 4980, region: "Dueling Peaks", note: "Climb the north Dueling Peak. Memorise the orb pattern at the top — it mirrors the south peak." },
  { id: "hs-shee-venath", name: "South Peak — Twin Memories", category: "hidden-shrine", x: 4980, y: 4980, region: "Dueling Peaks", note: "Climb the south Dueling Peak. Solve the mirrored orb puzzle using the pattern from the north peak." },
  { id: "hs-kaam", name: "Trials of Power Bridge", category: "hidden-shrine", x: 5030, y: 5080, region: "Dueling Peaks", note: "On the east side of the stone bridge. Speak to the warrior spirit and accept the trial." },
  // Lake
  { id: "hs-shae-katha", name: "Spring of Courage", category: "hidden-shrine", x: 3680, y: 5580, region: "Lake", note: "Offer a fairy to the Spring of Courage at Lake Hylia's ancient ruins. The fairy must be in your inventory." },
  { id: "hs-etsu", name: "Cliffside Etchings", category: "hidden-shrine", x: 3480, y: 6080, region: "Lake", note: "Touch the large stone tablet at sunset (late afternoon). Face west for the light to hit the carvings." },
  { id: "hs-kee-daf", name: "Melting Point", category: "hidden-shrine", x: 3780, y: 5780, region: "Lake", note: "Hidden under an ice block near the Farosh lake shore. Melt the ice then dive in." },
  // Ridgeland
  { id: "hs-toh-yahsa", name: "Thyphlo Ruins Burial", category: "hidden-shrine", x: 2380, y: 3180, region: "Ridgeland", note: "Inside Thyphlo Ruins — follow the light beams using Magnesis. Bring a lot of torches or Daruk's Protection." },
  { id: "hs-mijah-rokee", name: "By Firefly's Light", category: "hidden-shrine", x: 2680, y: 3080, region: "Ridgeland", note: "Find 5 fireflies at night south of Ridgeland Tower. Catch them with an Empty Bottle then bring them to the pedestal." },
  { id: "hs-shoda-sah", name: "Impeccable Timing", category: "hidden-shrine", x: 2980, y: 3980, region: "Ridgeland", note: "Behind the moving spiked wall near Calora Lake. Time your roll through the narrow gap between swings." },
  { id: "hs-maag-no-rah", name: "Guardian Slideshow", category: "hidden-shrine", x: 3080, y: 3680, region: "Ridgeland", note: "Activate the Guardian Statues at the correct angles near Hyrule Ridge. Use Stasis to align them." },
  // Tabantha
  { id: "hs-bareeda", name: "Recital at Warbler's Nest", category: "hidden-shrine", x: 1580, y: 2380, region: "Tabantha", note: "Find the 5 Rito daughters at Warbler's Nest. Bring them home from the locations told to you by Kheel in Rito Village." },
  { id: "hs-voo-lota", name: "The Crowned Beast", category: "hidden-shrine", x: 1780, y: 2780, region: "Tabantha", note: "Defeat the Stalnox at Hebra North Summit at night to get its horn. Bring it to the pedestal near Rito Village." },
  { id: "hs-hia-miu", name: "Cold Snuggle", category: "hidden-shrine", x: 1380, y: 1980, region: "Tabantha", note: "Talk to Gesane at Snowfield Stable. Bring an Icy Lizalfos Tail from Hebra Mountains. Elixir of cold resistance needed." },
  { id: "hs-kah-okeo", name: "Wind Guide Me", category: "hidden-shrine", x: 1280, y: 2780, region: "Tabantha", note: "Glide from the cliff when Kass plays near Rito Village and the updraft forms. Jump and paraglide at the right moment." },
  { id: "hs-dunba", name: "Build and Release", category: "hidden-shrine", x: 1580, y: 3180, region: "Tabantha", note: "Use Stasis on the catapult arm then bomb it to launch yourself over the cliff. Aim carefully." },
  { id: "hs-tena", name: "Ancient Columns", category: "hidden-shrine", x: 1880, y: 2980, region: "Tabantha", note: "Major test of strength at the Ancient Columns plateau. Pull the orb from between the two lightning pillars using Magnesis." },
  // Hebra
  { id: "hs-gee-hakal", name: "Icy Snowball Trap", category: "hidden-shrine", x: 1580, y: 980, region: "Hebra", note: "Roll a snowball down the slope at the top of Hebra Peak without hitting any bumps. Practice the angle." },
  { id: "hs-shada-naw", name: "Red Pillars Puzzle", category: "hidden-shrine", x: 1380, y: 1180, region: "Hebra", note: "Push the 3 red orbs onto their matching pedestals in the snowfield. Use Magnesis carefully — the ice is slippery." },
  { id: "hs-lanno", name: "Cold Canyon Blessing", category: "hidden-shrine", x: 1180, y: 1580, region: "Hebra", note: "Hidden at the bottom of a frozen river canyon west of Hebra Peak. Max cold resistance required." },
  { id: "hs-noe-rajee", name: "Face the Frost Pebblits", category: "hidden-shrine", x: 1180, y: 1980, region: "Hebra", note: "Kill the 4 Frost Pebblits on the island in Hebra's frozen lake. The shrine appears when all are defeated." },
  { id: "hs-suma", name: "Nature's Calling Rings", category: "hidden-shrine", x: 880, y: 1780, region: "Hebra", note: "Glide through the 3 ring formations near Selmie's hut. You must pass through all three in one glide from the peak." },
  { id: "hs-to-quomo", name: "Snowball Bowling", category: "hidden-shrine", x: 1780, y: 1180, region: "Hebra", note: "Bowl a snowball into the glowing ring target below Cuho Mountain. Use Stasis to aim, then throw a boulder as the ball." },
  // Gerudo
  { id: "hs-ne-cha", name: "Eighth Heroine", category: "hidden-shrine", x: 1780, y: 4980, region: "Gerudo", note: "Find the sword arm in the Gerudo Highlands snowfield and place it on the giant statue. Bring cold resistance." },
  { id: "hs-kema-zoos", name: "Unclimbable Mountain", category: "hidden-shrine", x: 1380, y: 5380, region: "Gerudo", note: "Roll the metal orb to the top of the ice-covered slope using Magnesis. Do not let it slide back." },
  { id: "hs-miss-oh", name: "Gerudo Canyon Burial", category: "hidden-shrine", x: 1580, y: 5580, region: "Gerudo", note: "Find the hidden underground passage in Gerudo Canyon Pass. Bomb the cracked wall on the south side." },
  { id: "hs-jee-noh", name: "On the Move", category: "hidden-shrine", x: 2180, y: 4980, region: "Gerudo", note: "Move the orb across the moving platform bridge in the Palu Wasteland before it falls. Run fast." },
  // Wasteland
  { id: "hs-dako-tah", name: "Electric Conduction", category: "hidden-shrine", x: 1780, y: 6580, region: "Wasteland", note: "Create a lightning path between the three pillars using metal objects. Place them as bridges then use a thunder arrow." },
  { id: "hs-kema-zum", name: "Energy Surge", category: "hidden-shrine", x: 1580, y: 6380, region: "Wasteland", note: "Stand on the floating platform when lightning strikes the tall rod during a Wasteland storm. Rubber Armor helps." },
  // Great Hyrule Forest
  { id: "hs-keo-ruug", name: "Fateful Stars", category: "hidden-shrine", x: 3580, y: 2380, region: "Great Hyrule Forest", note: "Light the torches in the order shown by the stars on the ceiling. Look up before lighting any torch." },
];

// Notable overworld chests — missable, hard to find, or containing key items
export const chestMarkers: MapMarker[] = [
  // Great Plateau
  { id: "chest-plateau-temple", name: "Temple of Time Chest", category: "chest", x: 3820, y: 5020, region: "Great Plateau", note: "Inside the Temple of Time ruin — climb to the upper floor. Contains a Soldier's Broadsword." },
  { id: "chest-plateau-river", name: "River Cave Chest", category: "chest", x: 3680, y: 5100, region: "Great Plateau", note: "In the river cave below the Temple of Time. Contains a Traveler's Bow." },
  { id: "chest-plateau-tree", name: "Frozen Pond Chest", category: "chest", x: 3580, y: 4900, region: "Great Plateau", note: "Under the ice in the frozen pond near Mount Hylia. Use Cryonis on the ice panel to access." },
  // Akkala
  { id: "chest-akk-citadel1", name: "Akkala Citadel Chest 1", category: "chest", x: 6500, y: 1350, region: "Akkala", note: "On the roof of Akkala Citadel. Contains a Royal Broadsword. Use Stasis on the rotating platform." },
  { id: "chest-akk-citadel2", name: "Akkala Citadel Chest 2", category: "chest", x: 6520, y: 1380, region: "Akkala", note: "Inside the citadel lower level — guarded by a Lizalfos. Contains an Ancient Core." },
  { id: "chest-akk-labyrinth", name: "Akkala Labyrinth Chest", category: "chest", x: 7000, y: 1050, region: "Akkala", note: "In the northeast corner of Akkala Labyrinth. Contains a Diamond — most valuable ore." },
  { id: "chest-akk-hinox", name: "East Akkala Hinox Chest", category: "chest", x: 6750, y: 1400, region: "Akkala", note: "Around the Hinox's neck east of South Akkala Stable. Wake and fight the Hinox or sneak it off." },
  { id: "chest-akk-spring", name: "Spring of Power Chest", category: "chest", x: 6900, y: 1080, region: "Akkala", note: "Hidden in the waterfall behind the Spring of Power. Contains a Giant Ancient Core." },
  // Eldin
  { id: "chest-eldin-mine1", name: "Abandoned North Mine Chest", category: "chest", x: 5300, y: 2150, region: "Eldin", note: "Inside the lava-flooded section of Abandoned North Mine. Fireproof Elixir required — 2+ recommended." },
  { id: "chest-eldin-mine2", name: "Eldin Mine Magma Chest", category: "chest", x: 5200, y: 2100, region: "Eldin", note: "On the platform above the lava flow. Contains a Flameblade. Use a metal box or Cryonis." },
  { id: "chest-eldin-hinox", name: "Death Mountain Hinox Neck Chest", category: "chest", x: 5400, y: 1700, region: "Eldin", note: "Around the Hinox's neck near the peak. Contains a Royal Claymore. Fireproof armor needed." },
  { id: "chest-eldin-summit", name: "Death Mountain Summit Chest", category: "chest", x: 5500, y: 1650, region: "Eldin", note: "At the summit in the lava alcove. Contains Flamebreaker Boots (partial quest reward). Fireproof armor required." },
  // Lanayru
  { id: "chest-lan-zora", name: "Zora's Domain Throne Room Chest", category: "chest", x: 5920, y: 2150, region: "Lanayru", note: "Behind the throne on the upper floor of Zora's Domain. Contains a Zora Sword." },
  { id: "chest-lan-domain-roof", name: "Zora's Domain Rooftop", category: "chest", x: 5900, y: 2120, region: "Lanayru", note: "On the roof above Muzu's chamber. Climb from the waterfall side. Contains a Silver Rupee." },
  { id: "chest-lan-lynel", name: "Lynel Chest — Lanayru", category: "chest", x: 6200, y: 3050, region: "Lanayru", note: "On the ledge near the Blue-Maned Lynel on Lanayru Road East. Contains a Savage Lynel Bow. High risk, high reward." },
  { id: "chest-lan-promenade", name: "Promenade Waterfall Chest", category: "chest", x: 6100, y: 3200, region: "Lanayru", note: "Behind the waterfall flowing off Lanayru Promenade after freezing the water. Contains an Opal." },
  { id: "chest-lan-labyrinth", name: "Lanayru Labyrinth Chest", category: "chest", x: 6800, y: 3100, region: "Lanayru", note: "At the center of Lanayru Labyrinth (Lomei Labyrinth Island). Contains a Barbarian Helm." },
  // Necluda
  { id: "chest-nec-kak-village", name: "Kakariko Village Chest", category: "chest", x: 5080, y: 3820, region: "Necluda", note: "Behind Impa's house under the porch. Contains a Purple Rupee. Easy to miss early game." },
  { id: "chest-nec-kak-inn", name: "Kakariko Inn Chest", category: "chest", x: 5060, y: 3850, region: "Necluda", note: "On the roof of Shuteye Inn. Paraglide or climb to reach. Contains a Warm Doublet." },
  { id: "chest-nec-hinox", name: "Necluda Sea Hinox Chest", category: "chest", x: 6100, y: 4300, region: "Necluda", note: "Three-hinox island in the Necluda Sea. Chest around the largest one's neck. Contains a Royal Shield." },
  { id: "chest-nec-hateno", name: "Hateno Village Research Chest", category: "chest", x: 5800, y: 3850, region: "Necluda", note: "On top of Robbie's research tower at East Akkala Lab. Climb up the ladder. Contains an Ancient Arrow." },
  { id: "chest-nec-labyrnith", name: "Lomei South Labyrinth", category: "chest", x: 6600, y: 4600, region: "Necluda", note: "At the center of South Lomei Labyrinth. Contains the Barbarian Armor chest piece." },
  // Faron
  { id: "chest-faron-lurelin", name: "Lurelin Lucky Dip Chest", category: "chest", x: 5480, y: 6680, region: "Faron", note: "Pay 100 rupees at the Lurelin gambling game for a chance at rare loot. Best odds chest is on the left." },
  { id: "chest-faron-lynel", name: "Faron Lynel Chest", category: "chest", x: 4800, y: 6300, region: "Faron", note: "Near the Lynel patrolling the Faron Grasslands. Contains a Savage Lynel Spear. Approach from above." },
  { id: "chest-faron-island", name: "Eventide Island Chests", category: "chest", x: 5680, y: 6760, region: "Faron", note: "Three chests on Eventide Island — all gear stripped on arrival. Find all three orbs to unlock the shrine and recover." },
  // Dueling Peaks
  { id: "chest-dp-stable", name: "Dueling Peaks Stable Chest", category: "chest", x: 4820, y: 5180, region: "Dueling Peaks", note: "Behind the Dueling Peaks Stable waterfall. Swim up or Cryonis the waterfall. Contains a Soldier's Shield." },
  { id: "chest-dp-bokoblin", name: "Bokoblin Bridge Camp Chest", category: "chest", x: 4700, y: 4950, region: "Dueling Peaks", note: "Under the bridge near the Bokoblin camp east of Dueling Peaks Stable. Use Magnesis to grab from the water." },
  { id: "chest-dp-hilltop", name: "Hilltop Camp Chest", category: "chest", x: 5050, y: 4780, region: "Dueling Peaks", note: "On the Bokoblin hilltop camp. Snipe the bomb barrels to clear the camp, then loot the chest for a Royal Sword." },
  // Lake
  { id: "chest-lake-botton", name: "Lake Hylia Underwater Chest", category: "chest", x: 3500, y: 5980, region: "Lake", note: "Sunken on the lake floor near the center of Lake Hylia. Use Cryonis or dive with Zora Armor. Contains an Amber." },
  { id: "chest-lake-atop-bird", name: "Laruto Chest on Statue", category: "chest", x: 3300, y: 6200, region: "Lake", note: "On top of the Bird Goddess statue at Lake Hylia. Use Revali's Gale or a wind updraft to reach. Contains a Sapphire." },
  { id: "chest-lake-flightrange", name: "Falco's Chest", category: "chest", x: 3550, y: 5820, region: "Lake", note: "Inside the Flight Range (Vah Medoh quest start area). Climb the back wall. Contains an Falcon Bow." },
  // Ridgeland
  { id: "chest-rid-thyphlo", name: "Thyphlo Ruins Chest", category: "chest", x: 2400, y: 3100, region: "Ridgeland", note: "In the pitch-dark Thyphlo Ruins — follow the white owl with a torch. Contains an Ancient Shaft." },
  { id: "chest-rid-lynel", name: "Ridgeland Lynel Chest", category: "chest", x: 2650, y: 3450, region: "Ridgeland", note: "Near the Ridgeland Lynel. Contains a Savage Lynel Crusher and Shield. Mount the Lynel for bonus arrows." },
  { id: "chest-rid-island", name: "Island in the Sky Chest", category: "chest", x: 2800, y: 3200, region: "Ridgeland", note: "On the small sky island east of Ridgeland Tower. Use Revali's Gale or an Octo Balloon + metal crate." },
  // Tabantha
  { id: "chest-tab-selmie", name: "Selmie's Shield Chest", category: "chest", x: 1620, y: 1700, region: "Tabantha", note: "Win Selmie's shield surfing challenge on expert difficulty. Contains a Royal Shield as the prize." },
  { id: "chest-tab-plateau", name: "Tabantha Plateau Chest", category: "chest", x: 1680, y: 2650, region: "Tabantha", note: "On the ledge above the Tabantha Plateau cliffs. Use Revali's Gale. Contains a Royal Claymore." },
  { id: "chest-tab-labyrinth", name: "Tabantha Labyrinth Chest", category: "chest", x: 1380, y: 2580, region: "Tabantha", note: "At the center of Lomei Labyrinth 2. Contains the Barbarian Leg Wraps armor piece." },
  // Hebra
  { id: "chest-heb-peak-chest", name: "Hebra Peak Chest", category: "chest", x: 1200, y: 1400, region: "Hebra", note: "At the very top of Hebra Peak in the snowdrift. Max cold resistance required. Contains an Emerald." },
  { id: "chest-heb-cave", name: "Hebra Ice Cave Chest", category: "chest", x: 1500, y: 1600, region: "Hebra", note: "Hidden in the ice cave near Sha Warvo. Use bombs to clear the ice plug at the entrance. Contains a Sapphire." },
  // Gerudo
  { id: "chest-ger-molduking", name: "Molduking Arena Chest", category: "chest", x: 1900, y: 5200, region: "Gerudo", note: "After defeating the Molduking boss in Hyrule's Molduga arena. Contains a Topaz and Great Eagle Bow fragment." },
  { id: "chest-ger-ruins-1", name: "Gerudo Ruins Buried Chest", category: "chest", x: 1700, y: 5100, region: "Gerudo", note: "Buried under sand in Kara Kara Ruins. Use Magnesis to detect and pull out. Contains a Topaz." },
  { id: "chest-ger-town-roof", name: "Gerudo Town Roof Chest", category: "chest", x: 1900, y: 5380, region: "Gerudo", note: "On the highest roof of Gerudo Town. Paraglide from the town wall at night. Contains a Ruby." },
  // Wasteland
  { id: "chest-wast-moldy1", name: "Wasteland Molduga Chest 1", category: "chest", x: 1500, y: 6200, region: "Wasteland", note: "Defeat the Molduga near Toruma Dunes. Lure it with a bomb then detonate when it surfaces. Contains a Gold Rupee." },
  { id: "chest-wast-moldy2", name: "Wasteland Molduga Chest 2", category: "chest", x: 1800, y: 6500, region: "Wasteland", note: "Second Molduga near South Lomei Ruins. Approach from the rocks to stay safe. Contains a Silver Rupee." },
  { id: "chest-wast-buried", name: "Buried Wasteland Chest", category: "chest", x: 1300, y: 6700, region: "Wasteland", note: "Buried deep in the sand near the Dragon Bones fossils. Magnesis required to detect it." },
  // Central Hyrule
  { id: "chest-cent-castle1", name: "Hyrule Castle Library Chest", category: "chest", x: 4050, y: 3500, region: "Central Hyrule", note: "On the bookshelf in Hyrule Castle Library. Contains a Royal Guard's Shield. One of the best defensive chests." },
  { id: "chest-cent-castle2", name: "Hyrule Castle Sanctum Chest", category: "chest", x: 4100, y: 3380, region: "Central Hyrule", note: "In the Sanctum just before Ganon. Contains a Royal Guard's Claymore — the highest base attack sword." },
  { id: "chest-cent-castle3", name: "Hyrule Castle Docks Chest", category: "chest", x: 3900, y: 3650, region: "Central Hyrule", note: "In the flooded docks beneath Hyrule Castle. Contains a Knight's Shield. Swim in from the moat." },
  { id: "chest-cent-lynel", name: "Coliseum Ruin Lynel Chest", category: "chest", x: 3850, y: 4150, region: "Central Hyrule", note: "In the Coliseum Ruins guarded by a Lynel on each floor. Bottom floor chest holds a Royal Bow." },
];

// Korok seed locations — 900 total, key ones shown here by region and type
export const korokMarkers: MapMarker[] = [
  // Great Plateau
  { id: "kor-gp-1", name: "Rock Circle — Plateau North", category: "korok", x: 3800, y: 4870, region: "Great Plateau", note: "Place the missing rock in the circle on the north cliff. Lift each rock with Magnesis to find the odd one out." },
  { id: "kor-gp-2", name: "Pinwheel — Temple Ruins", category: "korok", x: 3830, y: 5000, region: "Great Plateau", note: "Shoot the acorn hanging inside the crumbling Temple of Time archway with an arrow." },
  { id: "kor-gp-3", name: "Under Rock — River Cliff", category: "korok", x: 3750, y: 5150, region: "Great Plateau", note: "Lift the suspicious lone rock on the cliff edge above the river. A Korok hides underneath." },
  { id: "kor-gp-4", name: "Flower Trail — Forest", category: "korok", x: 3900, y: 4950, region: "Great Plateau", note: "Follow the moving sparkles through the forest — touch them in order before they disappear." },
  { id: "kor-gp-5", name: "Racing Acorn — Mountain", category: "korok", x: 3630, y: 4850, region: "Great Plateau", note: "Race the rolling acorn down Mount Hylia and catch it at the bottom. Use Stasis to slow it." },
  // Akkala
  { id: "kor-akk-1", name: "Rock Pattern — Akkala Wilds", category: "korok", x: 6400, y: 1250, region: "Akkala", note: "Rocks are arranged in a star pattern with one missing. Carry the loose rock to the gap." },
  { id: "kor-akk-2", name: "Under Rock — South Akkala", category: "korok", x: 6150, y: 1550, region: "Akkala", note: "Lone rock near the Akkala Lake shore. Lift it." },
  { id: "kor-akk-3", name: "Balloon — Citadel", category: "korok", x: 6520, y: 1370, region: "Akkala", note: "Shoot the moving yellow balloon above Akkala Citadel with an arrow before it floats away." },
  { id: "kor-akk-4", name: "Offering Bowl — East", category: "korok", x: 6700, y: 1200, region: "Akkala", note: "Place an apple in the offering bowl on the stone pedestal near Akkala Tower. Any fruit works." },
  { id: "kor-akk-5", name: "Flower Trail — North Shore", category: "korok", x: 6900, y: 1050, region: "Akkala", note: "Follow the sparkle trail along the Akkala shoreline. Touch all five flowers quickly." },
  { id: "kor-akk-6", name: "Under Rock — Island", category: "korok", x: 7050, y: 1150, region: "Akkala", note: "On the small rocky island offshore. Lift the boulder with Magnesis." },
  { id: "kor-akk-7", name: "Tree Stump Platform", category: "korok", x: 6300, y: 1400, region: "Akkala", note: "Jump onto the spinning tree stump in the forest clearing. Land on the glowing ring." },
  { id: "kor-akk-8", name: "Ball-and-Cup Puzzle", category: "korok", x: 6650, y: 1600, region: "Akkala", note: "Use Magnesis to guide the metal ball into the cup on the puzzle boulder near East Lake Akkala." },
  // Eldin
  { id: "kor-eld-1", name: "Rock Circle — Death Mountain", category: "korok", x: 5300, y: 1950, region: "Eldin", note: "Place the missing stone in the circular ring on the Death Mountain base path. Fireproof required." },
  { id: "kor-eld-2", name: "Balloon — Eldin Canyon", category: "korok", x: 5050, y: 2300, region: "Eldin", note: "Shoot the red balloon tied to a rock in Eldin Canyon with an arrow." },
  { id: "kor-eld-3", name: "Under Rock — Goron City Path", category: "korok", x: 5200, y: 2000, region: "Eldin", note: "Lone suspicious rock on the winding path to Goron City. Lift it." },
  { id: "kor-eld-4", name: "Jump Rings — Lava Platform", category: "korok", x: 5450, y: 1900, region: "Eldin", note: "Jump through the glowing rings hovering above the lava platforms. Fireproof armor needed." },
  { id: "kor-eld-5", name: "Flower Trail — Mine", category: "korok", x: 5150, y: 2100, region: "Eldin", note: "Follow the flower sequence at the mine entrance. Touch them quickly — they disappear fast." },
  { id: "kor-eld-6", name: "Block Puzzle — Furnace", category: "korok", x: 5480, y: 2080, region: "Eldin", note: "Complete the block arrangement puzzle near the Abandoned Eldin Mine furnace using Magnesis." },
  // Lanayru
  { id: "kor-lan-1", name: "Under Rock — East Bank", category: "korok", x: 6100, y: 2500, region: "Lanayru", note: "Lone rock on the east bank of Zora River. Lift it to reveal the Korok." },
  { id: "kor-lan-2", name: "Diving Ring — Zora River", category: "korok", x: 5950, y: 2650, region: "Lanayru", note: "Dive from the waterfall top and through the glowing ring in the river below. Align carefully before you jump." },
  { id: "kor-lan-3", name: "Rock Pattern — Promenade", category: "korok", x: 6200, y: 2850, region: "Lanayru", note: "Rocks in a flower pattern near Lanayru Promenade. Place the missing stone in the correct petal gap." },
  { id: "kor-lan-4", name: "Acorn in Tree Stump", category: "korok", x: 6400, y: 2700, region: "Lanayru", note: "Shoot the acorn hiding inside the hollowed stump north of Shai Yota Shrine." },
  { id: "kor-lan-5", name: "Flower Trail — Wetland", category: "korok", x: 6300, y: 3150, region: "Lanayru", note: "Follow the quick flower trail over the water. Paraglider recommended." },
  { id: "kor-lan-6", name: "Balloon — Labyrinth Island", category: "korok", x: 6800, y: 3050, region: "Lanayru", note: "Shoot the balloon floating high above the Lanayru Labyrinth entrance. Use a bow from the roof." },
  { id: "kor-lan-7", name: "Under Rock — Lurelin Trail", category: "korok", x: 6500, y: 3400, region: "Lanayru", note: "On the rocky trail south of Lanayru toward Necluda. Lift the lone rock." },
  // Necluda
  { id: "kor-nec-1", name: "Under Rock — Kakariko", category: "korok", x: 5100, y: 3850, region: "Necluda", note: "Behind Impa's house under a rock on the hillside." },
  { id: "kor-nec-2", name: "Jump Rings — Hill", category: "korok", x: 5300, y: 4100, region: "Necluda", note: "Paraglide through the three ring formation above Firly Pond near Hateno Village." },
  { id: "kor-nec-3", name: "Flower Trail — Hateno", category: "korok", x: 5650, y: 3800, region: "Necluda", note: "Follow the flower sparkle trail through Hateno Village's back streets quickly." },
  { id: "kor-nec-4", name: "Balloon — Cliffs", category: "korok", x: 5900, y: 4000, region: "Necluda", note: "Shoot the balloon on the clifftop east of Hateno Village." },
  { id: "kor-nec-5", name: "Rock — Necluda Sea", category: "korok", x: 6100, y: 4400, region: "Necluda", note: "On the rocky outcrop in the Necluda Sea. Swim or paraglide to reach it." },
  { id: "kor-nec-6", name: "Offering — Ancient Tech", category: "korok", x: 5780, y: 4000, region: "Necluda", note: "Place a baked apple in the bowl at the Ancient Tech Lab entrance." },
  { id: "kor-nec-7", name: "Ball Puzzle — Valley", category: "korok", x: 5500, y: 4500, region: "Necluda", note: "Guide the metal ball into the cup sculpture near Dueling Peaks valley exit using Magnesis." },
  // Faron
  { id: "kor-far-1", name: "Under Rock — Faron Coast", category: "korok", x: 4900, y: 6500, region: "Faron", note: "On the clifftop above Faron Sea. Lift the lone rock on the overhang." },
  { id: "kor-far-2", name: "Flower Trail — Jungle", category: "korok", x: 5100, y: 6300, region: "Faron", note: "Follow the sparkle trail through the dense jungle. Sprinting is necessary — boost your stamina first." },
  { id: "kor-far-3", name: "Pinwheel — Lurelin", category: "korok", x: 5480, y: 6700, region: "Faron", note: "Shoot all three pinwheel targets above Lurelin Village simultaneously with one arrow or in rapid succession." },
  { id: "kor-far-4", name: "Balloon — Coastal Cliff", category: "korok", x: 5350, y: 6500, region: "Faron", note: "Balloon tied to the palm tree above the Faron coast. Shoot it with an arrow from the cliff." },
  { id: "kor-far-5", name: "Diving Rings — Waterfall", category: "korok", x: 4750, y: 6200, region: "Faron", note: "Dive from the Faron waterfall cliff through the glowing ring below." },
  { id: "kor-far-6", name: "Under Rock — Faron Wilds", category: "korok", x: 5250, y: 6750, region: "Faron", note: "Hidden on a jungle islet south of Faron Tower. Paraglide from the tower." },
  // Dueling Peaks
  { id: "kor-dp-1", name: "Rock Circle — River", category: "korok", x: 4850, y: 5100, region: "Dueling Peaks", note: "Rock pattern by the river under the bridge. Place the missing stone in the ring." },
  { id: "kor-dp-2", name: "Pinwheel — Bridge", category: "korok", x: 4950, y: 4800, region: "Dueling Peaks", note: "Shoot the pinwheel target above the Hylia River wooden bridge." },
  { id: "kor-dp-3", name: "Flower Trail — Peak Base", category: "korok", x: 4800, y: 5000, region: "Dueling Peaks", note: "Touch all five flower sparks at the base of Dueling Peaks quickly." },
  { id: "kor-dp-4", name: "Ball-Cup — South", category: "korok", x: 4700, y: 5150, region: "Dueling Peaks", note: "Guide the metal ball along the groove and into the cup hole south of the bridge." },
  { id: "kor-dp-5", name: "Under Rock — Riverside", category: "korok", x: 4900, y: 4900, region: "Dueling Peaks", note: "Lone suspicious rock on the riverbank. Lift it." },
  // Lake

  { id: "kor-lake-1", name: "Under Rock — Lake Shore", category: "korok", x: 3400, y: 6000, region: "Lake", note: "On the shore of Lake Hylia. Lift the suspicious lone rock." },
  { id: "kor-lake-2", name: "Jump Rings — Above Lake", category: "korok", x: 3600, y: 5900, region: "Lake", note: "Paraglide from the tower and through the three rings over Lake Hylia. Angle yourself carefully." },
  { id: "kor-lake-3", name: "Flower Trail — Riverside", category: "korok", x: 3800, y: 5800, region: "Lake", note: "Follow the sparkle trail along the river south of Lake Hylia." },
  { id: "kor-lake-4", name: "Offering Bowl — Ruins", category: "korok", x: 3700, y: 5600, region: "Lake", note: "Place an apple in the bowl at the Lake Hylia ancient ruins near Shae Katha Shrine." },
  { id: "kor-lake-5", name: "Balloon — Bridge Pillar", category: "korok", x: 3550, y: 6150, region: "Lake", note: "Shoot the balloon tied under the Floria Bridge with an arrow from the bank." },
  // Ridgeland
  { id: "kor-rid-1", name: "Under Rock — Ridge", category: "korok", x: 2700, y: 3700, region: "Ridgeland", note: "Lone rock on the Hyrule Ridge hilltop. Lift it." },
  { id: "kor-rid-2", name: "Flower Trail — Spool Bog", category: "korok", x: 2900, y: 3950, region: "Ridgeland", note: "Follow the flower trail over Spool Bog. The flowers move fast — sprint through the bog." },
  { id: "kor-rid-3", name: "Rock Ring — Viewpoint", category: "korok", x: 2500, y: 3250, region: "Ridgeland", note: "A circle of rocks on the Ridgeland viewpoint. One rock is missing — carry the nearby lone rock." },
  { id: "kor-rid-4", name: "Balloon — Thyphlo Tree", category: "korok", x: 2380, y: 3100, region: "Ridgeland", note: "Shoot the balloon in the dark canopy of Thyphlo Ruins. Bring a torch to light the way." },
  { id: "kor-rid-5", name: "Ball Cup — Tower Base", category: "korok", x: 2620, y: 3520, region: "Ridgeland", note: "Metal ball puzzle at the foot of Ridgeland Tower. Use Magnesis to guide the ball into the slot." },
  { id: "kor-rid-6", name: "Under Rock — Calora Lake", category: "korok", x: 3000, y: 4000, region: "Ridgeland", note: "On the small rock island in Calora Lake near Shoda Sah Shrine." },
  // Tabantha
  { id: "kor-tab-1", name: "Jump Rings — Tabantha Plains", category: "korok", x: 1700, y: 2850, region: "Tabantha", note: "Paraglide through three rings above the Tabantha Plains. Catch updraft from the cliff." },
  { id: "kor-tab-2", name: "Under Rock — Ancient Columns", category: "korok", x: 1880, y: 2980, region: "Tabantha", note: "Lift the lone rock near the Ancient Columns on the plateau." },
  { id: "kor-tab-3", name: "Flower Trail — Rito", category: "korok", x: 1720, y: 2050, region: "Tabantha", note: "Follow sparkles circling above Rito Village. Glide from the top perch." },
  { id: "kor-tab-4", name: "Balloon — Nero Hill", category: "korok", x: 1900, y: 2750, region: "Tabantha", note: "Shoot the balloon floating above Nero Hill using a bow from the adjacent cliff." },
  { id: "kor-tab-5", name: "Offering Bowl — Winds", category: "korok", x: 1650, y: 2680, region: "Tabantha", note: "Drop a Wildberry into the bowl atop Tabantha Great Bridge pillar." },
  { id: "kor-tab-6", name: "Under Rock — Bridge", category: "korok", x: 1600, y: 3150, region: "Tabantha", note: "Beneath the Tabantha Great Bridge on a stone ledge. Glide under. Lift the rock." },
  // Hebra
  { id: "kor-heb-1", name: "Snowball Race", category: "korok", x: 1380, y: 1350, region: "Hebra", note: "Race the snowball down Hebra Peak before time runs out. Follow directly behind it." },
  { id: "kor-heb-2", name: "Under Snow Rock", category: "korok", x: 1200, y: 1600, region: "Hebra", note: "The suspicious rock near Mozo Shenno Shrine is buried under snow. Clear it and lift." },
  { id: "kor-heb-3", name: "Flower Trail — Frozen Lake", category: "korok", x: 1600, y: 1250, region: "Hebra", note: "Follow sparkles flowers across the frozen lake. Sprint quickly — the ice is slippery." },
  { id: "kor-heb-4", name: "Pinwheel — Hebra Canyon", category: "korok", x: 1800, y: 1580, region: "Hebra", note: "Shoot the pinwheel acorn in the Hebra Canyon — it's barely visible. Arrow through the gap." },
  { id: "kor-heb-5", name: "Rock Pattern — Summit", category: "korok", x: 1100, y: 1200, region: "Hebra", note: "Rock circle at Hebra Summit. Place the large missing stone. Use max cold resistance gear." },
  { id: "kor-heb-6", name: "Jump Rings — Peak", category: "korok", x: 1550, y: 1050, region: "Hebra", note: "Paraglide through rings above Gee Ha'kal peak. Needs Revali's Gale + extended stamina." },
  { id: "kor-heb-7", name: "Under Rock — North Hebra", category: "korok", x: 1700, y: 1380, region: "Hebra", note: "On the north Hebra snowfield above the frozen river. Lone rock under snow." },
  { id: "kor-heb-8", name: "Ball Cup — Snow Hollow", category: "korok", x: 1280, y: 1850, region: "Hebra", note: "Guide the metal orb through the snow to land in the cup depression. Magnesis from above." },
  // Gerudo
  { id: "kor-ger-1", name: "Under Rock — Highlands", category: "korok", x: 1750, y: 5000, region: "Gerudo", note: "Rock on a ledge in the Gerudo Highlands snowfield. Needs cold resistance to reach." },
  { id: "kor-ger-2", name: "Pinwheel — Desert", category: "korok", x: 1850, y: 5300, region: "Gerudo", note: "Shoot the pinwheel target on top of the large Gerudo Desert sandstone." },
  { id: "kor-ger-3", name: "Flower Trail — Oasis", category: "korok", x: 2050, y: 5050, region: "Gerudo", note: "Follow sparkles around the Kara Kara Bazaar oasis quickly." },
  { id: "kor-ger-4", name: "Jump Rings — Canyon", category: "korok", x: 1950, y: 4850, region: "Gerudo", note: "Paraglide through the three rings in Gerudo Canyon. Glide from the west wall." },
  { id: "kor-ger-5", name: "Offering — Town Gate", category: "korok", x: 1920, y: 5360, region: "Gerudo", note: "Place a hydromelon in the bowl at the Gerudo Town gate. Hydromelons sold in town." },
  { id: "kor-ger-6", name: "Ball Cup — Sand", category: "korok", x: 1680, y: 5200, region: "Gerudo", note: "Guide the metal ball through the sand groove into the stone cup. Use Magnesis carefully." },
  // Wasteland
  { id: "kor-wast-1", name: "Under Rock — Dunes", category: "korok", x: 1450, y: 6180, region: "Wasteland", note: "Lone rock half-buried in Toruma Dunes. Lift it with Magnesis." },
  { id: "kor-wast-2", name: "Balloon — Ruins", category: "korok", x: 1650, y: 6400, region: "Wasteland", note: "Shoot the balloon drifting over the Wasteland Ruins at dusk." },
  { id: "kor-wast-3", name: "Rock Ring — Fossils", category: "korok", x: 1350, y: 6650, region: "Wasteland", note: "Rock circle near the Molduga fossil bones. Carry the missing stone from the nearby rocks." },
  { id: "kor-wast-4", name: "Flower Trail — Ruins", category: "korok", x: 1750, y: 6700, region: "Wasteland", note: "Follow sparkle flowers through the South Lomei Ruins." },
  // Great Hyrule Forest
  { id: "kor-for-1", name: "Under Rock — Lost Woods", category: "korok", x: 3620, y: 2350, region: "Great Hyrule Forest", note: "In the Lost Woods — follow the leaves blowing in the wind to navigate. The rock is near the Korok Forest entrance." },
  { id: "kor-for-2", name: "Pinwheel — Forest", category: "korok", x: 3450, y: 2580, region: "Great Hyrule Forest", note: "Shoot all three pinwheel targets in the Korok Forest clearing. Some are behind trees." },
  { id: "kor-for-3", name: "Flower Trail — Maze", category: "korok", x: 3550, y: 2450, region: "Great Hyrule Forest", note: "Follow the sparkle trail through the Lost Woods maze. Lose track and you get warped back." },
  { id: "kor-for-4", name: "Offering Bowl — Forest", category: "korok", x: 3480, y: 2520, region: "Great Hyrule Forest", note: "Place an Acorn in the bowl at the Korok elder's stump. Acorns found all over Korok Forest." },
  // Central Hyrule
  { id: "kor-cen-1", name: "Under Rock — Hyrule Field", category: "korok", x: 4100, y: 4100, region: "Central Hyrule", note: "Lone suspicious rock in the middle of the open Hyrule Field. High Guardian activity — move fast." },
  { id: "kor-cen-2", name: "Rock Ring — East Field", category: "korok", x: 4500, y: 4250, region: "Central Hyrule", note: "Rock ring east of Hyrule Castle. Place the missing stone while avoiding Guardians." },
  { id: "kor-cen-3", name: "Balloon — Castle Wall", category: "korok", x: 4000, y: 3500, region: "Central Hyrule", note: "Balloon floating near Hyrule Castle's outer wall. Shoot from a safe distance." },
  { id: "kor-cen-4", name: "Flower Trail — Coliseum", category: "korok", x: 3850, y: 4150, region: "Central Hyrule", note: "Follow the flower sparks around the Coliseum Ruins. Beware the Lynel inside." },
  { id: "kor-cen-5", name: "Diving Ring — Moat", category: "korok", x: 4150, y: 3700, region: "Central Hyrule", note: "Dive from the castle wall into the glowing ring in the moat below. Line up carefully." },
];
