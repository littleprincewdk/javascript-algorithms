/**
 * 柯里化
 * @param {Function} func
 * @returns {Function}
 */
export default function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    // eslint-disable-next-line func-names
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}
