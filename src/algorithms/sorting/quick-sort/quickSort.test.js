import { quickSort, quickSortInPlace } from './quickSort';
import tester from '../tester';

tester.test('quick', quickSort, {
  sortedArr: 190,
  notSortedArr: 62,
  reverseArr: 190,
  equalArr: 19,
});

tester.test('quick in place', quickSortInPlace, {
  sortedArr: 19,
  notSortedArr: 12,
  reverseArr: 19,
  equalArr: 19,
});
