//M.S. Crosson    //prog75_createArrayFromMiddle.js
//2 FEB 2019     //JSIntern

/* Task is to write a JS program to create a new array from the middle elements
of two given arrays of length == 3   */

function newArray(array1,array2) {
    var newArray= [];
    
    //make sure both given arrays have 3 elements
    if ((array1.length !== 3) || (array2.length !== 3)) {
        console.log("Requirement of two 3-element arrays not met. Execution stops here.")
    } else {
        //carry on with creating the new array
        newArray[0] = array1[1];
        newArray[1] = array2[1];
        console.log("New array is: [" + newArray + "]")
    }
}

newArray(["this","is","stupid boring"], [1,2,3])