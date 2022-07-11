/* exported filterOutStrings */
function filterOutStrings(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      output.push(array[i]);
    }
  }
  return output;
}
