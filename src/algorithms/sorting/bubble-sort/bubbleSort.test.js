import bubbleSort from './bubbleSort';
import tester from '../tester';

tester.test('bubble', bubbleSort, {
  sortedArr: 20,
  notSortedArr: 189,
  reverseArr: 209,
  equalArr: 20,
});
