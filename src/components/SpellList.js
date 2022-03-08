const SpellList = ({
  title,
  spells,
  handleSelection,
  handleSpellSelection,
  spellSlotCount = null,
}) => {
  return (
    <>
      <h2>{title}</h2>
      {spellSlotCount ? (
        <h3>{`${spells.length} / ${spellSlotCount}`}</h3>
      ) : (
        <h3>{spells.length}</h3>
      )}
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
