// // signs of something has occurred.

// //MOUSE EVENTs
// //ONCLICK

// // let btn= document.querySelector("button");
// // console.dir(btn);

// // btn.onclick = function () {
// //     alert("button was clicked");
// // };


// // btn.onclick = sayHello;

// // let btnList= document.querySelectorAll("button");

// // let btns;


// // for( btns of btnList ){
// //     btns.onclick = sayHello;
// // }

// // onmouseenter

// // for( btns of btnList ){
// //     btns.onmouseenter = function( ){
// //         console.log("you entered a button");
// //     }
// //     console.dir(btns);
// // }

// //EventLisener

// let btns = document.querySelectorAll("button");
// let btn;
// for (btn of btns){
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dbclick", function (){
//         console.log("You double clicked");   
//     });

//     btn.addEventListener("click", function(){
//         console.log(this);
//          console.dir(this);
//          this.style.backgroundColor="yellow";

//         // this in EventListener:
//         // for the object which is rersponsibele to execute it
//     });                
// }

// function sayHello(){
//     alert("hello!");
// }

// function sayName(){
//     alert ("apanaCollege!");
// }


// let p = document.querySelector("p");

// p.addEventListener("mouseenter", function (){
//     console.log("mouse in para");
// })

// p.addEventListener("click", function(e){
//     console.log(e);
//     console.log("button clicked");
// });


//KEYBOARD_EVENTs

let input = document.querySelector("input");

input.addEventListener("keydown", function(e){
    console.log("key pressed");
    console.log(e);
     console.log("key =",e.key);
      console.log("code=",e.code);
})// key means What we can see on screen and code gives us code;



//form

let form= document.querySelector("form");

form.addEventListener("submit",function(e){
    
    e.preventDefault();

    let user= document.querySelector("#user");
    let pass= document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert(`form is sucessfully submitted and your userName & password are ${user.value} & ${pass.value}`);
    console.dir(form);
    console.dir(form.elements);
    let t = this.elements[0];
    console.dir(t);
});

//more Events
//CHANGEevnt:
//track only start and end //
let u= document.querySelector("#user");

u.addEventListener("change", function(){
    console.log("changeEvent")
    console.log("finalValue=", this.value);
});


//INPUTevent:

u.addEventListener("input", function(){
    console.log("inputEvent")
    console.log("finalValue=", this.value);
});


//textEditor:

let editor = document.querySelector("#text");
let p = document.querySelector("p");

editor.addEventListener("input",function(){
    console.log(editor.value);
    p.innerText = editor.value;
})




