import { postorder, postorderRecusive } from './postorder';
import { binaryTree } from './data';

describe('binary tree postorder traverse', () => {
  test('iterate implementation', () => {
    const result = [];
    postorder(binaryTree, (value) => result.push(value));

    expect(result).toEqual(binaryTree.postorder);
  });

  test('recursive implementation', () => {
    const result = [];
    postorderRecusive(binaryTree, (value) => result.push(value));

    expect(result).toEqual(binaryTree.postorder);
  });
});
