 
//  GUESS the RANDOM number:::
 
 const max = prompt("Enter the Max number:");


 const random= Math.floor(Math.random()*max) +1 ;


console.log(random);
let guess= prompt("Guess the number");
while(true){
    if (guess == "quit"){
       console.log("GAME END");
       break; 
    }
    if (guess == random) {
      let  ans = alert(` 🤩PERFACT!! you guess coreect 🤩❤️ number was ${guess}`);
        break;
    }
    else if (guess< random){
        let less=alert(" ⚠️ your guesss was too small , keep tring!");
        guess= prompt("Guess the number");
    }
    else if (guess> random){
        let more=alert(" ⚠️ your guesss was too large , keep tring!");
        guess= prompt("Guess the number");
    }
    // else{
    //     let sorry = alert(" OOPs!! Your guess was wrong😔 Please try again🤞");
    //     guess= prompt("Guess the number");
    // }
}

