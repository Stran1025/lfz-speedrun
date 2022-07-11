/* exported oddOrEven */
function oddOrEven(numbers) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      output.push('odd');
    } else {
      output.push('even');
    }
  }
  return output;
}
