import { sortedArr } from '../../sorting/tester';
import { quickSort } from '../../sorting/quick-sort/quickSort';

import { sortShuffle, fisherYatesShuffle, knuthDurstenfeldShuffle } from './shuffle';

describe('shuffle', () => {});
describe('sort shuffle', () => {
  test('should shuffle small arrays', () => {
    expect(sortShuffle([])).toEqual([]);
    expect(sortShuffle([1])).toEqual([1]);
  });

  test('should shuffle array randomly', () => {
    const shuffledArray = sortShuffle(sortedArr);

    expect(shuffledArray).toHaveLength(sortedArr.length);
    expect(shuffledArray).not.toEqual(sortedArr);
    expect(quickSort(shuffledArray)).toEqual(sortedArr);
  });
});

describe('Fisher–Yates shuffle', () => {
  test('should shuffle small arrays', () => {
    expect(fisherYatesShuffle([])).toEqual([]);
    expect(fisherYatesShuffle([1])).toEqual([1]);
  });

  test('should shuffle array randomly', () => {
    const shuffledArray = fisherYatesShuffle(sortedArr);

    expect(shuffledArray).toHaveLength(sortedArr.length);
    expect(shuffledArray).not.toEqual(sortedArr);
    expect(quickSort(shuffledArray)).toEqual(sortedArr);
  });
});

describe('Knuth-Durstenfeld shuffle', () => {
  test('should shuffle small arrays', () => {
    expect(knuthDurstenfeldShuffle([])).toEqual([]);
    expect(knuthDurstenfeldShuffle([1])).toEqual([1]);
  });

  test('should shuffle array randomly', () => {
    const shuffledArray = knuthDurstenfeldShuffle(sortedArr);

    expect(shuffledArray).toHaveLength(sortedArr.length);
    expect(shuffledArray).not.toEqual(sortedArr);
    expect(quickSort(shuffledArray)).toEqual(sortedArr);
  });
});
