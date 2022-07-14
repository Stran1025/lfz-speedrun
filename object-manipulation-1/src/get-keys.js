/* exported getKeys */
function getKeys(o) {
  const output = [];
  for (const keys in o) {
    output.push(keys);
  }
  return output;
}
