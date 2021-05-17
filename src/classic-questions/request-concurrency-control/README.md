# 请求并发控制

实现一个带有并发控制的请求函数，要求：

1. 返回`promise`，结果按资源对应的顺序返回
2. 尽快完成

```javascript
/**
 * 带并发限制的请求
 * @param {string[]} urls 一组资源
 * @param {number} limit 并发限制
 * @returns {Promise}
 */
function requestConcurrencyControl(urls, limit = 3) {
  // show me code
}
```
