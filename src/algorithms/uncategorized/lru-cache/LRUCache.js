/**
 * LRU缓存
 */
export default class LRUCache {
  /**
   * 以正整数作为容量`capacity`初始化 LRU 缓存
   * @param {*} capacity 容量
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  /**
   * 如果关键字`key`存在于缓存中，则返回关键字的值，否则返回`-1`
   * @param {*} key 关键字
   */
  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);

      return value;
    }

    return -1;
  }

  /**
   * 如果关键字已经存在，则变更其数据值；
   * 如果关键字不存在，则插入该组「关键字-值」。
   * 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
   * @param {*} key 关键字
   * @param {*} value 值
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}
