import { clone, cloneDeep } from './clone';

describe('clone implementation', () => {
  const obj = {
    a: 1,
    b: 'hello',
    c: true,
    d: null,
    e: undefined,
    f: [1, 2, 3],
    g: { a: 1 },
  };

  test('shallow clone implementation', () => {
    expect(clone(obj)).toEqual(obj);
  });

  test('deep clone implementation', () => {
    expect(cloneDeep(obj)).toEqual(obj);
  });
});
