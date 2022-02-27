import React from 'react';
import ClassForm from './ClassForm';
import SpellDisplay from './SpellDisplay';

import useGetCharacterClassSpells from '../shared/hooks/useGetCharacterClassSpells';

function App() {
  const [characterClass, setCharacterClass] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedSpells, setSelectedSpells] = React.useState([]);
  const [formattedSpells, setFormattedSpells] =
    useGetCharacterClassSpells(characterClass);

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
      ...selectedSpells
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
        {isLoading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <ClassForm handleChange={handleChange} />
            </div>
            <div className="col">
              <SpellDisplay
                title={'Class Spells'}
                count={formattedSpells.length}
                spells={formattedSpells}
                handleSelection={handleSelection}
              />
            </div>
            <div className="col">
              <SpellDisplay
                title={'Selected Spells'}
                count={selectedSpells.length}
                spells={selectedSpells}
                handleSelection={handleDeSelection}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
