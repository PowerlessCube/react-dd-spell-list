const ClassRequests = class {
  constructor(characterClass = null) {
    this.characterClass = characterClass;
  }

  #url = () => ({
    baseUrl: `https://www.dnd5eapi.co/`,
    getClasses: 'https://www.dnd5eapi.co/api/classes/',
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

  get GET_CHARACTER_CLASSES() {
    return this.#url().getClasses;
  }
};

export { ClassRequests };
