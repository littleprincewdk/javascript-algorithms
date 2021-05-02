import unique from './unique';

describe('unique implementation', () => {
  test('should unique array', () => {
    const obj = {};
    const symbol = Symbol('unique');
    const array = [1, 2, 2, null, null, undefined, undefined, true, true, symbol, symbol, obj, obj];
    expect(unique(array)).toEqual([1, 2, null, undefined, true, symbol, obj]);
  });
});
