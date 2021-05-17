export const responses = new Map([
  ['https://www.baidu.com/a', 'a'],
  ['https://www.baidu.com/b', 'b'],
  ['https://www.baidu.com/c', 'c'],
  ['https://www.baidu.com/d', 'd'],
  ['https://www.baidu.com/e', 'e'],
  ['https://www.baidu.com/f', 'e'],
  ['https://www.baidu.com/g', 'f'],
]);

/**
 * 模拟请求
 * @param {number} delay 请求延时
 * @returns
 */
export default function request(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(responses.get(url)), Math.random() * 3000);
  });
}
