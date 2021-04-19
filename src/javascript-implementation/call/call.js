/* eslint-disable no-param-reassign, no-undef */
export default function call(thisArg, ...params) {
  thisArg = thisArg || global || window;
  return this.apply(thisArg, params);
}
