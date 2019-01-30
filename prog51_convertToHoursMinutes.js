//M.S. Crosson    //prog51_convertToHoursMinutes.js
//30 JAN 2019     //JSIntern

/* Task is to write a JS program to "convert a given number to hours and minutes "  */

/* Since it's not specified, I'm assuming the number represents milliseconds. */

function MilliToHours(milliseconds) {
    //first, convert to minutes
    rawMinutes = milliseconds/1000/60
   
    //next get number of hours and round down to an integer
    numHours = Math.floor(rawMinutes/60)
  
    //next get number of minutes and round to an integer
    numMinutes = Math.floor(rawMinutes % 60)
    
    //and write the result
    console.log(milliseconds + " milliseconds makes " + numHours+" hours and "+numMinutes+ " minutes.")
}

MilliToHours(345254252)
