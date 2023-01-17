import Character from '../Character.js';

test.each([
  ['someting', { name: 'Воин', type: 'Daemon' }, {
    health: 100, level: 1, name: 'Воин', type: 'Daemon',
  }],
])(
  ('Should get right characteristic for hero '),
  (something, amount, expected) => {
    const result = new Character(amount.name, amount.type);
    expect(result).toEqual(expected);
  },
);

test('Should throw error', () => {
  expect(() => new Character('Чернокнижник', 'emon')).toThrow();
});

test('Should throw error', () => {
  expect(() => new Character('Чижник', 'emon')).toThrow();
});

test('Should throw error', () => {
  expect(() => new Character('к', 'Daemon')).toThrow();
});
