import BowermanCharacter from '../childClasses/Bowerman.js';
import SwordsmanCharacter from '../childClasses/Swordsman.js';
import UndeadCharacter from '../childClasses/Undead.js';
import ZombieCharacter from '../childClasses/Zombie.js';

// For BowermanCharacter
test('Should get right characteristic', () => {
  const result = new BowermanCharacter('justABoy');
  result.levelUp();
  result.damage(20);
  const expct = {
    health: 86, level: 2, name: 'justABoy', type: 'Bowerman', attack: 30, defense: 30,
  };
  expect(result).toEqual(expct);
});

// for SwordsmanCharacter
test('Should get right characteristic', () => {
  const result = new SwordsmanCharacter('justABoy');
  result.levelUp();
  result.damage(20);

  const expct = {
    health: 82.4, level: 2, name: 'justABoy', type: 'Swordsman', attack: 48, defense: 12,
  };
  expect(result).toEqual(expct);
});

// for UndeadCharacter
test('Should get right characteristic', () => {
  const result = new UndeadCharacter('justABoy');
  result.levelUp();
  result.damage(20);

  const expct = {
    health: 86, level: 2, name: 'justABoy', type: 'Undead', attack: 30, defense: 30,
  };
  expect(result).toEqual(expct);
});

// for ZombieCharacter
test('Should get right characteristic', () => {
  const result = new ZombieCharacter('justABoy');
  result.levelUp();
  result.damage(20);

  const expct = {
    health: 82.4, level: 2, name: 'justABoy', type: 'Zombie', attack: 48, defense: 12,
  };
  expect(result).toEqual(expct);
});
