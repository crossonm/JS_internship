//M.S. Crosson    //prog52_alphabetizeString.js
//30 JAN 2019     //JSIntern

/* Task is to write a JS program to "convert the letters of a given string in alphabetical  order"   */

function alphaString(string1){
    string1NoSpaces = string1.replace(/ /g,"") // so you don't have a bunch of blank space at the beginning

    string1LC = string1NoSpaces.toLowerCase() //so you don't end up with capital letters first
    
    arrString1 = string1LC.split("") //split the lowercased string into individual letters
    
    arrString1.sort() // sort the string
    
    lengthArrString1 = arrString1.length //get number of elements in the array
    newstring = "" //initialize new string

    for (i=0;i < lengthArrString1; i++) {
        newstring = newstring + arrString1[i]
    }

    console.log("The alphabetized string is \'" + newstring + "\'.")
}

alphaString("To live outside the law you must be honest")