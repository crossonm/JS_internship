//M.S. Crosson    //prog136_replaceNumWith$.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to replace the first digit in a JS string 
with $. String needs to contain at least one digit.   */

function replaceNum(string1) {
    var newString = string1.replace(/[0-9]/, "$");//replaces first digit with $. Use /g to do a global replace
    console.log(newString)
}

replaceNum("Wh0s3W00d5th3s3ar37t47nkikn0w")
