import getBuffer from '../getBuffer.js';
import ArrayBuffer from '../arrayBuffer.js';

test('Should throw error', () => {
  const dataBuffer = new ArrayBuffer();
  expect(() => dataBuffer.toString()).toThrow();
});

test('Should get string', () => {
  const dataBuffer = new ArrayBuffer();
  const buffer = getBuffer();
  dataBuffer.load(buffer);

  expect(dataBuffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
