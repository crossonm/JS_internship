//M.S. Crosson    //prog40_sumOrDiff.js
//28 JAN 2019     //JSIntern

/* Task is to write a JS script to check from two given 
integers if either one is 8 or if their sum or difference 
is 8   */

function is8(num1,num2) {
    if ((num1 == 8) || (num2 == 8))  {
        console.log("At least one of the numbers is 8.")
    } else if (num1 + num2 == 8) {
        console.log("The sum is 8")
    } else if (Math.abs(num1-num2) == 8) {
        console.log("The difference between the two numbers is 8.")
    } else {
        console.log("No 8's are involved here :-)")
    }
}

is8(1,1)
is8(1,8)
is8(8,8)
is8(14,6)
is8(-9,17)
is8(4.3)
