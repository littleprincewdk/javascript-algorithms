/**
 * 栈
 */
export default class Stack {
  constructor() {
    this._elements = [];
  }

  /**
   * 压栈
   * @param {*} value
   */
  push(value) {
    this._elements.push(value);

    return this;
  }

  /**
   * 出栈
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this._elements.pop();
  }

  /**
   * 获取栈顶元素
   * @returns {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this._elements[this._elements.length - 1];
  }

  /**
   * 获取栈元素个数
   * @returns {number}
   */
  size() {
    return this._elements.length;
  }

  /**
   * 判断栈是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this._elements.length === 0;
  }

  /**
   * 转化为数组
   * @returns {[]}
   */
  toArray() {
    return [...this._elements].reverse();
  }

  /**
   * 转化为字符串
   * @returns {string}
   */
  toString() {
    return [...this._elements].reverse().toString();
  }
}
