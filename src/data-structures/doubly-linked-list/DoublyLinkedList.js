import DoublyLinkedListNode from './DoublyLinkedListNode';

/**
 * 双向链表
 */
export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * 插入值到前头
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  prepend(value) {
    const newHead = new DoublyLinkedListNode(value, this.head);
    if (this.head) {
      this.head.prev = newHead;
    }
    if (!this.tail) {
      this.tail = newHead;
    }
    this.head = newHead;

    this._size += 1;

    return this;
  }

  /**
   * 插入值到后头
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  append(value) {
    const newTail = new DoublyLinkedListNode(value);
    if (!this.tail) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.prev = this.tail;
      this.tail = newTail;
    }

    this._size += 1;

    return this;
  }

  /**
   * 删除所有值为`value`的节点
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  delete(value) {
    if (!this.head) {
      return this;
    }

    const virtualHead = new DoublyLinkedListNode(value, this.head);
    let current = virtualHead;

    while (current.next !== null) {
      if (current.next.value === value) {
        if (current.next.next !== null) {
          current.next.next.prev = current;
        }
        current.next = current.next.next;
        this._size -= 1;
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
  [Symbol.iterator]() {
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
  }

  /**
   * 搜索值为`value`的节点
   * @param {*} value
   * @param {*} callback
   * @returns {DoublyLinkedListNode}
   */
  find(value) {
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
   * 获取链表元素个数
   * @returns {number}
   */
  size() {
    return this._size;
  }

  /**
   * 从指定数组构造链表
   * @param {*} values
   * @returns {DoublyLinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  /**
   * 转化为数组
   * @returns {DoublyLinkedListNode[]}
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
   * @returns {DoublyLinkedList}
   */
  reverse() {
    let current = this.head;

    while (current !== null) {
      const { next } = current;
      current.next = current.prev;
      current.prev = next;

      current = next;
    }

    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }
}
