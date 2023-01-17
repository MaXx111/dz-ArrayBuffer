import mathCharacter from '../math.js';

export default class DaemonCharacter extends mathCharacter {
  constructor(name, distance = 1) {
    super(name, 'Daemon', distance);
    this.distance = distance;
    this.defense = 40;
    this.setAttack(10);
  }
}
