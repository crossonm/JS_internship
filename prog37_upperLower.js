//M.S. Crosson    //prog37_upperLower.js
//28 JAN 2019     //JSIntern

/* Task is to write a JS exercise to create a new string with the first three 
characters in lower case. If the string length is less than 3, convert all 
characters to upper case */

function upperLower(string1) {
    if (string1.length < 3) {  //if two or fewer characters, return whole string in uppercase
        newString = string1.toUpperCase()
        console.log("New string is \'" + newString + "\'.")
    } else {
        stringHead = (string1.slice(0,3)).toLowerCase() //three or more characters, lowercase first three chars
        stringTail = string1.slice(3,string1.length)  //leave rest of string in original case
        newString = stringHead + stringTail           //put the two halves together to make the new string
        console.log("New string is \'" + newString + "\'.")
    }
}

upperLower("do")
upperLower("DOGFISH")