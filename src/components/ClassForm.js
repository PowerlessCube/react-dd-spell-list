import useGetClasses from '../shared/hooks/useGetClasses';
import { convertToOrdinalNumber } from '../shared/helpers/spellDisplayPipes';

const ClassForm = ({ handleSubmit }) => {
  const results = useGetClasses();
  const levels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="class-select" className="form-label">
          Choose a Class:
        </label>
        <select
          name="class"
          id="class-select"
          className="form-select"
          aria-label="Please choose a class"
        >
          <option value={null}>--Please choose a class--</option>
          {results &&
            results.map((res) => (
              <option key={res.index} value={res.index}>
                {res.index}
              </option>
            ))}
        </select>
        <label htmlFor="level-select" className="form-label">
          Choose a Class Level:
        </label>
        <select name="level">
          {levels.map((lvl) => (
            <option key={lvl} value={lvl}>
              {`${convertToOrdinalNumber(lvl)} level`}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" type="submit">
          Get Spells
        </button>
      </div>
    </form>
  );
};

export default ClassForm;
