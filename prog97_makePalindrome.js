//M.S. Crosson    //prog97_makePalindrome.js
//8 FEB 2019     //JSIntern

/* Task is to write a JS program to find the shortest possible string that, when added to a given string
will make it a palindrome   */

//FUCKING MESS. COME BACK TO THIS AND REDO IT

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
       console.log("This is not a palindrome")
       array3 = array1
       console.log(array3.pop())

       array1.splice(origLength,0,array3.pop())
       console.log(array1)
       }

   }
      

       
makePalindrome("flower")

 


  