//OBJECT_LITERALs
//key:value;

const student= {
    name: "shradha",
    age: 23,
    marks: 99.99,
    1: "Topper"
};
console.log(student);
//NOT order specific
console.log(student.name);
console.log(student["age"]);
let prop="age";
student[prop];
// object first covert in [STRING]
//obj[1]    // 1 == string

// add & UPDATE

student.age=25;//direcT UPDATED===> Over ride

student.gender="female";
student.marks=[99,98,77];
delete (student[1]);
//nested objects
const classInfo = {
    amanDhattraval:{
        marks: 95.79,
        std: 12,
        grade: "AA"
    },
    shradhaKhapra:{
        marks: 99.99,
        std: 12,
        grade: "AA+"
    },
    saumyaSingh:{
        marks: 99,
        std:12,
        grade: "AA+"
    }
};
console.log(classInfo);

//ARRAY of object

let infoOfStudent=[
    {
        name: "amanDhattraval",
        marks:95.79,
        std: 12,
        grade: "AA"
    },
    {
        name:"shradhaKhapra",
        marks: 99.99,
        std: 12,
        grade: "AA+"
    },
  {
        name:"  saumyaSingh",
        marks: 99,
        std:12,
        grade: "AA+"
    }
];

console.log(infoOfStudent);