//M.S. Crosson    //prog96_sumDiffs.js
//8 FEB 2019     //JSIntern

/* Task is to write a JS program to compute the sum of the absolute differences
of consecutive numbers of a given array of integers  */

function sumDiffs(array1) {
    var totSum = 0; //initialize variable to hold total

    for (i=0; i < array1.length - 1; i++){
        totSum = totSum + Math.abs(array1[i] - array1[i+1])
    }

    console.log("The sum of the absolute differences between pairs of adjacent elements is: " + totSum)
}
sumDiffs([0,1,2,3])
sumDiffs([-10,20,15])