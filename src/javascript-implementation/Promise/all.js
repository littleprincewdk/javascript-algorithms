/* eslint-disable no-param-reassign */
/**
 * Promise.all
 * @param {Promise[]} promises
 */
export default function all(promises) {
  return new Promise((resolve, reject) => {
    /** 接受可迭代对象 */
    promises = [...promises];
    const values = [];

    // 处理空迭代对象
    if (!promises.length) {
      resolve(values);
    } else {
      promises.forEach((promise, index) => {
        // 处理非promise对象
        promise = Promise.resolve(promise);
        promise.then((value) => {
          values[index] = value;
          if (values.length === promises.length) {
            resolve(values);
          }
        });
        promise.catch((error) => reject(error));
      });
    }
  });
}
