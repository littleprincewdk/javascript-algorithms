import BinaryTreeNode from '../../../data-structures/tree/BinaryTreeNode';

/**
 *           1
 *         /  \
 *        2    3
 *      /  \    \
 *     4   5     6
 *
 */

export const binaryTree = new BinaryTreeNode(1);

binaryTree.left = new BinaryTreeNode(2);
binaryTree.left.left = new BinaryTreeNode(4);
binaryTree.left.right = new BinaryTreeNode(5);
binaryTree.right = new BinaryTreeNode(3);
binaryTree.right.right = new BinaryTreeNode(6);

binaryTree.preorder = [1, 2, 4, 5, 3, 6];
binaryTree.inorder = [4, 2, 5, 1, 3, 6];
binaryTree.postorder = [4, 5, 2, 6, 3, 1];
binaryTree.bfs = [1, 2, 3, 4, 5, 6];
