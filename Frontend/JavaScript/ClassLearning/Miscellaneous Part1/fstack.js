//CallSstack

function hello() {
    console.log("inside Hello()");
    console.log("helloWorld");
}

function demo() {

    console.log("calling hello function");
    hello();
    console.log("calling hello function");
}

console.log("calling demo function");
demo();

console.log("done");

//BreakPoints: for debugging

function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
     let ans=two()+one();
     console.log(ans);
}

three();

// javaScript is single THREADed
//reason: run the code in Sequence// LINE by line=> synchrous nature

//Asynchronus nature of java script:
setTimeout(()=> {
    console.log("apana college");
},2000);

setTimeout(()=> {
    console.log("hello world");
},2000);
//here waiting is done by browser which are made by c++ or java;
console.log("oh hello....!");

h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
    
//     setTimeout(()=>{
//         h1.style.color =color;
//         changeColor();
//     },delay);
   
// }
// //Callback of Function{usi function ko vaps bulana}
// //Nasting in callBack//["CALLBACK HELL"]
// changeColor("red",1000,()=> {
//     changeColor("orange",1000,()=>{
//     changeColor("lightblue",2000);
//     });
 
// });

//Promise rejection error handling:

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num= Math.floor(Math.random()*5)+1;
            if(num> 3){
                reject("promise rejected");
            }            
            h1.style.color =color;
            resolve("color changed!");
        },delay);
    });
   
}

//afterLearning Await:

async function demo() {
    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("yellow",1000);
    
    }catch(err){
        console.log(err)
    }
    let a=5 ;
    console.log(a);
}

//After learning Promises:


// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color =color;
//             resolve("color changed!");
//         },delay);
//     });
   
// }


// changeColor("red",1000)
// .then(()=>{
//     console.log("firstcolorChanged");
//     return changeColor("blue",2000)
// })
// .then(()=>{
//     console.log("2nd chnaged")
// })
// .catch(()=>{
//     console.log("Color is not changed")
// })


// //Callback of Function{usi function ko vaps bulana}
// //Nasting in callBack//["CALLBACK HELL"]


// changeColor("red",1000,()=> {
//     changeColor("orange",1000,()=>{
//     changeColor("lightblue",2000, );
//     });
 
// });
