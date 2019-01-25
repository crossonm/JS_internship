//M.S. Crosson    //prog1_dateTime.js
//25 JAN 2019     //JSIntern

/* Task is to create a program to display current date/time
in the format: 
'Today is : Tuesday.
Current time is: 10 PM:30:38'                             */

function dateDisplay() {
    now = new Date()   //get the current date and time
    weekday = now.getDay()  //get the weekday in numeric format

    //convert the numeric day to a human-friendly day value
    switch (weekday) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday"
    }

     /* gets the hour portion of the current time and converts it to 
     non-military time                                            */
     clockHour = now.getHours(); //gives the hour number in 24hr time

     //if hour is before noon, appends "AM", else subtracts 12 and appends "PM" 
     
     if (clockHour > 12) {
        hourString = (clockHour-12) + " PM"
    } else {
        hourString = clockHour + " AM"
    } 

//Outputs time in requested format
console.log("Today is: " + day + ".")
console.log("Current time is " + hourString + ":" + now.getMinutes()+ ":" + now.getSeconds() + "." )
}

//Calls dateDisplay() function defined above.

dateDisplay()








