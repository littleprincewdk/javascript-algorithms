import Queue from '../../../data-structures/queue/Queue';

/**
 * 广度优先搜索
 * @param {BinaryTreeNode} root
 * @param {Function} callback
 */
export default function bfs(root, callback) {
  const queue = new Queue();
  queue.enqueue(root);

  while (queue.size()) {
    const node = queue.dequeue();

    callback(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
}
