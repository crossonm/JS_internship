//M.S. Crosson    //prog39_sum65or80
//28 JAN 2019     //JSIntern

/* Task is to write a JS program to compute the sum of two given integers.
If sum is [50,80] return 65, else return 80   */

function sumRange(num1,num2) {
    sum = num1 + num2 // get the sum of the two
    var result

    if ((49 < sum) && (sum < 81)) {
        result = 65
    } else {
        result = 80
    }
    console.log("Result is: " + result)
}

sumRange(24,26)
sumRange(1,1000)