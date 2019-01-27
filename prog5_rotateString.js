//M.S. Crosson    //prog5_rotateString.js
//25 JAN 2019     //JSIntern

/* Task is to tke the string 'w3resource' and rotate it by 
periodically removing one letter rom the end of the string and
attaching it to the front                                   */

/* function to chop off last char of string and prepend it to the 
truncated string */

function lastFirst(someString){
   stringLength = someString.length //gets the length of the string

   stringHead = someString.slice(0,(stringLength - 1)) //gets the beginning of the string
   stringTail = someString.slice((stringLength-1),(stringLength)) //gets the last character of the string
   
   return(stringTail + stringHead) // return the string with the last char at the beginning
}

/* function to "rotate" the string by repeatedly calling the above
lastFirst(someString) function repeatedly */


function rotateString(myString){
    console.log(myString)
    for (i=1; i < (myString.length + 1); i++)
    {myString = lastFirst(myString)
    console.log(myString)}
}

rotateString("myString")
