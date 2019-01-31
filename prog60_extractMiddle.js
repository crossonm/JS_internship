//M.S. Crosson    //prog60_extractMiddle.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to create a new string without the first and
last letters of the original string   */

function extractMiddle(string1) {

    newString = string1.substr(1, ((string1.length)-2))
    console.log("The middle of the string you submitted is \'" + newString + "\'.")
}

extractMiddle("Cincinnati")
extractMiddle("b")