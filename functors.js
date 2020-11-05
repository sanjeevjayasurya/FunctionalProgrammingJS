function F (value) {
  function map (f) {
    const newValue = f(value)
    return F(newValue)
  }
  return {
    map
  }
}

function identity (n) {
  return n
}
const functor = F(1)
const newFunctor = functor.map(identity)
console.log(newFunctor)
