/* eslint-disable no-param-reassign, no-undef */

// RangeError: Maximum call stack size exceeded ???
// export default function apply(thisArg, params = []) {
//   thisArg = thisArg || global || window;
//   thisArg.fn = this;
//   const ret = thisArg.fn(...params);
//   delete thisArg.fn;
//   return ret;
// }

export default function apply(thisArg, params = []) {
  thisArg = thisArg || global || window;
  return this.call(thisArg, ...params);
}
