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
let classes=students.map((student)=>{
    if(student.Class<=10){
        return "small";
    }
    if(student.Class<=20){
        return "medium";
    }
    return "large";
});
console.log(classes);
// shubham
let s = students
    .map((items) => items.Persona)
    .filter((h) => h > 3)
    .sort((a, b) => a - b);
console.log(s);

// piyush
let p = students
    .map((items) => items.ID)
    .filter((d) => d >= 10)
    .reduce((acc, c) => (acc = acc + +c), 0);
console.log(p);