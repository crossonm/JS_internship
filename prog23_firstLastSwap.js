//M.S. Crosson    //prog23_firstLastSwap.js
//27 JAN 2019     //JSIntern

/* Task is to take a string, swap the first and last letters, and return the new 
string. String.length must be greater than or equal to 1   */

function firstLastSwap(string1) {
    stringLength = string1.length
    if (stringLength < 1) {          //if no string entered, advise to enter at least one char
        console.log("You need to enter at least one letter")
    } else if (stringLength == 1) {  //if string is one char, return original string 
        newString = string1
        console.log(newString)
    } else  {
        firstLetter = string1.slice(0,1)    //extract the first letter
        middleBit = string1.slice(1,stringLength-1) //extract the middle bit
        lastLetter = string1.slice(stringLength-1, stringLength) //extract the last letter
        newString = lastLetter + middleBit + firstLetter //build the new string
        console.log(newString) //return the new string
    }
}

firstLastSwap("Pumpkin")
firstLastSwap("P")
firstLastSwap("")

