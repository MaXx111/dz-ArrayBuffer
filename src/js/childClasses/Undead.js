import Character from '../Character.js';

export default class UndeadCharacter extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.defense = 25;
    this.attack = 25;
  }
}
