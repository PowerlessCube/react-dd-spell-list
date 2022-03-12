import React from 'react';
import ClassForm from './ClassForm';
import SpellList from './SpellList';
import useGetClassSpellData from '../shared/hooks/useGetClassSpellData';
import SpellDisplay from './SpellDisplay';
import { formatSpellSlotTitle } from '../shared/helpers/spellDisplayPipes';
import useGetCharacterClassSpellsBySpellSlots from '../shared/hooks/useGetCharacterClassSpellsBySpellSlots';

//TODO: fill out all spellData for all classes and test it.
//TODO: Make a global search component for spells
//TODO: validation of spells, ensure that selected spells does not exceed known spell limit / prepared spell limit.
//TODO: Make a Spell slot count header for each selected spell with a button that increments / decrements the total within the limits of the spell slots.
//TODO: Make it look nice.
//TODO: Unit test the hooks.
//TODO: figure out a way of displaying spell values like "concentration", "components", "casting time", "spell level"
//TODO: Figure out warlocks...

const defaultSelectedSpellState = [[], [], [], [], [], [], [], [], [], []];

function App() {
  const [characterClass, setCharacterClass] = React.useState(null);
  const [characterLevel, setCharacterLevel] = React.useState(null);
  const { spellSlots } = useGetClassSpellData(characterClass, characterLevel);
  const [selectedSpells, setSelectedSpells] = React.useState(
    defaultSelectedSpellState
  );
  const [spellIndex, setSpellIndex] = React.useState(null);
  const [formattedSpells, setFormattedSpells] =
    useGetCharacterClassSpellsBySpellSlots(characterClass, spellSlots);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedSpells(defaultSelectedSpellState);
    setSpellIndex(null);
    setCharacterLevel(e.target.level.value);
    setCharacterClass(e.target.class.value);
  };

  const handleSelection = (e) => {
    const { index, name, level } = JSON.parse(e.target.id);
    setSelectedSpells(
      selectedSpells.map((ss, i) => {
        if (i === level)
          return [...selectedSpells[i], { index, name, level, selected: true }];
        return ss;
      })
    );
    setFormattedSpells(
      formattedSpells.map((ss, i) => {
        if (i === level)
          return [...formattedSpells[i].filter((s) => s.index !== index)];
        return ss;
      })
    );
  };

  const handleDeSelection = (e) => {
    const { index, name, level } = JSON.parse(e.target.id);
    setSelectedSpells(
      selectedSpells.map((ss, i) => {
        if (i === level) return ss.filter((spell) => spell.index !== index);
        return ss;
      })
    );
    setFormattedSpells(
      formattedSpells.map((ss, i) => {
        if (i === level)
          return [
            { index, name, level, selected: false },
            ...formattedSpells[i],
          ];
        return ss;
      })
    );
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
            {formattedSpells &&
              formattedSpells.map((spells, index) => {
                return (
                  <SpellList
                    key={formatSpellSlotTitle(index)}
                    title={formatSpellSlotTitle(index)}
                    count={spells.length}
                    spells={spells}
                    spellSlots={spellSlots}
                    handleSelection={handleSelection}
                    handleSpellSelection={handleSpellSelection}
                  />
                );
              })}
          </div>
          <div className="col">
            {spellSlots &&
              spellSlots.map((ss, index) => {
                return (
                  <SpellList
                    key={formatSpellSlotTitle(index)}
                    title={formatSpellSlotTitle(index)}
                    spellSlotCount={ss}
                    spells={selectedSpells[index]}
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
