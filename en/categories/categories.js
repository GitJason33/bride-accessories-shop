// import category items
// import {
//   crowns,
//   headbands,
//   flowers,
//   haircombs,
//   glasses,
//   bracelets,
//   rita_crowns,
//   rita_combs
// } from "../../items.js";

// import {
//   imageDirectory, 
//   pgCrown,
//   pgBracelet, 
//   pgFlower, 
//   pgHeadband, 
//   pgGlass,
//   pgHaircomb, 
//   pgCoRita, 
//   pgCrRita 
// } from "../../otherTools.js"

function categoryLoad(){
  loading();
  createItems();
  createPagination();
}
// check the category page and its number
const page = document.querySelector("input[id]");

// for crowns
const crowns = [
  //0 - 8
  { // 1.1
    source: "crown 1.jpg",
    description: "Cubic Zircon Tiara",
    code: "Code: GH0025",
  },
  { // 1.2
    source: "crown 2.jpg",
    description: "Flower Tiara",
    code: "Code: G4618",
  },
  { // 1.3
    source: "crown 3.jpg",
    description: "Platinum Plated, 24K Gold Plated",
    code: "",
  },
  { // 1.4
    source: "crown 4.jpg",
    description: "Cubic Zircon Crown",
    code: "Code: SL-GSHG0122",
  },
  { // 1.5
    source: "crown 5.jpg",
    description: "Pearl Headpiece",
    code: "Code: BC6092",
  },
  { // 1.6
    source: "crown 6.jpg",
    description: "Platinum Plated, 24K Gold Plated",
    code: "",
  },
  { // 1.7
    source: "crown 10.jpg",
    description: "Vintage Crystal Tiara",
    code: "Code: HG239",
  },
  { // 1.8
    source: "crown 11.jpg",
    description: "Ceramic alloy crystal",
    code: "Code: O873"
  },
  { // 1.9
    source: "crown 12.jpg",
    description: "crystal crown",
    code: "Code: HG191"
  },
  // 9 - 17
  { // 2.1
    source: "crown 13.jpg",
    description: "Zircon platinum plated",
    code: "Code: 146"
  },
  { // 2.2
    source: "crown 14.jpg",
    description: "Vintage Retro Gold",
    code: "Code: Hana0036420"
  },
  { // 2.3
    source: "crown 16.jpg",
    description: "Platinum Plated Zircon",
    code: "116# MODEL"
  },
  { // 2.4
    source: "crown 20.jpg",
    description: "Silver band",
    code: "Code: PTY067"
  },
  { // 2.5
    source: "crown 21.jpg",
    description: "Elegant Crystal Tiara",
    code: "Code: HG105"
  },
  { // 2.6
    source: "crown 23.jpg",
    description: "Copper zircon platinum",
    code: ""
  },
  { // 2.7
    source: "crown 24.jpg",
    description: "Platinum Plated Zircon",
    code: "Code: 23"
  },
  { // 2.8
    source: "crown 25.jpg",
    description: "Zircon crystal Tiara",
    code: "Code: Zuan1307"
  },
  { // 2.9
    source: "crown 26.jpg",
    description: "Retro Dark Baroque",
    code: "Code: W-HG1078"
  },
  // 18 - 26
  { // 3.1
    source: "crown 27.jpg",
    description: "24K Gold Plated",
    code: "Code: GSHG-183#"
  },
  { // 3.2
    source: "crown 28.jpg",
    description: "24K Gold Plated",
    code: "Code: 191#"
  },
  { // 3.3
    source: "crown 29.jpg",
    description: "Platinum Plated Crown",
    code: "Code: 136"
  },
  { // 3.4
    source: "crown 30.jpg",
    description: "Cubic Zircon",
    code: "Code: GS0337",
  },
  { // 3.5
    source: "crown 31.jpg",
    description: "butterfly flower crystal golden",
    code: "Code: HR497"
  },
  { // 3.6
    source: "crown 32.jpg",
    description: "Ivory Pearl Flowers Headband",
    code: "Code: BC6109"
  },
  { // 3.7
    source: "crown 34.jpg",
    description: "Alloy Crystal Rhinestone",
    code: "Code: H1184"
  },
  { // 3.8
    source: "crown 33.jpg",
    description: "Platinum Plated Crown",
    code: "Code: 191#"
  },
  { // 3.9
    source: "crown 35.jpg",
    description: "Platinum Plated, Gold Plated ZIRCON",
    code: ""
  },
  // 27 - 30
  { // 4.1
    source: "crown 36.jpg",
    description: "Platinum Plated, 24K Gold Plated",
    code: ""
  },
  { // 4.2
    source: "crown 37.jpg",
    description: "Platinum Plated",
    code: "",
  },
  { // 4.3
    source: "crown 38.jpg",
    description: "Platinum Plated",
    code: "",
  }
];

// for headbands
const headbands = [
  // 0 - 8
  { // 1.1
    source: "headband 1.jpg",
    description: "Rhinestone-Bead-Pearl",
    code: "Code: HP288",
  },
  { // 1.2
    source: "headband 2.jpg",
    description: "Tiara Bohemdressorehead",
    code: "Code: HP466",
  },
  { // 1.3
    source: "headband 3.jpg",
    description: "Rhinestone",
    code: "Code: HP453",
  },
  { // 1.4
    source: "headband 4.jpg",
    description: "Rhinestone Tiara Handmade",
    code: "Code: HP433",
  },
  { // 1.5
    source: "headband 5.jpg",
    description: "Cubic Zirconia gold silver plated",
    code: "Code: 228",
  },
  { // 1.6
    source: "headband 6.jpg",
    description: "Rhinestone-Pearl",
    code: "Code: HP266",
  },
  { // 1.7
    source: "headband 7.jpg",
    description: "Platinum Plated",
    code: "MODEL 83#",
  },
  { // 1.8
    source: "headband 8.jpg",
    description: "Flower-Pearl-crystal",
    code: "Code: HP467",
  },
  { // 1.9
    source: "headband 9.jpg",
    description: "Rhinestone-Crystal-Pearl",
    code: "Code: HP453",
  },
  // 9 - 17
  { // 2.1
    source: "headband 10.jpg",
    description: "Rhinestone/Alloy flower",
    code: "Code: HP384",
  },
  { // 2.2
    source: "headband 11.jpg",
    description: "Baroque Flower Rhinestone Pearl",
    code: "Code: BC6121",
  },
  { // 2.3
    source: "headband 12.jpg",
    description: "Pearls Beads Baroque",
    code: "Code: HB6596",
  },
  { // 2.4
    source: "headband 13.jpg",
    description: "Rhinestone crystal leaf",
    code: "Code: SG0805",
  },
  { // 2.5
    source: "headband 14.jpg",
    description: "Rhinestone Headbands",
    code: "Code: HP351",
  },
  { // 2.6
    source: "headband 15.jpg",
    description: "Pearl Crystal",
    code: "Code: HP357",
  },
  { // 2.7
    source: "headband 16.jpg",
    description: "Pearl Crystal",
    code: "Code: HP354",
  },
  { // 2.8
    source: "headband 17.jpg",
    description: "Silver Rhinestone",
    code: "Code: HP414",
  },
  { // 2.9
    source: "headband 18.jpg",
    description: "Platinum Plated",
    code: "Code: SL-GSHS0117",
  },
  // 18 - 26
  { // 3.1
    source: "headband 19.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP501",
  },
  { // 3.2
    source: "headband 20.jpg",
    description: "Elegant Banquet",
    code: "Code: HP472",
  },
  { // 3.3
    source: "headband 21.jpg",
    description: "24K Gold Plated Zircon",
    code: "Code: Model 164#",
  },
  { // 3.4
    source: "headband 22.jpg",
    description: "Flower pearl Crystal",
    code: "Code: HP357",
  },
  { // 3.5
    source: "headband 23.jpg",
    description: "Platinum Plated Zircon",
    code: "Code: Model 164#",
  },
  { // 3.6
    source: "headband 24.jpg",
    description: "Ceramic Flower Headband",
    code: "Code: W-TS0110-1",
  },
  { // 3.7
    source: "headband 25.jpg",
    description: "Rhinestone/Alloy flower",
    code: "Code: HP240",
  },
  { // 3.8
    source: "headband 26.jpg",
    description: "Pearls Beads Baroque",
    code: "Code: HB6596",
  },
  { // 3.9
    source: "headband 27.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP351",
  },
  // 27 - 35
  { // 4.1
    source: "headband 28.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP388",
  },
  { // 4.2
    source: "headband 30.jpg",
    description: "Platinum/ 24K Gold Plated, Zircon",
    code: "",
  },
  { // 4.3
    source: "headband 31.jpg",
    description: "Platinum/ 24K Gold Plated, Zircon",
    code: "",
  },
  { // 4.4
    source: "headband 32.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP404",
  },
  { // 4.5
    source: "headband 33.jpg",
    description: "Elegant Banquet",
    code: "Code: HP473",
  },
  { // 4.6
    source: "headband 34.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP479",
  },
  { // 4.7
    source: "headband 35.jpg",
    description: "Pearl Tassel Headband",
    code: "Code: SA01"
  },
  { // 4.8
    source: "headband 41.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP450"
  },
  { // 4.9
    source: "headband 45.jpg",
    description: "Rhinestone/Alloy flower",
    code: "Code: HP284"
  },
  // 36 - 42
  { // 5.1
    source: "headband 46.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP388"
  },
  { // 5.2
    source: "headband 47.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP404"
  },
  { // 5.3
    source: "headband 48.jpg",
    description: "Platinum Plated Zircon",
    code: "Code: Model 164#"
  },
  { // 5.4
    source: "headband 49.jpg",
    description: "Pearl Headband",
    code: "Code: BC6094"
  },
  { // 5.5
    source: "headband 50.jpg",
    description: "Platinum/ 24K Gold Plated Zircon",
    code: "Code: BC6094"
  },
  { // 5.6
    source: "headband 51.jpg",
    description: "Rhinestone Headband",
    code: "Code: HP479"
  }
];

// for haircombs
const haircombs = [
  { // 1.1
    source: "comb 1.jpg",
    description: "HAIR COMB 1064",
    code: "",
  },
  { // 1.2
    source: "comb 2.jpg",
    description: "Comb Pearl",
    code: "HS-J4744",
  },
  { // 1.4
    source: "comb 4.jpg",
    description: "Rhinestone, Alloy flower/ leaf, Pearl",
    code: "Code: HP268",
  },
  { // 1.5
    source: "comb 5.jpg",
    description: "Pearl Bridal Combs",
    code: "Code: FS044",
  },
  { // 1.6
    source: "comb 6.jpg",
    description: "Rhinestone",
    code: "Code: HP461",
  },
  { // 1.7
    source: "comb 7.jpg",
    description: "ceramics pearls combs",
    code: "Code: S8440",
  },
  { // 1.9
    source: "comb 9.jpg",
    description: "Crystal Pearl Ornaments",
    code: "Code: HP268",
  },
  // 9 - 17
  { // 2.1
    source: "comb 10.jpg",
    description: "HAIR COMB 1069",
    code: "",
  },
  { // 2.2
    source: "comb 11.jpg",
    description: "Pearl, Crystal, Rhinestone",
    code: "Code: HP406",
  },
  { // 2.3
    source: "comb 12.jpg",
    description: "Pearl, Crystal, Rhinestone",
    code: "Code: HP406",
  },
  { // 2.4
    source: "comb 14.jpg",
    description: "Tiara Bohemdressorehead",
    code: "Code: HP466",
  },
  { // 2.5
    source: "comb 15.jpg",
    description: "HAIR PINS 1065",
    code: "",
  },
  { // 2.6
    source: "comb 16.jpg",
    description: "Vintage Big Crystal",
    code: "Code: HS-J4478",
  },
  { // 2.8
    source: "comb 19.jpg",
    description: "Combs Clips",
    code: "Code: HS-J4999",
  },
  { // 2.9
    source: "comb 20.jpg",
    description: "ELEVEN JIAN",
    code: "",
  },
  // 18 - 26
  { // 3.1
    source: "comb 24.jpg",
    description: "Rhinestone-Pearl",
    code: "Code: HP266",
  },
  { // 3.2
    source: "comb 25.jpg",
    description: "Pearls Cubic Zircon",
    code: "SL-ZC2017031324",
  },
  { // 3.3
    source: "comb 29.jpg",
    description: "HAIR COMB 1066",
    code: "Code: SL-HS1064",
  },
  { // 3.4
    source: "comb 31.jpg",
    description: "Leaf Flower Pearl",
    code: "Code: HM6075",
  },
  { // 3.5
    source: "comb 32.jpg",
    description: "Hair comb",
    code: "",
  },
  { // 3.6
    source: "comb 33.jpg",
    description: "Hair comb",
    code: "",
  },
  { // 3.7
    source: "comb 34.jpg",
    description: "HAIR COMB 1067",
    code: "",
  },
  { // 3.8
    source: "comb 35.jpg",
    description: "Silver Pearl Bead Crystal",
    code: "Code: S8210",
  }
];

// for flowers
const flowers = [
  // 0 -> 8
  { // 1.1
    source: "flower 1.jpg",
    description: "White",
    code: "Code: PTY0667",
  },
  { // 1.2
    source: "flower 2.jpg",
    description: "Silver plated",
    code: "Code: WBT024",
  },
  { // 1.3
    source: "flower 3.jpg",
    description: "Pearl",
    code: "Code: HF24",
  },
  { // 1.4
    source: "flower 4.jpg",
    description: "Crystal rhinestone",
    code: "Code: FBY03295",
  },
  { // 1.5
    source: "flower 6.jpg",
    description: "White",
    code: "Code: WBT043",
  },
  { // 1.6
    source: "flower 7.jpg",
    description: "White",
    code: "Code: WBT044",
  },
  { // 1.7
    source: "flower 8.jpg",
    description: "White",
    code: "Code: WBT060",
  },
  { // 1.8
    source: "flower 10.jpg",
    description: "Crystal diamond",
    code: "Code: T4177",
  },
  { // 1.9
    source: "flower 11.jpg",
    description: "Silver Pearl crystal",
    code: "Code: PTY0669",
  },
  // 9 -> 17
  { // 2.1
    source: "flower 12.jpg",
    description: "pearl crystal feather",
    code: "Code: HF03",
  },
  { // 2.2
    source: "flower 13.jpg",
    description: "Crystal feather",
    code: "Code: PTY0668-1",
  },
  { // 2.3
    source: "flower 14.jpg",
    description: "Silver feather",
    code: "Code: PTY0266-3",
  },
  { // 2.4
    source: "flower 15.jpg",
    description: "Silver crystal",
    code: "Code: PTY0261",
  },
  { // 2.5
    source: "flower 16.jpg",
    description: "Natural",
    code: "Code: WBT051",
  },
  { // 2.6
    source: "flower 17.jpg",
    description: "Pearl Silver",
    code: "Code: WBT041",
  },
  {// 2.7
    source: "flower 18.jpg",
    description: "Silver plated",
    code: "Code: PTY0671",
  },
  { // 2.8
    source: "flower 21.jpg",
    description: "Gold plated",
    code: "Code: PTY0672",
  },
  { // 2.9
    source: "flower 22.jpg",
    description: "Crystal diamond",
    code: "Code: PTY0668-2",
  },
  // 18 -> 21
  { // 3.1
    source: "flower 32.jpeg",
    description: "Flower handpieces",
    code: "Code: Tu007",
  },
  { // 3.2
    source: "flower 24.jpg",
    description: "White crystal",
    code: "Code: WBT034",
  },
  { // 3.3
    source: "flower 25.jpeg",
    description: "White red silk diamond",
    code: "Code: FBY0394",
  },
  { // 3.4
    source: "flower 26.jpeg",
    description: "Flower handpieces",
    code: "Code: Tu001",
  },
  { // 3.5
    source: "flower 27.jpeg",
    description: "Flower handpieces",
    code: "Code: Tu002",
  },
  { // 3.6
    source: "flower 28.jpeg",
    description: "Flower handpieces",
    code: "Code: Tu003",
  },
  { // 3.7
    source: "flower 29.jpeg",
    description: "Flower handpieces",
    code: "Code: Tu004",
  },
  { // 3.8
    source: "flower 30.jpeg",
    description: "Flower handpieces",
    code: "Code: Tu005",
  },
  { // 3.9
    source: "flower 31.jpeg",
    description: "Flower handpieces",
    code: "Code: Tu006",
  },
  
  { // 4.1
    source: "flower 23.jpg",
    description: "Silver Bouquets",
    code: "Code: PTY0266-5",
  },
];

// for glasses
const glasses = [
  { // 1.1
    source: "glasses 2.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  { // 1.2
    source: "glasses 3.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  { // 1.3
    source: "glasses 4.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  { // 1.4
    source: "glasses 5.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  { // 1.5
    source: "glasses 6.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  { // 1.6
    source: "glasses 7.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  { // 1.7
    source: "glasses 8.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  { // 1.8
    source: "glasses 9.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  { // 1.9
    source: "glasses 10.jpg",
    description: "Handmade Toasting Glass",
    code: "Code: PTY0723",
  },
];

// for bracelets
const bracelets = [
  { // 1.1
    source: "bracelet 1.jpg",
    description: "Silver Bracelet",
    code: "Code: PTY0673",
  },
];

// rita-mode: crowns
const rita_crowns = [
  // crowns in rita
  // page 1: 0 -> 8
  { // 1.1
    source: "crown39.jpg",
    description: "Crown",
    code: "Code: 96872",
  },
  { // 1.2
    source: "crown40.jpg",
    description: "Crown",
    code: "Code: 92231",
  },
  { // 1.3
    source: "crown41.jpg",
    description: "Tiara",
    code: "Code: 94527",
  },
  { // 1.4
    source: "crown42.jpg",
    description: "Tiara",
    code: "Code: 92209",
  },
  { // 1.5
    source: "crown43.jpg",
    description: "Tiara",
    code: "Code: 96953",
  },
  { // 1.6
    source: "crown44.jpg",
    description: "Tiara",
    code: "Code: 93072",
  },
  { // 1.7
    source: "crown45.jpg",
    description: "Tiara",
    code: "Code: 94526",
  },
  { // 1.8
    source: "crown46.jpg",
    description: "Tiara",
    code: "Code: 96286",
  },
  { // 1.9
    source: "crown47.jpg",
    description: "Tiara",
    code: "Code: 95145",
  },
  // page 2: 9 -> 17
  { // 2.1
    source: "crown48.jpg",
    description: "Tiara",
    code: "Code: 95924",
  },
  { // 2.2
    source: "crown49.jpg",
    description: "Tiara",
    code: "Code: 95998",
  },
  { // 2.3
    source: "crown50.jpg",
    description: "Tiara",
    code: "Code: 95923",
  },
  { // 2.4
    source: "crown51.jpg",
    description: "Tiara",
    code: "Code: 96799",
  },
  { // 2.5
    source: "crown52.jpg",
    description: "Tiara",
    code: "Code: 96823",
  },
  { // 2.6
    source: "crown53.jpg",
    description: "Tiara",
    code: "Code: 95922",
  },
  { // 2.7
    source: "crown54.jpg",
    description: "Tiara",
    code: "Code: 96983",
  },
  { // 2.8
    source: "crown56.jpg",
    description: "Tiara",
    code: "Code: 96463",
  },
  { // 2.9
    source: "crown57.jpg",
    description: "Tiara",
    code: "Code: 95925",
  },
  // page 3: 18 -> 26
  { // 3.1
    source: "crown58.jpg",
    description: "Tiara",
    code: "Code: 97738",
  },
  { // 3.2
    source: "crown59.jpg",
    description: "Tiara",
    code: "Code: 97737",
  },
  { // 3.3
    source: "crown60.jpg",
    description: "Tiara",
    code: "Code: 97745",
  },
  { // 3.4
    source: "crown61.jpg",
    description: "Tiara",
    code: "Code: 97704",
  },
  { // 3.5
    source: "crown62.jpg",
    description: "Tiara",
    code: "Code: 97703",
  },
  { // 3.6
    source: "crown63.jpg",
    description: "Tiara",
    code: "Code: 97613",
  },
  { // 3.7
    source: "crown64.jpg",
    description: "Tiara",
    code: "Code: 97603",
  },
  { // 3.8
    source: "crown65.jpg",
    description: "Tiara",
    code: "Code: 97601",
  },
  { // 3.9
    source: "crown66.jpg",
    description: "Tiara",
    code: "Code: 97595",
  },
  // page 4: 27 -> 35
  { // 4.1
    source: "crown67.jpg",
    description: "Tiara",
    code: "Code: 97581",
  },
  { // 4.2
    source: "crown68.jpg",
    description: "Tiara",
    code: "Code: 97510",
  }, 
  { // 4.3
    source: "crown69.jpg",
    description: "Tiara",
    code: "Code: 97282",
  },
  { // 4.4
    source: "crown70.jpg",
    description: "Tiara",
    code: "Code: 97693",
  },
  { // 4.5
    source: "crown71.jpg",
    description: "Tiara",
    code: "Code: 95519",
  },
  { // 4.6
    source: "crown72.jpg",
    description: "Tiara",
    code: "Code: 94656",
  },
  { // 4.7
    source: "crown73.jpg",
    description: "Tiara",
    code: "Code: 94540",
  },
  { // 4.8
    source: "crown74.jpg",
    description: "Tiara",
    code: "Code: 95043",
  },
];

// rita-mode: haircombs
const rita_combs = [
  // combs in rita
  // page 5: 0 -> 8
  {
    // 1.1
    source: "comb39.jpg",
    description: "Comb",
    code: "",
  },
  {
    // 1.2
    source: "comb40.jpg",
    description: "Comb",
    code: "",
  },
  {
    // 1.3
    source: "comb41.jpg",
    description: "Comb",
    code: "",
  },
  {
    // 1.4
    source: "comb42.jpg",
    description: "Comb",
    code: "",
  },
  {
    // 1.5
    source: "comb43.jpg",
    description: "Comb",
    code: "",
  },
  {
    // 1.6
    source: "comb44.jpg",
    description: "Clip with flower",
    code: "Code: 11338",
  },
  {
    // 1.7
    source: "comb45.jpg",
    description: "Comb with flower",
    code: "Code: 94028",
  },
  {
    // 1.8
    source: "comb46.jpg",
    description: "Comb",
    code: "Code: 96083",
  },
  {
    // 1.9
    source: "comb47.jpg",
    description: "Comb",
    code: "",
  },
  // page 6: 9 -> 17
  {
    // 2.1
    source: "comb48.jpg",
    description: "Comb",
    code: "",
  },
  {
    // 2.2
    source: "comb49.jpg",
    description: "Comb",
    code: "Code: 96252",
  },
  {
    // 2.3
    source: "comb50.jpg",
    description: "Comb",
    code: "Code: 96513",
  },
  {
    // 2.4
    source: "comb51.jpg",
    description: "Comb",
    code: "Code: 96284",
  },
  {
    // 2.5
    source: "comb52.jpg",
    description: "Comb",
    code: "Code: 96593",
  },
  {
    // 2.6
    source: "comb53.jpg",
    description: "Comb",
    code: "Code: 96535",
  },
  {
    // 2.7
    source: "comb54.jpg",
    description: "Comb",
    code: "Code: 94404",
  },
  {
    // 2.8
    source: "comb55.jpg",
    description: "Comb",
    code: "Code: 94518",
  },
  {
    // 2.9
    source: "comb56.jpg",
    description: "Comb",
    code: "Code: 94170",
  },
  // page 7: 18 -> 26
  {
    // 3.1
    source: "comb57.jpg",
    description: "Comb",
    code: "Code: 96084",
  },
  {
    // 3.2
    source: "comb58.jpg",
    description: "Comb",
    code: "Code: 94766",
  },
  {
    // 3.3
    source: "comb59.jpg",
    description: "Comb",
    code: "Code: 93042",
  },
  {
    // 3.4
    source: "comb60.jpg",
    description: "Comb",
    code: "Code: 94385",
  },
  {
    // 3.5
    source: "comb61.jpg",
    description: "Comb",
    code: "Code: 92601",
  },
  {
    // 3.6
    source: "comb62.jpg",
    description: "Comb",
    code: "Code: 92706",
  },
  {
    // 3.7
    source: "comb63.jpg",
    description: "Comb",
    code: "Code: 96536",
  },
  {
    // 3.8
    source: "comb64.jpg",
    description: "Comb",
    code: "Code: 96327",
  },
  {
    // 3.9
    source: "comb65.jpg",
    description: "Comb",
    code: "Code: 96427",
  },
  // page 8: 27 -> 30
  {
    // 4.1
    source: "comb66.jpg",
    description: "Comb",
    code: "Code: 96391",
  },
  {
    // 4.2
    source: "comb67.jpg",
    description: "Comb",
    code: "Code: 94707",
  },
  {
    // 4.3
    source: "comb68.jpg",
    description: "Comb",
    code: "Code: 96545",
  },
  {
    // 4.4
    source: "comb69.jpg",
    description: "Comb",
    code: "Code: 93995",
  },
];

// check the image folder
const imageDirectory = {
  crown: "crowns",
  headband: "headband",
  haircomb: "hair comb",
  flower: "flowers",
  glass: "decorated glasses",
  bracelet: "bracelet",
  rita_crown: "rita-crowns",
  rita_comb: "rita-combs"
};

// items generator: 9 per page
function createItems() {
  let category = page.id;
  let pageNum = parseInt(page.value);
  let items;
  switch (category) {
    case "crown":
      items = crowns;
      break;
    case "headband":
      items = headbands;
      break;
    case "haircomb":
      items = haircombs;
      break;
    case "flower":
      items = flowers;
      break;
    case "glass":
      items = glasses;
      break;
    case "bracelet":
      items = bracelets;
      break;
    case "rita_crown":
      items = rita_crowns;
      break;
    case "rita_comb":
      items = rita_combs;
  }
  let len = items.length < 9 ? items.length : 9 * pageNum;
  if (items.length < 9 * pageNum) len = items.length;

  let start = 9 * (pageNum - 1);
  let container = document.querySelector(".proCatalog");

  for (let i = start; i < len; i++) {
    let catItem = document.createElement("article");
    catItem.className = "catImg";

    let link1 = document.createElement("a");
    let image = document.createElement("img");
    image.src =
      "../../../media/images/" +
      imageDirectory[category] +
      "/" +
      items[i]["source"];
    link1.appendChild(image);

    let subContainer = document.createElement("div");
    subContainer.className = "containInfo";

    let leftCon = document.createElement("div");
    leftCon.className = "left"
    leftCon.innerHTML =
      "<span>" +
      items[i]["description"] +
      "</span><br/>" +
      "<span>" +
      items[i]["code"] +
      "</span>";

    // add description/code - buy
    subContainer.appendChild(leftCon);
    subContainer.innerHTML += createBuy();

    catItem.appendChild(link1);
    catItem.appendChild(subContainer);
    container.appendChild(catItem);
  }
}

const createBuy = ()=> {
  let buttonInner = 
  '<div id="catDropdown" class="buy">\
    <span>\
      BUY<i class="fa-solid fa-chevron-down"></i>\
    </span>\
    <div id="catDropdown-content">\
      <a href="http://wa.me/+96181318832/">\
        <i class="fa-brands fa-square-whatsapp"></i>\
        Whats\
      </a>\
      <a href="https://ig.me/m/lines._group">\
        <i class="fa-brands fa-instagram"></i>\
        Insta\
      </a>\
      <a href="mailto:info@lines-group.co.uk">\
        <i class="fa-solid fa-envelope"></i>\
        Mail\
      </a>\
    </div>\
  </div>';
  return buttonInner;
}

const createPagination = ()=> {
  let category = checkCategory();
  let pageContain = document.querySelector(".pagination");
  pageContain.innerHTML = '<a href="' + category[0] + '">&laquo;</a>';

  for(let i = 0; i < category.length; i++){
    let a = document.createElement("a");
    a.href = category[i];
    if((i+1) == page.value){
      a.className = "activePage";
    }
    pageContain.appendChild(a);
    a.innerHTML = i + 1;
  }
  pageContain.innerHTML +=  '<a href="' + category[category.length-1] + '">&raquo;</a>';
}

const pgCrown = [
  "crowns.html",
  "crowns 2.html",
  "crowns 3.html",
  "crowns 4.html"
];
const pgBracelet = [
  "bracelets.html"
];
const pgFlower = [
  "flowers.html",
  "flowers2.html",
  "flowers3.html",
  "flowers4.html"
];
const pgHeadband = [
  "headbands.html",
  "headbands 2.html",
  "headbands 3.html",
  "headbands 4.html",
  "headbands 5.html"
];
const pgGlass = [
  "toastglass.html"
];
const pgHaircomb = [
  "haircombs.html",
  "haircombs 2.html",
  "haircombs 3.html"
];
const pgCrRita = [
  "cr-rita 1.html",
  "cr-rita 2.html",
  "cr-rita 3.html",
  "cr-rita 4.html"
];
const pgCoRita = [
  "co-rita 1.html",
  "co-rita 2.html",
  "co-rita 3.html",
  "co-rita 4.html"
];

const checkCategory = ()=> {
  switch(page.id){
    case "crown":       return pgCrown;    
    case "bracelet":    return pgBracelet; 
    case "flower":      return pgFlower;   
    case "headband":    return pgHeadband; 
    case "glass":       return pgGlass;    
    case "haircomb":    return pgHaircomb; 
    case "rita_crown":  return pgCrRita;   
    case "rita_comb":   return pgCoRita;   
    default:            return;
  }
}