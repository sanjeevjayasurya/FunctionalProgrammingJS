import { Observable } from 'rxjs'

/** Observers are objects having three callbacks
 * (i) next
 * (ii) error
 * (iii) complete
 */
const observer = {
  next (value) {
    console.log(value)
  },
  error (value) {
    console.error(value)
  },
  complete (value) {
    console.log(value)
  }
}
const observable = Observable.create(observer => {
  observer.next(1)
  observer.complete('Complete')
})
