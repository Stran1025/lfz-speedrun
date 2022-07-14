/* exported reverse */
function reverse(a) {
  const output = [];
  for (let i = a.length - 1; i >= 0; i--) {
    output.push(a[i]);
  }
  return output;
}
