/**
 * 队列
 */
export default class Queue {
  constructor() {
    this._elements = [];
  }

  /**
   * 入队
   * @param {*} value
   */
  enqueue(value) {
    return this._elements.push(value);
  }

  /**
   * 出队
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this._elements.shift();
  }

  /**
   * 获取队首元素
   * @returns {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this._elements[0];
  }

  /**
   * 获取队列元素个数
   * @returns {number}
   */
  size() {
    return this._elements.length;
  }

  /**
   * 判断队列是否为空
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
    return this._elements;
  }

  /**
   * 转化为字符串
   * @returns {string}
   */
  toString() {
    return this._elements.toString();
  }
}
