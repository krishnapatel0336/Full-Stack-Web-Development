//QUE:1
let arr=[];
let n;
function getGreater(arr,n){
    for (let i=0; i<arr.length; i++){
        if(arr[i]>n){
            console.log(arr[i]) ;
        }
    }
}
console.log(getGreater(arr , n));

//QUE:2;

let str="abcdabcdgggh";
function getUnique(str) {
    let ans="";
    for(let i=0; i <= str.length; i++){
        
        let currChar= str[i];
        if(ans.indexOf(currChar)  ==-1 ){
           
        ans += currChar;
        }
    }
    return ans;
}
console.log(getUnique(str));

// QUE:5;
let start = 100;
let end= 200;
function generateRandom (start, end){
    let diff = end-start;
    return Math.floor(Math.random()*diff)+start;
}
console.log(generateRandom (start, end));

// QUE:3
let country=["INDIA","UAE","aus" , "swizerLand"];

function longestCountry (country){
    let ansIndex=0;
    for(let i=0; i<country.length; i++ ){

        let ansLen= country[ansIndex].length;

        let currLen= country[i].length;

        if (currLen>ansLen){
            ansIndex=i;
        }
    }
    return country[ansIndex];
}
longestCountry(country)

//question: 4 
let cons= "devJoshi";
function countConsonents (cons){
    let count =0 ;
    for (let i=0; i<cons.length; i++ ){
        if (
            cons.charAt(i)!= "a"&&
            cons.charAt(i)!= "e"&&
            cons.charAt(i)!= "i"&&
            cons.charAt(i)!= "o"&&
            cons.charAt(i)!= "u"
        )
        {
            count++;
        }
    }
     return count;
}
console.log(countConsonents (cons));
