import bfs from './bfs';
import { binaryTree } from './data';

describe('binary tree bfs', () => {
  test('iterate implementation', () => {
    const result = [];
    bfs(binaryTree, (value) => result.push(value));

    expect(result).toEqual(binaryTree.bfs);
  });
});
