const AppRequests = class {
  constructor(param = null) {
    this.param = param;
  }

  #url = () => ({
    baseUrl: `https://www.dnd5eapi.co/`,
    getClasses: 'https://www.dnd5eapi.co/api/classes/',
    getSpell: `https://www.dnd5eapi.co/api/spells/${this.param}`,
    getClassSpells: `https://www.dnd5eapi.co/api/classes/${this.param}/spells`,
    getSpellsByLevel: `https://www.dnd5eapi.co/api/spells/?level=${this.param}`,
    getSpellCasting: `https://www.dnd5eapi.co/api/classes/${this.param}/spellcasting`,
  });

  #checkParamsDefined = (url) => (this.param ? url : null);

  get GET_CHARACTER_CLASSES() {
    return this.#url().getClasses;
  }

  get GET_SPELL_BY_INDEX() {
    return this.#checkParamsDefined(this.#url().getSpell);
  }

  get GET_CLASS_SPELLS() {
    return this.#checkParamsDefined(this.#url().getClassSpells);
  }

  get GET_CLASS_SPELLCASTING() {
    return this.#checkParamsDefined(this.#url().getSpellCasting);
  }

  get GET_SPELLS_BY_LEVEL() {
    return this.#checkParamsDefined(this.#url().getSpellsByLevel);
  }
};

export { AppRequests };
