//M.S. Crosson    //prog28_checkInRange.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS program to check if two given integer values are in the range 
50...99, inclusive. Return true if eiher of them are in the specified range  */

function checkRange(num1,num2) {
    var result 

    if (((num1 > 49) && (num1 < 100)) || ((num2 > 49) && (num2 < 100))) {
        result = true
        console.log(result)
    } else {
        result = false
        console.log(result)
    }
}

checkRange(50,100)
checkRange(49,100)
checkRange(44,101)


