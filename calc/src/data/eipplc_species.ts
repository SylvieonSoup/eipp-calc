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
  readonly otherFormes?: string[];
  readonly baseSpecies?: string;
}

function removeAttr(set: {[name: string]: SpeciesData}, pokemon: string, attr: keyof SpeciesData) {
  delete set[pokemon][attr];
}

const RBY: {[name: string]: SpeciesData} = {
  Cubone: {
    types: ['Ground'],
    bs: {hp: 50, at: 50, df: 95, sl: 40, sp: 35},
    weightkg: 6.5,
    nfe: true,
  },
  Krabby: {
    types: ['Water'],
    bs: {hp: 30, at: 105, df: 90, sl: 25, sp: 50},
    weightkg: 6.5,
    nfe: true,
  },
  Staryu: {
    types: ['Water'],
    bs: {hp: 30, at: 45, df: 55, sl: 70, sp: 85},
    weightkg: 34.5,
    nfe: true,
  },
  Vulpix: {
    types: ['Fire'],
    bs: {hp: 38, at: 41, df: 40, sl: 65, sp: 65},
    weightkg: 9.9,
    nfe: true,
  },
};

const GSC_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  // gen 1 pokemon changes
  Cubone: {bs: {sa: 40, sd: 50}},
  Krabby: {bs: {sa: 25, sd: 25}},
  Staryu: {bs: {sa: 70, sd: 55}, gender: 'N'},
  Vulpix: {bs: {sa: 50, sd: 65}},
  // gen 2 pokemon
  Aipom: {
    types: ['Normal'],
    bs: {hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85},
    weightkg: 11.5,
  },
  Phanpy: {
    types: ['Ground'],
    bs: {hp: 90, at: 60, df: 60, sa: 40, sd: 40, sp: 40},
    weightkg: 33.5,
    nfe: true,
  },
  Teddiursa: {
    types: ['Normal'],
    bs: {hp: 60, at: 80, df: 50, sa: 50, sd: 50, sp: 40},
    weightkg: 8.8,
    nfe: true,
  },
};
const GSC: {[name: string]: SpeciesData} = extend(true, {}, RBY, GSC_PATCH);

const ADV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  // gen 1 pokemon changes
  Cubone: {abilities: {0: 'Rock Head'}},
  Krabby: {abilities: {0: 'Hyper Cutter'}},
  Staryu: {abilities: {0: 'Illuminate'}},
  Vulpix: {abilities: {0: 'Flash Fire'}},
  // gen 2 pokemon changes
  Aipom: {abilities: {0: 'Run Away'}},
  Phanpy: {abilities: {0: 'Pickup'}},
  Teddiursa: {abilities: {0: 'Pickup'}},
  Anorith: {
    types: ['Rock', 'Bug'],
    bs: {hp: 45, at: 95, df: 50, sa: 40, sd: 50, sp: 75},
    weightkg: 12.5,
    nfe: true,
    abilities: {0: 'Battle Armor'},
  },
  Lotad: {
    types: ['Water', 'Grass'],
    bs: {hp: 40, at: 30, df: 30, sa: 40, sd: 50, sp: 30},
    weightkg: 2.6,
    nfe: true,
    abilities: {0: 'Swift Swim'},
  },
  Nosepass: {
    types: ['Rock'],
    bs: {hp: 30, at: 45, df: 135, sa: 45, sd: 90, sp: 30},
    weightkg: 97,
    abilities: {0: 'Sturdy'},
  },
  Seedot: {
    types: ['Grass'],
    bs: {hp: 40, at: 40, df: 50, sa: 30, sd: 30, sp: 30},
    weightkg: 4,
    nfe: true,
    abilities: {0: 'Chlorophyll'},
  },
  Wailmer: {
    types: ['Water'],
    bs: {hp: 130, at: 70, df: 35, sa: 70, sd: 35, sp: 60},
    weightkg: 130,
    nfe: true,
    abilities: {0: 'Water Veil'},
  },
  Zigzagoon: {
    types: ['Normal'],
    bs: {hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60},
    weightkg: 17.5,
    nfe: true,
    abilities: {0: 'Pickup'},
  },
};

const ADV: {[name: string]: SpeciesData} = extend(true, {}, GSC, ADV_PATCH);

const DPP_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Aipom: {nfe: true},
  Nosepass: {nfe: true},
  Bronzor: {
    types: ['Steel', 'Psychic'],
    bs: {hp: 57, at: 24, df: 86, sa: 24, sd: 86, sp: 23},
    weightkg: 60.5,
    gender: 'N',
    nfe: true,
    abilities: {0: 'Levitate'},
  },
  Buneary: {
    types: ['Normal'],
    bs: {hp: 55, at: 66, df: 44, sa: 44, sd: 56, sp: 85},
    weightkg: 5.5,
    nfe: true,
    abilities: {0: 'Run Away'},
  },
  Drifloon: {
    types: ['Ghost', 'Flying'],
    bs: {hp: 90, at: 50, df: 34, sa: 60, sd: 44, sp: 70},
    weightkg: 1.2,
    nfe: true,
    abilities: {0: 'Aftermath'},
  },
};

const DPP: {[name: string]: SpeciesData} = extend(true, {}, ADV, DPP_PATCH);

const BW_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Cottonee: {
    types: ['Grass'],
    bs: {hp: 40, at: 27, df: 60, sa: 37, sd: 50, sp: 66},
    weightkg: 0.6,
    nfe: true,
    abilities: {0: 'Prankster'},
  },
  Elgyem: {
    types: ['Psychic'],
    bs: {hp: 55, at: 55, df: 55, sa: 85, sd: 55, sp: 30},
    weightkg: 9,
    nfe: true,
    abilities: {0: 'Telepathy'},
  },
  Klink: {
    types: ['Steel'],
    bs: {hp: 40, at: 55, df: 70, sa: 45, sd: 60, sp: 30},
    weightkg: 21,
    gender: 'N',
    nfe: true,
    abilities: {0: 'Plus'},
  },
  Litwick: {
    types: ['Ghost', 'Fire'],
    bs: {hp: 50, at: 30, df: 55, sa: 65, sd: 55, sp: 20},
    weightkg: 3.1,
    nfe: true,
    abilities: {0: 'Flash Fire'},
  },
  Munna: {
    types: ['Psychic'],
    bs: {hp: 76, at: 25, df: 45, sa: 67, sd: 55, sp: 24},
    weightkg: 23.3,
    nfe: true,
    abilities: {0: 'Forewarn'},
  },
  Pawniard: {
    types: ['Dark', 'Steel'],
    bs: {hp: 45, at: 85, df: 70, sa: 40, sd: 40, sp: 60},
    weightkg: 10.2,
    nfe: true,
    abilities: {0: 'Defiant'},
  },
  Rufflet: {
    types: ['Normal', 'Flying'],
    bs: {hp: 70, at: 83, df: 50, sa: 37, sd: 50, sp: 60},
    weightkg: 10.5,
    gender: 'M',
    nfe: true,
    abilities: {0: 'Keen Eye'},
  },
  Timburr: {
    types: ['Fighting'],
    bs: {hp: 75, at: 80, df: 55, sa: 25, sd: 35, sp: 35},
    weightkg: 12.5,
    nfe: true,
    abilities: {0: 'Guts'},
  },
  Vullaby: {
    types: ['Dark', 'Flying'],
    bs: {hp: 70, at: 55, df: 75, sa: 45, sd: 65, sp: 60},
    weightkg: 9,
    gender: 'F',
    nfe: true,
    abilities: {0: 'Big Pecks'},
  },
  Zorua: {
    types: ['Dark'],
    bs: {hp: 40, at: 65, df: 40, sa: 80, sd: 40, sp: 65},
    weightkg: 12.5,
    nfe: true,
    abilities: {0: 'Illusion'},
  },
};

const BW: {[name: string]: SpeciesData} = extend(true, {}, DPP, BW_PATCH);

const XY_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Cottonee: {types: ['Grass', 'Fairy']},
};

const XY: {[name: string]: SpeciesData} = extend(true, {}, BW, XY_PATCH);

const SM_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Wimpod: {
    types: ['Bug', 'Water'],
    bs: {hp: 25, at: 35, df: 40, sa: 20, sd: 30, sp: 80},
    weightkg: 12,
    nfe: true,
    abilities: {0: 'Wimp Out'},
  },
};

const SM: {[name: string]: SpeciesData} = extend(true, {}, XY, SM_PATCH);

const SS_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Grookey: {
    types: ['Grass'],
    bs: {hp: 50, at: 65, df: 50, sa: 40, sd: 40, sp: 65},
    weightkg: 5,
    nfe: true,
    abilities: {0: 'Overgrow'},
  },
  'Farfetch\u2019d-Galar': {
    types: ['Fighting'],
    bs: {hp: 52, at: 95, df: 55, sa: 58, sd: 62, sp: 55},
    weightkg: 42,
    nfe: true,
    abilities: {0: 'Steadfast'},
  },
};

const SS: {[name: string]: SpeciesData} = extend(true, {}, SM, SS_PATCH);

const PLA_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Zorua: {otherFormes: ['Zorua-Hisui']},
  'Zorua-Hisui': {
    types: ['Normal', 'Ghost'],
    bs: {hp: 35, at: 60, df: 40, sa: 85, sd: 40, sp: 70},
    weightkg: 12.5,
    nfe: true,
    abilities: {0: 'Illusion'},
    baseSpecies: 'Zorua',
  },
};

const SV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const ZA_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const SV: {[name: string]: SpeciesData} = extend(true, {}, SS, PLA_PATCH, SV_PATCH, ZA_PATCH);

for (const [name, specie] of Object.entries(SV)) {
  if (name.endsWith('-Gmax')) {
    delete SV[name];
    continue;
  }
  if (specie.otherFormes) {
    // @ts-expect-error readonly
    specie.otherFormes = [...new Set(specie.otherFormes)].filter(f => !f.endsWith('-Gmax'));
    // @ts-expect-error readonly
    if (!specie.otherFormes.length) specie.otherFormes = undefined;
  }
}

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
  'Basculegion',
  'Basculegion-F',
  'Bastiodon',
  'Beartic',
  'Beedrill',
  'Beedrill-Mega',
  'Bellibolt',
  'Blastoise',
  'Blastoise-Mega',
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
  'Dragapult',
  'Dragonite',
  'Dragonite-Mega',
  'Drampa',
  'Drampa-Mega',
  'Emboar',
  'Emboar-Mega',
  'Emolga',
  'Empoleon',
  'Espathra',
  'Espeon',
  'Excadrill',
  'Excadrill-Mega',
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
  'Mamoswine',
  'Manectric',
  'Manectric-Mega',
  'Maushold',
  'Maushold-Four',
  'Medicham',
  'Medicham-Mega',
  'Meganium',
  'Meganium-Mega',
  'Meowscarada',
  'Meowstic',
  'Meowstic-F',
  'Meowstic-F-Mega',
  'Meowstic-M-Mega',
  'Milotic',
  'Mimikyu',
  'Mimikyu-Busted',
  'Morpeko',
  'Morpeko-Hangry',
  'Mr. Rime',
  'Mudsdale',
  'Ninetales',
  'Ninetales-Alola',
  'Noivern',
  'Oranguru',
  'Orthworm',
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
  'Quaquaval',
  'Raichu',
  'Raichu-Alola',
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
  'Scizor',
  'Scizor-Mega',
  'Scovillain',
  'Scovillain-Mega',
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
  'Starmie',
  'Starmie-Mega',
  'Steelix',
  'Steelix-Mega',
  'Stunfisk',
  'Stunfisk-Galar',
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
  readonly otherFormes?: I.SpeciesName[];
  readonly baseSpecies?: I.SpeciesName;

  private static readonly EXCLUDE = new Set(['bs', 'otherFormes']);

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
    this.otherFormes = data.otherFormes as I.SpeciesName[];

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
