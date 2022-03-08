import React from 'react';
import ClassForm from './ClassForm';
import SpellList from './SpellList';
import useGetCharacterClassSpellsBySpellSlots from '../shared/hooks/useGetCharacterClassSpellsBySpellSlots';
import useGetClassSpellData from '../shared/hooks/useGetClassSpellData';
import SpellDisplay from './SpellDisplay';
import { AppRequests } from '../shared/helpers/appRequests';
import { formatSpellSlotTitle } from '../shared/helpers/spellDisplayPipes';

//TODO: fill out all spellData for all classes and test it.
//TODO: Make a global search component for spells
//TODO: validation of spells, ensure that selected spells does not exceed known spell limit / prepared spell limit.
//TODO: Seperate the main list out into each level spell and ensure when a spell is returned to the list it returns to the correct list.
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
  const [formattedSpells, setFormattedSpells] =
    useGetCharacterClassSpellsBySpellSlots(characterClass, spellSlots);
  const [spellIndex, setSpellIndex] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedSpells(defaultSelectedSpellState);
    setSpellIndex(null);
    setCharacterLevel(e.target.level.value);
    setCharacterClass(e.target.class.value);
  };

  const handleSelection = async (e) => {
    const API_REQUESTS = new AppRequests(e.target.id);
    const res = await fetch(API_REQUESTS.GET_SPELL_BY_INDEX);
    const { index, name, level } = await res.json();
    setFormattedSpells(
      formattedSpells.filter((ss) => ss.index !== e.target.id)
    );
    setSelectedSpells(
      selectedSpells.map((ss, i) => {
        if (i === level)
          return [...selectedSpells[i], { index, name, level, selected: true }];
        return ss;
      })
    );
  };

  const handleDeSelection = async (e) => {
    const API_REQUESTS = new AppRequests(e.target.id);
    const res = await fetch(API_REQUESTS.GET_SPELL_BY_INDEX);
    const { index, name, level } = await res.json();

    setSelectedSpells(
      selectedSpells.map((ss, i) => {
        if (i === level)
          return ss.filter((spell) => spell.index !== e.target.id);
        return ss;
      })
    );
    setFormattedSpells([{ index, name, selected: false }, ...formattedSpells]);
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
