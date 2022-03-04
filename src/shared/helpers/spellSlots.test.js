import SpellSlots from './spellSlots';
import { CLASSSPELLCASTING } from '../../constants/classSpellCasting';

test('instantiates a "SpellSlots" object when given correct params', () => {
  const sut = new SpellSlots('bard', 2);
  expect(sut.classIndex).toEqual('bard');
  expect(sut.characterLevel).toEqual(2);
});

test('instantiates a "SpellSlots" object with default level 1 one only given classIndex param', () => {
  const sut = new SpellSlots('bard');
  expect(sut.characterLevel).toEqual(1);
});

const cases = [
  [
    'bard',
    1,
    CLASSSPELLCASTING.bard['1'].spellSlots,
    CLASSSPELLCASTING.bard['1'].spellsKnown,
  ],
  [
    'bard',
    2,
    CLASSSPELLCASTING.bard['2'].spellSlots,
    CLASSSPELLCASTING.bard['2'].spellsKnown,
  ],
  [
    'bard',
    3,
    CLASSSPELLCASTING.bard['3'].spellSlots,
    CLASSSPELLCASTING.bard['3'].spellsKnown,
  ],
  [
    'bard',
    4,
    CLASSSPELLCASTING.bard['4'].spellSlots,
    CLASSSPELLCASTING.bard['4'].spellsKnown,
  ],
  [
    'bard',
    5,
    CLASSSPELLCASTING.bard['5'].spellSlots,
    CLASSSPELLCASTING.bard['5'].spellsKnown,
  ],
];

test.each(cases)(
  '"given %p and %p as arguments, GET_SPELL_SLOTS returns %p and GET_SPELLS_KNOWN_COUNT returns %p"',
  (classIndex, level, expectedSlots, expectedCount) => {
    const sut = new SpellSlots(classIndex, level);
    expect(sut.GET_SPELL_SLOTS).toEqual(expectedSlots);
    expect(sut.GET_SPELLS_KNOWN_COUNT).toEqual(expectedCount);
  }
);
