/**
 * 前序遍历
 * @param {BinaryTreeNode} root
 * @param {Function} callback
 */
export function preorder(root, callback) {
  if (!root) {
    return;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    callback(node.value);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

// export function preorder(root, callback) {
//   const stack = [];
//   let current = root;

//   while (current || stack.length) {
//     while (current) {
//       stack.push(current);
//       callback(current.value);
//       current = current.left;
//     }
//     current = stack.pop();
//     current = current.right;
//   }
// }

/**
 * 前序遍历递归实现
 * @param {BinaryTreeNode} root
 * @param {Function} callback
 */
export function preorderRecursive(root, callback) {
  if (!root) {
    return;
  }

  callback(root.value);
  preorderRecursive(root.left, callback);
  preorderRecursive(root.right, callback);
}
