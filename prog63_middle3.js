//M.S. Crosson    //prog63_middle3.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to create a new string using the middle three characters
of a given string of odd length. The given string must be at meast three characters in length    */

function middle3(string1) {
    //test length criterion
    if (!(string1.length > 2)) {
        console.log("Given string is too short. Function execution terminates here.")
    } else if (((string1.length)%2) == 0) {
            console.log("Given string has an even number of characters. Function execution terminates here.")
        } else {
        middle3 = string1.substring((((string1.length)/2)-1),(((string1.length)/2)+2))
        //console.log("String1.length=" + string1.length)
       // console.log("String1.length/2 = " + (string1.length)/2)
       // console.log("(((string1.length)/2)-1)=" + (((string1.length)/2)-1))
        //console.log("(((string1.length)/2)+1) = " + (((string1.length)/2)+1))
        
        console.log("The middle three letters are \'" + middle3 + "\'.")
    }
}

middle3("he")
middle3("hell")
middle3("hamburgerooohamburger")



