let student = {nom:"Marie", age:20,courses:[]};
student.age=21;
student.grade= "A";
student.courses.push("Math","Physics","Chemistry");
let index = student.courses.indexOf('Physics');
console.log(index);
let slicedstudent = student.courses.slice(1, 3);
console.log(student);
console.log(slicedstudent);

