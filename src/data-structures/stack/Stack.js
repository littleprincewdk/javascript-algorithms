/**
 * 栈
 */
export default class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   * 压栈
   * @param {*} value
   */
  push(value) {
    this.stack.push(value);
  }

  /**
   * 出栈
   * @returns {*}
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * 获取栈顶元素
   * @returns {*}
   */
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * 获取栈元素个数
   * @returns {number}
   */
  size() {
    return this.stack.length;
  }

  /**
   * 判断栈是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   * 转化为数组
   * @returns {[]}
   */
  toArray() {
    return [...this.stack].reverse();
  }

  /**
   * 转化为字符串
   * @returns {string}
   */
  toString() {
    return [...this.stack].reverse().toString();
  }
}
