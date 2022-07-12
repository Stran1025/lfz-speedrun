/* exported isVowel */
function isVowel(c) {
  const character = c.toLowerCase();
  if ('aeiuo'.includes(character)) {
    return true;
  }
  return false;
}
