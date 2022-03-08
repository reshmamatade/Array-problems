const students = require("./data/student.json");
// console.log(students);
//let g = students.reduce((acc, items) => (acc = acc + +items.Strength), 0);
//console.log(g);

// shubham
let f = students.reduce((acc, itm) => (acc += itm.Name), " ").split("");
console.log(f);
