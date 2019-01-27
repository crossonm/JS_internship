//M.S. Crosson    //prog7_firstSunday
//26 JAN 2019     //JSIntern

/* Task is to "[w]rite a JavaScript program to find 1st January is being a 
Sunday between 2014 and 2050" 

This is sort of ambiguous, but I am interpreting it to mean find the first January 1st
that is a Sunday. If it's supposed to find every Sunday in that date range, just 
remove the break statement. */

function isSunday() {
 theYear = 2014 //initialize theYear with the first year in the range

 while (theYear < 2051) {
     newYearsDay = new Date(theYear,0,1); //give the program a January 1 date to work on
    

     //If that January 1st is a Sunday, write it to console and break out of the while loop
     //If it's not, then keep looping
     if (newYearsDay.getDay() == 0) {
         console.log("The first day of " + newYearsDay.getFullYear() + " is a Sunday!")
         break;
     }
     theYear++ //increment theYear
 }
}

isSunday()
   
