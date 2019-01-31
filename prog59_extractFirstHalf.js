//M.S. Crosson    //prog59_extractFirstHalf.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to extract and return the first half of a string of even length   */

function halfString(string1) {
    //test that string1 is of even length
   
    if ((string1.length) % 2 == 1) {
        console.log("Input string must be an even number of characters. Function terminates here.")
    } else {
        var halfString = ""
        halfString = string1.substr(0, ((string1.length)/2))
        console.log("The first half of \'" + string1 + "\' is \'" + halfString + "\'.")
    }
}

halfString("Cincinnatti")
halfString("pupmis")