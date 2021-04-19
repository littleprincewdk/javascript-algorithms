export default function debounce(func, wait = 250) {
  let timer = 0;

  function debounced(...params) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, params);
    }, wait);
  }

  return debounced;
}
