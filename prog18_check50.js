//M.S. Crosson    //prog18_check50.js
//27 JAN 2019     //JSIntern

/* Task is to check two given numbers and return true if one 
of the numbers is 50 or if the sum is 50  */

/* The function first checks if at least one number is equal to 50
and returns 'true' if so; if not it checks whether the numbers add
to 50 and returns 'true' in that case as well. If neither of the
two cases obtain, then it returns 'false'.     */

function check50(num1, num2) {
    var result
    if ((num1 == 50) || (num2 == 50)) {
        result = true
        console.log(result + " because at least one number is 50")
    } else if (num1 + num2 == 50) {
        result = true
        console.log(result + " because the numbers sum to 50")
    } else {
        result = false
        console.log(result)
    }
}

check50(15, 50)
check50(12,38)
check50(51,-999)