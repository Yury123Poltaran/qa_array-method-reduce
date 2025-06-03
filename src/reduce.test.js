'use strict';

const { reduce } = require('./reduce');

describe('reduce', () => {
  beforeAll(() => {
    Array.prototype.reduce2 = reduce; // eslint-disable-line
  });

  afterAll(() => {
    delete Array.prototype.reduce2;
  });

  it('should return the sum of array elements', () => {
    const result = [1, 2, 3].reduce2((acc, val) => acc + val, 0);

    expect(result).toBe(6);
  });

  it('should concatenate strings', () => {
    const result = ['Hello', ' ', 'world'].reduce2((acc, val) => acc + val, '');

    expect(result).toBe('Hello world');
  });
});
