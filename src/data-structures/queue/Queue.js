/**
 * 队列
 */
export default class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * 入队
   * @param {*} value
   */
  enqueue(value) {
    this.queue.push(value);
  }

  /**
   * 出队
   * @returns {*}
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   * 获取队首元素
   * @returns {*}
   */
  peek() {
    return this.queue[0];
  }

  /**
   * 获取队列元素个数
   * @returns {number}
   */
  size() {
    return this.queue.length;
  }

  /**
   * 判断队列是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * 转化为数组
   * @returns {[]}
   */
  toArray() {
    return this.queue;
  }

  /**
   * 转化为字符串
   * @returns {string}
   */
  toString() {
    return this.queue.toString();
  }
}
