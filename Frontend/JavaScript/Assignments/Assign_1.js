// Practice-1

let num=15;
if(num%10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}

// Practice-2

let userName=prompt("Enter your userName:", );
    age=prompt("Enter your age:", );
    alert( `${userName} is ${age} years old`);

// Practice-3

let Quarter = 1;
switch(Quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Write Valid Quarter no.");
        break;
}

// Practice-4

let str=" golden string";

if( str.length >5 && (str[0]=== "a" || str[0]=== "A")){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}

// Practice-5

let n1= 25;
    n2= 42;
    n3= 18;
//any one of this can be largest 

//case 1
if(n1>=n2 && n1>=n3){
    console.log(n1 ," is LARGEST");
}
else if(n2>=n1 && n2>=n3){
    console.log(n2 ," is LARGEST");
}
else{
    console.log(n3 ," is LARGEST");
}

// Practice-6
let num3="32"
let num4="47852"
if(num3[1]===num4[4]){
    console.log("both have same last number");
}
else{
    console.log("NOT same last digit");
}

let num1=32;
let num2=47852; 
if((num1%10) == (num2%10)){
    console.log("numbers have the same last digit which is",num1%10);
}
else{
    console.log("numbers don't have the same last digit");
}
