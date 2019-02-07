//M.S. Crosson    //prog92_maxDiff.js
//7 FEB 2019     //JSIntern

/* Task is to write a JS program to find the maximal difference between any two
adjacent elements in a given array of integers  */

function maxDiff(array1) {
    var thisDiff;
    var maxDiff = 0;

    for (i = 0; i < array1.length; i++) {
        thisDiff = Math.abs(array1[i] + array1[i+1])
        if (thisDiff > maxDiff) {
            maxDiff = thisDiff
        } else {
            maxDiff = maxDiff
        }
    }
    console.log("The maximum difference between two adjacent elements is " + maxDiff)
}

maxDiff([3,1,6,-2342,978978789789,234234234,2])