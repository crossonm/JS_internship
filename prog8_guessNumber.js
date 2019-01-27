//M.S. Crosson    //prog8_guessNumber.js
//26 JAN 2019     //JSIntern

/* Task is to generate a random integer betwen 1 and 10, then prompt a user for a guess number.
If the numbers match, the program displays a message 'Good work'; otherwise it displays a message
'Not matched'   */

//generate the random integer. Math.random generates a random number between
//0 and 1. I'm then multiplying the value by ten, to get a value between 1 and
//10, and then using the Math.floor() function to return the closest integer 
//value less than the number. amd then adding 1 to make the range 1-10 
//instead of 0-9:

   myNumber = (Math.floor(10*Math.random()) + 1)
   console.log(myNumber)

//prompt the user for a number

   guess = prompt("Enter a number between 1 and 10");

//test whether my number and the user's guess match and give feedback

  if (guess == myNumber) {
      console.log("Yer right!")
  } else {console.log("My number was " + myNumber + ". Not matched")}
