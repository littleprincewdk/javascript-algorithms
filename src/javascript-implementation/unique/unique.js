/**
 * 数组去重
 * @param {*[]} array
 * @returns {*[]}
 */
export default function unique(array) {
  return [...new Set(array)];
}
