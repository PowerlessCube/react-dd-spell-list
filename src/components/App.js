import React from 'react';
import ClassForm from './ClassForm';
import SpellList from './SpellList';
import useGetCharacterClassSpells from '../shared/hooks/useGetCharacterClassSpells';
import SpellDisplay from './SpellDisplay';

function App() {
  const [characterClass, setCharacterClass] = React.useState(null);
  const [selectedSpells, setSelectedSpells] = React.useState([]);
  const [formattedSpells, setFormattedSpells] =
    useGetCharacterClassSpells(characterClass);
  const [spellIndex, setSpellIndex] = React.useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setSelectedSpells([]);
    setFormattedSpells([]);
    setSpellIndex(null);
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

  const handleSpellSelection = (index) => {
    setSpellIndex(index);
  };

  return (
    <div>
      <h1>Class Spell List</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <ClassForm handleChange={handleChange} />
            <SpellDisplay spellIndex={spellIndex} />
          </div>
          <div className="col">
            <SpellList
              title={'Class Spells'}
              count={formattedSpells.length}
              spells={formattedSpells}
              handleSelection={handleSelection}
              handleSpellSelection={handleSpellSelection}
            />
          </div>
          <div className="col">
            <SpellList
              title={'Selected Spells'}
              count={selectedSpells.length}
              spells={selectedSpells}
              handleSelection={handleDeSelection}
              handleSpellSelection={handleSpellSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
