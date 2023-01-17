import DaemonCharacter from '../childClasses/Daemon.js';
import MagicianCharacter from '../childClasses/Magician.js';

// for DaemonCharacter
test('Should get stoned status', () => {
  const result = new DaemonCharacter('justABoy', 4);
  result.setStoned(true);

  const expct = true;
  expect(result.getStoned()).toEqual(expct);
});

test('Should get attack status', () => {
  const result = new DaemonCharacter('justABoy');
  result.setAttack(20);

  const expct = 20;
  expect(result.getAttack()).toEqual(expct);
});

test('Should throw error', () => {
  const test = new DaemonCharacter('justABoy');
  expect(() => test.setStoned(22)).toThrow();
});

test.each([
  ['someting', { name: 'justABoy', distance: 1 }, {
    health: 89.6, level: 2, name: 'justABoy', type: 'Daemon', attack: 20, defense: 48, distance: 1, stoned: true,
  }],
  ['someting', { name: 'justABoy', distance: 2 }, {
    health: 89.6, level: 2, name: 'justABoy', type: 'Daemon', attack: 13, defense: 48, distance: 2, stoned: true,
  }],
  ['someting', { name: 'justABoy', distance: 3 }, {
    health: 89.6, level: 2, name: 'justABoy', type: 'Daemon', attack: 8, defense: 48, distance: 3, stoned: true,
  }],
  ['someting', { name: 'justABoy', distance: 4 }, {
    health: 89.6, level: 2, name: 'justABoy', type: 'Daemon', attack: 4, defense: 48, distance: 4, stoned: true,
  }],
  ['someting', { name: 'justABoy', distance: 5 }, {
    health: 89.6, level: 2, name: 'justABoy', type: 'Daemon', attack: 0, defense: 48, distance: 5, stoned: true,
  }],
])(
  ('Should get right characteristic for hero '),
  (something, amount, expected) => {
    const result = new DaemonCharacter(amount.name, amount.distance);
    result.levelUp();
    result.damage(20);
    result.setStoned(true);
    result.setAttack(20);
    expect(result).toEqual(expected);
  },
);

// for MagicianCharacter
test('Should get right characteristic for hero ', () => {
  const result = new MagicianCharacter('justABoy');
  result.levelUp();
  result.damage(20);
  result.setStoned(true);
  result.setAttack(20);

  const expct = {
    health: 89.6, level: 2, name: 'justABoy', type: 'Magician', attack: 20, defense: 48, distance: 1, stoned: true,
  };
  expect(result).toEqual(expct);
});

test('Should get right characteristic for hero ', () => {
  const result = new MagicianCharacter('justABoy', 5);
  result.levelUp();
  result.damage(20);
  result.setAttack(20);

  const expct = {
    health: 89.6, level: 2, name: 'justABoy', type: 'Magician', attack: 12, defense: 48, distance: 5,
  };
  expect(result).toEqual(expct);
});
