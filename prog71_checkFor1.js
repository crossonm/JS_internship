//M.S. Crosson    //prog71_checkFor1.js
//1 FEB 2019     //JSIntern

/* Task is to write a JS program to check if 1 appears in the first or last 
position of a given array of integers. The array length must be greater than
or equal to one   */

function checkFor1(array1) {
    //check required condition is met
    if (array1.length < 1) {
        console.log("Array too short. Function terminates here.")
    } else if ((array1[0] == 1) || (array1[(array1.length-1)] == 1)) {
        console.log("First or last element is 1.")
    }  else {
        console.log("Nope, no 1 in first or last position!")
    }
}

checkFor1([2,3,1])
checkFor1([2,1,1,1,1,1,4])
