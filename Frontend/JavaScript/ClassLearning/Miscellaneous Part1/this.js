//this==> REFERs to an object that is executing currunt piece of code.
const stu = {
    name: "shradhaKhapra",
    eng:98,
    phy:99,
    math: 100,
    getAvg(){
        console.log(this)
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avrage marks = ${avg}`);
    }
}
console.log(stu.getAvg());
//higher level of object is "WINDOW";\

function getAvg(){
    console.log(this);
}

//TRY : Test for errors
// & CATCH: staments define when error ouccurs
//SAVe Proggram from crashl;
console.log("LOVE");
console.log("LOVE");
console.log("LOVE");
try {
    console.log(a);
}
catch(error){
    console.log("Error is not define");
    console.log(error);
}
console.log("YourSelf");


//Arrow Function:/Name_less function
// var=(argument)=>{};
//  like valuue ;   parameter/callbacks  in high ordr fnc

const arrow = (a,b) =>{
    console.log(a+b);
};
arrow(2,4);//6


const cube = n =>{  //()optional for 1 argumemnt
    console.log(n**3);
};
cube(8);

//implicit return:/--batana nahi padega ////EXPLICIT me batana padta hai

const mul = (a,b)=> console.log(a*b);
mul(2,4);

// setTimeout(function , timeout(mili_sec)) function:
console.log("hi there");

setTimeout(()=> {
    console.log("Apana College");
} , 4000);
console.log("welcome to");

//setInterval:(function , timeout(mili_sec)) (Print like loop repet after every timeout)


// let id= setInterval(()=> {
//     console.log("Apana College");
// } , 2000);
// console.log(id);

// let id2= setInterval(()=> {
//     console.log("Love U!!❤️😍");
// } , 3000);
// console.log(id2);

//THIS with arrow function:
// (Arrow function SCOPE=Parent Scope)
//normal func =>> Calling object

const student = {
    name: "Shradha",
    marks: 99,
    prop: this,
    getName: function (){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parante scope
        return this.marks;
    },
    getInfo1: function (){

        setTimeout(()=> {
            console.log("Apna Collge!" , this);// student
        },2000);
    },
    getInfo2: function (){

        setTimeout( function () {
            console.log("Apna Collge!" ,this);// window(set timeout called byWINDOW)
        },2000);
    },
};

console.log(student.getInfo1());
console.log(student.getInfo2());

let id3= setInterval(() => {
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id3);
    console.log("clear interval");
}, 10000);