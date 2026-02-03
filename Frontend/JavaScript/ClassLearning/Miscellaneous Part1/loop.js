//---LOOPs---
// type1 ---> For(initialization , stopping codition , updatation)
for (let each =1; each<=6; each++){
    console.log("APANA COLLEGE");
}

//example;
for (let i=1; i<=15; i=i+2){
    console.log(i);
}

for (let i=2; i<=10; i=i+2){
    console.log(i);
}

for(let i=1; i<=10; i++){
    console.log(i*5);
}

let n= prompt("Write bnumber to print TABLE",);

n= parseInt(n);
for(let i=n; i<=10*n; i=i+n){
    console.log(i);
}

//nested loop

for(let i=1; i<=3; i++) {
    console.log(`Outer loop ${i}`);     //3times
    for(let j=1; j<=3; j++ ){
        console.log(j);                 //9times
    }
}

// WHILE Loops ---> let (initializtion); while( stoping condition){ console.log(); UPDATATION}
console.log("While loop");

let i=1;
while (i>= -3){
    console.log(i);
    i--;
}

//BREAK:
let a=1;
while (a<=5){
    if(a==3){
        break;
    }
    console.log(a);
    a++;
}


//LOOPs with ARRAYs

let companies = ["MicroSoft","Google", "RedHat","TCS",];

for(let index=0; index < companies.length ; index= index+2){
    console.log(index, companies[index]);
}
//we print in revers with help of decresing iundex and loop

for(let j=companies.length-1; j>=0; j-- ){
    console.log(j, companies[j]);
}

// for of loop===> print EACH AND EVERY ELEMENT
console.log("ForOfLoop")
for(company of companies) {
    console.log(company);
}
for(char of "ForofLoop"){
    console.log(char);
}


//with NESTED arrays;

let superHeroes=[["balveer","hero","shaktimaan"], ["ironmen", "spiderman","thor"]]

for(let x=0; x <superHeroes.length; x++){
    console.log(`list #${x}`);
    for(let y=0; y <superHeroes[x].length; y++){
        console.log(superHeroes[x][y]);
    }
}

for (let k=0; k<superHeroes.length; k++){
    console.log(k, superHeroes[k], superHeroes[k].length ); //title
    for(let l=0; l<superHeroes[k].length; l++){
        console.log(`l=${l}, ${superHeroes[k][l]}`);  //info
    }
}

for(list of superHeroes) {
    for(hero of list){
        console.log(hero);
    }
}
