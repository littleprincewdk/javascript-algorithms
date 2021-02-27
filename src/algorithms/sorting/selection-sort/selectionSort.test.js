import selectionSort from './selectionSort';
import tester from '../tester';

tester.test('selection', selectionSort, {
  sortedArr: 209,
  notSortedArr: 209,
  reverseArr: 209,
  equalArr: 209,
});
