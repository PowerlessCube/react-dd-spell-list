const SpellList = ({
  title,
  spells,
  handleSelection,
  handleSpellSelection,
  count,
  spellSlots,
}) => {
  return (
    <>
      <h2>
        {title} ({count} / {spellSlots})
      </h2>
      <div className="container">
        {spells &&
          spells.map((spell) => (
            <div key={spell.index} className="row">
              <div href={spell.index} className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={spell.index}
                    checked={spell.selected}
                    onChange={handleSelection}
                  />
                  <label className="form-check-label" htmlFor={spell.index}>
                    {spell.name}
                  </label>
                  <span> </span>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSpellSelection(spell.index)}
                  >
                    Info
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SpellList;
