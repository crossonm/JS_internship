//M.S. Crosson    //prog77_notContains1Or3
//2 FEB 2019     //JSIntern

/* Task is to write a JS program to test whether an array of integers of length 2
does not contain a 1 or  3. Basically, this is program 76 with a "!" if front of the 
"does it have a 1 or 3 in it" test  */

function contains1or3(array1) {
    var contains = false

    if (array1.length !== 2) {
        console.log("Given array does not contain required two elements.")
    } else if ((array1[0] % 1 !== 0) || (array1[1] % 1 !== 0)) {
        console.log("Given array contains at least one value that is not integers")

    } else if (!((array1.includes(1)) || (array1.includes(3)))) {
        contains = true
        console.log("Given array contains no 1 or 3")
    } else {
        console.log("Given array does include 1 or 3.")
    }
    }

contains1or3([3,7])