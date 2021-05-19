import { printMatrix1, printMatrix2 } from './printMatrix';

describe('print matrix', () => {
  test('should print matrix correctly when m < n', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
    ];
    const expected = [1, 2, 6, 3, 7, 11, 4, 8, 12, 5, 9, 13, 10, 14, 15];

    expect(printMatrix1(matrix)).toEqual(expected);
    expect(printMatrix2(matrix)).toEqual(expected);
  });

  test('should print matrix correctly when m === n', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected = [1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16];

    expect(printMatrix1(matrix)).toEqual(expected);
    expect(printMatrix2(matrix)).toEqual(expected);
  });

  test('should print matrix correctly when m > n', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
    ];
    const expected = [1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 13, 12, 14, 15];

    expect(printMatrix1(matrix)).toEqual(expected);
    expect(printMatrix2(matrix)).toEqual(expected);
  });
});
