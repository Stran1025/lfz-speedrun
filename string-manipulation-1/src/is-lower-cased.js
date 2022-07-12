/* exported isLowerCased */
function isLowerCased(w) {
  const lower = w.toLowerCase();
  for (let i = 0; i < w.length; i++) {
    if (w[i] !== lower[i]) {
      return false;
    }
  }
  return true;
}
