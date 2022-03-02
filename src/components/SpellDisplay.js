import useGetSpellInfo from '../shared/hooks/useGetSpellInfo';
import {
  formatSpellSubtitle,
  formatComponents,
  formatDuration,
} from '../shared/helpers/spellDisplayPipes';

const SpellDisplay = ({ spellIndex }) => {
  const spellData = useGetSpellInfo(spellIndex);
  return (
    spellData && (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{spellData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {spellData &&
              spellData.school &&
              formatSpellSubtitle(spellData.level, spellData.school.name)}
          </h6>
          <p>
            <strong>Casting Time: </strong>
            {spellData.casting_time}
          </p>
          <p>
            <strong>Range: </strong>
            {spellData.range}
          </p>
          <p>
            <strong>Components: </strong>
            {formatComponents(spellData.components, spellData.material)}
          </p>
          <p>
            <strong>Duration: </strong>
            {formatDuration(spellData.duration, spellData.concentration)}
          </p>
          <p className="card-text">{spellData.desc}</p>
          {spellData.higher_level && (
            <p className="card-text">
              <strong>At Higher Levels: </strong>
              {spellData.higher_level}
            </p>
          )}
        </div>
      </div>
    )
  );
};

export default SpellDisplay;
