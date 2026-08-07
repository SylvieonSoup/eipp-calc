import type * as I from './interface';
import {type DeepPartial, toID, extend, assignWithout} from '../util';

export interface SpeciesData {
  readonly types: [I.TypeName] | [I.TypeName, I.TypeName];
  // TODO: replace with baseStats
  readonly bs: {
    hp: number;
    at: number;
    df: number;
    sa?: number;
    sd?: number;
    sl?: number;
    sp: number;
  };
  readonly weightkg: number;
  readonly gender?: I.GenderName;
  readonly nfe?: boolean;
  readonly abilities?: {0: string};
  readonly canGigantamax?: string;
  readonly otherFormes?: string[];
  readonly baseSpecies?: string;
}

function removeAttr(set: {[name: string]: SpeciesData}, pokemon: string, attr: keyof SpeciesData) {
  delete set[pokemon][attr];
}

const RBY: {[name: string]: SpeciesData} = {
  
};

const GSC_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};
const GSC: {[name: string]: SpeciesData} = extend(true, {}, RBY, GSC_PATCH);

const ADV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const ADV: {[name: string]: SpeciesData} = extend(true, {}, GSC, ADV_PATCH);

const DPP_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const DPP: {[name: string]: SpeciesData} = extend(true, {}, ADV, DPP_PATCH);

const BW_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const BW: {[name: string]: SpeciesData} = extend(true, {}, DPP, BW_PATCH);

const XY_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const XY: {[name: string]: SpeciesData} = extend(true, {}, BW, XY_PATCH);

const SM_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const SM: {[name: string]: SpeciesData} = extend(true, {}, XY, SM_PATCH);

const SS_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const SS: {[name: string]: SpeciesData} = extend(true, {}, SM, SS_PATCH);

const PLA_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const SV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Ababo: {
    types: ['Fairy'],
    bs: {hp: 42, at: 35, df: 27, sa: 35, sd: 35, sp: 38},
    weightkg: 3.5,
    nfe: true,
    abilities: {0: 'Pixilate'},
  },
  Appletun: {
    types: ['Grass', 'Electric'],
    bs: {hp: 110, at: 87, df: 82, sa: 110, sd: 84, sp: 58},
    weightkg: 13,
    abilities: {0: 'Ripen'},
  },
  Archaludon: {
    types: ['Steel', 'Fairy'],
    bs: {hp: 90, at: 83, df: 116, sa: 123, sd: 85, sp: 83},
    weightkg: 60,
    abilities: {0: 'Stamina'},
  },
  Azumarill: {
    types: ['Water', 'Ground'],
    bs: {hp: 100, at: 68, df: 106, sa: 56, sd: 90, sp: 42},
    weightkg: 28.5,
    abilities: {0: 'Thick Fat'},
  },
  Bellibolt: {
    types: ['Electric', 'Fairy'],
    bs: {hp: 109, at: 59, df: 90, sa: 94, sd: 93, sp: 67},
    weightkg: 113,
    abilities: {0: 'Electromorphosis'},
  },
  Centiskorch: {
    types: ['Bug', 'Steel'],
    bs: {hp: 100, at: 121, df: 123, sa: 75, sd: 94, sp: 44},
    weightkg: 120,
    abilities: {0: 'Flash Fire'},
  },
  'Chien-Pao': {
    types: ['Dark', 'Ghost'],
    bs: {hp: 80, at: 112, df: 102, sa: 80, sd: 93, sp: 99},
    weightkg: 152.2,
    gender: 'N',
    abilities: {0: 'Pressure'},
  },
  Cobalion: {
    types: ['Fighting', 'Steel'],
    bs: {hp: 91, at: 84, df: 137, sa: 84, sd: 103, sp: 84},
    weightkg: 250,
    gender: 'N',
    abilities: {0: 'Justified'},
  },
  'Cresselia A': {
    types: ['Psychic', 'Steel'],
    bs: {hp: 120, at: 96, df: 118, sa: 83, sd: 108, sp: 79},
    weightkg: 85.6,
    gender: 'F',
    abilities: {0: 'Levitate'},
  },
  'Cresselia B': {
    types: ['Psychic', 'Fairy'],
    bs: {hp: 120, at: 72, df: 112, sa: 83, sd: 124, sp: 85},
    weightkg: 85.6,
    gender: 'F',
    abilities: {0: 'Levitate'},
  },
  Dragalge: {
    types: ['Poison', 'Water'],
    bs: {hp: 65, at: 75, df: 80, sa: 90, sd: 121, sp: 66},
    weightkg: 81.5,
    abilities: {0: 'Poison Point'},
  },
  Eiscue: {
    types: ['Ice', 'Dragon'],
    bs: {hp: 75, at: 106, df: 102, sa: 69, sd: 88, sp: 64},
    weightkg: 89,
    abilities: {0: 'Ice Face'},
    otherFormes: ['Eiscue-Noice'],
  },
  'Eiscue-Noice': {
    types: ['Ice', 'Dragon'],
    bs: {hp: 75, at: 106, df: 78, sa: 69, sd: 64, sp: 112},
    weightkg: 89,
    abilities: {0: 'Ice Face'},
    baseSpecies: 'Eiscue',
  },
  Golisopod: {
    types: ['Water', 'Dark'],
    bs: {hp: 75, at: 125, df: 104, sa: 78, sd: 74, sp: 52},
    weightkg: 108,
    abilities: {0: 'Emergency Exit'},
  },
  'Hydreigon A': {
    types: ['Dark', 'Poison'],
    bs: {hp: 92, at: 91, df: 78, sa: 131, sd: 98, sp: 102},
    weightkg: 160,
    abilities: {0: 'Levitate'},
  },
  'Hydreigon B': {
    types: ['Dragon', 'Steel'],
    bs: {hp: 92, at: 103, df: 94, sa: 119, sd: 114, sp: 82},
    weightkg: 160,
    abilities: {0: 'Levitate'},
  },
  'Iron Boulder': {
    types: ['Rock', 'Bug'],
    bs: {hp: 90, at: 112, df: 83, sa: 62, sd: 92, sp: 119},
    weightkg: 162.5,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Thorns': {
    types: ['Electric', 'Normal'],
    bs: {hp: 100, at: 124, df: 104, sa: 58, sd: 88, sp: 65},
    weightkg: 303,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  Keldeo: {
    types: ['Water', 'Flying'],
    bs: {hp: 91, at: 71, df: 78, sa: 119, sd: 78, sp: 114},
    weightkg: 48.5,
    gender: 'N',
    abilities: {0: 'Justified'},
  },
  Kingambit: {
    types: ['Dark', 'Ghost'],
    bs: {hp: 100, at: 109, df: 100, sa: 75, sd: 79, sp: 67},
    weightkg: 120,
    abilities: {0: 'Defiant'},
  },
  Luxray: {
    types: ['Electric', 'Steel'],
    bs: {hp: 80, at: 116, df: 119, sa: 81, sd: 71, sp: 62},
    weightkg: 42,
    abilities: {0: 'Rivalry'},
  },
  Manaphy: {
    types: ['Water', 'Electric'],
    bs: {hp: 100, at: 95, df: 88, sa: 129, sd: 88, sp: 93},
    weightkg: 1.4,
    gender: 'N',
    abilities: {0: 'Hydration'},
  },
  'Ogerpon-Wellspring': {
    types: ['Water', 'Steel'],
    bs: {hp: 80, at: 124, df: 134, sa: 57, sd: 98, sp: 71},
    weightkg: 39.8,
    gender: 'F',
    abilities: {0: 'Water Absorb'},
  },
  'Raging Bolt': {
    types: ['Electric', 'Fairy'],
    bs: {hp: 125, at: 73, df: 84, sa: 132, sd: 99, sp: 69},
    weightkg: 480,
    gender: 'N',
    abilities: {0: 'Protosynthesis'},
  },
  'Roaring Moon A': {
    types: ['Dark', 'Ground'],
    bs: {hp: 105, at: 141, df: 78, sa: 75, sd: 92, sp: 107},
    weightkg: 380,
    gender: 'N',
    abilities: {0: 'Protosynthesis'},
  },
  'Roaring Moon B': {
    types: ['Dark', 'Flying'],
    bs: {hp: 105, at: 141, df: 78, sa: 75, sd: 92, sp: 107},
    weightkg: 380,
    gender: 'N',
    abilities: {0: 'Protosynthesis'},
  },
  'Scream Tail': {
    types: ['Fairy', 'Water'],
    bs: {hp: 115, at: 64, df: 120, sa: 60, sd: 125, sp: 80},
    weightkg: 8,
    gender: 'N',
    abilities: {0: 'Protosynthesis'},
  },
  'Sirfetch\u2019d': {
    types: ['Fighting', 'Water'],
    bs: {hp: 62, at: 123, df: 103, sa: 62, sd: 83, sp: 66},
    weightkg: 117,
    abilities: {0: 'Steadfast'},
  },
  Sylveon: {
    types: ['Fairy', 'Steel'],
    bs: {hp: 95, at: 81, df: 91, sa: 116, sd: 104, sp: 70},
    weightkg: 23.5,
    abilities: {0: 'Cute Charm'},
  },
  Tinkaton: {
    types: ['Steel', 'Fighting'],
    bs: {hp: 85, at: 100, df: 101, sa: 63, sd: 84, sp: 88},
    weightkg: 112.8,
    gender: 'F',
    abilities: {0: 'Mold Breaker'},
  },
  'Ursaluna A': {
    types: ['Normal', 'Ghost'],
    bs: {hp: 130, at: 124, df: 117, sa: 53, sd: 102, sp: 48},
    weightkg: 290,
    abilities: {0: 'Guts'},
  },
  'Ursaluna B': {
    types: ['Normal', 'Fighting'],
    bs: {hp: 130, at: 120, df: 109, sa: 45, sd: 94, sp: 53},
    weightkg: 290,
    abilities: {0: 'Guts'},
  },
  'Ursaluna C': {
    types: ['Normal', 'Fairy'],
    bs: {hp: 130, at: 120, df: 95, sa: 55, sd: 98, sp: 69},
    weightkg: 290,
    abilities: {0: 'Guts'},
  },
  'Ursaluna-Bloodmoon': {
    types: ['Normal', 'Ghost'],
    bs: {hp: 113, at: 86, df: 96, sa: 141, sd: 91, sp: 59},
    weightkg: 333,
    gender: 'M',
    abilities: {0: 'Mind\'s Eye'},
  },
  Victini: {
    types: ['Fire', 'Dragon'],
    bs: {hp: 100, at: 102, df: 96, sa: 110, sd: 96, sp: 99},
    weightkg: 4,
    gender: 'N',
    abilities: {0: 'Victory Star'},
  },
};

const ZA_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const SV: {[name: string]: SpeciesData} = extend(true, {}, SS, PLA_PATCH, SV_PATCH, ZA_PATCH);

const CHAMPIONS_LIST = [
  'Abomasnow',
  'Abomasnow-Mega',
  'Absol',
  'Absol-Mega',
  'Aegislash-Blade',
  'Aegislash-Both',
  'Aegislash-Shield',
  'Aerodactyl',
  'Aerodactyl-Mega',
  'Aggron',
  'Aggron-Mega',
  'Alakazam',
  'Alakazam-Mega',
  'Alcremie',
  'Altaria',
  'Altaria-Mega',
  'Ampharos',
  'Ampharos-Mega',
  'Annihilape',
  'Appletun',
  'Araquanid',
  'Arbok',
  'Arcanine',
  'Arcanine-Hisui',
  'Archaludon',
  'Ariados',
  'Armarouge',
  'Aromatisse',
  'Audino',
  'Audino-Mega',
  'Aurorus',
  'Avalugg',
  'Avalugg-Hisui',
  'Azumarill',
  'Banette',
  'Banette-Mega',
  'Barbaracle',
  'Barbaracle-Mega',
  'Basculegion',
  'Basculegion-F',
  'Bastiodon',
  'Beartic',
  'Beedrill',
  'Beedrill-Mega',
  'Bellibolt',
  'Blastoise',
  'Blastoise-Mega',
  'Blaziken',
  'Blaziken-Mega',
  'Camerupt',
  'Camerupt-Mega',
  'Castform',
  'Castform-Rainy',
  'Castform-Snowy',
  'Castform-Sunny',
  'Ceruledge',
  'Chandelure',
  'Chandelure-Mega',
  'Charizard',
  'Charizard-Mega-X',
  'Charizard-Mega-Y',
  'Chesnaught',
  'Chesnaught-Mega',
  'Chimecho',
  'Chimecho-Mega',
  'Clawitzer',
  'Clefable',
  'Clefable-Mega',
  'Cofagrigus',
  'Conkeldurr',
  'Corviknight',
  'Crabominable',
  'Crabominable-Mega',
  'Decidueye',
  'Decidueye-Hisui',
  'Dedenne',
  'Delphox',
  'Delphox-Mega',
  'Diggersby',
  'Ditto',
  'Dragalge',
  'Dragalge-Mega',
  'Dragapult',
  'Dragonite',
  'Dragonite-Mega',
  'Drampa',
  'Drampa-Mega',
  'Eelektross',
  'Eelektross-Mega',
  'Emboar',
  'Emboar-Mega',
  'Emolga',
  'Empoleon',
  'Espathra',
  'Espeon',
  'Excadrill',
  'Excadrill-Mega',
  'Falinks',
  'Falinks-Mega',
  'Farigiraf',
  'Feraligatr',
  'Feraligatr-Mega',
  'Flapple',
  'Flareon',
  'Floette-Eternal',
  'Floette-Mega',
  'Florges',
  'Forretress',
  'Froslass',
  'Froslass-Mega',
  'Furfrou',
  'Gallade',
  'Gallade-Mega',
  'Garbodor',
  'Garchomp',
  'Garchomp-Mega',
  'Gardevoir',
  'Gardevoir-Mega',
  'Garganacl',
  'Gengar',
  'Gengar-Mega',
  'Gholdengo',
  'Glaceon',
  'Glalie',
  'Glalie-Mega',
  'Glimmora',
  'Glimmora-Mega',
  'Gliscor',
  'Golurk',
  'Golurk-Mega',
  'Goodra',
  'Goodra-Hisui',
  'Gourgeist',
  'Gourgeist-Large',
  'Gourgeist-Small',
  'Gourgeist-Super',
  'Greninja',
  'Greninja-Mega',
  'Grimmsnarl',
  'Gyarados',
  'Gyarados-Mega',
  'Hatterene',
  'Hawlucha',
  'Hawlucha-Mega',
  'Heliolisk',
  'Heracross',
  'Heracross-Mega',
  'Hippowdon',
  'Houndoom',
  'Houndoom-Mega',
  'Houndstone',
  'Hydrapple',
  'Hydreigon',
  'Incineroar',
  'Infernape',
  'Jolteon',
  'Kangaskhan',
  'Kangaskhan-Mega',
  'Kingambit',
  'Kleavor',
  'Klefki',
  'Kommo-o',
  'Krookodile',
  'Leafeon',
  'Liepard',
  'Lopunny',
  'Lopunny-Mega',
  'Lucario',
  'Lucario-Mega',
  'Luxray',
  'Lycanroc',
  'Lycanroc-Dusk',
  'Lycanroc-Midnight',
  'Machamp',
  'Malamar',
  'Malamar-Mega',
  'Mamoswine',
  'Manectric',
  'Manectric-Mega',
  'Maushold',
  'Maushold-Four',
  'Mawile',
  'Mawile-Mega',
  'Medicham',
  'Medicham-Mega',
  'Meganium',
  'Meganium-Mega',
  'Meowscarada',
  'Meowstic',
  'Meowstic-F',
  'Meowstic-F-Mega',
  'Meowstic-M-Mega',
  'Metagross',
  'Metagross-Mega',
  'Milotic',
  'Mimikyu',
  'Mimikyu-Busted',
  'Morpeko',
  'Morpeko-Hangry',
  'Mr. Rime',
  'Mudsdale',
  'Musharna',
  'Ninetales',
  'Ninetales-Alola',
  'Noivern',
  'Oranguru',
  'Orthworm',
  'Overqwil',
  'Palafin',
  'Palafin-Hero',
  'Pangoro',
  'Passimian',
  'Pelipper',
  'Pidgeot',
  'Pidgeot-Mega',
  'Pikachu',
  'Pinsir',
  'Pinsir-Mega',
  'Politoed',
  'Polteageist',
  'Polteageist-Antique',
  'Primarina',
  'Pyroar',
  'Pyroar-Mega',
  'Quaquaval',
  'Qwilfish',
  'Raichu',
  'Raichu-Alola',
  'Raichu-Mega-X',
  'Raichu-Mega-Y',
  'Rampardos',
  'Reuniclus',
  'Rhyperior',
  'Roserade',
  'Rotom',
  'Rotom-Fan',
  'Rotom-Frost',
  'Rotom-Heat',
  'Rotom-Mow',
  'Rotom-Wash',
  'Runerigus',
  'Sableye',
  'Sableye-Mega',
  'Salazzle',
  'Samurott',
  'Samurott-Hisui',
  'Sandaconda',
  'Sceptile',
  'Sceptile-Mega',
  'Scizor',
  'Scizor-Mega',
  'Scolipede',
  'Scolipede-Mega',
  'Scovillain',
  'Scovillain-Mega',
  'Scrafty',
  'Scrafty-Mega',
  'Serperior',
  'Sharpedo',
  'Sharpedo-Mega',
  'Simipour',
  'Simisage',
  'Simisear',
  'Sinistcha',
  'Sinistcha-Masterpiece',
  'Skarmory',
  'Skarmory-Mega',
  'Skeledirge',
  'Slowbro',
  'Slowbro-Galar',
  'Slowbro-Mega',
  'Slowking',
  'Slowking-Galar',
  'Slurpuff',
  'Sneasler',
  'Snorlax',
  'Spiritomb',
  'Staraptor',
  'Staraptor-Mega',
  'Starmie',
  'Starmie-Mega',
  'Steelix',
  'Steelix-Mega',
  'Stunfisk',
  'Stunfisk-Galar',
  'Swampert',
  'Swampert-Mega',
  'Sylveon',
  'Talonflame',
  'Tauros',
  'Tauros-Paldea-Aqua',
  'Tauros-Paldea-Blaze',
  'Tauros-Paldea-Combat',
  'Tinkaton',
  'Torkoal',
  'Torterra',
  'Toucannon',
  'Toxapex',
  'Toxicroak',
  'Trevenant',
  'Tsareena',
  'Typhlosion',
  'Typhlosion-Hisui',
  'Tyranitar',
  'Tyranitar-Mega',
  'Tyrantrum',
  'Umbreon',
  'Vanilluxe',
  'Vaporeon',
  'Venusaur',
  'Venusaur-Mega',
  'Victreebel',
  'Victreebel-Mega',
  'Vileplume',
  'Vivillon',
  'Vivillon-Fancy',
  'Vivillon-Pokeball',
  'Volcarona',
  'Watchog',
  'Weavile',
  'Whimsicott',
  'Wyrdeer',
  'Zoroark',
  'Zoroark-Hisui',
];

const CHAMPIONS_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {

};

const CHAMPIONS: {[name: string]: SpeciesData} = extend(
  true, {},
  Object.fromEntries(CHAMPIONS_LIST.map(s => [s, SV[s]])), CHAMPIONS_PATCH
);

export const SPECIES = [CHAMPIONS, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];

export class Species implements I.Species {
  private readonly gen: I.GenerationNum;

  constructor(gen: I.GenerationNum) {
    this.gen = gen;
  }

  get(id: I.ID) {
    return SPECIES_BY_ID[this.gen][id];
  }

  *[Symbol.iterator]() {
    for (const id in SPECIES_BY_ID[this.gen]) {
      yield this.get(id as I.ID)!;
    }
  }
}

class Specie implements I.Specie {
  readonly kind: 'Species';
  readonly id: I.ID;
  readonly name: I.SpeciesName;
  readonly types!: [I.TypeName] | [I.TypeName, I.TypeName];
  readonly baseStats: Readonly<I.StatsTable>;
  readonly weightkg!: number; // weight
  readonly gender?: I.GenderName;
  readonly nfe?: boolean;
  readonly abilities?: {0: I.AbilityName};
  readonly canGigantamax?: I.MoveName;
  readonly otherFormes?: I.SpeciesName[];
  readonly baseSpecies?: I.SpeciesName;

  private static readonly EXCLUDE = new Set(['bs']);

  constructor(name: string, data: SpeciesData) {
    this.kind = 'Species';
    this.id = toID(name);
    this.name = name as I.SpeciesName;

    const baseStats: Partial<I.StatsTable> = {};
    baseStats.hp = data.bs.hp;
    baseStats.atk = data.bs.at;
    baseStats.def = data.bs.df;
    baseStats.spa = gen === 0 || gen >= 2 ? data.bs.sa : data.bs.sl;
    baseStats.spd = gen === 0 || gen >= 2 ? data.bs.sd : data.bs.sl;
    baseStats.spe = data.bs.sp;
    this.baseStats = baseStats as I.StatsTable;
    assignWithout(this, data, Specie.EXCLUDE);
  }
}
const SPECIES_BY_ID: Array<{[id: string]: Specie}> = [];

let gen = 0;
for (const species of SPECIES) {
  const map: {[id: string]: Specie} = {};
  for (const specie in species) {
    if (gen >= 2 && species[specie].bs.sl) delete species[specie].bs.sl;
    const m = new Specie(specie, species[specie]);
    map[m.id] = m;
  }
  SPECIES_BY_ID.push(map);
  gen++;
}
