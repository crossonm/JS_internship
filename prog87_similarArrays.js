//M.S. Crosson    //prog87_similarArrays.js
//6 FEB 2019     //JSIntern

/* Task is to write a JS program to check whether two arrays of same length are
similar. Two arrays are similar if one array can be obtained from the other
by swapping, at most, one pair of elements. (I.E. they have at most a single different 
element)   */

function similarArrays(array1, array2) {
    //get their length
    if (array1.length !== array2.length) {
        console.log("Arrays must have the same number of elements.")
    } else {{
        var mismatchCounter1 = 0; //set variable to track mismatches
        var mismatchCounter2 = 0 // set variable to track mismatches
        for (i = 0; i < array1.length; i ++)
        if (!(array2.includes(array1[i]))){
            mismatchCounter1++
        }

        for (i = 0; i < array1.length; i ++)
        if (!(array1.includes(array2[i]))){
            mismatchCounter2++
        }
        console.log("Mismatch counter 1 is " + mismatchCounter1 + ". Mismatch counter 2 is " + mismatchCounter2)
    }
    if ((mismatchCounter1 > 1) || (mismatchCounter2 > 1)) {
        console.log("The arrays are not similar")
    } else console.log("The arrays are similar.")
}}

similarArrays([1,22,3], [1,2,3])
similarArrays([1,2,3],[1,1,1])
similarArrays([1,1,1],[1,2,3])
similarArrays([1,2],[1,2,3])