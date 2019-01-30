//M.S. Crosson    //prog54_countVowels.js
//30 JAN 2019     //JSIntern

/* Task is to write a JS program to ccount the number of vowels in a given string  */

function countVowels(string1) {
    string1Length = string1.length //get length of the string
    counter = 0 //initialize counter
   
    //each time a appears, see if b appears three spaces later. if so, increment counter by 1
    for (i=0; i < string1Length; i++) {
           
        if (((((string1[i] == "a") || (string1[i] == "e")) || (string1[i] == "i")) || (string1[i] == "o")) || (string1[i] == "u")){
            counter = counter + 1
        } else {
            counter = counter
        }
      
    }
    console.log("There are " + counter + " vowels in \'" + string1 + "\'.")
}

countVowels("Task is to write a JS program to ccount the number of vowels in a given string")