//Que:1

let arr=[12,32,6,7,8,67,8,6];

const square= arr.map((arr)=>arr**2);
console.log (square);
const sum  = square.reduce((acc,cur)=> acc+cur);
console.log(sum);
let avg = sum/arr.length;
console.log(avg);

//Que:2
const newArr= arr.map((arr)=>arr+5);
console.log(newArr);

//Que:3
let arr1 = ["yuvika","yukti","neil","yash","isha"];
const capitalArr= arr1.map ((arr1)=> arr1.toUpperCase());
console.log(capitalArr);

// Que:4

const doubleAndReturnArgs= (arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];
    doubleAndReturnArgs([1,2,3],4,4);
    //[1,2,3,8,8]
   
console.log(doubleAndReturnArgs([1,2,3],4,4));

//Que:5

let obj1= {
    name:"aman",
    marks: 94
}
let obj2= {
    name: "shradha",
    marks: 99
}

const mergeObj= ((obj1, obj2) => ({ ...obj1 , ...obj2 }));
console.log(mergeObj(({ obj2 , ...obj1})));