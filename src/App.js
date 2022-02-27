import './App.css';
import React from 'react';
import useFetchData from './shared/hooks/useFetchData';
import { AppRequests, CLASSES } from './shared/constants/constants';

function App() {
  const [characterClass, setCharacterClass] = React.useState(null);
  const API_REQUESTS = new AppRequests(characterClass);
  const classSpells = useFetchData(API_REQUESTS.GET_CLASS_SPELLS);
  const classSpellCasting = useFetchData(API_REQUESTS.GET_CLASS_SPELLCASTING);

  const handleChange = (e) => {
    e.preventDefault();
    setCharacterClass(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="class-select">Choose a Class:</label>
        <select name="classes" id="class-select" onChange={handleChange}>
          <option value="">--Please choose a class--</option>
          {Object.keys(CLASSES).reduce((prevKey, key) => {
            if (!CLASSES[key].isSpellCaster) return prevKey;
            prevKey.push(
              <option key={CLASSES[key].index} value={CLASSES[key].index}>
                {CLASSES[key].index}
              </option>
            );
            return prevKey;
          }, [])}
        </select>
      </form>
      <strong>Class Spells: </strong>
      {JSON.stringify(classSpells)}
      <br />
      <strong>Class Spells: </strong>
      {JSON.stringify(classSpellCasting)}
    </div>
  );
}

export default App;
