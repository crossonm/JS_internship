//M.S. Crosson    //prog.js
//2 FEB 2019     //JSIntern

/* Task is to write a JS program to reverse the elements of a given array
of length 3   */

function reverseArray(array1) {
   
    //check if array contains three characters, as required
    if (array1.length !== 3) {
        console.log("The array does not have three integers. Function execution stops here.")
    } else {
        //pop the last value off the first array, push that into the new array, return the new array
        var newArray = [];
        var array1Length = array1.length;
        var holder;

        for (i = 1; i < (array1Length + 1); i++) {
           holder = array1.pop()
           newArray.push(holder)
        }
        console.log(newArray)
        }
}

reverseArray([1,2,3])
reverseArray([1,2,3,4,5,6,7,8,9])