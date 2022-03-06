import React from 'react';
import ClassForm from './ClassForm';
import SpellList from './SpellList';
import useGetCharacterClassSpells from '../shared/hooks/useGetCharacterClassSpells';
import useGetClassSpellData from '../shared/hooks/useGetClassSpellData';
import SpellDisplay from './SpellDisplay';

function App() {
  const [characterClass, setCharacterClass] = React.useState(null);
  const [characterLevel, setCharacterLevel] = React.useState(null);
  const { spellSlots, spellsKnown } = useGetClassSpellData(
    characterClass,
    characterLevel
  );
  const [selectedSpells, setSelectedSpells] = React.useState([]);
  const [formattedSpells, setFormattedSpells] = useGetCharacterClassSpells(
    characterClass,
    characterLevel
  );
  const [spellIndex, setSpellIndex] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedSpells([]);
    setFormattedSpells([]);
    setSpellIndex(null);
    setCharacterLevel(e.target.level.value);
    setCharacterClass(e.target.class.value);
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
      <h2>Level: {characterLevel}</h2>
      <h3>Spells Known: {spellsKnown}</h3>
      <h3>Spells Slots: {spellSlots}</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <ClassForm handleSubmit={handleSubmit} />
            <SpellDisplay spellIndex={spellIndex} />
          </div>
          <div className="col">
            <SpellList
              title={'Class Spells'}
              count={formattedSpells.length}
              spells={formattedSpells}
              spellSlots={characterLevel}
              handleSelection={handleSelection}
              handleSpellSelection={handleSpellSelection}
            />
          </div>
          <div className="col">
            <SpellList
              title={'Selected Spells'}
              spellSlots={selectedSpells.length}
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
