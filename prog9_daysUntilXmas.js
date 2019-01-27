//M.S. Crosson    //prog9_daysUntilXmas.js
//26 JAN 2019     //JSIntern

/* Task is to write a program that calculates the days until Xmas
*/

today = new Date()  //get today's date
thisYear = today.getFullYear() //get the year
thisXmas = new Date(thisYear,11,25) //get Xmas date

millTilXmas = thisXmas - today //get num milliseconds until Xmas

daysTilXmas = millTilXmas/1000/60/60/24 //convert milliseconds to days

niceDaysTilXmas = Math.floor(daysTilXmas) //round to integer days

console.log("You have " + niceDaysTilXmas + " days until Christmas.") //write it


