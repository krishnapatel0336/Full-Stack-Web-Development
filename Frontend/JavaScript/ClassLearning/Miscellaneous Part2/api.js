//application Programming Interface
//https=> ki APIs are WEBAPIs
//return DATAs inForm of JSON;
//APIs are LINK;
// twitter insta or api

//SOME APIS has no key no password no pay;


//JavaScript Objact Notation is JSON//alos we can use in python to call APIs
// OLDformate is XML

//JSON keys= [strings] so != objact
// www.json.com

//TO access JSON data because it is in STRING;

//Methods in JSON
// JSON.parse()=>> STTRING to JSobject
// JSON.stringify()=>> JSobject to STRING

let stu = {
    name: "shradha",
    marks: 99,
}

console.log(JSON.stringify(stu));
JSON.stringify(stu);
//Testing AAPI requests:
//TOOLs:    HOppscoth(usableMore), Postman;

//using Hoppscoth 

//Ajax :
// Asynchronous java and XML (or Js);

// httpsVerbs: get, post, delete

//Status code :
// 200-ok,404-not found,400-Bad-req,500_internal servere error;

// Add information in URLs key value pair to add additional info;

//HeaderValue

//First API request:\
// old method: XMLHTTPRequest obj
// fetch(url)=>now
//API call works asyncronously
let url="https://catfact.ninja/fact";
fetch(url)
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data1)=>{
        console.log("data1:",data1);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data2)=>{
        console.log("data2:",data2)
    })
    .catch((err)=>{
        console.log("ERROR-",err);
    });

    // fetch with async and await:

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