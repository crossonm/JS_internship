//M.S. Crosson    //prog149_switchCase.js
//9 FEB 2019     //JSIntern

/* Task is to write a JS program to change the capitalization of all letters
within a given string   */

function switchCase(string1) {
    var newArray = [];
    for (i=0;i<string1.length;i++){
        
        if (string1[i] == (string1[i].toUpperCase())) { //if uppercase, put corresponding LC char into array
            newArray[i] = string1[i].toLowerCase()
        } else {
            newArray[i] = string1[i].toUpperCase() //else put corresponding UC char into array
        }
    }
    
    newString = newArray.toString().replace(/,/g, '') //turn array into string and get rid of commas
    console.log(newString)
}

switchCase("AnneLeonieCrosson")