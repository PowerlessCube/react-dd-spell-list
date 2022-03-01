import useFetchData from './useFetchData';

function useGetSpellInfo(spellIndex) {
  const spellData = useFetchData(
    spellIndex && `https://www.dnd5eapi.co/api/spells/${spellIndex}`
  );
  return spellData;
}

export default useGetSpellInfo;
