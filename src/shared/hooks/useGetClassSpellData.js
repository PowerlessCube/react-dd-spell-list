import React from 'react';
import SpellSlots from '../helpers/spellSlots';

const useGetClassSpellData = (classIndex, classLevel) => {
  const [spellSlots, setSpellSlots] = React.useState(null);
  const [spellsKnown, setSpellsKnown] = React.useState(null);
  const SPELLDATA = new SpellSlots(classIndex, classLevel);
  React.useEffect(() => {
    setSpellSlots(SPELLDATA.GET_SPELL_SLOTS);
    setSpellsKnown(SPELLDATA.GET_SPELLS_KNOWN_COUNT);
  }, [
    classIndex,
    classLevel,
    SPELLDATA.GET_SPELL_SLOTS,
    SPELLDATA.GET_SPELLS_KNOWN_COUNT,
  ]);
  return { spellSlots, spellsKnown };
};

export default useGetClassSpellData;
