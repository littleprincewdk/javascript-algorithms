/**
 * 浅拷贝
 * @param {*} obj
 * @returns {object}
 */
export function clone(obj) {
  if (typeof obj !== 'object' || !obj) {
    return obj;
  }

  const result = obj instanceof Array ? [] : {};
  // symbol ?
  Object.keys(obj).forEach((key) => {
    result[key] = obj[key];
  });

  return result;
}

/**
 * 浅拷贝
 * @param {*} obj
 * @returns {object}
 */
export function cloneDeep(obj, map = new WeakMap()) {
  if (typeof obj !== 'object' || !obj) {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const result = obj instanceof Array ? [] : {};
  map.set(obj, result);

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key]) {
      result[key] = cloneDeep(obj[key], map);
    } else {
      result[key] = obj[key];
    }
  });

  return result;
}
