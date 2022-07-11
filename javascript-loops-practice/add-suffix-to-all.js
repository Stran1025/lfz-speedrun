/* exported addSuffixToAll */
function addSuffixToAll(w, s) {
  const output = [];
  for (let i = 0; i < w.length; i++) {
    output.push(w[i] + s);
  }
  return output;
}
