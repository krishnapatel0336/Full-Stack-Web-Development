// refer MDN Docs for theory                    
// "",false, undefined,  null, NaN, 0 ,-0, On(Biglnt value)===>aaaa FALSE 
//all other has TRUE ==>DEFAULT boolean value
// conditional statements

let age = 16;

    if (age>=18){
        console.log("you can vote");
    }
    else{
        console.log("uneligible to vote")
    }

let mode="green";
let color;

    if(mode==="dark"){
        color="black";
    }

    else if(mode==="blue"){
        color="skyblue";
    }

    else{
        color="white";
    }
    console.log(color);
    // if (mode==="green") console.log(mode);

let n=10;

    if(n%2===0){
        
        console.log(n, "is even number");
    }
    else{
        console.log(n, "is odd number");
    }

  
//syntex-->rules of programming language

//ternary operator works on 3 opebnantes
/* a?b:c 
here a is condition 
if a is true then b works else c will works */

age>=18 ? console.log("adult") : console.log("not adult");
            //if                    //else
// console.log(result);method 1O(this method is prefer then direct print)
           // compact if-else 

// "SWITCH" is also method to check "CONDITIONAL"










