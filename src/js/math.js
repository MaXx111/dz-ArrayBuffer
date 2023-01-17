import Character from './Character.js';

export default class mathCharacter extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
  }

  setStoned(value) {
    if (typeof value === 'boolean') {
      this.stoned = value;
    } else {
      throw new Error('Нужно значение true или false');
    }
  }

  getStoned() {
    return this.stoned;
  }

  setAttack(attack) {
    if (this.distance === 1) {
      this.attack = attack;
    } else if (this.distance === 2) {
      this.attack = attack * 0.9;
    } else if (this.distance === 3) {
      this.attack = attack * 0.8;
    } else if (this.distance === 4) {
      this.attack = attack * 0.7;
    } else if (this.distance === 5) {
      this.attack = attack * 0.6;
    }
    if (this.stoned) {
      this.attack -= Math.round(Math.log2(this.distance) * 5);
    }
  }

  getAttack() {
    return this.attack;
  }
}
