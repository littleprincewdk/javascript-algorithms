/**
 * 浅拷贝
 * @param {*} obj
 * @returns {object}
 */
export function clone(obj) {
  if (typeof obj !== 'object' || !obj) {
    return {};
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
export function cloneDeep(obj) {
  if (typeof obj !== 'object' || !obj) {
    return {};
  }

  const result = obj instanceof Array ? [] : {};
  Object.keys(obj).forEach((key) => {
    result[key] = typeof obj[key] === 'object' && obj[key] ? cloneDeep(obj[key]) : obj[key];
  });

  return result;
}
