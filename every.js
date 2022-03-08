const students=require('./data/student.json');
console.log(students);

 const abc= students.every((item)=>{
    return item.Color=='white';
})
console.log(abc);