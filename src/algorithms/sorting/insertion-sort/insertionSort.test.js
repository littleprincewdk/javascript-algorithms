import insertionSort from './insertionSort';
import tester from '../tester';

tester.test('insertion', insertionSort, {
  sortedArr: 19,
  notSortedArr: 100,
  reverseArr: 209,
  equalArr: 19,
});
