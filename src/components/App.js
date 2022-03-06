import React from 'react';
import ClassForm from './ClassForm';
import SpellList from './SpellList';
import useGetCharacterClassSpellsBySpellSlots from '../shared/hooks/useGetCharacterClassSpellsBySpellSlots';
import useGetClassSpellData from '../shared/hooks/useGetClassSpellData';
import SpellDisplay from './SpellDisplay';
import { formatSpellSlotTitle } from '../shared/helpers/spellDisplayPipes';

//TODO: fill out all spellData for all classes and test it.
//TODO: Make a global search component for spells
//TODO: Separate selected spells out into levels e.g selected 3 1st level, 2 2nd level etc.
//TODO: validation of spells, ensure that selected spells does not exceed known spell limit / prepared spell limit.
//TODO: Make a Spell slot count header for each selected spell with a button that increments / decrements the total within the limits of the spell slots.
//TODO: Make it look nice.
//TODO: Unit test the hooks.
//TODO: figure out a way of displaying spell values like "concentration", "components", "casting time", "spell level"
//TODO: Figure out warlocks...

function App() {
  const [characterClass, setCharacterClass] = React.useState(null);
  const [characterLevel, setCharacterLevel] = React.useState(null);
  const { spellSlots } = useGetClassSpellData(characterClass, characterLevel);
  const [selectedSpells, setSelectedSpells] = React.useState([]);
  const [formattedSpells, setFormattedSpells] =
    useGetCharacterClassSpellsBySpellSlots(characterClass, spellSlots);
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
              spellSlots={spellSlots}
              handleSelection={handleSelection}
              handleSpellSelection={handleSpellSelection}
            />
          </div>
          <div className="col">
            {spellSlots &&
              spellSlots.map((ss, index) => {
                return (
                  <SpellList
                    key={formatSpellSlotTitle(index)}
                    title={formatSpellSlotTitle(index)}
                    spellSlotCount={ss}
                    spells={selectedSpells}
                    handleSelection={handleDeSelection}
                    handleSpellSelection={handleSpellSelection}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
