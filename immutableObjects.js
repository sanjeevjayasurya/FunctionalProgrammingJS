// Here is an example of an immutable object
const product = {
  name: 'Apple',
  quantity: 2
}

/*
    Here is how you modify an existing property
    We use the spread syntax (...)
*/
const newProduct = {
  ...product,
  quantity: 3
}

const addProperty = {
  ...product,
  type: 'Fruit'
}
/*
    We use the destructuring syntax along with the rest (...) operator
 */
const { quantity, ...newProducts } = product
console.log(newProducts) // prints { name : 'Apple' }
