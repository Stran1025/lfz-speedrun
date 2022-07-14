/* exported getValues */
function getValues(o) {
  const output = [];
  for (const keys in o) {
    output.push(o[keys]);
  }
  return output;
}
