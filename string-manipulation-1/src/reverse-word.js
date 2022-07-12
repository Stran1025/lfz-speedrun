/* exported reverseWord */
function reverseWord(w) {
  let newWord = '';
  for (let i = w.length - 1; i >= 0; i--) {
    newWord += w[i];
  }
  return newWord;
}
