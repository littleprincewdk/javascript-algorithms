import race from './race';

process.on('unhandledRejection', () => {});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

describe('Promise.race', () => {
  const fulfilled = [delay(200).then(() => 2), delay(100).then(() => 1)];
  // eslint-disable-next-line prefer-promise-reject-errors
  const rejected = [Promise.reject(1), Promise.resolve(2)];
  const nonPromise = [1, 2];

  test('should resolve when receive all fulfilled promise', async () => {
    await expect(race(fulfilled)).toEqual(Promise.race(fulfilled));
  });

  test('should reject when receive rejected promise', async () => {
    await expect(race(rejected)).toEqual(Promise.race(rejected));
  });

  test('should reject when receive non-iterable param', async () => {
    await expect(race({})).toEqual(Promise.race({}));
  });

  test('should resolve when receive non-promise', async () => {
    await expect(race(nonPromise)).toEqual(Promise.race(nonPromise));
  });
});
