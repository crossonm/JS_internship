//M.S. Crosson    //prog90_kthGreatest.js
//5 FEB 2019     //JSIntern

/* Task is to write a JS program to find the kth greatest element of a given array 
of integers   */

function nthGreatest(n, array1) {
    array1.sort(function(a, b){return a-b}) //parameter makes it sort by numeric value, instead of alphabetically.
    console.log(array1)
    console.log(array1[((array1.length)-n)] + " is the " + n + "th greatest element in the array")
}

nthGreatest(5, [23,1,36363,-1,-345345, 6, 454, 3])