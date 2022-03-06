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

let cases = [];
for (let i = 1; i <= 20; i++) {
  cases.push([
    'bard',
    i,
    CLASSSPELLCASTING.bard[`${i}`].spellSlots,
    CLASSSPELLCASTING.bard[`${i}`].spellsKnown,
  ]);
}

test.each(cases)(
  '"given %p and %p as arguments, GET_SPELL_SLOTS returns %p and GET_SPELLS_KNOWN_COUNT returns %p"',
  (classIndex, level, expectedSlots, expectedCount) => {
    const sut = new SpellSlots(classIndex, level);
    expect(sut.GET_SPELL_SLOTS).toEqual(expectedSlots);
    expect(sut.GET_SPELLS_KNOWN_COUNT).toEqual(expectedCount);
  }
);
