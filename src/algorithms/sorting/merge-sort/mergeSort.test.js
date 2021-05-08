import mergeSort from './mergeSort';
import tester from '../tester';

tester.test('merge', mergeSort, {
  sortedArr: 87,
  notSortedArr: 103,
  reverseArr: 79,
  equalArr: 79,
});
