//M.S. Crosson    //prog44_checkUnder21.js
//28 JAN 2019     //JSIntern

/* Task is to write a JS program to check from three given numbers (non-negative integers)
whether each number is greater than or equal to 20 and less than one of the other numbers    */

function check3Numbers(num1,num2,num3) {
 if ((num1 > 21) && ((num1 < num2) || (num1 < num3))) {
     console.log(num1 + " meets the criteria.")
 }  
 if  ((num2 > 21) && ((num2 < num1)) || (num2 < num3)){
    console.log(num2 + " meets the criteria.")
}
 if ((num3 > 21) && ((num3 < num1) || (num3 < num2))){
    console.log(num3 + " meets the criteria.")
}
}

check3Numbers(5,2,1)
check3Numbers(32,23,18)

