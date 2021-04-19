/**
 * 计算斐波那契数列
 * @param {number} n
 */
export function fibonacci(n) {
  let result = 1;
  let n1 = 1; // fibonacci(n - 1)

  for (let i = 3; i <= n; i += 1) {
    result += n1;
    n1 = result - n1;
  }

  return result;
}

/**
 * [比内公式计算斐波那契数列](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fibonacci/fibonacciNthClosedForm.js)
 *
 * @param {*} n
 */
export function fibonacciClosedForm(position) {
  const topMaxValidPosition = 70;

  // Check that position is valid.
  if (position < 1 || position > topMaxValidPosition) {
    throw new Error(`Can't handle position smaller than 1 or greater than ${topMaxValidPosition}`);
  }

  // Calculate √5 to re-use it in further formulas.
  const sqrt5 = Math.sqrt(5);
  // Calculate φ constant (≈ 1.61803).
  const phi = (1 + sqrt5) / 2;

  // Calculate fibonacci number using Binet's formula.
  return Math.floor(phi ** position / sqrt5 + 0.5);
}
