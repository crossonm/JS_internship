//M.S. Crosson    //prog62_moveLast3.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to move the last three characters of a given
string to the start of the string. The string's length must be equal to or
greater than three.  */

function move3(string1) {
    //test that string1 is at least three characters
    if (!(string1.length > 2)) {

        console.log("Input string must be at least three characters. Function execution terminates here.")

    } else {
      
        stringTail = string1.substr((string1.length - 3), string1.length) //get last 3 chars
        stringHead = string1.substr(0, (string1.length - 3)) //get all but last 3 chars
        newString = stringTail + stringHead //build new string

        console.log("The result is: \'" + newString + "\'.")
    }
}

move3("butterfly")