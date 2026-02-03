//ARITHMATIC operators
let a=15;
let b=2;
let sum =a+b;
console.log("a=",a ,"b=",b)
console.log(sum);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a%b=",a%b); 
//remeder which is zero here also known as modulus oprator

console.log("a/b=",a/b);
console.log("b**b=",b**b);

//all above oprators will work on 2 variables
/*incerement & decrement
(UNARY opertor)
console.log(a++);//post increment
console.log(a);
a=--a//pre decrement
console.log(a);
/*here 2 types post and pre 
pre change the value first and then work
post inc or dec first work then change the value*/

/*ASSIGNMENT oprator(assign the values)(right to left)
=, += ,-=*/
a+=4 ;      //a=a+4
console.log(a);
a/=3
console.log(a);//a=a/3

/*COMPARING operators //LIKE T or F
<,>,>=,<=,==,!=,{!==,===(with type :it will not convert string into number )}*/
console.log("a!=b",a != b);
c=5//number
d="5" //string
console.log("c==d",c == d);//true(string converted in number first at this point )
console.log("c===d",c === d);//false

//LOGICAL operators like T or F
/* &&(INTERWSECTION (and)), ||(OR), !(NOT)*/

let cond1= a>b ; //true
let cond2= a<b ; //false
console.log("&&=",cond1&&cond2)//false
console.log("||=",cond1||cond2)//true
console.log("!=",!cond1)//false

