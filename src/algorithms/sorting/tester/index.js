/* eslint-disable no-undef */
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

/**
 * 排序算法测试器
 */
class Tester {
  /**
   * 时间复杂度统计，记录关键操作
   */
  visit = jest.fn();

  /**
   * 测试一种算法
   * @param {*} name 算法名
   * @param {*} sort 算法实现
   * @param {*} complexity 算法复杂度配置
   */
  test(name, sort, complexity) {
    describe(`${name} sort`, () => {
      beforeEach(() => {
        this.visit = jest.fn();
      });

      test('sort empty array', () => {
        expect(sort([])).toEqual([]);
      });

      test('sort [1]', () => {
        expect(sort([1])).toEqual([1]);
      });

      test('sort [1, 2]', () => {
        expect(sort([1, 2])).toEqual([1, 2]);
      });

      test('sort [2, 1]', () => {
        expect(sort([2, 1])).toEqual([1, 2]);
      });

      test('sort [3, 4, 2, 1, 0, 0, 4, 3, 4, 2]', () => {
        expect(sort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
      });

      test('sort sorted array', () => {
        expect(sort(sortedArr)).toEqual(sortedArr);
      });

      test('sort not sorted array', () => {
        expect(sort(notSortedArr)).toEqual(sortedArr);
      });

      test('sort reverse array', () => {
        expect(sort(reverseArr)).toEqual(sortedArr);
      });

      test('sort equal array', () => {
        expect(sort(equalArr)).toEqual(equalArr);
      });

      test('sort negative array', () => {
        expect(sort(negativeArr)).toEqual(negativeArrSorted);
      });

      test('sort sortedArr time complexity', () => {
        sort(sortedArr);
        expect(this.visit).toHaveBeenCalledTimes(complexity.sortedArr);
      });

      test('sort notSortedArr time complexity', () => {
        sort(notSortedArr);
        expect(this.visit).toHaveBeenCalledTimes(complexity.notSortedArr);
      });

      test('sort reverseArr time complexity', () => {
        sort(reverseArr);
        expect(this.visit).toHaveBeenCalledTimes(complexity.reverseArr);
      });

      test('sort equalArr time complexity', () => {
        sort(equalArr);
        expect(this.visit).toHaveBeenCalledTimes(complexity.equalArr);
      });
    });
  }
}

export default new Tester();
