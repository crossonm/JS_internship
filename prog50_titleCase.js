//M.S. Crosson    //prog50_titleCase.js
//30 JAN 2019     //JSIntern

/* Task is to write a JS program to capitalize the first letter of 
every word in a given string   */


function titleCase(phrase){
    array1 = phrase.split(" ") //take the phrase and split it into an array of individual words
    array2 = []                // declare a blank array to hold the capitalized words
    newPhrase = ""             //declare a string variable to hold the capitalized string
    
    for (i = 0; i < array1.length; i++) {
       //replace the first letter of each word with a capital letter and
       //put the capitalized word into a new array
        array2[i] = array1[i].replace((array1[i])[0],(array1[i])[0].toUpperCase())
        
        //concatenate the newly-capitalized words into a single string with a space between words.
        newPhrase = newPhrase + " " + array2[i]
    }
    console.log(newPhrase)
}


titleCase("whose woods these are i think i know, his house is in the village, though. he will not see me standing here to watch his woods fill up with snow")

