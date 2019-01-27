//M.S. Crosson    //prog16_sumNumbers.js
//26 JAN 2019     //JSIntern

/* Task is to write a program to compute the sum of two given
integers, If the two are the same, return three times the sum  */

//if same then console.log sum*3, else just return sum
function sumNumbers(num1,num2) {
    if (num1 == num2) {
        console.log("Thrice the sum is: " + (3*(num1+num2)))
    } else {
        console.log("The sum is: " + (num1+num2))
    }
}

sumNumbers(6,6)
sumNumbers(11,-9)