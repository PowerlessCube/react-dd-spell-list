import React from 'react';
import ClassForm from './ClassForm';
import SpellDisplay from './SpellDisplay';

import { AppRequests } from '../shared/constants/constants';
import useFetchData from '../shared/hooks/useFetchData';

function App() {
  const [characterClass, setCharacterClass] = React.useState(null);
  const API_REQUESTS = new AppRequests(characterClass);
  const { results } = useFetchData(API_REQUESTS.GET_CLASS_SPELLS);

  const [formattedSpells, setFormattedSpells] = React.useState([]);
  const [selectedSpells, setSelectedSpells] = React.useState([]);

  React.useEffect(() => {
    results &&
      setFormattedSpells(
        results.map((spell) => ({ ...spell, selected: false }))
      );
  }, [results]);

  const handleChange = (e) => {
    e.preventDefault();
    setSelectedSpells([]);
    setFormattedSpells([]);
    setCharacterClass(e.target.value);
  };

  const handleSelection = (e) => {
    setFormattedSpells(
      formattedSpells.filter((ss) => ss.index !== e.target.id)
    );
    setSelectedSpells([
      ...selectedSpells,
      ...formattedSpells
        .filter((ss) => ss.index === e.target.id)
        .map((ss) => ({
          ...ss,
          selected: true,
        })),
    ]);
  };

  const handleDeSelection = (e) => {
    setSelectedSpells(selectedSpells.filter((ss) => ss.index !== e.target.id));
    setFormattedSpells([
      ...results
        .filter((ss) => ss.index === e.target.id)
        .map((ss) => ({
          ...ss,
          selected: false,
        })),
      ...formattedSpells,
    ]);
  };

  return (
    <div>
      <h1>Class Spell List</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <ClassForm handleChange={handleChange} />
          </div>
          <div className="col">
            <SpellDisplay
              title={'Class Spells'}
              spells={formattedSpells}
              handleSelection={handleSelection}
            />
          </div>
          <div className="col">
            <SpellDisplay
              title={'Selected Spells'}
              spells={selectedSpells}
              handleSelection={handleDeSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
