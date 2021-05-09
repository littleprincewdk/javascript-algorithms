/* eslint-disable no-param-reassign */
/**
 * Promise.allSettled
 * @param {Promise[]} promises
 */
export default function allSettled(promises) {
  return new Promise((resolve) => {
    // 接受可迭代对象
    promises = [...promises];
    const values = [];

    promises.forEach((promise, index) => {
      // 处理非promsie对象
      promise = Promise.resolve(promise);
      promise.then((value) => {
        values[index] = {
          status: 'fulfilled',
          value,
        };
        if (values.length === promises.length) {
          resolve(values);
        }
      });
      promise.catch((reason) => {
        values[index] = {
          status: 'rejected',
          reason,
        };
        if (values.length === promises.length) {
          resolve(values);
        }
      });
    });
  });
}
