import { factorial, factorialRecursive } from './factorial';

describe('factorial', () => {
  test('iterate implementation', () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(5)).toEqual(120);
    expect(factorial(8)).toEqual(40320);
    expect(factorial(10)).toEqual(3628800);
  });

  test('recursive implementation', () => {
    expect(factorialRecursive(0)).toEqual(1);
    expect(factorialRecursive(1)).toEqual(1);
    expect(factorialRecursive(5)).toEqual(120);
    expect(factorialRecursive(8)).toEqual(40320);
    expect(factorialRecursive(10)).toEqual(3628800);
  });
});
