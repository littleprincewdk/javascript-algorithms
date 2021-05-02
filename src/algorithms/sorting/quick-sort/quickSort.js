import tester from '../tester';

/**
 * 快速排序
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export function quickSort(originalArray) {
  const array = [...originalArray];

  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const leftArray = [];
  const centerArray = [pivot];
  const rightArray = [];

  for (let i = 1; i < array.length; i += 1) {
    tester.visit();

    if (array[i] === pivot) {
      centerArray.push(array[i]);
    } else if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), ...centerArray, ...quickSort(rightArray)];
}

/**
 * 原地快速排序
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export function quickSortInPlace(
  originalArray,
  left = 0,
  right = originalArray.length - 1,
  recursiveCall = false,
) {
  const array = recursiveCall ? originalArray : [...originalArray];

  const partitionArray = (low, high) => {
    const pivot = array[high];

    tester.visit();

    let partitionIndex = low;
    for (let i = low; i < high; i += 1) {
      if (array[i] < pivot) {
        [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
        partitionIndex += 1;
      }
    }

    [array[partitionIndex], array[high]] = [array[high], array[partitionIndex]];

    return partitionIndex;
  };

  if (left < right) {
    const partitionIndex = partitionArray(left, right);
    quickSortInPlace(array, left, partitionIndex - 1, true);
    quickSortInPlace(array, partitionIndex + 1, right, true);
  }

  return array;
}
