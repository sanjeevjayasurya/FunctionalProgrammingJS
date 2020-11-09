
import { compose } from 'lodash/fp'
/*
 *  Operations like filter and map create a new array
 *  at each step. We can use the reduce function
 *  this way to filter or map items
 */

function map (transform) {
  return function reducer (arr, value) {
    const newValue = transform(value)
    return [...arr, newValue]
  }
}
function double (num) {
  return num * 2
}

const numArray = [1, 2, 3]
const newArray = numArray.reduce(map(double), [])
console.log(newArray) // [2, 4, 6]

// Transducer
function filter (test) {
  return function reducer (arr, n) {
    if (test(n)) {
      return [...arr, n]
    } else {
      return arr
    }
  }
}

function isEven (num) {
  return num % 2 === 0
}

const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = numbers.reduce(filter(isEven), [])
console.log(newNumbers) // [2,4,6]

/*
 * Go through compose from lodash/fp
 */
function filters (test) {
  return function (reducer) {
    return function filterReducer (arr, value) {
      if (test(value)) {
        return reducer(arr, value)
      } else {
        return arr
      }
    }
  }
}
const maps = transform => reducer => {
  return function mapReducer (arr, value) {
    const newValue = transform(value)
    return reducer(arr, newValue)
  }
}
const toArrayReducer = (arr, value) => {
  return [...arr, value]
}

const numbersArr = [1, 2, 3, 4]
const filterTransducer = filters(isEven)
const mapTransducer = maps(double)

const newNumbersArr = numbersArr.reduce(filterTransducer(mapTransducer(toArrayReducer)), [])

console.log(newNumbersArr) // [4,8]
