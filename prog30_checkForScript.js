//M.S. Crosson    //prog30_checkForScript.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS exercise to check if a string contains "Script" beginning at the 5th position.
If so, then return string sans the "Script" bit; else return original string   */

function scriptCheck(string1) {

   
    startPoint = string1.indexOf("Script") //get the point at which 'Script' occurs in string1

    if (startPoint == 4) {                 //if it's in the 5th position, cut it...
        newString = string1.replace("Script","")
    } else {
        newString = string1                //otherwise, return the original string
    }
    console.log(newString)
}

    

scriptCheck("hardScriptvkrs")
scriptCheck("Fuck, these exercises are SUPER-tedious, Ramone :-(")


