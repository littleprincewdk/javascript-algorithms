import LinkedListNode from './LinkedListNode';

/**
 * 链表
 */
export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * 插入值到前头
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend(value) {
    const newHead = new LinkedListNode(value, this.head);
    this.head = newHead;

    if (!this.tail) {
      this.tail = newHead;
    }

    return this;
  }

  /**
   * 插入值到后头
   * @param {*} value
   */
  append(value) {
    const newTail = new LinkedListNode(value);
    if (!this.tail) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }

    return this;
  }

  /**
   * 删除所有值为`value`的节点
   * @param {*} value
   * @returns {LinkedList}
   */
  delete(value) {
    if (!this.head) {
      return this;
    }

    const virtualHead = new LinkedListNode(0, this.head);
    let current = virtualHead;

    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    this.head = virtualHead.next;
    if (current === virtualHead) {
      this.tail = virtualHead.next;
    } else {
      this.tail = current;
    }

    return this;
  }

  /**
   * 迭代器
   * @returns {iterator}
   */
  [Symbol.iterator] = function iterator() {
    let current = this.head;

    return {
      next() {
        if (current === null) {
          return {
            value: undefined,
            done: true,
          };
        }
        const result = {
          value: current.value,
          done: false,
        };
        current = current.next;

        return result;
      },
    };
  };

  /**
   * 搜索值为`value`的节点
   * @param {*} value
   * @param {*} callback
   * @returns {LinkedList}
   */
  find(value) {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  /**
   * 从指定数组构造链表
   * @param {*} values
   * @returns {LinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  /**
   * 转化为数组
   * @returns {LinkedListNode[]}
   */
  toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  /**
   * 转化为字符串
   * @returns {string}
   */
  toString() {
    return this.toArray().toString();
  }

  /**
   * 反转链表
   */
  reverse() {
    let prev = null;
    let current = this.head;

    while (current !== null) {
      const { next } = current;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }
}
