/**
 * A generator is a function that returns next value
 * from a sequence each time it is called
 */
// infinite generator
function generator () {
  let count = 0
  return function () {
    const result = count
    count += 1
    return result
  }
}
const newNumber = generator()
console.log(newNumber()) // 1
console.log(newNumber()) // 2

// finite generator
function range (from, to) {
  let count = from
  return function () {
    if (count < to) {
      const result = count
      count += 1
      return result
    } else {
      return undefined
    }
  }
}
const nextNumber = range(0, 3)
console.log(nextNumber()) // 0
console.log(nextNumber()) // 1
console.log(nextNumber()) // 2
console.log(nextNumber()) // undefined

// Array generator
function toArray (generate) {
  let arr = []
  let value = generate()
  while (value !== undefined) {
    arr = [...arr, value]
    value = generate()
  }
  return arr
}

console.log(toArray(range(1, 5))) // [1,2,3,4]

// forEach

function forEach (callback) {
  return function (generate) {
    let value = generate
    while (value !== undefined) {
      callback(value)
      value = generate()
    }
  }
}
function log (x) {
  console.log(x)
}
const nextNumber1 = range(1, 4)
forEach(log)(nextNumber1)
