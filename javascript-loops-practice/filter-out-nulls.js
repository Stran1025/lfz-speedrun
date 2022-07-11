/* exported filterOutNulls */
function filterOutNulls(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null) {
      output.push(array[i]);
    }
  }
  return output;
}
