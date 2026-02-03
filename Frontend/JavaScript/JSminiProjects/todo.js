let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){

    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText="X";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

//Event delegation:

ul.addEventListener("click",function(e){
    if (e.target.nodeName=="BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})