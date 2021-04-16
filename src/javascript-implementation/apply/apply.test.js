import apply from './apply';

describe('apply implementation', () => {
  function func(a = 1, b = 1, c = 1) {
    return this.foo + a + b + c;
  }
  func.apply = apply;
  func.originalApply = Object.getPrototypeOf(func).apply;

  const obj = { foo: 1 };
  global.foo = 2;

  test('apply this obj', () => {
    expect(func.apply(obj)).toEqual(func.originalApply(obj));
  });

  test('apply this obj with params', () => {
    expect(func.apply(obj, [1, 2, 3])).toEqual(func.originalApply(obj, [1, 2, 3]));
  });

  test('apply this global', () => {
    expect(func.apply(null)).toEqual(5);
  });
});
