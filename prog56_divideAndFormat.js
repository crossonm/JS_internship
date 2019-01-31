//M.S. Crosson    //prog56_divideAndFormat.js
//30 JAN 2019     //JSIntern

/* Task is to write a JS program to divide two positive numbers and \
return a string with properly-formatted commas  */

function divideAndFormat(num1,num2) {
    //check that both numbers are positive
    if (!((num1 > 0) && (num2 > 0))) {
        console.log("Since both numbers are not positive, function terminates here.")
    } else {
        quotient = num1/num2
        prettyQuotient = quotient.toLocaleString() //reformats number as a string with proper commas
        console.log(num1 + "/" + num2 + " = " + prettyQuotient)
    }
}


divideAndFormat(2345245245234515236,72)