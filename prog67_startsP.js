//M.S. Crosson    //prog67_startsP.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to create a new string from a given string, 
removing the first and last characters of the string if the first or last character
is 'P'. If not, then return the original string   */

function isP(string1) {
    //check if string starts or ends with a P
    firstL = string1.substring(0,1)
    lastL = string1.substring(string1.length, (string1.length - 1))

    // if it does, remove the first and last letter, then return result 
    if ((firstL == "P")  || (lastL == "p")) {
        string1 = string1.substring(1, (string1.length - 1))
        console.log(string1)
    } else {
        //otherwise, return the original string
        string1 = string1 //included only for the sake of making the logic plain
        console.log(string1)
    }
}

isP("Poker")
isP("cowe")
isP("sdsfsdfp")
