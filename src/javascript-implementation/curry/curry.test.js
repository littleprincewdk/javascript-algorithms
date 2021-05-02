import curry from './curry';

describe('curry implementation', () => {
  test('collect arguments correctly', () => {
    function foo(a, b, c) {
      return [a, b, c];
    }

    const curried = curry(foo);

    expect(curried(1)(2)(3)).toEqual([1, 2, 3]);
    expect(curried(1, 2)(3)).toEqual([1, 2, 3]);
    expect(curried(1)(2, 3)).toEqual([1, 2, 3]);
  });
});
