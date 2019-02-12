//M.S. Crosson    //prog118_inRange.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to check if a given number is in a given range.  */

function inRange(num1,range1,range2) {
    var isInRange;
    if (((range1 <= num1) && (num1 <= range2)) || ((range1 >= num1) && (num1 >= range2))) {
        isInRange = true;
    } else {
        isInRange = false
    }
    console.log(isInRange)
    return(isInRange)
}

inRange(2, -8, 20)
inRange(-2,-2,-2)
inRange(2,4,6)

