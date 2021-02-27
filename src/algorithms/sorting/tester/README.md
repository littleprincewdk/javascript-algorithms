# 排序算法测试器

## 使用方法

1. 在算法实现内调用`visit`埋点以统计时间复杂度
```javascript
// fooSort.js
import tester from '../tester';

function fooSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      tester.visit();
      // ...
    }
  }
  
  return array;
}
```

2. 在单元测试中调用`tester.test`
```javascript
// fooSort.test.js
import fooSort from './fooSort';
import tester from '../tester';

/**
 * 测试一种算法
 * @param {*} name 算法名
 * @param {*} sort 算法实现
 * @param {*} complexity 算法复杂度配置
 */
tester.test('foo', fooSort, {
  sortedArr: 190, // 已排序数组  eg: [1, 2, 3]
  notSortedArr: 190, // 未排序数组 eg: [2, 3, 1]
  reverseArr: 190, // 翻转数组 eg: [3, 2, 1]
  equalArr: 190, // 全等数组 [1, 2, 1]
});
```
