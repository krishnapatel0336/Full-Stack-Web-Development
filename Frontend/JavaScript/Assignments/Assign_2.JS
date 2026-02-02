
// Access First 3 element 
let nF=[1,2,3,4,5,5,6,7.8];
let n=3;
let ans1=nF.slice(0,n)
console.log(ans1);

//last 3
let ans2= nF.slice(nF.length-n);
console.log(ans2);

//Check empty string
let str= prompt("Enter String");
    if(str.length ==0){
        console.log("EMPTY string");
    }
    else{
        console.log("NOT Empty");
    }


// in upper case? with help of indexing;
let string="ShardhaKhapra Weds to AmanDhattraval";
let index=3;
if(string[index]== str[index].toUpperCase()){
    console.log("in Upper case");
}
else{
    console.log("NOt in upper case");
}

// trailing
let strNew = prompt("YOUR string");
console.log(`given is ${strNew}`);
console.log(`Answer is ${strNew.trim()}`);


iteam= 4;
if(nF.indexOf(iteam) == -1){
    console.log(" element dose not exist");
}
else{
    console.log("Exist");
}