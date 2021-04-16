/* eslint-disable no-param-reassign, no-undef */

export default function bind(thisArg, ...params) {
  thisArg = thisArg || global || window;
  const fn = this;
  function func(...args) {
    return fn.apply(thisArg, [...params, ...args]);
  }
  // func.name = `bound ${fn.name}`;
  return func;
}
