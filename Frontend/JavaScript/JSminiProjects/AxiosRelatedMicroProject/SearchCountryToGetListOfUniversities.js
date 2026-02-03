// sending Headers:

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {headers:{ Accept: "application/json"} };
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch(err){
//         console.log(err);
//     }
    
// }

//Update Quearry strings in url:
//SearchUniversities:

let url= "http://universities.hipolabs.com/search?name=";
let btn3= document.querySelector("button");


btn3.addEventListener("click",async ()=> {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr= await getCOlleges(country);
    show(colArr);
});

function show(colArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for (col of colArr) {
        console.log(col.name);

        let li= document.createElement("li");
        li.innerText= col.name;
        list.appendChild(li);
    }
}

async function getCOlleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    }catch(e) {
        console.log("error :e ",e);
        return [];
    }
}

console.log(getCOlleges());