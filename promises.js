/**
 * creating a delay promise
 */
function delay (interval) {
  return new Promise(
    function (resolve) {
      return setTimeout(resolve, interval)
    }
  )
}

function log (x) {
  console.log(x)
}

delay(1000).then(log)

/**
 * Handling promises
 */
function divideBy (divisor) {
  return function (number) {
    const result = number / divisor
    return divisor !== 0 ? Promise.resolve(result) : Promise.reject(new Error('cannot divide by 0'))
  }
}

Promise.resolve(9)
  .then(log)
  .then(divideBy(0))
  .then(log)
  .catch(log)
