const students = require("./data/student.json");

// shubham
let f = students.reduce((acc, itm) => (acc += itm.Name), " ").split("");
console.log(f);

// piyush
let b = students.map((items) => items.Seat[1]);
console.log(b);
