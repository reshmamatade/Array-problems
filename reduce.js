const students = require("./data/student.json");
console.log(students);
let g = students.reduce((acc, items) => (acc = acc + +items.Strength), 0);
console.log(g);
let b = students.map((itemsa) => itemsa.Seat).filter((h) => h > 5);
console.log(b);
let s = students.map((itemsa) => itemsa.Seat).sort((a, c) => +a - +c);
console.log(s);
