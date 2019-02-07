//M.S. Crosson    //prog91_maxSum.js
//6 FEB 2019     //JSIntern

/* Task is to write a JS program to find the maximum possible sum of some of its
k consecutive numbers (numbers that follow each other in order) of a given
array of positive integers.  */

function maxSum(num1, array1) {
    var thisSum;
    var maxSum = 0;

    
//starting with each element in turn...
    for (i = 0; i < (array1.length); i ++){
        console.log("This is the ith number: " + array1[i])
        inner_loop_start = i
        thisSum = 0

        //add that element to the next num1-1 elements
        for (t = 0; t < num1; t++) {
            thisSum = thisSum + array1[inner_loop_start]
            inner_loop_start++  
        }

        // if the result is bigger than previous results, it becomes the new maxSum
        if (thisSum > maxSum) {
            maxSum = thisSum
            
        } else {
            //otherwise, previous maxSum value stands
            maxSum = maxSum
            console.log("C")
        }
    }

    //print the maxSum
    console.log("The maximum sum from " + num1 + " consecutive elements is " + maxSum)
}

maxSum(3, [1,2,99,3,4,5])