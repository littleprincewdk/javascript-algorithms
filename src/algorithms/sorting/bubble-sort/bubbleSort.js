import tester from '../tester';

/**
 * 冒泡排序
 * @param {number[]} originalArray 输入的数字数组
 */
export default function bubbleSort(originalArray) {
  const array = [...originalArray];

  let swapped = false;

  for (let i = 1; i < array.length; i += 1) {
    tester.visit();

    swapped = false;

    for (let j = 0; j < array.length - i; j += 1) {
      tester.visit();

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        swapped = true;
      }
    }

    if (!swapped) {
      return array;
    }
  }

  return array;
}
