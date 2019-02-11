//M.S. Crosson    //prog147_sumDigits.js
//11 FEB 2019     //JSIntern

/* Task is to write a JS program to compute the sum of all digits that occur 
in a given string   */

function sumDigits(string1) {
    var array1 = string1.split("") //turn the string into an array
    var sum1 = 0 //declare and initialize the sum holder

    for (i=0; i<string1.length; i++) {
        if (!(isNaN(Number(string1[i])))) //isNaN tests if a string is a valid number
        {sum1 = sum1 + Number(string1[i])}
        }
    console.log("The sum of the digits in the given string is: " + sum1)
}

sumDigits("asdfar3452")