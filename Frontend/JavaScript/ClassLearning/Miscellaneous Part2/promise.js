
//PROMISES:
// Asynchronous Function
//Reason for using promising to stop bulkyness And confution of code
// function savetoDb(data,success,fail) {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
    
//     if (internetSpeed>4){
//         success();
//     }else{
//         fail();
//     }
// }

// savetoDb(
//     "ApanaCollege",
// ()=>{
//     console.log("your data was saved");
//     savetoDb(
//         "shradhaKhapra",
//          ()=>{
//             console.log("your data2 was saved");
//                 savetoDb(
//                     "shradhaKhapra",
//                     ()=>{
//                         console.log("your data3 was saved");
//                     },
//                     ()=>{
//                         console.log("weak connection, data3 not saved");
//                     }
//     )
//          },
//          ()=>{
//             console.log("weak connection, data2 not saved");
//          }
//     )
// },
// ()=>{
//     console.log("weak connection, data not saved");
// });


//resolve or reject:

function savetoDb(data) {
    return new Promise((resolve,reject)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1;
            
    if (internetSpeed>4){
        resolve("success: data saved");
    }else{
        reject("Sorry for inconviniance");
    }
   });
}   

//then(fulfilled) and catch(reject) meethod in promises:
// let request = savetoDb("apanaCollege");//req=promise object

//PROMISE chaining:
savetoDb("apanaCollege")
.then((result)=>{
    console.log(" data is saved. promise was resolved");
    console.log(result);
    return savetoDb("hello world");
})
 .then((result)=>{
        console.log("data2 saved");
         console.log(result);
        return savetoDb("shradhadii")
    })
.then((result)=>{
        console.log("data3 saved");
        console.log(result);
})
.catch((error)=>{
    console.log(" promise rejected");
    console.log(error);
});
//result or error as argument to print strings inside;

//promise rejection:




   