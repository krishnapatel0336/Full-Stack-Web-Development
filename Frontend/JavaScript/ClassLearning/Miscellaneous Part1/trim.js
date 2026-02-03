let msg="hellow  ";
//STRING are immutable
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());

index= msg.indexOf("llow");  //show index of first
console.log(index);  //-1 index means not fouind
console.log(msg.trim().toUpperCase());  //method chain (LEFT===>to RIGHT)


//SLICE(start,end);
slice1= msg.slice(3);    //index 3 to end 
console.log(slice1);
slice2= msg.slice(1,4);   //last letter is not included
console.log(slice2);
slice3= msg.slice(-3);   // -3==>length-3 remain num index we get
console.log(slice3);

//replace
replace= msg.replace("w"," ");
console.log(replace);

//repeat
repeat= msg.repeat(3);
console.log(repeat);

console.log(msg.slice(3).replace(" ","!"));


