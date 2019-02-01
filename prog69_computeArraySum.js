//M.S. Crosson    //prog69_computeArraySum.js
//1 FEB 2019     //JSIntern

/* Task is to write a JS program to compute the sum of three elements of a given 
array of length 3   */

function sumArray(array1) {
    //check that required conditions are met
    
    //is array of length 3?

    var arrayLength = array1.length;
    if (arrayLength !== 3) {
        console.log("Unable to proceed. Given array does not contain exactly three elements")
    } else if ((((typeof(array1[0])) !== "number") || ((typeof(array1[1])) !== "number")) || ((typeof(array1[2])) !== "number")){
        console.log("Unable to proceed. At least one element is not a number")
    }  else {
        sum1 = array1[0] + array1[1] + array1[2]
        console.log("Sum is " + sum1)
    }
}

sumArray([1,2])
sumArray([1,2,"d"])
sumArray([4,2,81])

