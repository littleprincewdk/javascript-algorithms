/* eslint-disable prefer-promise-reject-errors */
import any from './any';

process.on('unhandledRejection', () => {});

describe('Promise.any', () => {
  const promises = [Promise.reject(1), Promise.resolve(2)];
  const nonPromise = [1, 2];

  test('should resolve when any fulfilled', async () => {
    await expect(any(promises)).toEqual(Promise.any(promises));
  });

  test('should reject when receive non-iterable param', async () => {
    await expect(any({})).toEqual(Promise.any({}));
  });

  test('should resolve when receive non-promise', async () => {
    await expect(any(nonPromise)).toEqual(Promise.any(nonPromise));
  });

  test('should rejected when receive empty iteration object', async () => {
    await expect(any([])).toEqual(Promise.any([]));
  });
});
