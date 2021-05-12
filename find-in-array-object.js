const students = [
  {name: 'Shoaib', roll: 2},
  {name: 'Mehedi', roll: 10},
  {name: 'Alex', roll: 5}
];

function search(student) {
  return student.name=== "Mehedi";
}

console.log(students.find(search));
// { name: 'Mehedi', roll: 10 }
