//M.S. Crosson    //prog43_checkRightDigit.js
//28 JAN 2019     //JSIntern

/* Task is to write a JS program to check from 3 given numbers (non-negative integers) 
that at least two of them have the same rightmost digit
*/

function checkRightDigit(num1,num2,num3){

  if (((num1 > -1) && (num2 > -1)) && (num3 > -1)) {
    str1 = num1.toString() //convert the numbers to strings
    str2 = num2.toString()
    str3 = num3.toString()
    
    last1 = str1.charAt((str1.length - 1)) //get the rightmost character of the string
    last2 = str2.charAt((str2.length - 1))
    last3 = str3.charAt((str3.length - 1))

    if (((last1 == last2) || (last2 == last3)) || (last1 == last3)) { //compare the values
        console.log("Yes -- at least two of the numbers have the same rightmost digit.")
    } else {
        console.log("The numbers all have different rightmost digits")
    }
  } else {
      console.log("All the numbers are not positive, so function is terminating without checking further.")
  }
}

checkRightDigit(2325325235,-1,346346)
checkRightDigit(3534534,57457,12124)
checkRightDigit(234243, 3, 457623)
checkRightDigit(234,2,7)