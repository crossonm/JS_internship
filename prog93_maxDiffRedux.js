//M.S. Crosson    //prog93_maxDiffRedux.js
//7 FEB 2019     //JSIntern

/* Task is to write a JS program to find the maximal difference among all
possible pairs of a given array of integers  */


function maxDiff(array1) {
    var thisDiff;
    var maxDiff = 0;


// outer loop
for (i=0; i<array1.length; i++) {
    // inner loop
    for (k=i; k<array1.length; k++){
        thisDiff = Math.abs(array1[i] - array1[k])
        console.log("Diff between " + array1[i] + " and " + array1[k] + " is " + thisDiff)
        if (thisDiff > maxDiff) {
            maxDiff = thisDiff
        } else {
            maxDiff = maxDiff
        }
    }

}
console.log("The max difference between any two elements in the given array is " + maxDiff + ".")
}

maxDiff([1,4,7,9,999,3])