//M.S. Crosson    //prog6_leapYear.js
//26 JAN 2019     //JSIntern

/* Task is to determine whether a given year is a leap year.

LEAP YEAR RULES:
There is a leap year every year whose number is perfectly divisible 
by four - except for years which are both divisible by 100 and not 
divisible by 400. The second part of the rule effects century years. 
For example; the century years 1600 and 2000 are leap years, but the 
century years 1700, 1800, and 1900 are not. 
        -- https://www.wwu.edu/skywise/leapyear.html
        
*/

/* The function below runs through the four possibilities:
  (1) century year and not leap year
  (2) century year and leap year
  (3) leap year and not century year
  (4) not leap year and not century year    */

function isLeapYear(givenYear) {
    if ((givenYear%100 == 0) && (givenYear%400 !== 0)) {
        console.log(givenYear + " is a century year, but not a leap year.")
    } else if  ((givenYear%100 == 0) && (givenYear%400 == 0)) {
        console.log(givenYear + " is a century year and a leap year.")
    } else if ((givenYear%100 !== 0) && (givenYear%4 == 0)) {
        console.log(givenYear + " a leap year, but not a century year.")
    } else {
        console.log(givenYear + " is neither a leap year, nor a century year.")
    }
}

// give the function some test cases 
isLeapYear(1700)
isLeapYear(1600)
isLeapYear(1776)
isLeapYear(1777)


