/* exported getWords */
function getWords(w) {
  if (!w.length) {
    return [];
  }
  return w.split(' ');
}
