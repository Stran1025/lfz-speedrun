/* exported capitalize */
function capitalize(w) {
  const word = w.toLowerCase();
  return word[0].toUpperCase() + word.slice(1, w.length);
}
