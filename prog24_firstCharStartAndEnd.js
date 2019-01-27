//M.S. Crosson    //prog24_firstCharStartAndEnd.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS program ro create a new string from a given string with the 
first character of the given string added at the front and back   */

function makeNewString(string1) {
    stringLength = string1.length
    if (stringLength < 1) {          //if no string entered, advise to enter at least one char
        console.log("You need to enter at least one letter")
    } else  {
        firstLetter = string1.slice(0,1)    //extract the first letter
        newString = firstLetter + string1 + firstLetter //build the new string
        console.log(newString) //return the new string
    }
}

makeNewString("Pumpkin")
makeNewString("P")
makeNewString("")

