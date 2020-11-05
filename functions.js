/*
    Javascript supports first class functions
    i.e. it can be used like any other values
*/

// can be stored in variables
const square = x => x * x
square(3)
function cube (x) {
  return x * x * x
}

const number = 2

// can be put in data structures like arrays
const functions = [square, cube]

// applies square and cube function on the number
functions.forEach(f => {
  const newNumber = f(number)
  console.log(newNumber)
})

// function can call another function
function doOperation (operation, b) {
  return operation(b)
}
const squareOp = doOperation(square, number)
console.log(squareOp) // 4
