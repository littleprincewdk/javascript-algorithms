/**
 * 双向链表节点
 */
export default class DoublyLinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  toString() {
    return String(this.value);
  }
}
