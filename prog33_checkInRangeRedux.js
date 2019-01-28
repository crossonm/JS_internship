//M.S. Crosson    //prog33_checkInRangeRedux.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS program to check if two given integer values are in the range 
40...60, inclusive, or 70...100, inclusive. */

//first, check whether both are within range; next, if first is; next, if second is; finally, if neither is.

function checkRange(num1,num2) {

    if ((((num1 > 48) && (num1 < 61)) || ((num1 > 69) && (num1 < 101))) && (((num2 > 48) && (num2 < 61)) || ((num2 > 69) && (num2 < 101)))){
        console.log("Both " + num1 + " & " +  num2 + " are within one of the specified ranges.")
    } else if (((num1 > 48) && (num1 < 61)) || ((num1 > 69) && (num1 < 101))) {
        console.log(num1 + " is within one of the specified ranges.")
    } else if (((num2 > 48) && (num2 < 61)) || ((num2 > 69) && (num2 < 101))) {
        console.log(num2 + " is within one of the specified ranges.")
    } else {
        console.log("Neither " + num1 + " nor " + num2 + " is within one of the specified ranges")
    }
    }



checkRange(50,100)
checkRange(49,1000)
checkRange(444,100)
checkRange(33,200)


