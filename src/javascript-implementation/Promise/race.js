/* eslint-disable no-restricted-syntax */
/**
 * Promise.race
 * @param {Promise[]} promises
 */
export default function race(promises) {
  return new Promise((resolve, reject) => {
    // 接受可迭代对象
    for (let promise of promises) {
      // 处理非promsie对象
      promise = Promise.resolve(promise);
      promise.then((value) => resolve(value));
      promise.catch((error) => reject(error));
    }
  });
}
