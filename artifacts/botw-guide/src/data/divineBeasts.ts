export interface DivineBeastStep {
  number: number;
  action: string;
  tip?: string;
}

export interface DivineBeast {
  id: string;
  name: string;
  region: string;
  village: string;
  champion: string;
  reward: string;
  rewardDesc: string;
  difficulty: "Easy" | "Medium" | "Hard";
  prerequisite: string;
  approachSteps: DivineBeastStep[];
  interiorSteps: DivineBeastStep[];
  bossSteps: DivineBeastStep[];
  bossName: string;
  color: string;
}

export const divineBeastData: DivineBeast[] = [
  {
    id: "medoh",
    name: "Vah Medoh",
    region: "Rito Village",
    village: "Rito Village",
    champion: "Revali (Rito)",
    reward: "Revali's Gale",
    rewardDesc: "Create an updraft beneath you, launching Link into the air. Recharges in 6 minutes.",
    difficulty: "Easy",
    prerequisite: "Cold Resistance (Spicy Pepper stew or 1 level cold armor)",
    color: "blue",
    approachSteps: [
      { number: 1, action: "Speak to Kaneli in Rito Village", tip: "He's in the large domed house at the top of the village." },
      { number: 2, action: "Collect 20 Arrows from Harth", tip: "Harth is the wounded Rito in the lower village. He gives you 20 arrows for free." },
      { number: 3, action: "Fly up to Medoh using your Paraglider", tip: "Use the updraft near the peak. You'll need cold resistance for the cold mountain air." },
      { number: 4, action: "Destroy the two cannons on Medoh's wings", tip: "Shoot the orange glowing nodes on each cannon. Dodge the rolling spheres." },
      { number: 5, action: "Land on Medoh's back", tip: "Aim for the back opening after the cannons are disabled." },
    ],
    interiorSteps: [
      { number: 1, action: "Activate the Guidance Stone (map terminal)", tip: "This gives you the map and lets you tilt the beast's wings." },
      { number: 2, action: "Activate Terminal 1", tip: "Shoot the ball into the net using a normal arrow while Medoh is tilted left." },
      { number: 3, action: "Activate Terminal 2 (inside the beast)", tip: "Navigate inside. Tilt the beast to send a metal ball rolling toward the switch." },
      { number: 4, action: "Activate Terminal 3 (spinning fan room)", tip: "Tilt Medoh to stop the fan, walk across, hit the switch." },
      { number: 5, action: "Activate Terminal 4 (on the tail)", tip: "Walk across the tilted exterior. Use Magnesis on the metal ball near the end." },
      { number: 6, action: "Activate Terminal 5 (treasure room)", tip: "Tilt Medoh so the ball slides through the mesh into the goal." },
      { number: 7, action: "Activate the Main Control Unit", tip: "The golden orb at the far end of the beast." },
    ],
    bossName: "Windblight Ganon",
    bossSteps: [
      { number: 1, action: "Phase 1: Dodge the tornado projectiles", tip: "Run sideways — the tornadoes track you slowly. Shoot arrows at the eye during idle moments." },
      { number: 2, action: "Shoot the red eye to deal damage", tip: "Aim carefully. Arrows deal the most damage. Fire arrows work too." },
      { number: 3, action: "Phase 2 (half health): Windblight summons mini fans", tip: "The fans create wind that makes aiming harder. Destroy them with bombs first." },
      { number: 4, action: "Use Revali's Gale upgrade to fly above", tip: "At the start of phase 2, launch into the air and rain arrows down on the eye." },
      { number: 5, action: "Final push", tip: "Ancient Arrows one-shot Windblight. Otherwise continue arrow volleys to the eye." },
    ],
  },
  {
    id: "ruta",
    name: "Vah Ruta",
    region: "Zora's Domain",
    village: "Zora's Domain",
    champion: "Mipha (Zora)",
    reward: "Mipha's Grace",
    rewardDesc: "Automatically revives Link when he dies with bonus temporary hearts. Recharges in 24 minutes.",
    difficulty: "Easy",
    prerequisite: "Shock Arrows (can buy from Hoz or farm from Lynel near the domain)",
    color: "cyan",
    approachSteps: [
      { number: 1, action: "Speak to King Dorephan at Zora's Domain", tip: "He'll tell you about Mipha and explain the situation." },
      { number: 2, action: "Collect 20 Shock Arrows from East Reservoir Lake", tip: "The Lynel on the plateau shoots shock arrows — use Stasis and collect them off the ground. Or buy from Hoz." },
      { number: 3, action: "Dive into the water with Sidon", tip: "Swim alongside Sidon. He'll boost you onto Ruta's back from the water." },
      { number: 4, action: "Ride Sidon's back up the waterfall", tip: "Face forward and shoot shock arrows at the four giant water orbs on Ruta's sides." },
      { number: 5, action: "Hit all four pink orbs with shock arrows", tip: "Each hit makes the orb glow. All four must glow simultaneously." },
    ],
    interiorSteps: [
      { number: 1, action: "Activate the Guidance Stone (map terminal)", tip: "Stand on the platform and insert the Sheikah Slate." },
      { number: 2, action: "Terminal 1: Use Cryonis on the geyser", tip: "Create an ice pillar to block the water flow, then run across to hit the terminal." },
      { number: 3, action: "Terminal 2: Tilt Ruta to fill the basin", tip: "Rotate Ruta 90 degrees clockwise. Water fills the basin. Swim up to the terminal." },
      { number: 4, action: "Terminal 3: Water wheel room", tip: "Tilt Ruta to pour water on the wheel. The spinning wheel opens a path. Jump through." },
      { number: 5, action: "Terminal 4: Upper deck", tip: "Climb out the top hatch. Use Cryonis to scale up water jets on Ruta's trunk." },
      { number: 6, action: "Terminal 5: Tilted chest room", tip: "Tilt Ruta so water fills one section. Swim to the crystal switch terminal." },
      { number: 7, action: "Activate the Main Control Unit", tip: "The heart-shaped terminal in the main chamber." },
    ],
    bossName: "Waterblight Ganon",
    bossSteps: [
      { number: 1, action: "Phase 1: Avoid the spear thrusts", tip: "Waterblight lunges fast. Sidestep and fire arrows into the red eye when it hesitates." },
      { number: 2, action: "Use Cryonis to destroy ice blocks", tip: "It will throw ice blocks. Use Cryonis to shatter them before they hit you." },
      { number: 3, action: "Phase 2 (half health): Room floods", tip: "Create ice pillars with Cryonis to stand on and avoid drowning." },
      { number: 4, action: "Stand on ice pillars to fire arrows", tip: "Aim at the eye repeatedly. Use explosive arrows for burst damage." },
      { number: 5, action: "Final burst", tip: "When it crouches low to charge, it's vulnerable. Unload your strongest arrows." },
    ],
  },
  {
    id: "naboris",
    name: "Vah Naboris",
    region: "Gerudo Desert",
    village: "Gerudo Town",
    champion: "Urbosa (Gerudo)",
    reward: "Urbosa's Fury",
    rewardDesc: "Charge a powerful lightning strike when attacking. Recharges in 12 minutes.",
    difficulty: "Hard",
    prerequisite: "Sand-Seal to ride, Thunder Helm to counter lightning, Gerudo outfit to enter town",
    color: "yellow",
    approachSteps: [
      { number: 1, action: "Enter Gerudo Town disguised as a woman", tip: "Buy the Gerudo outfit (top, veil, sirwal) from Vilia on the cliff above Kara Kara Bazaar for 600 rupees." },
      { number: 2, action: "Speak to Riju, the Gerudo Chief", tip: "She's in the throne room. She'll give you the Thunder Helm to protect against Naboris's lightning." },
      { number: 3, action: "Retrieve the stolen Thunder Helm from Yiga Clan Hideout", tip: "The hideout is north of Karusa Valley. Sneak past guards using bananas as distractions." },
      { number: 4, action: "Rent a Sand-Seal from Patricia", tip: "Riju will lend you hers for the approach. Surf behind it." },
      { number: 5, action: "Bomb the glowing lights on Naboris's legs", tip: "Stay within the Thunder Helm's protection bubble. Shoot the three pink orbs on each leg with bomb arrows." },
    ],
    interiorSteps: [
      { number: 1, action: "Activate the Guidance Stone (map terminal)", tip: "Naboris has three rotating cylindrical drums. You must align them correctly." },
      { number: 2, action: "Rotate drum 1 to position 2", tip: "Each drum has symbols. Rotate using the wall switches until the correct symbol aligns with the door." },
      { number: 3, action: "Rotate drum 2 to position 3", tip: "Cross between drums using the connecting walkways. Time your crossing with the rotation." },
      { number: 4, action: "Rotate drum 3 to position 4", tip: "Innermost drum. The paths are confusing — follow the lit wall arrows." },
      { number: 5, action: "Activate all five terminals (spread across the drums)", tip: "Some terminals are on moving platforms. Use the drums' rotation to reach them." },
      { number: 6, action: "Activate the Main Control Unit", tip: "Center of the third drum when properly aligned." },
    ],
    bossName: "Thunderblight Ganon",
    bossSteps: [
      { number: 1, action: "Phase 1: Avoid the lightning-fast teleport slashes", tip: "Watch for the red spark — that's where it will appear. Dodge the moment it reappears." },
      { number: 2, action: "Shoot arrows into its eye between attacks", tip: "Very fast. Use bomb arrows for easier targeting." },
      { number: 3, action: "Phase 2: It drops metal spikes from ceiling", tip: "The spikes crash down and stand upright. Do NOT stand near them." },
      { number: 4, action: "Grab a spike with Magnesis and throw it at Thunderblight", tip: "It will then electrify the spikes. But first, use Magnesis to hurl one at the boss for big damage." },
      { number: 5, action: "After spike throw stun: rush in with strongest weapon", tip: "It's briefly stunned. Activate Urbosa's Fury if you have it and smash away." },
    ],
  },
  {
    id: "rudania",
    name: "Vah Rudania",
    region: "Death Mountain",
    village: "Goron City",
    champion: "Daruk (Goron)",
    reward: "Daruk's Protection",
    rewardDesc: "Automatically deflects Guardian laser beams three times. Recharges in 8 minutes.",
    difficulty: "Medium",
    prerequisite: "Flamebreaker Armor (buy in Goron City) or Fireproof Elixirs",
    color: "orange",
    approachSteps: [
      { number: 1, action: "Speak to Bludo and Yunobo at Goron City", tip: "Bludo needs Yunobo's help but Yunobo is hiding. Find him at the Abandoned North Mine." },
      { number: 2, action: "Free Yunobo from Boss Moblins", tip: "Use your Bomb Rune to defeat the Moblins guarding Yunobo in the mine." },
      { number: 3, action: "Escort Yunobo up Death Mountain while avoiding sentries", tip: "Rudania sends out guardian sentinels — hide behind rocks when their lights shine on you." },
      { number: 4, action: "Shoot cannons at Rudania to stun it", tip: "Yunobo acts as a cannonball. Wait until he's in position, then fire using the cannon controls." },
      { number: 5, action: "Board Rudania through the cannon top hatch", tip: "After the third successful cannon hit, Rudania opens and you can drop inside." },
    ],
    interiorSteps: [
      { number: 1, action: "Activate the Guidance Stone (map terminal)", tip: "Rudania can be tilted 90 degrees to change where lava flows." },
      { number: 2, action: "Terminal 1: Tilt Rudania sideways", tip: "Walk into the first room. Tilt 90 degrees — a metal box slides to reveal a button." },
      { number: 3, action: "Terminal 2: Lava flow puzzle", tip: "Direct lava away from the terminal using Rudania's tilt. Let the floor cool before approaching." },
      { number: 4, action: "Terminal 3: Rolling rocks room", tip: "Tilt Rudania so rocks roll away from you. Navigate to the terminal while tilted." },
      { number: 5, action: "Terminal 4: Use Yunobo as a cannonball", tip: "There's an internal cannon. Shoot Yunobo (visible through the porthole) at the cracked wall to reveal the terminal." },
      { number: 6, action: "Terminal 5: External tail section", tip: "Tilt Rudania to walk along the outer surface. Hit the crystal switch at the tip of the tail." },
      { number: 7, action: "Activate the Main Control Unit", tip: "Center of Rudania's head. Tilt the beast upright first." },
    ],
    bossName: "Fireblight Ganon",
    bossSteps: [
      { number: 1, action: "Phase 1: Avoid fire sword slashes", tip: "Stay at medium range. Roll sideways when it swings. Shoot the eye with arrows between swings." },
      { number: 2, action: "Dodge the fire sphere attack", tip: "It throws a huge slow fire sphere. Shoot a bomb arrow at it to detonate it in mid-air." },
      { number: 3, action: "Phase 2 (half health): It creates a fire barrier", tip: "Don't touch the fire shield. Wait for it to suck in air — that's your window." },
      { number: 4, action: "Throw a bomb into the suction vortex", tip: "When Fireblight sucks in air, toss a bomb. It gets pulled in and explodes, stunning the boss." },
      { number: 5, action: "Rush in while stunned", tip: "Activate Daruk's Protection if needed. Use your strongest weapon on the exposed eye." },
    ],
  },
];
