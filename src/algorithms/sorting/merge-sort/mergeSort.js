import tester from '../tester';

/**
 * 合并两个有序数组
 * @param {number[]} a
 * @param {number[]} b
 */
function merge(a, b) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i += 1;
    } else {
      result.push(b[j]);
      j += 1;
    }

    tester.visit();
  }

  return [...result, ...a.slice(i), ...b.slice(j)];
}

/**
 * 归并排序
 * @param {number[]} originalArray 输入的数字数组
 */
export default function mergeSort(originalArray) {
  const array = [...originalArray];

  tester.visit();

  if (array.length <= 1) {
    return array;
  }

  const left = mergeSort(array.slice(0, Math.ceil(array.length / 2)));
  const right = mergeSort(array.slice(Math.ceil(array.length / 2)));

  return merge(left, right);
}
