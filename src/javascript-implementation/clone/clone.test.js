import { clone, cloneDeep } from './clone';

describe('clone implementation', () => {
  // circular
  const foo = {
    foo: 'foo',
  };
  const bar = {
    bar: 'bar',
  };
  foo.bar = bar;
  bar.foo = foo;

  const obj = {
    a: 1,
    b: 'hello',
    c: true,
    d: null,
    e: undefined,
    f: [1, 2, 3],
    g: { a: 1 },
    foo,
  };

  test('shallow clone implementation', () => {
    expect(clone(obj)).toEqual(obj);
  });

  test('deep clone implementation', () => {
    expect(cloneDeep(obj)).toEqual(obj);
  });
});
