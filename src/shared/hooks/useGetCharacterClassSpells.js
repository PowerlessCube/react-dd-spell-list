import React from 'react';
import { AppRequests } from '../helpers/appRequests';
import useFetchData from './useFetchData';

function useGetCharacterClassSpellsByLevel(
  characterClass = null,
  characterLevel = null
) {
  const [formattedSpells, setFormattedSpells] = React.useState([]);

  const CLASS_SPELL_REQUEST = new AppRequests(characterClass);
  const classSpellList = useFetchData(CLASS_SPELL_REQUEST.GET_CLASS_SPELLS);

  const SPELL_BY_LEVEL_REQUEST = new AppRequests(characterLevel);
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

export default useGetCharacterClassSpellsByLevel;
