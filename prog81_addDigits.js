//M.S. Crosson    //prog81_addDigits.js
//4 FEB 2019     //JSIntern

/* Task is to write a JS program to add two digits of a given
positive integer of length two  */

function addDigits(num1) {

    var holder;
    var sum;

    //check that number is positive, two digits, and integer
    if (((num1 < 0) || (num1 > 99)) || (num1 % 1 !== 0)) {
        console.log("Requirements are not met. Function stops here.")
    } else {
        stringNum = num1.toString()
        firstNum = stringNum[0]
        lastNum = stringNum[1]
        sum = Number(firstNum) + Number(lastNum)
        console.log(num1 + " can be reduced to " + sum)

               
    }
}

addDigits(84)