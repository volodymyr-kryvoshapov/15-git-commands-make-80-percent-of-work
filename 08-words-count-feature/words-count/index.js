/**
 * Count number of words in sentence
 *
 * @param {string} str
 * @returns {number}
 */
function wordsCount(str) {
  return str.split(' ').length;
}

console.assert(wordsCount('Hello World!') === 2);