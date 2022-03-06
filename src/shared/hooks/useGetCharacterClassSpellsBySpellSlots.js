import React from 'react';
import { AppRequests } from '../helpers/appRequests';
import useFetchData from './useFetchData';

function useGetCharacterClassSpellsBySpellSlots(
  characterClass = null,
  spellSlots = null
) {
  const [formattedSpells, setFormattedSpells] = React.useState([]);

  const CLASS_SPELL_REQUEST = new AppRequests(characterClass);
  const classSpellList = useFetchData(CLASS_SPELL_REQUEST.GET_CLASS_SPELLS);
  const params = spellSlots && spellSlots.map((ss, index) => index).join(',');
  console.log({ params });
  const SPELL_BY_LEVEL_REQUEST = new AppRequests(params);
  const spellsByLevel = useFetchData(
    SPELL_BY_LEVEL_REQUEST.GET_SPELLS_BY_LEVEL
  );

  React.useEffect(() => {
    if (classSpellList === null || spellsByLevel === null) return;
    setFormattedSpells(
      classSpellList.results.reduce((prev, curr) => {
        prev.push(
          ...spellsByLevel.results
            .filter((s) => s.index === curr.index)
            .map((spell) => ({ ...spell, selected: false }))
        );
        return prev;
      }, [])
    );
  }, [spellsByLevel, classSpellList]);

  return [formattedSpells, setFormattedSpells];
}

export default useGetCharacterClassSpellsBySpellSlots;
