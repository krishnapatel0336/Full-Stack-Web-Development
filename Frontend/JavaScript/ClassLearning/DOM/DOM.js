//To Select the elements :

// by other Methds=> we can select entire class

let smallImg =document.getElementsByClassName("oldImg");
for (let i=0; i< smallImg.length-1; i++){
    smallImg[i].src ="assets/spiderman_img.png";
    console.dir(smallImg[i].src);
    console.log(`Value of image${i} is changed!`);
}

//by Queary Selector +=> to select just SINGle element

console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector('.oldImg'));// just 1st image of ENTIRE collection
console.dir(document.querySelector('div a'));

//by Queary Selector ALL => provide entire collection instead of just FIRst element

console.dir(document.querySelectorAll('div a'));

//Setting content in object:

// innerText===> Text Visible in Web page
// inner html text with HTML markUp 
// text content ===> text taken from index.html

let para = document.querySelector('p');
console.log(para);
console.dir(para.innerText="balveer");
console.dir(para.textContent);
console.dir(para.innerHTML);
let title= para.innerHTML="<b>Balveer</b> is super hero"
console.log(title)

//Maniplation Attributes:   style, src, id, class
// getters and setters

let img =document.querySelector('img');
img.getAttribute('id')
img.setAttribute('id', 'spidermnaImg');

//styling
let heading = document.querySelector('h1');
console.log(heading.style.color ="purple");

let links = document.querySelectorAll('.box a');
for (let i=0; i<links.length; i++){
    links[i].style.color = "green";
}
let link;

for( link of links){
    link.style.color="orange";// Only for INLIN styling not for CSS
}

//use Of classsList :

console.log(heading.classList);
//classList.add
//classList.remove
//contain
//toggle [switch type : to ADD & Remove (yes<=>No)]


//Navigation
// to print : parent/child/syblings

let h4 = document.querySelector('h4');
console.log(h4.parentElement)
console.log(h4.nextSibling)
console.log(h4.previousElementSibling)

//Addding Elements:
//createElement( STEP:1)
//APPEND/APPENDChild/PREPEND/InsertAdjacent(where,element); (STEP:2)

//where:=>beforeBegin , afterBegin, beforeEND, afterEND

let btn = document.createElement('button');

btn.innerHTML = "NEW BUTTON!!";
let p= document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn)

//removeElements:
// removeChild (element)
// remove(element)

let body = document.querySelector('body');
// body.removeChild(p);
// body.removeChild(btn);
btn.remove();


//PracticeQue:
let para1 = document.createElement('p');
    para1.innerText ="HelloWorld";
    document.querySelector('body').append(para1);
    para1.classList.add("red");

let div= document.createElement("div");
let h1 = document.createElement("h1");
let para2= document.createElement("P");
h1.innerText="I AM IN A DIV";
para2.innerText="Me too!";
div.append(h1);
div.append (para2);
div.classList.add('box');
   document.querySelector('body').append(div);
   




