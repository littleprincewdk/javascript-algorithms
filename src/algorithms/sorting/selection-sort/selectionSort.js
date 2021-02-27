import tester from '../tester';

/**
 * 选择排序
 * @param {number[]} originalArray 输入的数字数组
 */
export default function selectionSort(originalArray) {
  const array = [...originalArray];

  for (let i = 0; i < array.length - 1; i += 1) {
    tester.visit();

    for (let j = i + 1; j < array.length; j += 1) {
      tester.visit();

      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }

  return array;
}
