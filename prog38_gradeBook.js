//M.S. Crosson    //prog38_gradeBook
//28 JAN 2019     //JSIntern

/* Task is to write a JS script to check the total marks of a student in 
various examinations. The student will get A+ grade if the total marks are 
in the range [89,100], if the examination is "Final-exam" the student will
get A+ grade and total marks must be greater or equal to 90. Return true 
if the student gets A+ grade or return false otherwise   */

var grade = Math.floor(Math.random() * (+100 - +0))
var testType = ["standard", "pop-quiz", "final", "pre-test", "post-test"]

//using a switch statement to iterate over each possibility to determine if the student passed or failed
function didPass(grade, testType) {
    switch(testType) {
        case "standard":
        if ((grade > 88) && (grade < 101)) {
            return true;
            break;
        }
        case "pop-quiz":
        if ((grade > 88) && (grade < 101)) {
            return true;
            break;           
        }
        case "pre-test":
        if ((grade > 88) && (grade < 101)) {
            return true;
            break;           
        }
        case "post-test":
        if ((grade > 88) && (grade < 101)) {
            return true;
            break;           
        }
        case "final":
        if ((grade > 89) && (grade < 101)) {
            return true;
            break;           
        }
        default: return false
    }
}

// generate random scores for each possible test type, then call the didPass() fxn to determine whether 
// result is a passing score
function deGrade() {
     for (i=0; i < testType.length; i++){
         var test = testType[i]
         var score = grade
         if(didPass(score,test)){
             console.log("Your score is: " + score)
             console.log("The test you took was: " + test)
             console.log("you passed")
         } else {
            console.log("Your score is: " + score)
            console.log("The test you took was: " + test)
            console.log("you are a dumbass")
     }
    }
}
    console.log(grade);
    deGrade();

