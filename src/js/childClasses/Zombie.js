import Character from '../Character.js';

export default class ZombieCharacter extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.defense = 10;
    this.attack = 40;
  }
}
