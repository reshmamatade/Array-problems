const students = require("./data/student.json");
// console.log(students);
// let g = students.reduce((acc, items) => (acc = acc + +items.Strength), 0);
// console.log(g);
// let b = students.map((itemsa) => itemsa.Seat).filter((h) => h > 5);
// console.log(b);
// let s = students.map((itemsa) => itemsa.Seat).sort((a, c) => +a - +c);
// console.log(s);

<<<<<<< HEAD
// himani mallewar
let a=students.reduce((acc,items)=>(acc=acc + +items.Hairstyle),0);
console.log(a);
=======
// piyush
// let a = students.reduce((acc, b) => (acc = acc + +b.ID), 0);
// console.log(a);
// let b = students.reduce((acc, a) => (acc = acc + +a.Club), 0);
// console.log(b);
let b = students.map((items, index) => items.Seat[1]);
console.log(b);
>>>>>>> 0c7bdeaafcf1739b0dbe11486f48665f19ee1cfc
