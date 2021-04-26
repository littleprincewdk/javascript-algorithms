/**
 * 后序遍历
 * @param {BinaryTreeNode} root
 * @param {Function} callback
 */
export function postorder(root, callback) {
  const stack = [];
  let current = root;
  let prev = null;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    if (!current.right || current.right === prev) {
      callback(current.value);
      prev = current;
      current = null;
    } else {
      stack.push(current);
      current = current.right;
    }
  }
}

/**
 * 后序遍历递归实现
 * @param {BinaryTreeNode} root
 * @param {Function} callback
 */
export function postorderRecusive(root, callback) {
  if (!root) {
    return;
  }

  postorderRecusive(root.left, callback);
  postorderRecusive(root.right, callback);
  callback(root.value);
}
