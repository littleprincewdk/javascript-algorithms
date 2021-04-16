import bind from './bind';

describe('bind implementation', () => {
  function func(a = 1, b = 1, c = 1) {
    return this.foo + a + b + c;
  }
  func.bind = bind;
  func.originalBind = Object.getPrototypeOf(func).bind;

  const obj = { foo: 1 };
  global.foo = 2;

  test('bind this obj', () => {
    expect(func.bind(obj)()).toEqual(4);
  });

  test('bind this obj with params', () => {
    expect(func.bind(obj, 1, 2, 3)()).toEqual(func.originalBind(obj, 1, 2, 3)());
  });

  test('bind this global', () => {
    expect(func.bind(null)()).toEqual(5);
  });
});
