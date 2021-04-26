import DoublyLinkedList from './DoublyLinkedList';

describe('DoublyLinkedList', () => {
  test('should create empty linked list', () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.toString()).toBe('');
  });

  test('should append node to linked list', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.tail.prev.value).toBe(1);
    expect(linkedList.toString()).toBe('1,2');
  });

  test('should prepend node to linked list', () => {
    const linkedList = new DoublyLinkedList();

    linkedList.prepend(2);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.head.next.next.prev).toBe(linkedList.head.next);
    expect(linkedList.tail.prev.next).toBe(linkedList.tail);
    expect(linkedList.tail.prev.value).toBe(2);
    expect(linkedList.toString()).toBe('3,2,1');
  });

  test('should delete node by value from linked list', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.delete(5).toString()).toBe('');

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('5');

    linkedList.delete(3);
    expect(linkedList.tail.prev.prev.value).toBe(2);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,4,5');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.head.next.next).toBe(linkedList.tail);
    expect(linkedList.tail.prev.prev).toBe(linkedList.head);
    expect(linkedList.tail.toString()).toBe('5');

    linkedList.delete(5);
    expect(linkedList.toString()).toBe('2,4');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('2');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');
    expect(linkedList.head).toBe(linkedList.tail);

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  test('should be possible to store objects in the list and to print them out', () => {
    const linkedList = new DoublyLinkedList();

    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };

    linkedList.append(nodeValue1).prepend(nodeValue2);

    expect(linkedList.toArray()).toEqual([nodeValue2, nodeValue1]);
  });

  test('should get element count', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.size()).toBe(0);

    linkedList.append(1);
    expect(linkedList.size()).toBe(1);

    linkedList.prepend(2);
    expect(linkedList.size()).toBe(2);

    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    expect(linkedList.size()).toBe(5);

    linkedList.delete(1);
    expect(linkedList.size()).toBe(4);

    linkedList.delete(3);
    expect(linkedList.size()).toBe(2);

    linkedList.delete(2);
    linkedList.delete(4);
    expect(linkedList.size()).toBe(0);

    linkedList.delete(1);
    expect(linkedList.size()).toBe(0);
  });

  test('should iterator work', () => {
    const linkedList = new DoublyLinkedList();

    linkedList.append(1).append(2).append(3);

    const iterateResult = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const value of linkedList) {
      iterateResult.push(value);
    }

    expect(iterateResult.toString()).toBe('1,2,3');
  });

  test('should find node by value', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.find(5)).toBeNull();

    linkedList.append(1);
    expect(linkedList.find(1)).toBeDefined();

    linkedList.append(2).append(3);

    const node = linkedList.find(2);

    expect(node.value).toBe(2);
    expect(linkedList.find(5)).toBeNull();
  });

  test('should create linked list from array', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  test('should reverse linked list', () => {
    const linkedList = new DoublyLinkedList();

    linkedList.append(1).append(2).append(3).append(4);

    expect(linkedList.toString()).toBe('1,2,3,4');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(4);

    linkedList.reverse();

    expect(linkedList.toString()).toBe('4,3,2,1');

    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.value).toBe(4);
    expect(linkedList.head.next.value).toBe(3);
    expect(linkedList.head.next.next.value).toBe(2);
    expect(linkedList.head.next.next.next.value).toBe(1);

    expect(linkedList.tail.next).toBeNull();
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.tail.prev.value).toBe(2);
    expect(linkedList.tail.prev.prev.value).toBe(3);
    expect(linkedList.tail.prev.prev.prev.value).toBe(4);

    linkedList.reverse();

    expect(linkedList.toString()).toBe('1,2,3,4');

    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next.value).toBe(4);

    expect(linkedList.tail.next).toBeNull();
    expect(linkedList.tail.value).toBe(4);
    expect(linkedList.tail.prev.value).toBe(3);
    expect(linkedList.tail.prev.prev.value).toBe(2);
    expect(linkedList.tail.prev.prev.prev.value).toBe(1);
  });
});
