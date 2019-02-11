//M.S. Crosson    //prog150_swapDigitPairs.js
//11 FEB 2019     //JSIntern

/* Task is to write a JS program to swap pairs of adjacent digits of a given
integer of even length  */

function swapDigits(num1) {
    var string1 = num1.toString() // turn number into string
    var outArray = []; //to temporarily hold the result

    for (i=0; i<string1.length; i=i+2) {
        outArray[i] = string1[i+1]
        outArray[i+1] = string1[i]
    }
    
    var outString = outArray.join(''); //turn array to string without commas
    console.log("The number with adjacent pairs of digits swapped is: " + outString)
}

swapDigits(1234)
