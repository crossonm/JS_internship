//M.S. Crosson    //prog53_stringSeparation.js
//30 JAN 2019     //JSIntern

/* Task is to write a JS program to check if the characters aa and b are separated 
by exactly 3 places anywhere, at least once, in a given string  */

function stringSep(string1) {
    string1Length = string1.length //get length of the string
    counter = 0 //initialize counter
   
    //each time a appears, see if b appears three spaces later and vice versa. if so, increment counter by 1
    for (i=0; i < string1Length; i++) {
           
        if (((string1[i] == "a") && (string1[i+3] == "b")) || ((string1[i] == "b") && (string1[i+3] == "a")))
        {
            counter = counter + 1
        } else {
            counter = counter
        }
    }
    console.log("\'a\' appears three positions before or after \'b\' exactly " + counter + " times.")
}

stringSep("ergsdgeqadfsagr adfcbakfb andbbbbaaaaabb")