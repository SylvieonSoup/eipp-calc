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
  'Absol A': {
    types: ['Electric', 'Normal'],
    bs: {hp: 52, at: 28, df: 145, sa: 105, sd: 134, sp: 68},
    weightkg: 47,
    abilities: {0: 'Vessel of Ruin'},
  },
  'Absol B': {
    types: ['Electric', 'Normal'],
    bs: {hp: 136, at: 28, df: 145, sa: 105, sd: 134, sp: 68},
    weightkg: 47,
    abilities: {0: 'Vessel of Ruin'},
  },
  Banette: {
    types: ['Steel', 'Water'],
    bs: {hp: 82, at: 104, df: 115, sa: 105, sd: 108, sp: 59},
    weightkg: 13,
    abilities: {0: 'Screen Cleaner'},
  },
  Beautifly: {
    types: ['Steel', 'Dragon'],
    bs: {hp: 81, at: 84, df: 115, sa: 156, sd: 97, sp: 31},
    weightkg: 28,
    abilities: {0: 'Dancer'},
  },
  Cacturne: {
    types: ['Ghost', 'Bug'],
    bs: {hp: 51, at: 9, df: 148, sa: 159, sd: 96, sp: 108},
    weightkg: 77,
    abilities: {0: 'Speed Boost'},
  },
  Crabrawler: {
    types: ['Flying', 'Fire'],
    bs: {hp: 152, at: 201, df: 33, sa: 23, sd: 150, sp: 25},
    weightkg: 7,
    abilities: {0: 'Grim Neigh'},
  },
  Darumaka: {
    types: ['Flying', 'Steel'],
    bs: {hp: 78, at: 146, df: 49, sa: 21, sd: 212, sp: 75},
    weightkg: 37,
    abilities: {0: 'Cheek Pouch'},
  },
  Exeggutor: {
    types: ['Poison', 'Ghost'],
    bs: {hp: 41, at: 110, df: 118, sa: 97, sd: 75, sp: 113},
    weightkg: 120,
    abilities: {0: 'Own Tempo'},
  },
  Florges: {
    types: ['Grass', 'Normal'],
    bs: {hp: 27, at: 159, df: 88, sa: 52, sd: 23, sp: 245},
    weightkg: 10,
    abilities: {0: 'Poison Touch'},
  },
  Gloom: {
    types: ['Fire', 'Psychic'],
    bs: {hp: 146, at: 84, df: 113, sa: 90, sd: 78, sp: 79},
    weightkg: 8.6,
    abilities: {0: 'Power Spot'},
  },
  'Iron Crown': {
    types: ['Flying', 'Steel'],
    bs: {hp: 72, at: 84, df: 118, sa: 126, sd: 36, sp: 149},
    weightkg: 156,
    abilities: {0: 'Tough Claws'},
  },
  Mabosstiff: {
    types: ['Bug', 'Fairy'],
    bs: {hp: 86, at: 61, df: 92, sa: 108, sd: 59, sp: 145},
    weightkg: 61,
    abilities: {0: 'Suction Cups'},
  },
  Mamoswine: {
    types: ['Rock', 'Ice'],
    bs: {hp: 144, at: 145, df: 80, sa: 57, sd: 128, sp: 10},
    weightkg: 291,
    abilities: {0: 'Hospitality'},
  },
  Pawmo: {
    types: ['Rock', 'Grass'],
    bs: {hp: 91, at: 146, df: 113, sa: 81, sd: 73, sp: 73},
    weightkg: 6,
    abilities: {0: 'Battle Armor'},
  },
  Scyther: {
    types: ['Fighting', 'Normal'],
    bs: {hp: 156, at: 36, df: 160, sa: 40, sd: 77, sp: 68},
    weightkg: 56,
    abilities: {0: 'Wonder Guard'},
  },
  Shieldon: {
    types: ['Fire', 'Ice'],
    bs: {hp: 108, at: 97, df: 63, sa: 96, sd: 52, sp: 85},
    weightkg: 57,
    abilities: {0: 'Telepathy'},
  },
  Sigilyph: {
    types: ['Steel', 'Ghost'],
    bs: {hp: 56, at: 144, df: 127, sa: 42, sd: 76, sp: 148},
    weightkg: 14,
    abilities: {0: 'Mega Launcher'},
  },
  Sizzlipede: {
    types: ['Electric', 'Steel'],
    bs: {hp: 65, at: 18, df: 111, sa: 153, sd: 120, sp: 89},
    weightkg: 1,
    abilities: {0: 'Competitive'},
  },
  Starmie: {
    types: ['Flying', 'Psychic'],
    bs: {hp: 130, at: 55, df: 126, sa: 114, sd: 9, sp: 130},
    weightkg: 80,
    abilities: {0: 'Unburden'},
  },
  Swirlix: {
    types: ['Rock', 'Poison'],
    bs: {hp: 70, at: 6, df: 74, sa: 198, sd: 151, sp: 74},
    weightkg: 3,
    abilities: {0: 'Blaze'},
  },
  Tyrunt: {
    types: ['Steel', 'Dragon'],
    bs: {hp: 231, at: 7, df: 61, sa: 206, sd: 45, sp: 1},
    weightkg: 26,
    abilities: {0: 'Big Pecks'},
  },
  Wingull: {
    types: ['Fire'],
    bs: {hp: 76, at: 155, df: 115, sa: 89, sd: 66, sp: 53},
    weightkg: 10,
    abilities: {0: 'Hydration'},
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
