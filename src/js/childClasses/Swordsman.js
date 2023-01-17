import Character from '../Character.js';

export default class SwordsmanCharacter extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.defense = 10;
    this.attack = 40;
  }
}
