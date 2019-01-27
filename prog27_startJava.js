//M.S. Crosson    //prog27_startJava.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS program to check if a string starts with 'Java' and return false 
if not the case */

function startJava(string1) {

    stringLength = string1.length
    var result

    if (stringLength < 3) {          //if string is 3 chars or less, it cannot contain "Java"
        result = false
        console.log("The result is: " + result)
    } else  {
        first4 = string1.slice(0,4)    //extract the first four letters
        if (first4 == "Java") { //If they are "Java" then result is true
            result = true
            console.log("The result is: " + result)
        } else { //If they are not "Java" then the result is false
            result = false
            console.log("The result is: " + result)
        }
      
    }
}

startJava("Javaline")
startJava("Javoline")
startJava("jav")



