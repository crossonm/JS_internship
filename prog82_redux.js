//M.S. Crosson    //prog82_redux
//5 FEB 2019     //JSIntern

/* Task is to write a JS program to add two positive integers without carry
*/

function addSansCarry(num1,num2) {

    //turn the numbers into arrays of digits
    array1 = (num1.toString()).split("");
    array2 = (num2.toString()).split("");

    console.log("array1: " + array1)
    console.log("array2: " + array2)

    //add leading 0's to the array with the fewer elements
    var longerLength = 0; // gets the value of the length of the logner array

    if (array1.length > array2.length) {longerLength = array1.length}
    else  {longerLength = array2.length} // if array2.length longer, or equal.

    console.log("Value of longerLength is " + longerLength)

    //add leading 0's to the shorter array
    for (i=0; i<longerLength; i++){
        if (array1[i] == undefined) {array1.unshift(0)}
        if (array2[i] == undefined) {array2.unshift(0)}
    }

    console.log("Now array1 is " + array1)
    console.log("Now array2 is " + array2)

    //now, do the math
    var array3 = [] //holds the individual digits of the result


    console.log(longerLength)
    for (i = 0; i < longerLength; i++) {
        partialResult = ((Number(array1[i]) + Number(array2[i])) % 10)
        array3[i] = partialResult
    }
    
    commaString = array3.toString() // converts array3 to a string with commas separating the digits in the result
    noCommaString = commaString.replace(/,/g, "") // eliminate the commas in the string
    result = Number(noCommaString) //convert the string to  number

    //return the result
    console.log("The result is: " + result)
        
    
   
    
}

addSansCarry(234234,9999)