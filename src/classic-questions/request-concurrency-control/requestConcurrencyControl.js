import request from './request';

/**
 * 带并发限制的请求
 * @param {string[]} urls 一组资源
 * @param {number} limit 并发限制
 * @returns {Promise}
 */
export default function requestConcurrencyControl(urls, limit = 3) {
  const result = [];
  let scheduled = 0;

  function schedule(i) {
    if (i >= urls.length) {
      return Promise.resolve();
    }

    scheduled += 1;

    return request(urls[i]).then((res) => {
      result[i] = res;
      return schedule(scheduled);
    });
  }

  const tasks = [];
  for (let i = 0; i < limit; i += 1) {
    tasks.push(schedule(scheduled));
  }

  return Promise.all(tasks).then(() => result);
}
