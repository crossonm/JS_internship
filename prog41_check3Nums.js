//M.S. Crosson    //prog41_check3Nums.js
//28 JAN 2019     //JSIntern

/* Task is to write a JS exercise to check three given numbers. If the three 
numbers are the same, return 30; if two match, return 20; if all three are
different, return 40  */

function match3(num1,num2,num3) {

    var result

    if ((num1 == num2) && (num2 == num3)) {
        result = 30
    } else if (((num1 == num2) || (num1 == num3)) || (num2 == num3)) {
        result = 20
    } else {
        result = 40
    }

    console.log(result)
}

match3(1,1,1)
match3(1,1,7)
match3(1,6,1)
match3(1,2,3)
