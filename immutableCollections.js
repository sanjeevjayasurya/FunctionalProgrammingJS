// A collection is anything that can be iterated over
// Immutable.js has a lof of collections like list and map
import { List } from 'immutable'

const emptyList = List()
const list = List([{ name: 'Sanjeev', company: 'Zopsmart' }, { name: 'JayaSurya', company: 'IBM' }])

// sets property at a particular index
list.set(0, { name: 'xxx', company: 'zzz' })
// concatenates a new collection to the exisiting one
const newList = list.concat([{ name: 'newName', company: 'newCompany' }])

const newList1 = newList.delete(0) // deletes at index 0

/**
 * pop returns a new List with the last element removed
 * shift return a new list with the first element removed
 * clear returns a new list with no values
 * get(index) returns elements associated with that index
 * first and last returns first and last element
 * find returns first element and findLast returns the last element
 */
