/**
 * 计算阶乘
 * @param {number} n
 */
export function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }

  return result;
}

/**
 * 递归方式计算阶乘
 * @param {number} n
 */
export function factorialRecursive(n, p = 1) {
  if (n <= 1) {
    return 1 * p;
  }

  const result = n * p;

  return factorialRecursive(n - 1, result); // 尾调用优化
}
