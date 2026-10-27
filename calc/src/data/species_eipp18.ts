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
  'Aegislash-Blade': {
    types: ['Normal', 'Ghost'],
    bs: {hp: 100, at: 140, df: 50, sa: 140, sd: 50, sp: 60},
    weightkg: 53,
    abilities: {0: 'Stance Change'},
    otherFormes: ['Aegislash-Shield', 'Aegislash-Both'],
  },
  'Aegislash-Shield': {
    types: ['Normal', 'Ghost'],
    bs: {hp: 100, at: 50, df: 140, sa: 50, sd: 140, sp: 60},
    weightkg: 53,
    abilities: {0: 'Stance Change'},
    baseSpecies: 'Aegislash-Blade',
  },
  'Aegislash-Both': {
    types: ['Normal', 'Ghost'],
    bs: {hp: 100, at: 140, df: 140, sa: 140, sd: 140, sp: 60},
    weightkg: 53,
    abilities: {0: 'Stance Change'},
    baseSpecies: 'Aegislash-Blade',
  },
  Araquanid: {
    types: ['Water', 'Ground'],
    bs: {hp: 68, at: 70, df: 92, sa: 100, sd: 132, sp: 42},
    weightkg: 82,
    abilities: {0: 'Water Bubble'},
  },
  'Bewear D': {
    types: ['Normal', 'Fire'],
    bs: {hp: 120, at: 125, df: 80, sa: 55, sd: 100, sp: 60},
    weightkg: 135,
    abilities: {0: 'Fluffy'},
  },
  'Bewear E': {
    types: ['Normal', 'Ground'],
    bs: {hp: 120, at: 125, df: 80, sa: 55, sd: 100, sp: 60},
    weightkg: 135,
    abilities: {0: 'Fluffy'},
  },
  Blaziken: {
    types: ['Rock', 'Fighting'],
    bs: {hp: 80, at: 120, df: 70, sa: 110, sd: 70, sp: 100},
    weightkg: 52,
    abilities: {0: 'Blaze'},
  },
  Bombirdier: {
    types: ['Flying', 'Rock'],
    bs: {hp: 70, at: 103, df: 85, sa: 60, sd: 85, sp: 100},
    weightkg: 42.9,
    abilities: {0: 'Rocky Payload'},
  },
  Bronzong: {
    types: ['Steel', 'Grass'],
    bs: {hp: 100, at: 89, df: 116, sa: 79, sd: 116, sp: 33},
    weightkg: 187,
    gender: 'N',
    abilities: {0: 'Heatproof'},
  },
  Buzzwole: {
    types: ['Fire', 'Fighting'],
    bs: {hp: 107, at: 139, df: 139, sa: 53, sd: 83, sp: 79},
    weightkg: 333.6,
    gender: 'N',
    abilities: {0: 'Beast Boost'},
  },
  Celebi: {
    types: ['Psychic', 'Poison'],
    bs: {hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100},
    weightkg: 5,
    gender: 'N',
  },
  Ceruledge: {
    types: ['Fire', 'Grass'],
    bs: {hp: 100, at: 125, df: 80, sa: 60, sd: 100, sp: 85},
    weightkg: 62,
    abilities: {0: 'Flash Fire'},
  },
  Claydol: {
    types: ['Normal', 'Psychic'],
    bs: {hp: 100, at: 70, df: 105, sa: 70, sd: 120, sp: 75},
    weightkg: 108,
    gender: 'N',
    abilities: {0: 'Levitate'},
  },
  Clefable: {
    types: ['Flying'],
    bs: {hp: 95, at: 70, df: 100, sa: 95, sd: 90, sp: 60},
    weightkg: 40,
    abilities: {0: 'Magic Guard'},
  },
  'Clodsire I': {
    types: ['Fire', 'Ground'],
    bs: {hp: 130, at: 75, df: 100, sa: 45, sd: 100, sp: 20},
    weightkg: 223,
    abilities: {0: 'Water Absorb'},
  },
  'Clodsire R': {
    types: ['Flying', 'Ground'],
    bs: {hp: 130, at: 75, df: 100, sa: 45, sd: 100, sp: 20},
    weightkg: 223,
    abilities: {0: 'Water Absorb'},
  },
  Cofagrigus: {
    types: ['Fairy'],
    bs: {hp: 100, at: 50, df: 145, sa: 95, sd: 105, sp: 30},
    weightkg: 76.5,
    abilities: {0: 'Mummy'},
  },
  'Comfey D': {
    types: ['Ground'],
    bs: {hp: 100, at: 52, df: 90, sa: 82, sd: 110, sp: 100},
    weightkg: 0.3,
    abilities: {0: 'Triage'},
  },
  'Comfey H': {
    types: ['Fairy'],
    bs: {hp: 100, at: 52, df: 90, sa: 82, sd: 110, sp: 100},
    weightkg: 0.3,
    abilities: {0: 'Triage'},
  },
  Delphox: {
    types: ['Fire', 'Ghost'],
    bs: {hp: 100, at: 69, df: 72, sa: 114, sd: 100, sp: 104},
    weightkg: 39,
    abilities: {0: 'Magician'},
  },
  'Diancie A': {
    types: ['Rock', 'Ghost'],
    bs: {hp: 50, at: 100, df: 150, sa: 100, sd: 150, sp: 50},
    weightkg: 8.8,
    gender: 'N',
    abilities: {0: 'Clear Body'},
  },
  'Diancie B': {
    types: ['Water', 'Fairy'],
    bs: {hp: 50, at: 100, df: 150, sa: 100, sd: 150, sp: 50},
    weightkg: 8.8,
    gender: 'N',
    abilities: {0: 'Clear Body'},
  },
  'Diancie J': {
    types: ['Fire', 'Fairy'],
    bs: {hp: 50, at: 100, df: 150, sa: 100, sd: 150, sp: 50},
    weightkg: 8.8,
    gender: 'N',
    abilities: {0: 'Clear Body'},
  },
  'Diancie Z': {
    types: ['Rock', 'Flying'],
    bs: {hp: 50, at: 100, df: 150, sa: 100, sd: 150, sp: 50},
    weightkg: 8.8,
    gender: 'N',
    abilities: {0: 'Clear Body'},
  },
  Dondozo: {
    types: ['Electric'],
    bs: {hp: 150, at: 100, df: 115, sa: 65, sd: 65, sp: 100},
    weightkg: 220,
    abilities: {0: 'Oblivious'},
  },
  'Dragonite B': {
    types: ['Dragon', 'Steel'],
    bs: {hp: 91, at: 134, df: 95, sa: 100, sd: 100, sp: 80},
    weightkg: 210,
    abilities: {0: 'Multiscale'},
  },
  'Dragonite G': {
    types: ['Dragon', 'Fairy'],
    bs: {hp: 91, at: 134, df: 95, sa: 100, sd: 100, sp: 80},
    weightkg: 210,
    abilities: {0: 'Multiscale'},
  },
  Drampa: {
    types: ['Steel', 'Dragon'],
    bs: {hp: 78, at: 60, df: 85, sa: 135, sd: 91, sp: 100},
    weightkg: 185,
    abilities: {0: 'Cloud Nine'},
  },
  Drifblim: {
    types: ['Ghost', 'Dark'],
    bs: {hp: 150, at: 80, df: 100, sa: 90, sd: 54, sp: 80},
    weightkg: 15,
    abilities: {0: 'Flare Boost'},
  },
  Dunsparce: {
    types: ['Electric'],
    bs: {hp: 100, at: 100, df: 70, sa: 65, sd: 65, sp: 45},
    nfe: true,
    weightkg: 14,
    abilities: {0: 'Serene Grace'},
  },
  Dusclops: {
    types: ['Ground'],
    bs: {hp: 100, at: 70, df: 130, sa: 60, sd: 130, sp: 25},
    nfe: true,
    weightkg: 30.6,
    abilities: {0: 'Pressure'},
  },
  Espathra: {
    types: ['Fairy'],
    bs: {hp: 95, at: 60, df: 100, sa: 101, sd: 60, sp: 105},
    weightkg: 90,
    abilities: {0: 'Opportunist'},
  },
  Feraligatr: {
    types: ['Ground'],
    bs: {hp: 85, at: 105, df: 100, sa: 79, sd: 83, sp: 100},
    weightkg: 88.8,
    abilities: {0: 'Sheer Force'},
  },
  Fezandipiti: {
    types: ['Poison', 'Dark'],
    bs: {hp: 88, at: 91, df: 82, sa: 100, sd: 125, sp: 99},
    weightkg: 30.1,
    gender: 'M',
    abilities: {0: 'Toxic Chain'},
  },
  Garbodor: {
    types: ['Ghost'],
    bs: {hp: 80, at: 95, df: 82, sa: 100, sd: 82, sp: 75},
    weightkg: 107.3,
    abilities: {0: 'Stench'},
  },
  'Garchomp A': {
    types: ['Dragon', 'Water'],
    bs: {hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102},
    weightkg: 95,
    abilities: {0: 'Sand Veil'},
  },
  'Garchomp G': {
    types: ['Dragon', 'Water'],
    bs: {hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102},
    weightkg: 95,
    abilities: {0: 'Sand Veil'},
  },
  'Garchomp T': {
    types: ['Dragon', 'Ice'],
    bs: {hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102},
    weightkg: 95,
    abilities: {0: 'Sand Veil'},
  },
  'Garchomp X': {
    types: ['Dragon', 'Water'],
    bs: {hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102},
    weightkg: 95,
    abilities: {0: 'Sand Veil'},
  },
  Gastrodon: {
    types: ['Water', 'Ground'],
    bs: {hp: 111, at: 83, df: 100, sa: 92, sd: 82, sp: 39},
    weightkg: 29.9,
    abilities: {0: 'Storm Drain'},
  },
  'Gholdengo K': {
    types: ['Steel', 'Fairy'],
    bs: {hp: 87, at: 60, df: 95, sa: 133, sd: 91, sp: 100},
    weightkg: 30,
    gender: 'N',
    abilities: {0: 'Good as Gold'},
  },
  'Gholdengo M': {
    types: ['Steel', 'Psychic'],
    bs: {hp: 87, at: 60, df: 95, sa: 133, sd: 91, sp: 100},
    weightkg: 30,
    gender: 'N',
    abilities: {0: 'Good as Gold'},
  },
  'Gholdengo W': {
    types: ['Steel', 'Flying'],
    bs: {hp: 100, at: 60, df: 95, sa: 133, sd: 91, sp: 84},
    weightkg: 30,
    gender: 'N',
    abilities: {0: 'Good as Gold'},
  },
  Glaceon: {
    types: ['Ground'],
    bs: {hp: 100, at: 60, df: 110, sa: 130, sd: 95, sp: 65},
    weightkg: 25.9,
    abilities: {0: 'Snow Cloak'},
  },
  Gliscor: {
    types: ['Water', 'Flying'],
    bs: {hp: 75, at: 95, df: 125, sa: 45, sd: 100, sp: 95},
    weightkg: 42.5,
    abilities: {0: 'Hyper Cutter'},
  },
  Golisopod: {
    types: ['Bug', 'Rock'],
    bs: {hp: 100, at: 125, df: 140, sa: 60, sd: 90, sp: 40},
    weightkg: 108,
    abilities: {0: 'Emergency Exit'},
  },
  'Great Tusk C': {
    types: ['Ground', 'Steel'],
    bs: {hp: 115, at: 131, df: 131, sa: 53, sd: 83, sp: 87},
    weightkg: 320,
    gender: 'N',
    abilities: {0: 'Protosynthesis'},
  },
  'Great Tusk P': {
    types: ['Water', 'Fighting'],
    bs: {hp: 115, at: 131, df: 131, sa: 53, sd: 83, sp: 87},
    weightkg: 320,
    gender: 'N',
    abilities: {0: 'Protosynthesis'},
  },
  Greedent: {
    types: ['Ground'],
    bs: {hp: 120, at: 95, df: 95, sa: 55, sd: 75, sp: 100},
    weightkg: 6,
    abilities: {0: 'Cheek Pouch'},
  },
  'Grimmsnarl G': {
    types: ['Dark', 'Poison'],
    bs: {hp: 95, at: 120, df: 100, sa: 95, sd: 75, sp: 60},
    weightkg: 61,
    gender: 'M',
    abilities: {0: 'Prankster'},
  },
  'Grimmsnarl I': {
    types: ['Dark', 'Ghost'],
    bs: {hp: 95, at: 120, df: 100, sa: 95, sd: 75, sp: 60},
    weightkg: 61,
    gender: 'M',
    abilities: {0: 'Prankster'},
  },
  'Gyarados A': {
    types: ['Water', 'Grass'],
    bs: {hp: 95, at: 125, df: 100, sa: 60, sd: 100, sp: 81},
    weightkg: 235,
    abilities: {0: 'Moxie'},
  },
  'Gyarados K': {
    types: ['Ground', 'Flying'],
    bs: {hp: 95, at: 125, df: 100, sa: 60, sd: 100, sp: 81},
    weightkg: 235,
    abilities: {0: 'Moxie'},
  },
  'Heatran F': {
    types: ['Fighting', 'Steel'],
    bs: {hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77},
    weightkg: 430,
    abilities: {0: 'Flash Fire'},
  },
  'Heatran H': {
    types: ['Bug', 'Steel'],
    bs: {hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77},
    weightkg: 430,
    abilities: {0: 'Flash Fire'},
  },
  'Heatran K': {
    types: ['Poison', 'Steel'],
    bs: {hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77},
    weightkg: 430,
    abilities: {0: 'Flash Fire'},
  },
  'Heatran S': {
    types: ['Flying', 'Steel'],
    bs: {hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77},
    weightkg: 430,
    abilities: {0: 'Flash Fire'},
  },
  'Hydreigon G': {
    types: ['Dark', 'Poison'],
    bs: {hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98},
    weightkg: 160,
    abilities: {0: 'Levitate'},
  },
  'Hydreigon H': {
    types: ['Dark', 'Poison'],
    bs: {hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98},
    weightkg: 160,
    abilities: {0: 'Levitate'},
  },
  'Hydreigon M': {
    types: ['Dark', 'Poison'],
    bs: {hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98},
    weightkg: 160,
    abilities: {0: 'Levitate'},
  },
  'Iron Boulder': {
    types: ['Fire', 'Psychic'],
    bs: {hp: 90, at: 120, df: 90, sa: 68, sd: 108, sp: 124},
    weightkg: 162.5,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Crown A': {
    types: ['Fighting', 'Psychic'],
    bs: {hp: 90, at: 72, df: 100, sa: 122, sd: 108, sp: 100},
    weightkg: 156,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Crown B': {
    types: ['Flying', 'Psychic'],
    bs: {hp: 100, at: 72, df: 100, sa: 122, sd: 108, sp: 98},
    weightkg: 156,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Crown J': {
    types: ['Steel', 'Electric'],
    bs: {hp: 90, at: 72, df: 100, sa: 122, sd: 108, sp: 100},
    weightkg: 156,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Crown W': {
    types: ['Fighting', 'Psychic'],
    bs: {hp: 90, at: 72, df: 100, sa: 122, sd: 108, sp: 100},
    weightkg: 156,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Moth C': {
    types: ['Fire', 'Dragon'],
    bs: {hp: 80, at: 70, df: 90, sa: 140, sd: 110, sp: 110},
    weightkg: 36,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Moth D': {
    types: ['Water', 'Poison'],
    bs: {hp: 80, at: 70, df: 90, sa: 140, sd: 110, sp: 110},
    weightkg: 36,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Moth S': {
    types: ['Fire', 'Dragon'],
    bs: {hp: 80, at: 70, df: 90, sa: 140, sd: 110, sp: 110},
    weightkg: 36,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  'Iron Moth T': {
    types: ['Fire', 'Grass'],
    bs: {hp: 80, at: 70, df: 90, sa: 140, sd: 110, sp: 110},
    weightkg: 36,
    gender: 'N',
    abilities: {0: 'Quark Drive'},
  },
  Jolteon: {
    types: ['Water'],
    bs: {hp: 65, at: 65, df: 100, sa: 110, sd: 95, sp: 130},
    weightkg: 24.5,
    abilities: {0: 'Volt Absorb'},
  },
  'Kingambit K': {
    types: ['Flying', 'Steel'],
    bs: {hp: 100, at: 135, df: 120, sa: 60, sd: 85, sp: 100},
    weightkg: 120,
    abilities: {0: 'Defiant'},
  },
  'Kingambit Q': {
    types: ['Fairy', 'Steel'],
    bs: {hp: 100, at: 135, df: 120, sa: 60, sd: 100, sp: 50},
    weightkg: 120,
    abilities: {0: 'Defiant'},
  },
  'Kingambit Z': {
    types: ['Fairy', 'Steel'],
    bs: {hp: 100, at: 135, df: 120, sa: 100, sd: 85, sp: 50},
    weightkg: 120,
    abilities: {0: 'Defiant'},
  },
  Landorus: {
    types: ['Ground', 'Fairy'],
    bs: {hp: 89, at: 125, df: 90, sa: 115, sd: 80, sp: 101},
    weightkg: 68,
    gender: 'M',
    abilities: {0: 'Sheer Force'},
  },
  Lopunny: {
    types: ['Normal'],
    bs: {hp: 100, at: 76, df: 84, sa: 54, sd: 96, sp: 105},
    weightkg: 33.3,
    abilities: {0: 'Cute Charm'},
  },
  'Mandibuzz A': {
    types: ['Dark', 'Ghost'],
    bs: {hp: 110, at: 65, df: 105, sa: 100, sd: 95, sp: 80},
    weightkg: 39.5,
    gender: 'F',
    abilities: {0: 'Big Pecks'},
  },
  'Mandibuzz H': {
    types: ['Dark', 'Poison'],
    bs: {hp: 110, at: 65, df: 105, sa: 100, sd: 95, sp: 80},
    weightkg: 39.5,
    gender: 'F',
    abilities: {0: 'Big Pecks'},
  },
  'Mandibuzz Z': {
    types: ['Steel', 'Flying'],
    bs: {hp: 110, at: 100, df: 105, sa: 55, sd: 95, sp: 80},
    weightkg: 39.5,
    gender: 'F',
    abilities: {0: 'Big Pecks'},
  },
  Mantine: {
    types: ['Fire', 'Flying'],
    bs: {hp: 65, at: 100, df: 70, sa: 80, sd: 140, sp: 70},
    weightkg: 220,
    abilities: {0: 'Water Absorb'},
  },
  Medicham: {
    types: ['Normal', 'Psychic'],
    bs: {hp: 100, at: 60, df: 75, sa: 60, sd: 75, sp: 80},
    weightkg: 31.5,
    abilities: {0: 'Pure Power'},
  },
  Mimikyu: {
    types: ['Ghost', 'Normal'],
    bs: {hp: 100, at: 90, df: 80, sa: 50, sd: 105, sp: 96},
    weightkg: 0.7,
    abilities: {0: 'Disguise'},
  },
  Mudsdale: {
    types: ['Ghost'],
    bs: {hp: 100, at: 125, df: 100, sa: 100, sd: 85, sp: 35},
    weightkg: 920,
    abilities: {0: 'Stamina'},
  },
  Nidoking: {
    types: ['Poison', 'Ghost'],
    bs: {hp: 81, at: 92, df: 77, sa: 100, sd: 75, sp: 85},
    weightkg: 62,
    abilities: {0: 'Sheer Force'},
  },
  Nidoqueen: {
    types: ['Fairy', 'Ground'],
    bs: {hp: 90, at: 82, df: 87, sa: 100, sd: 85, sp: 76},
    weightkg: 60,
    abilities: {0: 'Sheer Force'},
  },
  'Nihilego B': {
    types: ['Grass', 'Poison'],
    bs: {hp: 109, at: 53, df: 77, sa: 127, sd: 131, sp: 103},
    weightkg: 55.5,
    gender: 'N',
    abilities: {0: 'Beast Boost'},
  },
  'Nihilego D': {
    types: ['Dark', 'Poison'],
    bs: {hp: 109, at: 53, df: 77, sa: 127, sd: 131, sp: 103},
    weightkg: 55.5,
    gender: 'N',
    abilities: {0: 'Beast Boost'},
  },
  'Ogerpon-Hearthflame': {
    types: ['Grass', 'Fire'],
    bs: {hp: 80, at: 120, df: 100, sa: 60, sd: 96, sp: 110},
    weightkg: 39.8,
    gender: 'F',
    abilities: {0: 'Mold Breaker'},
  },
  Oranguru: {
    types: ['Normal', 'Psychic'],
    bs: {hp: 90, at: 60, df: 80, sa: 90, sd: 110, sp: 100},
    weightkg: 76,
    abilities: {0: 'Inner Focus'},
  },
  Overqwil: {
    types: ['Dark', 'Fighting'],
    bs: {hp: 85, at: 115, df: 95, sa: 65, sd: 100, sp: 85},
    weightkg: 60.5,
    abilities: {0: 'Poison Point'},
  },
  Pecharunt: {
    types: ['Poison', 'Psychic'],
    bs: {hp: 88, at: 88, df: 160, sa: 88, sd: 88, sp: 88},
    weightkg: 0.3,
    gender: 'N',
    abilities: {0: 'Poison Puppeteer'},
  },
  'Porygon-Z': {
    types: ['Fairy'],
    bs: {hp: 85, at: 100, df: 70, sa: 135, sd: 75, sp: 90},
    weightkg: 34,
    gender: 'N',
    abilities: {0: 'Adaptability'},
  },
  Raikou: {
    types: ['Normal'],
    bs: {hp: 90, at: 85, df: 95, sa: 115, sd: 100, sp: 115},
    weightkg: 178,
    gender: 'N',
    abilities: {0: 'Pressure'},
  },
  Regigigas: {
    types: ['Fighting'],
    bs: {hp: 110, at: 160, df: 110, sa: 80, sd: 110, sp: 100},
    weightkg: 420,
    gender: 'N',
    abilities: {0: 'Slow Start'},
  },
  'Revavroom A': {
    types: ['Steel', 'Dragon'],
    bs: {hp: 80, at: 119, df: 90, sa: 54, sd: 100, sp: 90},
    weightkg: 120,
    abilities: {0: 'Filter'},
  },
  'Revavroom M': {
    types: ['Dark', 'Poison'],
    bs: {hp: 80, at: 119, df: 90, sa: 54, sd: 100, sp: 90},
    weightkg: 120,
    abilities: {0: 'Filter'},
  },
  'Rhyperior S': {
    types: ['Ground', 'Water'],
    bs: {hp: 115, at: 140, df: 130, sa: 55, sd: 100, sp: 40},
    weightkg: 282.8,
    abilities: {0: 'Solid Rock'},
  },
  'Rhyperior V': {
    types: ['Ground', 'Dark'],
    bs: {hp: 115, at: 140, df: 130, sa: 55, sd: 100, sp: 40},
    weightkg: 282.8,
    abilities: {0: 'Solid Rock'},
  },
  'Rotom-Fan': {
    types: ['Electric', 'Fire'],
    bs: {hp: 100, at: 65, df: 107, sa: 105, sd: 107, sp: 86},
    weightkg: 0.3,
    gender: 'N',
    abilities: {0: 'Levitate'},
  },
  Runerigus: {
    types: ['Ground'],
    bs: {hp: 100, at: 95, df: 145, sa: 50, sd: 105, sp: 30},
    weightkg: 66.6,
    abilities: {0: 'Wandering Spirit'},
  },
  Sableye: {
    types: ['Normal', 'Ghost'],
    bs: {hp: 100, at: 75, df: 75, sa: 65, sd: 65, sp: 50},
    weightkg: 11,
    abilities: {0: 'Prankster'},
  },
  'Sandy Shocks': {
    types: ['Electric', 'Bug'],
    bs: {hp: 100, at: 81, df: 97, sa: 121, sd: 85, sp: 101},
    weightkg: 60,
    gender: 'N',
    abilities: {0: 'Protosynthesis'},
  },
  Scizor: {
    types: ['Bug', 'Electric'],
    bs: {hp: 70, at: 130, df: 100, sa: 55, sd: 80, sp: 100},
    weightkg: 118,
    abilities: {0: 'Technician'},
  },
  Scrafty: {
    types: ['Dark', 'Steel'],
    bs: {hp: 100, at: 90, df: 115, sa: 45, sd: 115, sp: 58},
    weightkg: 30,
    abilities: {0: 'Moxie'},
  },
  Spiritomb: {
    types: ['Poison', 'Dark'],
    bs: {hp: 100, at: 92, df: 108, sa: 92, sd: 108, sp: 35},
    weightkg: 108,
    abilities: {0: 'Infiltrator'},
  },
  Stakataka: {
    types: ['Fighting', 'Steel'],
    bs: {hp: 91, at: 131, df: 211, sa: 53, sd: 101, sp: 13},
    weightkg: 820,
    gender: 'N',
    abilities: {0: 'Beast Boost'},
  },
  Starmie: {
    types: ['Water', 'Ghost'],
    bs: {hp: 100, at: 75, df: 85, sa: 100, sd: 85, sp: 115},
    weightkg: 80,
    abilities: {0: 'Natural Cure'},
  },
  Stonjourner: {
    types: ['Ground'],
    bs: {hp: 100, at: 125, df: 135, sa: 20, sd: 100, sp: 70},
    weightkg: 520,
    abilities: {0: 'Power Spot'},
  },
  'Swampert G': {
    types: ['Water', 'Ground'],
    bs: {hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 60},
    weightkg: 81.9,
    abilities: {0: 'Torrent'},
  },
  'Swampert J': {
    types: ['Water', 'Fairy'],
    bs: {hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 100},
    weightkg: 81.9,
    abilities: {0: 'Torrent'},
  },
  'Swampert Q': {
    types: ['Water', 'Fighting'],
    bs: {hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 100},
    weightkg: 81.9,
    abilities: {0: 'Torrent'},
  },
  'Swampert S': {
    types: ['Ground'],
    bs: {hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 100},
    weightkg: 81.9,
    abilities: {0: 'Torrent'},
  },
  'Sylveon J': {
    types: ['Psychic'],
    bs: {hp: 95, at: 65, df: 100, sa: 110, sd: 130, sp: 60},
    weightkg: 23.5,
    abilities: {0: 'Pixilate'},
  },
  'Sylveon W': {
    types: ['Fairy'],
    bs: {hp: 95, at: 65, df: 65, sa: 110, sd: 130, sp: 100},
    weightkg: 23.5,
    abilities: {0: 'Pixilate'},
  },
  Thundurus: {
    types: ['Steel', 'Flying'],
    bs: {hp: 99, at: 115, df: 70, sa: 125, sd: 80, sp: 111},
    weightkg: 61,
    gender: 'M',
    abilities: {0: 'Prankster'},
  },
  Tinkaton: {
    types: ['Psychic', 'Steel'],
    bs: {hp: 85, at: 100, df: 77, sa: 70, sd: 105, sp: 94},
    weightkg: 112.8,
    gender: 'F',
    abilities: {0: 'Mold Breaker'},
  },
  'Torterra A': {
    types: ['Rock', 'Ground'],
    bs: {hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 100},
    weightkg: 310,
    abilities: {0: 'Shell Armor'},
  },
  'Torterra J': {
    types: ['Grass', 'Rock'],
    bs: {hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 100},
    weightkg: 310,
    abilities: {0: 'Shell Armor'},
  },
  'Torterra W': {
    types: ['Grass', 'Water'],
    bs: {hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 100},
    weightkg: 310,
    abilities: {0: 'Shell Armor'},
  },
  Ursaring: {
    types: ['Dark'],
    bs: {hp: 90, at: 130, df: 75, sa: 75, sd: 75, sp: 100},
    nfe: true,
    weightkg: 125.8,
    abilities: {0: 'Guts'},
  },
  'Urshifu-Rapid-Strike': {
    types: ['Poison', 'Water'],
    bs: {hp: 100, at: 130, df: 100, sa: 100, sd: 60, sp: 97},
    weightkg: 105,
    abilities: {0: 'Unseen Fist'},
  },
  Uxie: {
    types: ['Fairy'],
    bs: {hp: 75, at: 75, df: 130, sa: 95, sd: 130, sp: 95},
    weightkg: 0.3,
    gender: 'N',
    abilities: {0: 'Levitate'},
  },
  'Volcanion A': {
    types: ['Fire', 'Ground'],
    bs: {hp: 80, at: 110, df: 120, sa: 130, sd: 90, sp: 70},
    weightkg: 195,
    gender: 'N',
    abilities: {0: 'Water Absorb'},
  },
  'Volcanion O': {
    types: ['Fire', 'Ground'],
    bs: {hp: 80, at: 110, df: 120, sa: 130, sd: 90, sp: 70},
    weightkg: 195,
    gender: 'N',
    abilities: {0: 'Water Absorb'},
  },
  'Volcanion S': {
    types: ['Fire', 'Rock'],
    bs: {hp: 80, at: 110, df: 120, sa: 130, sd: 90, sp: 70},
    weightkg: 195,
    gender: 'N',
    abilities: {0: 'Water Absorb'},
  },
  'Volcanion X': {
    types: ['Fire', 'Ground'],
    bs: {hp: 80, at: 110, df: 120, sa: 130, sd: 90, sp: 70},
    weightkg: 195,
    gender: 'N',
    abilities: {0: 'Water Absorb'},
  },
  'Weezing-Galar': {
    types: ['Poison', 'Dark'],
    bs: {hp: 100, at: 90, df: 120, sa: 85, sd: 70, sp: 60},
    weightkg: 16,
    abilities: {0: 'Levitate'},
  },
  Xurkitree: {
    types: ['Psychic'],
    bs: {hp: 83, at: 89, df: 71, sa: 173, sd: 100, sp: 83},
    weightkg: 100,
    gender: 'N',
    abilities: {0: 'Beast Boost'},
  },
  'Zapdos-Galar': {
    types: ['Rock', 'Flying'],
    bs: {hp: 90, at: 125, df: 90, sa: 100, sd: 90, sp: 100},
    weightkg: 58.2,
    gender: 'N',
    abilities: {0: 'Defiant'},
  },
  'Zarude A': {
    types: ['Dark', 'Flying'],
    bs: {hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105},
    weightkg: 70,
    gender: 'N',
    abilities: {0: 'Leaf Guard'},
  },
  'Zarude W': {
    types: ['Dark', 'Ghost'],
    bs: {hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105},
    weightkg: 70,
    gender: 'N',
    abilities: {0: 'Leaf Guard'},
  },
  'Zarude X': {
    types: ['Rock', 'Grass'],
    bs: {hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105},
    weightkg: 70,
    gender: 'N',
    abilities: {0: 'Leaf Guard'},
  },
  'Zarude Z': {
    types: ['Dark', 'Psychic'],
    bs: {hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105},
    weightkg: 70,
    gender: 'N',
    abilities: {0: 'Leaf Guard'},
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

for (const species of Object.values(CHAMPIONS)) {
  if (species.otherFormes) {
    // @ts-expect-error readonly
    species.otherFormes = [...new Set(species.otherFormes)].filter(f => CHAMPIONS_LIST.includes(f));
    // @ts-expect-error readonly
    if (!species.otherFormes.length) delete species.otherFormes;
  }
}

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
