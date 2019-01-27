//M.S. Crosson    //prog29_checkInRange3Nums.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS program to check if three given integer values are in the range 
50...99, inclusive. Return true if any one of the three are in the specified range  */

/* Basically just recycled program 28, changing (p ∨ q) to ((p ∨ q) ∨ r) */

function checkRange(num1,num2,num3) {
    var result 

    //if ((49 < num1 < 100) or (49 < num2 < 100)) or (49 < num3 < 100)) then true; else false.

    if (((((num1 > 49) && (num1 < 100)) || ((num2 > 49) && (num2 < 100)))) ||  ((num3 > 49) && (num3 < 100))) {
        result = true
        console.log(result)
    } else {
        result = false
        console.log(result)
    }
}

checkRange(50,100,11)
checkRange(49,50,50)
checkRange(44,101,6)


