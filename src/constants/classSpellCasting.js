import deepFreeze from '../shared/helpers/deepFreeze';

const CLASSSPELLCASTING = deepFreeze({
  bard: {
    1: { spellsKnown: 4, spellSlots: [2, 2] },
    2: { spellsKnown: 5, spellSlots: [2, 3] },
    3: { spellsKnown: 6, spellSlots: [2, 4, 2] },
    4: { spellsKnown: 7, spellSlots: [3, 4, 3] },
    5: { spellsKnown: 8, spellSlots: [3, 4, 3, 2] },
    6: { spellsKnown: 9, spellSlots: [3, 4, 3, 3] },
    7: { spellsKnown: 10, spellSlots: [3, 4, 3, 3, 1] },
    8: { spellsKnown: 11, spellSlots: [3, 4, 3, 3, 2] },
    9: { spellsKnown: 12, spellSlots: [3, 4, 3, 3, 3, 1] },
    10: { spellsKnown: 14, spellSlots: [4, 4, 3, 3, 3, 2] },
    11: { spellsKnown: 15, spellSlots: [4, 4, 3, 3, 3, 2, 1] },
    12: { spellsKnown: 15, spellSlots: [4, 4, 3, 3, 3, 2, 1] },
    13: { spellsKnown: 16, spellSlots: [4, 4, 3, 3, 3, 2, 1, 1] },
    14: { spellsKnown: 18, spellSlots: [4, 4, 3, 3, 3, 2, 1, 1] },
    15: { spellsKnown: 19, spellSlots: [4, 4, 3, 3, 3, 2, 1, 1, 1] },
    16: { spellsKnown: 19, spellSlots: [4, 4, 3, 3, 3, 2, 1, 1, 1] },
    17: { spellsKnown: 20, spellSlots: [4, 4, 3, 3, 3, 2, 1, 1, 1, 1] },
    18: { spellsKnown: 22, spellSlots: [4, 4, 3, 3, 3, 3, 1, 1, 1, 1] },
    19: { spellsKnown: 22, spellSlots: [4, 4, 3, 3, 3, 3, 2, 1, 1, 1] },
    20: { spellsKnown: 22, spellSlots: [4, 4, 3, 3, 3, 3, 2, 2, 1, 1] },
  },
});

export { CLASSSPELLCASTING };
