/**
 * 模拟`new`关键字
 *
 * 1. 创建一个新的空对象
 * 2. 该对象作为`this`参数传递给构造函数，从而成为构造函数的函数上下文
 * 3. 如果构造函数返回一个对象，则该对象作为`new`运算符的返回值，否则新构造的对象作为`new`运算符的返回值
 * @param  {...any} args
 * @returns
 */
export default function create(constructor, ...args) {
  const obj = Object.create(create.prototype);
  const result = constructor.call(obj, ...args);
  const typeOfResult = typeof result;
  const isPrimitiveOrNull =
    (typeOfResult !== 'object' && typeOfResult !== 'function') ||
    (typeOfResult === 'object' && !result);

  return isPrimitiveOrNull ? obj : result;
}
