/**
 * 数组扁平化
 * @param {*[]} array
 * @returns {*[]}
 */
export default function flatten(array) {
  return array.reduce(
    (prev, current) => prev.concat(Array.isArray(current) ? flatten(current) : current),
    [],
  );
}
