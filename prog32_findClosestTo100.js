//M.S. Crosson    //prog32_findClosestTo100.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS program that finds the value closest to 100 from two given integers
*/



function findClosest(num1, num2) {
   // get distance from num1 to 100 and from num2 to 100
   distNum1 = Math.abs(100-num1)
   distNum2 = Math.abs(100-num2)

   //if num1 is nearest, report this; if num2 is nearest, report that; if equidistant, report that.

   if (distNum1 < distNum2) {
       console.log(num1 + " is closer to 100 than " + num2 + ".")
   } else if (distNum2 < distNum1) {
       console.log(num2 + " is closer to 100 than " + num1 + ".")
   } else if (distNum1 == distNum2) {
       console.log ("Both " + num1 + " and " + num2 + " are " + distNum1 + " away from 100")
   }
}

findClosest(90,34235)
findClosest(-1,102)
findClosest(25,175)