//M.S. Crosson    //prog57_concatCopies.js
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to create a new string of specified number of copies
(positive number) of a given string   */

function tribble(string1,num1) {
    //test that number is positive
    if (num1 < 0) {
        console.log("Cannot make a negative number of copies, so function execution terminates here.")
    } else {
        var newString = "" //declare and initialize variable to hold new string

        for (i=0; i < num1; i++) {
            newString = newString + string1; //glue string copies together num1 times
        }
        console.log("The resulting string is : \'" + newString + "\'.")
    }
}

tribble("bugfart", 19)
tribble("tuna sandwich", -2)