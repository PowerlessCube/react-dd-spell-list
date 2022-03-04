import deepFreeze from '../shared/helpers/deepFreeze';

const CLASSSPELLCASTING = deepFreeze({
  bard: {
    1: { spellsKnown: 4, spellSlots: [2, 2] },
    2: { spellsKnown: 5, spellSlots: [2, 3] },
    3: { spellsKnown: 6, spellSlots: [2, 4, 2] },
    4: { spellsKnown: 7, spellSlots: [3, 4, 3] },
    5: { spellsKnown: 8, spellSlots: [3, 4, 3, 2] },
  },
});

export { CLASSSPELLCASTING };
