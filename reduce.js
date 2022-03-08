const students = require("./data/student.json");
// shubham
let f = students.reduce((acc, itm) => (acc += itm.Name), " ").split("");
console.log(f);

// himani mallewar
let a = students.reduce((acc, items) => (acc = acc + +items.Hairstyle), 0);
console.log(a);

// piyush
let b = students.map((items) => items.Seat[1]);
console.log(b);

// reshma matade
let concate=students.reduce((acc,item)=>(acc= acc + item.Name),"")
console.log(concate)

