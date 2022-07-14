/* exported toObject */
function toObject(a) {
  const output = {};
  for (let i = 0; i < a.length; i += 2) {
    output[a[i]] = a[i + 1];
  }
  return output;
}
