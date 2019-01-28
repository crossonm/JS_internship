//M.S. Crosson    //prog31_findMax.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS exercise to find the largest of three given integers   */

//There's a Math method that finds the max in a list of numbers, so... not much to this program...

function findMax(num1, num2, num3) {
    largestNum = Math.max(num1,num2,num3)
    console.log("The largest number is: " + largestNum + ".")
}

findMax(23234,1,-232)