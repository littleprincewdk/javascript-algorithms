import create from './new';

describe('new implementation', () => {
  function A() {
    this.foo = 1;
  }
  A.prototype = { bar: 2 };

  function B(name, age) {
    this.name = name;
    this.age = age;
  }

  function C() {
    this.foo = 1;
    return 1;
  }

  const obj = { foo: 2 };

  function D() {
    this.foo = 1;
    return obj;
  }

  function E() {
    this.foo = 1;
    return null;
  }

  function F() {
    this.foo = 1;
    return A;
  }

  test('return expected object', () => {
    expect(create(A)).toEqual(new A());
  });

  test('receive arguments and return expected object', () => {
    expect(create(B, 'princekin', '9')).toEqual(new B('princekin', '9'));
  });

  test('constructor return object', () => {
    expect(create(D)).toEqual(new D());
  });

  test('constructor return null', () => {
    expect(create(E)).toEqual(new E());
  });

  test('constructor return function', () => {
    expect(create(F)).toEqual(new F());
  });
});
