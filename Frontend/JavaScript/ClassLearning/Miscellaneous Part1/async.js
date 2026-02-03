//ASYNC function
// return Promise always

async function greet() {
    // throw "Error"
    return "helllo!";
}

greet()
.then((result)=>{
    console.log("success");
    console.log(result)
})
.catch(()=>{
    console.error("rejected");
    
})

let demo= async ()=>{
    console.log(5)
}



//AWAIT keyWord

function getNum(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
       
    })
}

async function newDemo(){
     await getNum();
     getNum();
     getNum();
}
//promise rejection is in previous folder namaed part_11;

