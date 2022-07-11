/* exported countdown */
function countdown(n) {
  const output = [];
  while (n > 0) {
    output.push(n);
    n--;
  }
  output.push(n);
  return output;
}
