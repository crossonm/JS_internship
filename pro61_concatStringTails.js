//M.S. Crosson    //pro61_concatStringTails.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to concatenate two strings except
for their first character  */

function concatTails(string1, string2) {
    tail1 = string1.substr(1, string1.length)
    tail2 = string2.substr(1, string2.length)
    newstring = tail1 + tail2
    console.log("New string is \'" + newstring + "\'.")
}

concatTails("kitty","puppy")