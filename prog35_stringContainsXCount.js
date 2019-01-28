//M.S. Crosson    //prog35_stringContainsXCount
//28 JAN 2019     //JSIntern

/* Task is to write a JS program to check that a given string contains 2-4 instances
of a specified character   */



function countInstances(string1,char1) {
    stringArray = string1.split("") //turn the string into an array of single characters
    length1 = stringArray.length //get the number of characters in the array
    charCount = 0 // initialize the character counter to 0
    
    for (i=0; i < length1; i++) {  
        if (stringArray[i] == char1) {
            charCount = charCount + 1 // compare each element with char1, increment counter if they match
        } else {charCount = charCount}
    }

    console.log("The string \'" + string1 + "\' contains " + charCount + " instance(s) of " + char1)

    if ((1 < charCount) && (charCount , 5)) {
        console.log(charCount + " is between 2 and 4!")
    } else {
        console.log(charCount + " is not between 2 and 4.")
    }
}

countInstances("WhoseWoodsTheseAreIThinkIKnow","k")
countInstances("WhoseWoodsTheseAreIThinkIKnow","e")

