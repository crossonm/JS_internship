//M.S. Crosson    //prog49_rot1.js
//28 JAN 2019     //JSIntern

/* Task is to write a JS program to replace every char in a given string with
the character following it in the alphabet              */

function rot1(string1) {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"]
    var newString
    var holder = ""

    stringLength = string1.length   
    
    for (i=0; i < stringLength; i ++) { //for each character, until the input string is completed
        num = (alphabet.indexOf(string1[i])) //find where that char is in the alphabet array
        holder = holder + alphabet[num+1] //attach the NEXT letter in the alphabet array to the holder var
    }
    console.log("The rotated word is: " + holder)
}

rot1("potato")