//M.S. Crosson    //prog125_longestString.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to find the longest string from a given array   */

function longestString(array1) {
    var longestLength = 0; //initialize holder variable
    var longestString = ""; //initializa holder variable

    for (i=0; i<array1.length; i++) {
        thisLength = array1[i].length
        if (thisLength > longestLength) {
            longestLength = thisLength
            longestString = array1[i]
        }
    }
console.log("The longest string is " + longestString + " at " + longestLength + " characters.")
}

longestString(["apple", "blueberry", "watermelon"])
