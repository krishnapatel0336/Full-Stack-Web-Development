//ARRay some more method

//forEach// kind of for of loop
let arr= [1,2,3,4,5];

// let print = function (el){
//     console.log(el);
// };
// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach((el)=>{
//     console.log(el);
// });

let arr1 = [{
    name : "aman",
    marks: 98,

},
{
    name: "shradha",
    marks: 99.93
},
{
    name: "saumya",
    marks:97.1
}];
console.log(arr1);

arr1.forEach((student)=>{
    console.log(student.marks)
})


let gpa = arr1.map((el)=> {
    return el.marks/10;
})
console.log(gpa);


//MAP function://give aans in form of new array;

let num= [1,2,3,4];
let double= num.map((el) => {
    return el*2;
});

console.log(double);

//filter;
let nums= [1,2,3,4,7,8,10];
let answer= nums.filter((el)=>{
    return el %2== 0 ;

})
console.log(answer);

//Every T/F (&& type;)
console.log(answer.every((el)=> el%2==0));
console.log(answer.every((el)=> el%10==0));

//Some T/F (|| type;)
console.log(answer.some((el)=> el%2 !=0));

// Reduce Arr to SINGLe value;
//(accumulator(first 2 time nu result), element);
//3rd time wali return_value ans hogi;

let n=[1,2,3,4];
let finalist = n.reduce((res,el)=> {
    console.log(res);// store value after final computation
    return res+ el}); 
       //10
console.log(finalist);//sum of array

//maxima min withj help of reduce function
let maxMin = [1,23,3,4,5,4,45,45,34,33,32,435];
let max=-1;
for (let i=0; i<maxMin.length; i++){
    if (max<maxMin[i]){
        max = maxMin[i];
    }
}
console.log(max);

let maxima= maxMin.reduce((max,el)=> {
    if (max< el){
        return el;
    }
    else{
        return max;
    }
});
console.log(maxima);

function getMin(maxMin){
    let minima= maxMin.reduce((min,el)=> {
        if (min>el){
            return el;
        }
        else{
            return min;
        }
});
        return minima;
}

console.log(getMin(maxMin));
//Default parameters
//generally uuse in END
// we can give pre default value to any function 

function sum(a,b=3){
    return a+b;
}
console.log(sum(2));
console.log(sum(2,9));

//SPREAD;   from one to many;
//to spread iterable { like string array }
// ...arr

console.log(...arr);

//for arrayLiterals

let chars= [..."hello"];
let chars2=[..."world"];
let char =[...chars,...chars2];
console.log(char);

//for objectLiterals

const data = {
    mail: "saumya1singh@gmail.com",
    pass: "Saumyadii",
};
let dataUpdated={...data,id:123};
console.log(dataUpdated);
let obj1= {...arr};
let obj2= {..."helloWorld"};
console.log(obj1); // KEY == INDEX
console.log(obj2);

//Rest;     from many to one;
function collect(...args){
    for(i=0; i<args.length; i++){
        console.log("you gave us:", args[i]);
    }
}
console.log(collect(1,"balveer"));
// "arguments" is pre defined varible for any function

function min() {  
         console.log(arguments);
        console.log(arguments.length);
}

// arguments is collection not array so can't use array methods li pop and push
// we can accese argus from index print lentgth but cant appy any METHDs
// to apply methods we neede use rest ;(...argument)
// arguments are "always at last PARAMETER"we czn add other before it
function min(msg ,argument){
    console.log(msg);
    return argument.reduce((min,el)=>{
        if (min> el){
            return el;
        }else{
            return min;
        }
    });
}
console.log(min("hello", [1,2,334,45,656,676]))

//Destructuring
// storing values of array or string or AN object multiple VARIABLE
//order ALWAYS matters in this case
let names=["balveer","dev","veer","debu","ballu","nakabposh","happy"];
let [winner, runnerUp,...others]= names;

//in objects

const arr4 = {
    name : "aman",
    age: 20,
    subject:["FAI","BE","BEE","MATHs2","PPS","EGD","ENGLISH"],
    userName:"amanDhattraval@1234",
    passWord: "amanShradhaLove"
};

let {userName: user, passWord,city="mumbai", ...other}= arr4;




