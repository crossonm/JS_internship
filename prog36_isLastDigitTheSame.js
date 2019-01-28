//M.S. Crosson    //prog36_isLastDigitTheSame
//28 JAN 2019     //JSIntern

/* Task is to write a JS script to check whether the last digit of 
three positive integers is the same   */

function checkSame(num1,num2,num3) {
    //are all three integers positive?
    if (((num1 < 0) || (num2 < 0)) || (num3 < 0)) {
        console.log("At least one of those numbers is not a positive integer.")
    } else {
        string1 = num1.toString() //convert to strings to grab last char
        string2 = num2.toString()
        string3 = num3.toString()

        last1 = string1[string1.length -1]; //get last chars
        last2 = string2[string2.length -1];
        last3 = string3[string3.length -1];

        if ((last1 == last2) && (last2 == last3)) {
            console.log("All three integers have the last digit " + last1 + ".")
        } else {
            console.log("The last digits do not match.")
        }
    }
}

checkSame(-1000,20,20000)
checkSame(23,22333333333333,32)
checkSame(345,457030465,8603402020504645)