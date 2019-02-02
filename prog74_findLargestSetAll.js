//M.S. Crosson    //prog74_findLargestSetAll.js
//2 FEB 2019     //JSIntern

/* Task is to write a JS program to find the larger value between the first 
and last values in an array and set all the other elements to that value   */

function findLargestSetAll(array1) {
    //get the larger value

    var largerVal;

    //determine whether first or last value is larger

    if (array1[0] > array1[((array1.length) - 1)]) {
        largerVal = array1[0]
    } else {largerVal = array1[((array1.length) - 1)] };

    //set all the values in the array to the larger value
    
    for (i=1; i<array1.length; i++) {
        array1[i] = largerVal
        console.log("here")
    }
    console.log("The new array is: " + array1)
}

findLargestSetAll([345,2,346,567,3,-3475847])
