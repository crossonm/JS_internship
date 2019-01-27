//M.S. Crosson    //prog25_mult3or7
//27 JAN 2019     //JSIntern

/* Task is to write a JS program to check if a given positive number is a multiple
of 3 or a multiple of 7   */

function prod3or7(num1) {

//verify given number is positive

if (num1 < 0) {
    console.log("Please try again with a positive number.")
} else if ((num1%3 == 0) && (num1%7 == 0)) {
    console.log(num1 +  " divided by 3 is " + num1/3 + " and " + num1 + " divided by 7 is " + num1/7 + ".")
} else if (num1%3 == 0) {
    console.log(num1 + " divided by 3 is " + num1/3 + ".")
} else if (num1%7 == 0) {
    console.log(num1 + " divided by 7 is " + num1/7 + ".")
}
}
prod3or7(-9)
prod3or7(9)
prod3or7(28)
prod3or7(21)


