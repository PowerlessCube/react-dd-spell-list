const AppRequests = class {
  constructor(param = null) {
    this.param = param;
  }

  #url = () => ({
    baseUrl: `https://www.dnd5eapi.co/`,
    getClasses: 'https://www.dnd5eapi.co/api/classes/',
    getSpell: `https://www.dnd5eapi.co/api/spells/${this.param}`,
    getSpells: `https://www.dnd5eapi.co/api/classes/${this.param}/spells`,
    getSpellCasting: `https://www.dnd5eapi.co/api/classes/${this.param}/spellcasting`,
  });

  #checkClassDefined = (url) => (this.param ? url : null);

  get GET_CHARACTER_CLASSES() {
    return this.#url().getClasses;
  }

  get GET_SPELL_BY_INDEX() {
    return this.#checkClassDefined(this.#url().getSpell);
  }

  get GET_CLASS_SPELLS() {
    return this.#checkClassDefined(this.#url().getSpells);
  }

  get GET_CLASS_SPELLCASTING() {
    return this.#checkClassDefined(this.#url().getSpellCasting);
  }
};

export { AppRequests };
