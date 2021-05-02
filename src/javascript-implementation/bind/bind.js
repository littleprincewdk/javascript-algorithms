/* eslint-disable no-param-reassign, no-undef */

/**
 * bind
 * @param {*} thisArg
 * @param  {...any} params
 * @returns {Function}
 */
export default function bind(thisArg, ...params) {
  if (thisArg === null || thisArg === undefined) {
    thisArg = global || window;
  }
  const fn = this;
  function func(...args) {
    if (new.target) {
      return new this(...params, ...args);
    }
    return fn.apply(thisArg, [...params, ...args]);
  }
  Object.defineProperty(func, 'name', {
    value: `bound ${fn.name}`,
  });
  return func;
}
