//Que:1
let arr= [98,99,100];

const arrayAvg = ((arr)=>{
    let total =0;
    for (let number of arr){        //for_of LOOP//
        total += number;
    }
    return total/arr.length;
} );
console.log(arrayAvg(arr));

//Que:2 
let argu=5;
const isEven =((argu)=>{
    if (argu%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
});
console.log(isEven(6));

//Que:3
//window.message so,
//undefined after 1 second

const object2={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }};
    setTimeout(object2.logMessage,1000);

//que:4
//Hello World
let length=4;
function callback(){
    console.log(this.length);
}
const object={
    length:5,
    method(callback){
        callback();
    },};
    object.method(callback,1,2);