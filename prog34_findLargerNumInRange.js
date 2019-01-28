//M.S. Crosson    //prog34_findLargerNumInRange.js
//28 JAN 2019     //JSIntern

/* Task is to write a JS exercise to take in two integers, verify that 
they are in the [40...60] range, then return the larger of the two numbers   */

function whichBigger(num1, num2) {
    if (((39 < num1) && (num1 < 61)) &&  ((39 < num2) && (num2 < 61))) {
        if (num1 == num2) {
            console.log("The numbers are equal.")
        } else {     
        bigger = Math.max(num1,num2)
        console.log(bigger + " is the larger of the two numbers.")
        }
    } else {
        console.log("Cannot proceed because it is not true that both numbers are in the [40...60] range.")}
}

whichBigger(1,59)
whichBigger(1,1)
whichBigger(59,1)
whichBigger(59,60)
whichBigger(60,60)
