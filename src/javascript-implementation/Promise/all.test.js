/* eslint-disable prefer-promise-reject-errors */
import all from './all';

process.on('unhandledRejection', () => {});

describe('Promise.all', () => {
  const fulfilled = [Promise.resolve(1), Promise.resolve(2)];
  const rejected = [Promise.reject(1), Promise.resolve(2)];
  const nonPromise = [1, 2];

  test('should resolve when receive all fulfilled', async () => {
    await expect(all(fulfilled)).toEqual(Promise.all(fulfilled));
  });

  test('should resolve when receive rejected promise', async () => {
    await expect(all(rejected)).toEqual(Promise.all(rejected));
  });

  test('should reject when receive non-iterable param', async () => {
    await expect(all({})).toEqual(Promise.all({}));
  });

  test('should resolve when receive non-promise', async () => {
    await expect(all(nonPromise)).toEqual(Promise.all(nonPromise));
  });

  test('should resolve when receive empty iteration object', async () => {
    await expect(all([])).toEqual(Promise.all([]));
  });
});
