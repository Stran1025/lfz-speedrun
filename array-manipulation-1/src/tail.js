/* exported tail */
function tail(a) {
  const output = [];
  for (let i = 1; i < a.length; i++) {
    output.push(a[i]);
  }
  return output;
}
