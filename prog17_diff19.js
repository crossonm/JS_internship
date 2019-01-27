//M.S. Crosson    //prog17_diff19
//27 JAN 2019     //JSIntern

/* Task is to compute the absolute difference between a specificed 
number and 19. Return triple the absolute difference if the number
is greater than 19  */

/* The function below first checks if the given number is greater than 19
and, if so, figures and returns 3 times the absolute value of the 
difference. If the number is not greater than 19, it figures and returns
the absolute value of the difference.  */


function diff19(num1){
    if (num1 > 19) {
        console.log("3 * |your number - 19| is: " + 3*(Math.abs(num1-19)))
    } else {
        console.log("|your number - 19| is : " + Math.abs(num1-19))
    }
}

diff19(-10)
diff19(19)
diff19(23)
