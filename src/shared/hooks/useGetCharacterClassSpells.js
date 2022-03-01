import React from 'react';
import { AppRequests } from '../constants/constants';
import useFetchData from './useFetchData';

function useGetCharacterClassSpells(characterClass) {
  const [formattedSpells, setFormattedSpells] = React.useState([]);
  const API_REQUESTS = new AppRequests(characterClass);
  const data = useFetchData(API_REQUESTS.GET_CLASS_SPELLS);

  React.useEffect(() => {
    data &&
      data.results &&
      setFormattedSpells(
        data.results.map((spell) => ({ ...spell, selected: false }))
      );
  }, [data]);

  return [formattedSpells, setFormattedSpells];
}

export default useGetCharacterClassSpells;
