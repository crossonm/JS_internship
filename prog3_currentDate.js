//M.S. Crosson    //prog3_currentDate
//25 JAN 2019     //JSIntern

/* Task is to write a program to get the current date  
    expected output is mm/dd/yyyy                   */

function currentDate() {
  rawDate = new Date();  //get the date in standard JS format

  uglyMonth = rawDate.getMonth(); //get the month in standard JS format

  /* convert uglyMonth value to a standard two-digit month format by adding 1 to the standard JS format,
  so that January is month 1, and adding a leading 0 where needed to make the month two digits.        */
  if (uglyMonth < 9) {
    prettyMonth = "0" + (uglyMonth + 1)
  } else prettyMonth = uglyMonth + 1;
  

  //output the date in the requested format
  console.log("Today's date is " + prettyMonth + "/" + rawDate.getDate() + "/" + rawDate.getFullYear() + ".")
}

//call the currentDate function defined above.

currentDate();