//M.S. Crosson    //prog19_near100or400.js
//27 JAN 2019     //JSIntern

/* Task is to see whether a given number is within 20 of 
either 100 or 400   */

/* The function below checks whether the number falls within those
specified ranges and returns confirmation if so; otherwise, it reports
that the number is outside of that range.    */

function checkNear100(num1) {
    if (((80 <= num1) && (num1 <= 120)) || ((380 <= num1) && (num1 <= 420))) {
        console.log(num1 + " falls within range 100+/-20 or 400 +- 20.")
    } else [
        console.log(num1 + " is not within the range 100+/-20 or 400 +- 20..")
    ]
}

checkNear100(79)
checkNear100(80)
checkNear100(99)
checkNear100(420)
checkNear100(1)
checkNear100(500)
