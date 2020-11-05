import { pipe } from 'lodash/fp'
/**
 * A pipeline is a series of data transformations where the output
 * of one transformation is the input of the next one.
 *  */

function capitalize (text) {
  return text.charAt(0).upperCase() + text.slice(1)
}

function shortenText (text) {
  return text.substring(0, 8).trim()
}

// We use the pipe method from lodash
const pipeline = pipe(
  capitalize,
  shortenText
)('This is a long text')
console.log(pipeline)

/**
 * Currying is conversion of a function having n arguments
 * into n functions having one argument
 */
const words = ['abacus', 'ball', 'cat', 'donkey']
function startsWith (word, text) {
  return word.startsWith(text)
}
words.filter(w => startsWith(w, 'b'))

// This can be rewritten using currying as follows
function curryStartsWith (text) {
  return function (word) {
    return word.startsWith(text)
  }
}
words.filter(curryStartsWith('b'))
