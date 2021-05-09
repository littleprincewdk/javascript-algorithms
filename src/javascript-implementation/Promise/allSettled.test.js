/* eslint-disable prefer-promise-reject-errors */
import allSettled from './allSettled';

process.on('unhandledRejection', () => {});

describe('Promise.allSettled', () => {
  const nonPromise = [1, 2];

  test('should resolve when allSettled', async () => {
    /**
     * [
     *  { status: 'fulfilled', value: 1 },
     *  { status: 'rejected', reason: 2 },
     * ]
     */
    const promises = [Promise.resolve(1), Promise.reject(2)];
    await expect(allSettled(promises)).toEqual(Promise.allSettled(promises));
  });

  test('should reject when receive non-iterable param', async () => {
    await expect(allSettled({})).toEqual(Promise.allSettled({}));
  });

  test('should resolve when receive non-promise', async () => {
    /**
     * [
     *  { status: 'fulfilled', value: 1 },
     *  { status: 'fulfilled', value: 2 },
     * ]
     */
    await expect(allSettled(nonPromise)).toEqual(Promise.allSettled(nonPromise));
  });

  test('should resolve when receive empty iteration object', async () => {
    await expect(allSettled([])).toEqual(allSettled([]));
  });
});
