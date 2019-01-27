//M.S. Crosson    //prog22_snipLetter.js
//27 JAN 2019     //JSIntern

/* Task is to take in a string and an integer N, snip out the Nth character,
and return the string sans that character                                 */

function snipLetter(string1,num1) {
    stringLength = string1.length //gets length of string
    if (num1 > stringLength) {
        console.log("Your string isn't long enough to have a " + num1 + "th character") //fail if string too short
    } else {
        stringHead = string1.substr(0,(num1-1)) //gets the front part, up to the nth character
        stringTail = string1.substr(num1,stringLength) // gets the back part, past the nth character
        newString = stringHead + stringTail //smooshes the two bits together 
        console.log("The new string is: \"" + newString + "\".") //prints it to console
    }
}

snipLetter("Fluffy",3)
snipLetter("Fl",33)