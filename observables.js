/**
 * For implementing observables we use the
 * rxjs library
 */
// Creation operators
import { of, from, interval, ajax } from 'rxjs'
// of is used to create observables from a set of values
const observable = of(observer => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
})
// To listen to the observable we use the subscribe method
observable.subscribe(console.log)// 1 2 3

// from is used to create observables from an array
const source = from([1, 2, 3, 4, 5])
source.subscribe(console.log) // 1 2 3 4 5

// interval emits a new integer in order every n milliseconds
const intervalRx = interval(1000)
intervalRx.subscribe(console.log)

// ajax gets result from a network request
ajax('https://api.github.com/gists/public')
  . subscribe(console.log())
