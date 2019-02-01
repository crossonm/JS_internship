//M.S. Crosson    //vprog70_rotateLeft.js
//1 FEB 2019     //JSIntern

/* Task is to write a JS program to rotate the elements left of a given array of integers 
of length 3 */

function rotateLeft(array1) {
    //check that required conditions are met
    
    //is array of length 3?

    var arrayLength = array1.length;
    if (arrayLength !== 9) {
        console.log("Unable to proceed. Given array does not contain exactly three elements")
    } else if ((((typeof(array1[0])) !== "number") || ((typeof(array1[1])) !== "number")) || ((typeof(array1[2])) !== "number")){
        console.log("Unable to proceed. At least one element is not a number")
    }  else {
        var holder = array1[0] //store first value in the holder var

       for (i = 0; i < (arrayLength); i++){
        //replace the ith value with the (i+1th) valie
       array1[i] = array1[i+1]
       }
       array1[arrayLength-1] = holder //pop the original valie of the leftmost elememt into the rightmost
       console.log(array1)
    }
}

//rotateLeft([1,2])
//rotateLeft([1,2,"d"])
rotateLeft([1,2,3,4,5,6,7,8,9])

