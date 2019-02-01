//M.S. Crosson    //prog68_newString.js
//1 Feb 2019     //JSIntern

/* Task is to write a JS program to create a new string using the first and 
last n characters of a given string. The string length must be equal or greater
than n  */

function newString(num1,string1) {
    //test that string is at least nu,m,1 chars long
    if (string1.length < num1) {
        console.log("\'" + string1 + "\' is less than "+ num1 + " characters. Function terminates here.")
    } else {
        stringHead = string1.substring(0, num1);
        stringTail = string1.substring((string1.length - num1), string1.length)
        newString = stringHead + stringTail
        console.log("The new string is \'" + newString + "\'.")
    }
}

newString(5, "elephant")