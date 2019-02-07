//M.S. Crosson    //prog95_replaceElement.js
//7 FEB 2019     //JSIntern

/* Task is to write a JS program to replace all the numbers with a specified number
of a given array of integers   */

function replaceElements(num1, array1) {
    for (i=0; i<array1.length; i++) {
        if (array1[i] == num1) {
            array1.splice(i,1,"replaced")
        }
    }
    console.log("New array = [" + array1 + "].")
}

replaceElements(8, [1,2,4,8,6,4,8,9])