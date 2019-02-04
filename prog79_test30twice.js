//M.S. Crosson    //prog79_test30twice.js
//4 FEB 2019     //JSIntern

/* Task is to write a JS program to test if a given array of integers contains
30 or 40 twice. The array length should be 0, 1, or 2.   */

function test30(array1) {

    var counter30 = 0;
    var counter40 = 0;

    //make sure array meets the length criteria
    if (array1.length > 3) {
        console.log("Array is too long. Function stops here.")
    } else {
        for (i=0; i < array1.length; i++) {
            if (array1[i] == 30) {
                counter30 = counter30 + 1}
            else if (array1[i] == 40) {counter40 = counter40 + 1}
        }
        //console.log("Counter30: " + counter30)
        //console.log("Counter40: " + counter40)
    }
    if (counter30 == 2) {
        confirm.log("There are " + counter30 + " instances of 30.")
    } else if (counter40 == 2){
        console.log("There are " + counter40 + " instances of 40")
    } else if  (array1.length < 4){
        console.log("There are not exactly two instances of either 30 or 40.")
    }
}

//test30([1,2,2,2,2,2,2])
//test30([30,2,2])
//test30([40,40,1])
test30([40,40,1,1])
