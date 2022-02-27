import { CLASSES } from '../shared/constants/constants';
const ClassForm = ({ handleChange }) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="class-select" className="form-label">
          Choose a Class:
        </label>
        <select
          name="classes"
          id="class-select"
          className="form-select"
          aria-label="Please choose a class"
          onChange={handleChange}
        >
          <option value={null}>--Please choose a class--</option>
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
      </div>
    </form>
  );
};

export default ClassForm;
