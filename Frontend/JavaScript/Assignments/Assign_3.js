//QUESTION_1
let arr=[1,2,3,4,5,6,2,3];
// arr.splice(1,1)
// arr.splice(5,1)
// console.log("deleted");
// console.log(arr);

let num=2
for (i=1; i<arr.length; i++ ){
    if (arr[i] == num){
    arr.splice(i,1);
}
}
console.log(arr);


//QUESTION_2
let n= 287152;

let j=0;
while( n> 0){
    j++;
    n= Math.floor(n/10);
}
console.log(j);

let n1=547649205;
let a=0;
while(n1>0){
    a++;
    n1=Math.floor(n1/10);
}
console.log(a)

//QUESTION_3
n = 287152;
sum=0;
while(n>0){
    r= n%10;
    sum+=r;
    n=Math.floor(n/10);
}
console.log(sum);

// QUESTION:4

n=7;
let f=1;

for(let i=1; i<=n; i++){
    f*=i;
}
console.log(`7 factorial is = ${f}`);

// QUE:5:
arr=[1,2,3,4,5,6,2,3];

let l=0;
for (i=0; i<arr.length; i++){
    if(l<arr[i]){
        l=arr[i];
    }
}
console.log(`largest=${l}`);