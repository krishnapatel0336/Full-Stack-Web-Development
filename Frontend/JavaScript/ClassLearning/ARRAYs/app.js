
let emptyArr=[];
let mixArr= ["aman" ,25 ,6.1];  //not allowed in java or c++

//ARRAYs are mutable;

mixArr[0]="shradha";
console.log(mixArr);

//Methods
let students = ["aman", "shradha", "rajat"];
students.push("saumya");
students.pop();
students.shift();
students.unshift("Aman");

//index
console.log(students.indexOf("rajat"));

//includes 
console.log(students.includes("rajat"));

//concat=> metrge 2 array
console.log(students.concat(mixArr));   //it will not repeat same element
// Here first element of students and than mixArr as per Arrangement

//reverse //make chnages in original function
console.log(students.reverse())

//now string os reverse
// ['rajat', 'shradha', 'Aman']
//slice -----> it will return COPY
console.log(students.slice())
console.log(students.slice(1,3))
console.log(students.slice(1))
console.log(students.slice(-1))     //From last
console.log(students.slice(7))


// splice ------> ALL in ONE {remove replace add in place}
// splice(starting index , delet_count  // iteam_0 , iteam_N)
// it makes changes in ORIGINAL 
cars=  [" audi" , "bmw" , "xuv" ,"maruti"];
//DELETING PROCESS
console.log(cars.splice(3));    //delete 3rd index
console.log(cars.splice(0,1));  // delete 0 index
console.log(cars.push("maruti" , "ferrari"));
console.log(cars)
console.log(cars.splice(1, 2));
//ADDITION 
console.log(cars.splice(0, 0, "toyota", "xuv","maruti"));
console.log(cars);
console.log(cars.splice(1,0,"mercedes")) //in middle
console.log(cars.splice(1,1,"gwagon")) //in middle REPLACE
console.log(cars);


// sort 
// organize in asscending and decending order
console.log(cars.sort()); //first element accoirding to alphabet order 

//NOT workable proprly on numbers becase convert nubers into "string"


//References: ==> kind of address:
// [1]===[1] //FALSE
//[]==[]  //FALSE  //// BECAUSE eachn array has UNIQUE REFERENCEvariable
//
let arr= ["a","b"];
let arrcopy = arr;
let a= arrcopy==arr;
console.log(a);


//costant array:
// we can change the length or do pop and push op
// but we cant complitely change it 
// we can't use assignment operator


//nested ARRAY:(MultiDimentional Arrays)
let arrayOfArrays= [[1,1,1], [2,2,2,2], [3,3],[4]];
console.log(arrayOfArrays);
console.log(arrayOfArrays[0][2]);
//NO Of ROWS==No. of inside ARRay
//COLms=== elements inside SUB_array{varies}
//can be multi level ARRAYS
