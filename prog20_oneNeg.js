//M.S. Crosson    //prog20_oneNeg.js
//27 JAN 2019     //JSIntern

/* Task is to take in two integers and check whether one is negative
and the other positive   */

/*The function below checks whether this is the case. I know I'm
supposed to be fully commenting and hope this is sufficient. */

function oneNeg(num1, num2) {
    if (((num1 < 0) && (num2 >= 0)) || ((num2 < 0) && (num1 >= 0))) {
        console.log("One is negative!")
    } else {
        console.log("Either both are negative or both positive!")
    }
}

oneNeg(-1,-2)
oneNeg(-1,0)
oneNeg(-3,9)
oneNeg(9,9)
