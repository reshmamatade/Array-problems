const students=require("./data/student.json")
// console.log(students);
const abc= students.filter((item)=>{
    return item.Eyes=="Black";
});

console.log(abc);
