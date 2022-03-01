import useGetSpellInfo from '../shared/hooks/useGetSpellInfo';

const SpellDisplay = ({ spellIndex }) => {
  const spellData = useGetSpellInfo(spellIndex);
  return (
    spellData && (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{spellData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {spellData.casting_time}
          </h6>
          <p className="card-text">{spellData.desc}</p>

          <p className="card-text">{spellData.higher_level}</p>
        </div>
      </div>
    )
  );
};

export default SpellDisplay;
