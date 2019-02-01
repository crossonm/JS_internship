//M.S. Crosson    //prog72_checkFirstLast3.js
//1 FEB 2019     //JSIntern

/* Task is to write a JS program to check if the first and last elements
are equal of a given array of integers length 3   */

function checkFirstLast(array1) {
    if (array1.length !== 3) {
        console.log("Array is not the required 3 characters. Function terminates here.")
    } else if (array1[0] == array1[(array1.length)-1]) {
        console.log("Yes, they match.")
    } else {
        console.log("Nope, no match.")
    }
}

checkFirstLast([2,1])
checkFirstLast([1,3,1])
checkFirstLast([2,1,7])