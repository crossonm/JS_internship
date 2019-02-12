//M.S. Crosson    //prog148_swapArrayHalves.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to swap two halves of an array of even length   */

function swapHalves(array1){

    var outArray = [];

    if (array1.length % 2 !== 0) {
        console.log("Sorry, for this function, the given array needs an even number of elements.")
    } else {
        for (i = (array1.length/2); i < array1.length; i++) {
            outArray.push(array1[i])
        }
        for (i = 0; i < (array1.length/2); i++) {
            outArray.push(array1[i])
        }
        console.log(outArray)
    }
   
}

swapHalves([1,2,3,4,5,6,7,8,9,0])
swapHalves(['a','b','c','d','e'])
swapHalves(['a','b','c','d','e','f'])
