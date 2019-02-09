//M.S. Crosson    //prog97_makePalindrome.js
//8 FEB 2019     //JSIntern

/* Task is to write a JS program to find the shortest possible string that, when added to a given string
will make it a palindrome   */

//FUCKING MESS. COME BACK TO THIS AND REDO IT

function reverseArray(array1) {
    var newArray = [];
    for (var i = array1.length - 1; i >= 0; i--) {
      newArray.push(array1[i]);
    }
    return newArray;
  }

function makePalindrome(string1) {

    var origLength = string1.length;

    //is it already a palindrome?
   array1 = string1.split("") //turn string into an array
   array2 = string1.split("").reverse()
   console.log(array1)
   console.log(array2)

   if (array1.toString() == array2.toString()) {
       console.log("Hey! It's already a palindrome.")
   } else {
      for (i=1; i<5; i++){
        array1.splice(origLength,0,array2.pop())   
        console.log(array1)
        newArray = reverseArray(array1)
        console.log(newArray)
        if  (array1.toString() == newArray.toString())  {console.log("yup")}
      }
      addedChars = (array1.length - origLength)
      console.log("Added " + addedChars + " chars.")

         
     
      flipped = string1.split("").reverse()
      console.log(flipped)
      flippedString = ((flipped.toString()).replace(/,/gi, ""))
      console.log(flippedString)    
      addedLetters = (flippedString.substring((flippedString.length - addedChars)))
      console.log("Added " + addedLetters + " to make a palindrome")
      
    }
}
       
    

 


  





makePalindrome("hellola")