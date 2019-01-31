//M.S. Crosson    //prog58_glueLast3Chars.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to create a new string of four copies of the last
3 characters of a given original string. The length of the given string must be 
greater than 2 characters.  */

function smooshEm(string1) {
    //test that string1 is > 2 chars
    if (!(string1.length > 2)) {
        console.log("Input string must be 3 or more characters. Function terminates here.")
    } else {
        //get last three characterss of string
        substring1 = string1.substr(string1.length-3, string1.length)
        
        //glue the substring copies into the new string

        var newString = "" //declare newString variable

        for (i=1; i < 5; i++) {
            newString = newString + substring1
        }
        console.log("The resulting new string is \'" +newString + "\'.")
    }
  
}

smooshEm("cincinnatti")
smooshEm("fu")