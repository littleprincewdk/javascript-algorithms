import tester from '../tester';

/**
 * 计数排序
 * @param {number[]} originalArray 输入的数字数组
 */
export default function countingSort(originalArray) {
  const array = [];
  const buckets = [];
  let min = Infinity;
  let max = -Infinity;

  originalArray.forEach((num) => {
    tester.visit();

    min = Math.min(num, min);
    max = Math.max(num, max);
  });

  originalArray.forEach((num) => {
    tester.visit();

    if (!buckets[num - min]) {
      buckets[num - min] = 1;
    } else {
      buckets[num - min] += 1;
    }
  });

  buckets.forEach((bucket, num) => {
    for (let i = 0; i < bucket; i += 1) {
      tester.visit();

      array.push(num + min);
    }
  });

  return array;
}
