//M.S. Crosson    //prog113_calcSumFracs.js
//9 FEB 2019     //JSIntern

/* Task is to write a JS program to calculate the sum of n + n/2 + n/4 + n/8 + ... 
where n is a positive integer and all divisions are integer   */

/* Thoughts:
    * The result can only be an integer if the denominator 'd' in n/d is less than or 
    equal to n. That gives a stopping point.
*/

function calcSumFracs(num1) {
    var sum = num1; //initialize value of sum
    var den1; //declare var to hold denominator of fractional addend (yeah, I looked up the right word)


    // for each num/den until num = den, if the result is an integer, add it to the sum value.

    for (den1 = 2; den1 <= num1; den1 = (den1*2)){
        //console.log("den1 =" + den1)
        if (num1 % den1 == 0) {
            sum = sum + num1/den1
           // console.log(sum)
        }
    }

    //write out the result
    console.log(sum)
}

calcSumFracs(82)
