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
  Cloyster: {
    types: ['Water', 'Ice'],
    bs: {hp: 50, at: 95, df: 180, sl: 85, sp: 70},
    weightkg: 132.5,
  },
  Mew: {
    types: ['Psychic'],
    bs: {hp: 100, at: 100, df: 100, sl: 100, sp: 100},
    weightkg: 4,
  }
};

const GSC_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  // gen 1 pokemon changes
  Cloyster: {bs: {sa: 85, sd: 45}},
  Mew: {bs: {sa: 100, sd: 100}, gender: 'N'},
  Shuckle: {
    types: ['Bug', 'Rock'],
    bs: {hp: 20, at: 10, df: 230, sa: 10, sd: 230, sp: 5},
    weightkg: 20.5,
  }
};
const GSC: {[name: string]: SpeciesData} = extend(true, {}, RBY, GSC_PATCH);

const ADV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  // gen 1 pokemon changes
  Cloyster: {abilities: {0: 'Shell Armor'}},
  Mew: {abilities: {0: 'Synchronize'}},
  // gen 2 pokemon changes
  Shuckle: {abilities: {0: 'Sturdy'}}
};

const ADV: {[name: string]: SpeciesData} = extend(true, {}, GSC, ADV_PATCH);

const DPP_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const DPP: {[name: string]: SpeciesData} = extend(true, {}, ADV, DPP_PATCH);

const BW_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Landorus: {
    types: ['Ground', 'Flying'],
    bs: {hp: 89, at: 125, df: 90, sa: 115, sd: 80, sp: 101},
    weightkg: 68,
    gender: 'M',
    abilities: {0: 'Sand Force'}
  },
  Thundurus: {
    types: ['Electric', 'Flying'],
    bs: {hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111},
    weightkg: 61,
    gender: 'M',
    abilities: {0: 'Prankster'}
  },
  Tornadus: {
    types: ['Flying'],
    bs: {hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111},
    weightkg: 63,
    gender: 'M',
    abilities: {0: 'Prankster'}
  },
  Zoroark: {
    types: ['Dark'],
    bs: {hp: 60, at: 105, df: 60, sa: 120, sd: 60, sp: 105},
    weightkg: 81.1,
    abilities: {0: 'Illusion'},
  }
};

const BW: {[name: string]: SpeciesData} = extend(true, {}, DPP, BW_PATCH);

const XY_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Goodra: {
    types: ['Dragon'],
    bs: {hp: 90, at: 100, df: 70, sa: 110, sd: 150, sp: 80},
    weightkg: 150.5,
    abilities: {0: 'Sap Sipper'},
  },
  Talonflame: {
    types: ['Fire', 'Flying'],
    bs: {hp: 78, at: 81, df: 71, sa: 74, sd: 69, sp: 126},
    weightkg: 24.5,
    abilities: {0: 'Flame Body'},
  }
};

const XY: {[name: string]: SpeciesData} = extend(true, {}, BW, XY_PATCH);

const SM_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Oranguru: {
    types: ['Normal', 'Psychic'],
    bs: {hp: 90, at: 60, df: 80, sa: 90, sd: 110, sp: 60},
    weightkg: 76,
    abilities: {0: 'Inner Focus'},
  },
  Pheromosa: {
    types: ['Bug', 'Fighting'],
    bs: {hp: 71, at: 137, df: 37, sa: 137, sd: 37, sp: 151},
    weightkg: 25,
    gender: 'N',
    abilities: {0: 'Beast Boost'},
  },
  'Tapu Koko': {
    types: ['Electric', 'Fairy'],
    bs: {hp: 70, at: 115, df: 85, sa: 95, sd: 75, sp: 130},
    weightkg: 20.5,
    gender: 'N',
    abilities: {0: 'Electric Surge'},
  }
};

const SM: {[name: string]: SpeciesData} = extend(true, {}, XY, SM_PATCH);

const SS_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Grimmsnarl: {
    types: ['Dark', 'Fairy'],
    bs: {hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60},
    weightkg: 61,
    gender: 'M',
    abilities: {0: 'Prankster'}
  }
};

const SS: {[name: string]: SpeciesData} = extend(true, {}, SM, SS_PATCH);

const PLA_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  
};

const SV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  'Iron Valiant': {
    types: ['Fairy', 'Fighting'],
    bs: {hp: 74, at: 130, df: 90, sa: 120, sd: 60, sp: 116},
    weightkg: 35,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Scream Tail': {
    types: ['Fairy', 'Psychic'],
    bs: {hp: 115, at: 65, df: 99, sa: 65, sd: 115, sp: 111},
    weightkg: 8,
    gender: 'N',
    abilities: {0: 'Protosynthesis'},
  },
  Tinkaton: {
    types: ['Fairy', 'Steel'],
    bs: {hp: 85, at: 75, df: 77, sa: 70, sd: 105, sp: 94},
    weightkg: 112.8,
    gender: 'F',
    abilities: {0: 'Mold Breaker'},
  }
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
  const oldStats: {hp: number; at: number; df: number; sa?: number; sd?: number; sl?: number; sp: number; } = specie.bs;
  // @ts-expect-error readonly
  specie.bs = {hp: oldStats.sp, at: oldStats.sd, df: oldStats.sa, sa: oldStats.df, sd: oldStats.at, sp: oldStats.hp};
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
