/* eslint-disable no-param-reassign, no-undef */

/**
 * apply
 * @param {*} thisArg
 * @param {*[]} params
 * @returns {*}
 */
export default function apply(thisArg, params = []) {
  const symbol = Symbol('fn');

  if (thisArg === null || thisArg === undefined) {
    thisArg = global || window;
  }
  thisArg[symbol] = this;
  // ⚠️ 如果使用展开运算符，转成es5会导致循环调用，最终：RangeError: Maximum call stack size exceeded
  // eslint-disable-next-line no-eval
  const ret = eval(`thisArg[symbol](${params})`);
  delete thisArg[symbol];

  return ret;
}
