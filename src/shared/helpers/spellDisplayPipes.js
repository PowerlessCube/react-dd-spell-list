const POSITIONS = {
  1: 'st',
  2: 'nd',
  3: 'rd',
};

const convertToOrdinalNumber = (num) => {
  if (!num || num < 0) return;
  if (typeof num === 'string') Number(num);
  return num % 10 in POSITIONS ? `${num}${POSITIONS[num % 10]}` : `${num}th`;
};

const formatSpellSubtitle = (spellLevel = 0, schoolOfMagic = 'magic') => {
  if (spellLevel === 0) return `${schoolOfMagic} Cantrip`;
  return `${convertToOrdinalNumber(spellLevel)}-level ${schoolOfMagic}`;
};

const formatComponents = (materialArray, materialDescription = null) => {
  if (!materialArray) return '';
  const formattedString = materialDescription
    ? `${materialArray.join(', ')} (${materialDescription})`
    : materialArray.join(', ');
  return formattedString;
};

const formatDuration = (duration, isConcentration = false) => {
  if (!isConcentration) return duration;
  return `Concentration, ${duration}`;
};

export { formatSpellSubtitle, formatComponents, formatDuration };
