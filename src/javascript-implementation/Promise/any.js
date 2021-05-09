/* eslint-disable no-param-reassign */
// import AggregateError from 'aggregate-error';

/**
 * Promise.any
 * @param {Promise[]} promises
 */
export default function any(promises) {
  return new Promise((resolve, reject) => {
    promises = [...promises];

    if (!promises.length) {
      reject(new AggregateError([], 'All promises were rejected'));
    }

    return Promise.all(
      promises.map((promise) => {
        promise = Promise.resolve(promise);
        return promise.then(
          (value) => Promise.reject(value),
          (error) => error,
        );
      }),
    )
      .then((errors) => Promise.reject(errors))
      .catch((value) => value);
  });
}
