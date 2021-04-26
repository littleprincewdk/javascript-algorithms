import LinkedList from './LinkedList';

describe('LinkedList', () => {
  test('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  test('should append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.tail.next).toBeNull();
  });

  test('should prepend node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.prepend(2);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.toString()).toBe('3,2,1');
  });

  test('should delete node by value from linked list', () => {
    const linkedList = new LinkedList();

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
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,4,5');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('5');

    linkedList.delete(5);
    expect(linkedList.toString()).toBe('2,4');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('2');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  test('should get element count', () => {
    const linkedList = new LinkedList();

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
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append(3);

    const iterateResult = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const value of linkedList) {
      iterateResult.push(value);
    }

    expect(iterateResult.toString()).toBe('1,2,3');
  });

  test('should find node by value', () => {
    const linkedList = new LinkedList();

    expect(linkedList.find(5)).toBeNull();

    linkedList.append(1);
    expect(linkedList.find(1)).toBeDefined();

    linkedList.append(2).append(3);

    const node = linkedList.find(2);

    expect(node.value).toBe(2);
    expect(linkedList.find(5)).toBeNull();
  });

  test('should create linked list from array', () => {
    const linkedList = new LinkedList();
    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  test('should convert to array', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.toArray().join(',')).toBe('1,2,3');
  });

  test('should reverse linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append(3);

    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);

    linkedList.reverse();
    expect(linkedList.toString()).toBe('3,2,1');
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(1);

    linkedList.reverse();
    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);
  });
});
