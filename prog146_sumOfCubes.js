//M.S. Crosson    //prog146_sumOfCubes.js
//11 FEB 2019     //JSIntern

/* Task is to write a JS program to compute the sum of the cubes of all 
integers from 1 to a given integer  */


function sumCubes(num1) {
    var sum = 0;

    for (i=1; i <= num1; i++){
        sum = sum + Math.pow(i,3) //increase sum by i to the power of 3
    }

    console.log("The sum of the cubes from 1 to " + "num1" + " is: " + sum)
}

sumCubes(9)