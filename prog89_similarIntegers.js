//M.S. Crosson    //prog.js
//5 FEB 2019     //JSIntern

/* Task is to write a JS program to check whether two given integers are similar
or not, if a given divisor divides both integers or it does not divide either.   */

function bothFactor(num1,num2,factor) {
    similar = true

    if ((num1 % factor !== 0) || (num2 % factor !== 0)){
        similar = false
    }

    if (similar == false) {
        console.log("The numbers are not similar. " + factor + " is not a factor of both.")
    } else {
        console.log("The numbers are similar. " + factor + " is a factor of both.")
    }
}


bothFactor(234,458127,3)
bothFactor(234,425234,3)