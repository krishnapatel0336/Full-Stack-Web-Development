// function //WRAP the code 
// PROCESS+==> 1) define the func funcName(){}
//             2) call the func    funcName();
function hello () {
    console.log("Hello World!!");
}

hello();
function dice(){
    console.log("Random number on DICE::")
    let dice= Math.floor (Math.random()*6 + 1);
    console.log(dice);
}

dice();

//ARGUMENTs in form of variable
//Order is important
function sum(a, b) {
    console.log(a+b , a*b, a/b , a-b , a%b, a!=b );
  
}
sum(18 ,9);
function table(n) {
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
       
    }
}
table(5);

//RETURN:
//return ke baad vaala nexecute nahi hoga//

function sum2(a, b) {
    return a +b;
}
console.log(sum2(2,5));

function minus(a,b){
    return b-a;
}
let Diff= minus(minus(20,100),10);
console.log(Diff);

function nsum(n) {
    let sums= 0;
    for (let i=1; i<=n; i++ ){
        sums+=i;
    }
       return sums;
}
nsum(9);

let str= ["B","A","A","V","E","E","R"];
function concat(str) {
    let serial="";

    for(let i=0; i< str.length; i++){
        serial += str[i];
    }
    return serial;  //

}
console.log(concat(str));

//SCOPE:: Determind the accessiblity of variables,objects,function;

//TYPEsOfScope : Function() , Block{only for LET and CONST}  , Global;

// eg : WE can't accesse variable which ,
// we have just defined in FOR, func loop;
// SPECIFICITY {REASON Of SCOPE}

// Lexical()==> ""NESTED "" function;
//Def: a variable defined "outer" function
// can be accese by "inner" OPPOSITE is NOT true;




function outerFunc() {
    let x=5;
    let y=6;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}

//////CONCEPT of HOISTING::
function outerFunc() {
     function innerFunc() {
        console.log(x);
    }
    let x=5;
    let y=6;
       innerFunc();
}

// Function Expressions : store func in Variable 
// nameLess Function //NAME oF var = Name of function

// HIgher Order Function/
// 1) function which takes one or multiple func  as argument 
function multipleGreet(func,count){
    for (let i=1; i<=count; i++){
        func();
    }
}
let greet = function() {
    console.log("Khush raho!!");
}

multipleGreet(greet,10);

// 2) function which RETURN a function;

let req="even";
function oddEvenTest(req){
    if(req=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
     
    }
    else if (req== "even"){
        return function(n){
            console.log(n%2==0);
        }
      
    }
    else {
        console.log("Wrong request");
    }
}

// let odd = function(n){
//     console.log(!(n%2==0));
// }

// let even = function(n){
//     console.log((n%2==0));
// }

//METHODs in function:

const calculator = {
    nnum: 55,
    add: function(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b; //shorthad to define method in Js
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    }
};
console.log(calculator);

console.log(calculator.divide(8, 2));
