let students = [
  {
    id: 1,
    name: "John",
    dept: "CSE",
    age: 23,
  },
  {
    id: 2,
    name: "Miller",
    dept: "ISE",
    age: 24,
  },
  {
    id: 3,
    name: "smith",
    dept: "Civil",
    age: 22,
  },
];
console.log(students);

let names = students.map((student) => ({ name: student.name }));
console.log(names);
