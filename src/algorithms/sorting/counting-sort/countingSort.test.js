import countingSort from './countingSort';
import tester from '../tester';

tester.test('counting', countingSort, {
  sortedArr: 60,
  notSortedArr: 60,
  reverseArr: 60,
  equalArr: 60,
});
