const getSpellListsByLevelAndClass = async (
  characterClass = null,
  spellSlotCount = 0
) => {
  if (characterClass === null) return [[]];
  if (spellSlotCount > 10) spellSlotCount = 10;

  let i = 0;
  let spellLists = [];
  while (i < spellSlotCount) {
    spellLists.push([]);
    i++;
  }

  const promises = spellLists.map(async (spellList, index) => {
    const spellsByLevelResponse = await fetch(
      `https://www.dnd5eapi.co/api/spells?level=${index}`
    );
    const spellsByLevel = await spellsByLevelResponse.json();

    const spellsByClassResponse = await fetch(
      `https://www.dnd5eapi.co/api/classes/${characterClass}/spells`
    );
    const spellsByClass = await spellsByClassResponse.json();

    return spellsByClass.results.reduce((prev, sbc) => {
      prev.push(
        ...spellsByLevel.results
          .filter((sbl) => sbl.index === sbc.index)
          .map((spell) => ({
            ...spell,
            selected: false,
            level: index,
          }))
      );
      return prev;
    }, spellList);
  });

  return await Promise.all(promises);
};

export default getSpellListsByLevelAndClass;
