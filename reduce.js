const students = require("./data/student.json");

// shubham
let f = students.reduce((acc, itm) => (acc += itm.Name), " ").split("");
console.log(f);

// himani mallewar
let a = students.reduce((acc, items) => (acc = acc + +items.Hairstyle), 0);
console.log(a);

// piyush
let b = students.reduce((acc, a) => (acc = acc + a.Club), 0);
console.log(b);
let c = students.reduce((acc, b) => (acc = acc + b.ID), 0);

// reshma matade
let concate = students.reduce((acc, item) => (acc = acc + item.Name), "");
console.log(concate);