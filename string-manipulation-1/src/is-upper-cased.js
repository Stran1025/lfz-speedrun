/* exported isUpperCased */
function isUpperCased(w) {
  const capitalizedWord = w.toUpperCase();
  for (let i = 0; i < w.length; i++) {
    if (w[i] !== capitalizedWord[i]) {
      return false;
    }
  }
  return true;
}
