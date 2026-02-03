//chain"Reaction for nested elemetns

let div = document.querySelector("div");
let ul= document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was selected");
});

ul.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("ul was selected");
});

for (li of lis){
    li.addEventListener("click",function(){
    console.log("li was selected");
});
}