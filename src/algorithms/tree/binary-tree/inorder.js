/**
 * 中序遍历
 * @param {BinaryTreeNode} root
 * @param {Function} callback
 */
export function inorder(root, callback) {
  const stack = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    callback(current.value);
    current = current.right;
  }
}

/**
 * 中序遍历递归实现
 * @param {BinaryTreeNode} root
 * @param {Function} callback
 */
export function inorderRecursive(root, callback) {
  if (!root) {
    return;
  }

  inorderRecursive(root.left, callback);
  callback(root.value);
  inorderRecursive(root.right, callback);
}
