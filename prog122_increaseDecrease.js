//M.S. Crosson    //prog122_increaseDecrease.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to check whether a given array of integers
represents either a strictly increasing or strictly decreasing sequence   */

function uppyDown(array1) {
    var goesUp = true;
    var goesDown = true;

    for (i=0; i<array1.length; i++) {
        console.log("pair is " + array1[i] + "," + array1[i+2])
        if (array1[i] < array1[i+1]) {
            goesDown = false
            console.log("goesDown:" + goesDown)
        } 
        if (array1[i] > array1[i+1]) {
            goesUp = false
            console.log("goesUp:" + goesUp)
        }
    }
    console.log("Increase? " + goesUp)
    console.log("Decrease? " + goesDown)
}

//uppyDown([2,4,5,6,7,9])
//uppyDown([9,6,5,4,2])
uppyDown([7,2,4,7])