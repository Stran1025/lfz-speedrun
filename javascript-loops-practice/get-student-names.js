/* exported getStudentNames */
function getStudentNames(students) {
  const output = [];
  for (let i = 0; i < students.length; i++) {
    output.push(students[i].name);
  }
  return output;
}
