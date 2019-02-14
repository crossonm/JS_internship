//M.S. Crosson    //prog130_numEven.js
//14 FEB 2019     //JSIntern

/* Task is to write a JS program to find the number of even digits in a given 
integer   */

function countEven(num1) {
    var array1 = [];
    var counter = 0;
    array1 = num1.toString(10).split("");


    for (i=0; i < array1.length; i++) {
        if (array1[i]%2==0) {
            counter++
        }
    }
    console.log(counter + " of the digits in " + num1 + " are even.")
}

countEven(4353897987978767657894535)