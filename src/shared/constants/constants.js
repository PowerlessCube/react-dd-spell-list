const AppRequests = class {
  constructor(characterClass = null) {
    this.characterClass = characterClass;
  }

  #url = () => ({
    baseUrl: `https://www.dnd5eapi.co/`,
    getSpells: `https://www.dnd5eapi.co/api/classes/${this.characterClass}/spells`,
    getSpellCasting: `https://www.dnd5eapi.co/api/classes/${this.characterClass}/spellcasting`,
  });

  #checkClassDefined = (url) => (this.characterClass ? url : null);

  get GET_CLASS_SPELLS() {
    return this.#checkClassDefined(this.#url().getSpells);
  }

  get GET_CLASS_SPELLCASTING() {
    return this.#checkClassDefined(this.#url().getSpellCasting);
  }
};

const CLASSES = {
  WARLOCK: { isSpellCaster: true, index: 'warlock' },
  PALADIN: { isSpellCaster: true, index: 'paladin' },
  FIGHTER: { isSpellCaster: false, index: 'false' },
};

export { CLASSES, AppRequests };
