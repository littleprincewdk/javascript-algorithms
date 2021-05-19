/**
 * solution1:
 *
 * 先从第一行开始往左下走，再打印从最后一列开始往左下走，同时判断边界是否溢出
 * @param {number[][]} matrix
 */
export function printMatrix1(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = [];

  // 从第一行开始往左下走
  // for (let i = 0; i < n; i += 1) {
  //   let col = i;
  //   let row = 0;
  //   while (col >= 0 && row < m) {
  //     result.push(matrix[row][col]);
  //     col -= 1;
  //     row += 1;
  //   }
  // }

  // 从最后一列开始往左下走
  // for (let j = 1; j < m; j += 1) {
  //   let col = n - 1;
  //   let row = j;
  //   while (col >= 0 && row < m) {
  //     result.push(matrix[row][col]);
  //     col -= 1;
  //     row += 1;
  //   }
  // }

  // 两步合并
  for (let i = 0; i < m + n - 1; i += 1) {
    let col = i;
    let row = 0;
    if (i >= n) {
      col = n - 1;
      row = i - n + 1;
    }
    while (col >= 0 && row < m) {
      result.push(matrix[row][col]);
      col -= 1;
      row += 1;
    }
  }

  return result;
}

/**
 * solution2:
 *
 * 先从第一行开始往左下走，同时对称走，可以减少遍历
 * @param {number[][]} matrix
 */
export function printMatrix2(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const positiveOrder = []; // 从matrix[0][0]开始
  const reverseOrder = []; // 从matrix[m - 1][n - 1]开始

  for (let i = 0; i < (m + n) / 2; i += 1) {
    let col = i;
    let row = 0;
    if (i >= n) {
      col = n - 1;
      row = i - n + 1;
    }
    while (col >= 0 && row < m) {
      positiveOrder.push(matrix[row][col]);
      if (i < (m + n) / 2 - 1) {
        reverseOrder.push(matrix[m - row - 1][n - col - 1]);
      }
      col -= 1;
      row += 1;
    }
  }

  return [...positiveOrder, ...reverseOrder.reverse()];
}
