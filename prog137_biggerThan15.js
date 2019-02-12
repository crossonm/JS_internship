//M.S. Crosson    //prog137_biggerThan15.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to test whether a given integer is greater than
15. Return the number if so, else return 15   */

function test15(num1) {
    var result;
    if (num1 > 15) {
        result = num1
    } else {
        result = 15
    }

    console.log("Result is " + result)
}

test15(8)
test15(99)
test15(-14)