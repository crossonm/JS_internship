//M.S. Crosson    //prog26_first3StartandEnd.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS program to create a new string from a given string by taking the
last three characters and adding them at the front and back. The original string must
be at least three characters */

function first3(string1) {
    stringLength = string1.length
    if (stringLength < 3) {          //if string too short, advise to enter at least three chars
        console.log("Your string needs to be at least three characters long.")
    } else  {
        firstThree = string1.slice(0,3)    //extract the first three letters
        newString = firstThree + string1 + firstThree //build the new string
        console.log(newString) //return the new string
    }
}

first3("Pumpkin")
first3("Po")

