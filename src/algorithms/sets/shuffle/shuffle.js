/**
 * sort排序法
 *
 * 随机性差
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export function sortShuffle(originalArray) {
  const array = [...originalArray];

  return array.sort(() => Math.random() - 0.5);
}

/**
 * Fisher–Yates 原始算法
 *
 * 时间复杂度 O(n^2)，空间复杂度 O(n)
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export function fisherYatesShuffle(originalArray) {
  const array = [...originalArray];

  const result = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const number = array.splice(randomIndex, 1)[0];
    result.push(number);
  }

  return result;
}

/**
 * Knuth-Durstenfeld 改进算法
 *
 * 时间复杂度 O(n)，原地置换无需额外空间
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export function knuthDurstenfeldShuffle(originalArray) {
  const array = [...originalArray];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[randomIndex], array[i]] = [array[i], array[randomIndex]];
  }

  return array;
}
