export default function throttle(func, wait = 250) {
  let timer = 0;

  function throttled(...params) {
    if (!timer) {
      func.apply(this, params);
      timer = setTimeout(() => {
        timer = 0;
      }, wait);
    }
  }

  return throttled;
}
