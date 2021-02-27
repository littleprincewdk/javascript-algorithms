import tester from '../tester';

/**
 * 插入排序
 * @param {number[]} originalArray 输入的数字数组
 */
export default function insertionSort(originalArray) {
  const array = [...originalArray];

  for (let i = 1; i < array.length; i += 1) {
    tester.visit();

    for (let j = i; j > 0; j -= 1) {
      if (array[j] < array[j - 1]) {
        tester.visit();

        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  }

  return array;
}
