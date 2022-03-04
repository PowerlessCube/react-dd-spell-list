import { CLASSSPELLCASTING } from '../../constants/classSpellCasting';

const SpellSlots = class {
  constructor(classIndex, characterLevel = 1) {
    this.classIndex = classIndex;
    this.characterLevel = characterLevel;
  }

  // Bard, Ranger, Sorcerer - Know set number of spells per level
  // Cleric, Druid, Paladin, Wizard (sort of) - Know all spells
  // Figter, rogue, monk - don't know any spells for now.(need to incorperate sub classes api doesn't support them)
  // Warlock - The one that breaks all the rules...
  CLASSSPELLCASTING;

  spellsByClassAndLevel() {
    return CLASSSPELLCASTING[this.classIndex][this.characterLevel];
  }

  get GET_SPELL_SLOTS() {
    return this.spellsByClassAndLevel().spellSlots;
  }

  get GET_SPELLS_KNOWN_COUNT() {
    return this.spellsByClassAndLevel().spellsKnown;
  }
};

export default SpellSlots;
