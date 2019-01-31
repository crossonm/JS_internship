//M.S. Crosson    //prog64_concat2equal.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to concatenate two strings and return the
result. If the length of the strings is not the same, then remove characters 
from the longer string to make them so.  */

function concat2equal(string1, string2) {

    //get difference in length between the two strings
    
    diff = Math.abs(string1.length - string2.length)

   // Make the strings the same length, if they aren't already
    if ((string1.length) > (string2.length)) {
       string1 = string1.substring(0, (string1.length - diff))
      
   } else if ((string2.length) > (string1.length)) {
        string2 = string2.substring(0, (string2.length - diff))
        
   }

    //glue the strings together and spit out the result

    newstring = string1 + string2
    console.log("The new string is \'" + newstring + "\'.")
}

concat2equal("butterfly","fart")
concat2equal("dog","dogfish")
