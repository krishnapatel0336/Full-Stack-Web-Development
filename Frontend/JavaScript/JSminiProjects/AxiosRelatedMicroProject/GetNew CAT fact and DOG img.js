// FREE API are limited:

// Library// to make HTTPs request:



let url="https://catfact.ninja/fact";
let url2= "https://dog.ceo/api/breeds/image/random";

    async function getFacts() {
       try {
            let res= await fetch(url);
        console.log(res);
        let data3 = await res.json();
        console.log("data3:",data3);

        let data4 = await res.json();
        console.log("data4:",data4);
       }catch(err){
        console.log("ERROR",err);
       }
    }
    console.log(getFacts());

// UPDATED CODE WITH HELP of AXIOs:

    async function getFacts() {
       try {
            let res= await axios.get(url);
            console.log(res.data); 
            console.log(res.data.fact); 
       } catch(err){
            console.log("ERROR",err);
       }
    }
    console.log(getFacts());

// COnnect to html:
let btn =document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    // console.log(fact);
    let p= document.querySelector("#result");
    p.innerText =  fact;
});

async function getFacts() {
       try {
            let res= await axios.get(url); 
            return (res.data.fact); 
       } catch(err){
            console.log("ERROR",err);
            return "NO fact found"
       }
    }

// //SHOW dog img:

let btn2 =document.querySelector("#btn2");

btn2.addEventListener("click", async ()=>{
    let link = await getImage();
    console.log(link);
     let img= document.querySelector("#result2");
     img.setAttribute("src" , link);
});

async function getImage() {
       try {
            let res= await axios.get(url2); 
            return (res.data.message); 
       } catch(err){
            console.log("ERROR",err);
            return "NO img found"
       }
    }


