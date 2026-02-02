
   let btn = document.createElement('button');
   //getElement by id
    btn.innerText = "clickMe";
    document.body.appendChild(btn);
    btn.id="btnNew";
    console.dir(btn);

    let ip = document.createElement('input');
    ip.defaultValue = "userName";
    document.body.appendChild(ip);
    console.dir(ip);

   btn = document.querySelector("button");
btn.style.backgroundColor = "blue";
btn.style.color = "white"

let p= document.createElement('p');
p.innerHTML= "apanaCollege <b>Delta</b> practice"
document.body.appendChild(p)

let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM practice</u>";
document.body.prepend(h1);
