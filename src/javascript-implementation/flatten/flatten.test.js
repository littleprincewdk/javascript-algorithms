import flatten from './flatten';

describe('flatten implementation', () => {
  test('should flatten array', () => {
    const array = [1, [2, 3, [4, 5, 6]]];
    expect(flatten(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
