import React from 'react';
import getSpellListsByLevelAndClass from '../helpers/getSpellListsByLevelAndClass';

function useGetCharacterClassSpellsBySpellSlots(
  characterClass = null,
  spellSlots
) {
  const [formattedSpells, setFormattedSpells] = React.useState([]);

  React.useEffect(() => {
    if (spellSlots === null || typeof spellSlots === 'undefined') return;
    getSpellListsByLevelAndClass(characterClass, spellSlots.length).then(
      setFormattedSpells
    );
  }, [characterClass, spellSlots]);

  return [formattedSpells, setFormattedSpells];
}

export default useGetCharacterClassSpellsBySpellSlots;
