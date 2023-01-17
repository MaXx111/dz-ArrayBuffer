import Character from '../Character.js';

export default class BowermanCharacter extends Character {
  constructor(name) {
    super(name, 'Bowerman');
    this.defense = 25;
    this.attack = 25;
  }
}
