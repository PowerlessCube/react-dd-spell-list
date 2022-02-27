import useGetClasses from '../shared/hooks/useGetClasses';
const ClassForm = ({ handleChange }) => {
  const { results } = useGetClasses();
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
          {results &&
            results.map((res) => (
              <option key={res.index} value={res.index}>
                {res.index}
              </option>
            ))}
        </select>
      </div>
    </form>
  );
};

export default ClassForm;
