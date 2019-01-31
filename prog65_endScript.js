//M.S. Crosson    //prog65_endScript.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to determine whether a given string ends with
'Script.' The length of the string must be at least 6 chars   */

function endScript(string1) {
    //test if minimum length requirement met
    if (string1.length < 6) {
        console.log("Minimum script length requirement not met. Function terminates here.")
    } else {
        //check if the last 6 chars are equal to "Script"

        tail = string1.substring((string1.length - 6), (string1.length))
        
        if (tail == "Script") {
            console.log("Yep, ends with \'Script\'.")
        } else {
            console.log("Nope, doesn't end in \'Script\'.")
        }
    }
}

    endScript("Dogfish")
    endScript("MaNuScript")
