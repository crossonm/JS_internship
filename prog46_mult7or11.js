//M.S. Crosson    //prog46_mult7or11
//29 JAN 2019     //JSIntern

/* Task is to write a JS program to check two given non-negative integers and whether
one (NOT both) is  multiple of 7 or 11                                               */

function mult7or11(num1,num2) {
    //check that the numbers are non-negative
    if ((num1 < 0) || (num2 < 0)) {
        console.log("At least one of the numbers is negative. Unable to proceed.")
    } 

    //check whether num1 is a multiple of 7 or 11
    if ((num1 % 7 == 0) || (num1 % 11 == 0)) {
            num1meets = true
        } else {
        num1meets = false};

    //check whether num2 is a multiple of 7 or 11
    if ((num2 % 7 == 0) || (num2 % 11 == 0)) {
        num2meets = true
    } else {
        num2meets = false
    };

    //if either num1 or num2 is a multiple, conditions are met.
    if (num1meets && !num2meets) {
        console.log(num1 + " is a multiple of 7 or 11 and " + num2 + " is not. The criteria are met.")
    } else if (!num1meets && num2meets) {
        console.log(num2 + " is a multiple of 7 or 11 and " + num1 + " is not. The criteria are met")
    } 
    
    //if both or neither is a multiple, conditions are not met.
    else if (num1meets && num2meets) {
        console.log("Both mumbers are multiples of either 7 or 11. The criteria are not met.")
    } else if (!num1meets & !num2meets) {
        console.log("Neither number is a multiple of either 7 or 11. The criteria are not met.")
    }
}

mult7or11(3,8)
mult7or11(-7,11)
mult7or11(21,6)
mult7or11(18,49) 
mult7or11(7,11)


