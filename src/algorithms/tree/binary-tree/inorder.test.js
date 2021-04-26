import { inorder, inorderRecursive } from './inorder';
import { binaryTree } from './data';

describe('binary tree inorder traverse', () => {
  test('iterate implementation', () => {
    const result = [];
    inorder(binaryTree, (value) => result.push(value));

    expect(result).toEqual(binaryTree.inorder);
  });

  test('recursive implementation', () => {
    const result = [];
    inorderRecursive(binaryTree, (value) => result.push(value));

    expect(result).toEqual(binaryTree.inorder);
  });
});
