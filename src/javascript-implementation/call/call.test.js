import call from './call';

describe('call implementation', () => {
  function func(a = 1, b = 1, c = 1) {
    return this.foo + a + b + c;
  }
  func.call = call;
  func.originalCall = Object.getPrototypeOf(func).call;

  const obj = { foo: 1 };
  global.foo = 2;

  test('call this obj', () => {
    expect(func.call(obj)).toEqual(func.originalCall(obj));
  });

  test('call this obj with params', () => {
    expect(func.call(obj, 1, 2, 3)).toEqual(func.originalCall(obj, 1, 2, 3));
  });

  test('call this global', () => {
    expect(func.call(null)).toEqual(5);
  });
});
