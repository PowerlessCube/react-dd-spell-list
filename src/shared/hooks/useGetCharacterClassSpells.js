import React from 'react';
import { AppRequests } from '../constants/constants';
import useFetchData from './useFetchData';

const useGetCharacterClassSpells = (characterClass) => {
  const [formattedSpells, setFormattedSpells] = React.useState([]);
  const API_REQUESTS = new AppRequests(characterClass);
  const { results } = useFetchData(API_REQUESTS.GET_CLASS_SPELLS);

  React.useEffect(() => {
    results &&
      setFormattedSpells(
        results.map((spell) => ({ ...spell, selected: false }))
      );
  }, [results]);

  return [formattedSpells, setFormattedSpells];
};

export default useGetCharacterClassSpells;
