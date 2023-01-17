import mathCharacter from '../math.js';

export default class MagicianCharacter extends mathCharacter {
  constructor(name, distance = 1) {
    super(name, 'Magician', distance);
    this.defense = 40;
    this.setAttack(10);
  }
}
