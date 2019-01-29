//M.S. Crosson    //prog45_is15
//29 JAN 2019     //JSIntern

/* Task is to write a JS program to check two given integer values and
return true if one of the numbers is 15 or if their sum is 18 or 
if their difference is 15  */

function is15(num1,num2){
    var result

    if (num1 + num2 == 15) {
        result = true
    } else if 
    (Math.abs(num1-num2) == 15) {
        result = true
    } else if 
    ((num1 == 15) || (num2 == 15)) {
         result = true
    } else  result = false

    console.log(result)

}

is15(18,3)
is15(25,10)
is15(7,14)
is15(-10,5)
        
