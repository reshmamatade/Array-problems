const students = require("./data/student.json");
// console.log(students);
// map value color
// let a = students.map((items) => items.Color);
// console.log(a);
// map value color and sort assending order
// let b = students.map((items) => items.Color);
// let c = b.sort();
// console.log(c);
// map value of class then sort by assending order
// let d = students.map((items) => items.Class).sort((a, b) => +a - +b);
// console.log(d);

// shubham
let s = students
  .map((items) => items.Persona)
  .filter((h) => h > 3)
  .sort((a, b) => a - b);
console.log(s);
