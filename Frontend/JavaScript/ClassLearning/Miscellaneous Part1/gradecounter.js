// practice 2
//write the code which can give grade to students
// write the code which can give student grade to students

let marks = prompt("Enter student marks :");

// It's best practice to convert the input to a number immediately
let studentMarks = Number(marks); 



// Use '&&' to check if marks are between 90 AND 100
if (studentMarks >= 90 && studentMarks <= 100) {
    console.log("Student's Grade is 'A'🤩");
} 

else if (studentMarks >= 70) { 
    console.log("Student's Grade is 'B'");
} 
else if (studentMarks >= 60) { 
    console.log("Student's Grade is 'C'");
} 
else if (studentMarks >= 40) { 
    console.log("Student's Grade is 'D'");
} 
else { // Everything below 40
    console.log("DO BETTER NEXT TIME 👍");
}






