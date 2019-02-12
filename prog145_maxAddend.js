//M.S. Crosson    //prog145_maxAddend.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to find the maximum integer n such that 
1 + 2 + 3 +... n <= a given number  */

function maxAddend(int1) {
    var maxN = 0;
    var sum = 0;

   
    for (i = 1; i < int1; i++) {
        if ((sum + i) <= int1) { //if adding i to the sum will be less than or equal to the given integer
            maxN = i             // then the max addend is at least i and...
            sum = sum + i        // the sum increments by i
        }
    }
    console.log("The maximum integer n, such that 1 + 2... + n will be less than or equal to " + int1 + ", is " + maxN)
}

maxAddend(10)
maxAddend(-10)
maxAddend(365)
