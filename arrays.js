const numbers = [1, 2, 3, 4]
/* ***** FILTER *****  */
// isEven is a predicate function that returns a boolean value
function isEven (number) {
  return number % 2 === 0
}

const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

/* ***** MAP ***** */
function triple (number) {
  return number * 3
}
const tripledNumbers = numbers.map(triple)
console.log(tripledNumbers)

/* ***** REDUCE ***** */
const games = [
  { title: 'Starcraft', genre: 'RTS' },
  { title: 'Command and Conquer', genre: 'RTS' },
  { title: 'Heroes of Might and Magic', genre: 'TBS' },
  { title: 'World of Warcraft', genre: 'MMORPG' }
]
function countByGenre (countMap, game) {
  const count = countMap[game.genre] || 0
  return {
    ...countMap,
    [game.genre]: count + 1
  }
}
const gamesByGenreCount = games.reduce(countByGenre, {})
console.log(gamesByGenreCount)

/* ***** SORT ***** */
const descNumbers = [4, 3, 2, 1]
function asc (a, b) {
  if (a === b) return 0
  if (a < b) return -1
  return 1
}
// sort is an impure function
// eslint-disable-next-line functional/immutable-data
const sortedNumbers = descNumbers.sort(asc)
// Functional way of sorting
const sortedNumbers1 = numbers.slice().sort(asc)
const sortedNumbers2 = [...numbers].sort(asc)

/* **** SOME **** */

function isStrategy (game) {
  const strategyGame = ['RTS', 'TBS', 'RTT', 'TBT']
  return strategyGame.includes(game.genre)
}
const findMethod = games.find(isStrategy)
console.log(findMethod) // { title: 'Starcraft', genre: 'RTS' }

const firstIndex = games.findIndex(isStrategy)
console.log(firstIndex) // 0

const everyMethod = games.every(isStrategy) // false ( returns true if all games are strategy )
const someMethod = games.some(isStrategy) // returns true if any one game is strategy

/* **** FOREACH **** */

function log (number) {
  console.log(number)
}
numbers.forEach(log) // calls the log method for each value of numbers

/*
         IMPURE OPERATIONS IN AN ARRAY
Operations such as push , pop , unshift and shift
are impure operations.
*/

/* Adding, removing and editing  in an array */
const newGame = { title: 'Warcraft', genre: 'RTS' }
const newList = games.concat(newGame) // returns a new array with after adding new game

// Editing a particular entry we can use map method
const newGenre = { title: 'Warcraft', genre: 'RTS' }
const newList2 = games.map(game =>
  (game.title === 'Warcraft') ? newGenre : game
)

// Deleting a particular entry we can use filter method
const genre = 'RTS'
const newList3 = games.filter(game => game.genre !== genre)
// returns [{ title: 'Heroes of Might and Magic', genre: 'TBS' },{ title: 'World of Warcraft', genre: 'MMORPG' }]
