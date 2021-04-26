import Queue from './Queue';

describe('Queue', () => {
  test('should create empty queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
  });

  test('should enqueue data to queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe('1,2');
  });

  test('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue();

    queue.enqueue({ value: 'test1', key: 'key1' });
    queue.enqueue({ value: 'test2', key: 'key2' });

    expect(queue.toArray()).toEqual([
      { value: 'test1', key: 'key1' },
      { value: 'test2', key: 'key2' },
    ]);
    expect(queue.dequeue().value).toBe('test1');
    expect(queue.dequeue().value).toBe('test2');
  });

  test('should get element count', () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0);

    queue.enqueue(1);
    expect(queue.size()).toBe(1);

    queue.enqueue(2);
    expect(queue.size()).toBe(2);

    queue.dequeue();
    expect(queue.size()).toBe(1);

    queue.dequeue();
    expect(queue.size()).toBe(0);

    queue.dequeue();
    expect(queue.size()).toBe(0);
  });

  test('should peek data from queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeUndefined();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  test('should check if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  test('should dequeue from queue in FIFO order', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });
});
