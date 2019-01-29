//M.S. Crosson    //prog48_reverseString.js
//29 JAN 2019     //JSIntern

/* Task is to write a JS program to reverse a given string   */

function reverseString(string1) {
    stringArray = string1.split("") //turns the string into an array of characters
    var flippy = "" // declares an empty string variable
    
   //take one char at a time off the end of the array and add it to flippy 
    for (i=1; 1 < (stringArray.length+1); i++) {
        flippy = flippy + stringArray.pop() 
    }

    console.log("The reverse of " + string1 +  " is " + flippy+".")
}


reverseString("peanut")
reverseString("alligator")
reverseString("Able was I, ere I saw Elba.")