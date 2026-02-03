
//game: moveYourCharacter

let game= document.querySelector("input");

game.addEventListener("keydown", function(e){
    console.log("key:",e.key);
    console.log("code:",e.code);
    
    //conditions:
    if (e.code=="ArrowUp"){
        console.log("moveForward");
    }else if (e.code=="ArrowDown"){
        console.log("moveBackward");
    }else if (e.code=="ArrowLeft"){
        console.log("moveLeft");
    }else if (e.code=="ArrowRight"){
        console.log("moveRight");
    }else{
        console.log("press VALIDkey")
    }
       
})
