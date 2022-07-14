/* exported compact */
function compact(a) {
  const output = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i]) {
      output.push(a[i]);
    }
  }
  return output;
}
