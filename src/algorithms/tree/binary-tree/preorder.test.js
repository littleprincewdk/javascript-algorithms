import { preorder } from './preorder';
import { binaryTree } from './data';

describe('binary tree preorder traverse', () => {
  test('iterator implementation', () => {
    const result = [];
    preorder(binaryTree, (value) => result.push(value));

    expect(result).toEqual(binaryTree.preorder);
  });

  test('recursive implementation', () => {
    const result = [];
    preorder(binaryTree, (value) => result.push(value));

    expect(result).toEqual(binaryTree.preorder);
  });
});
