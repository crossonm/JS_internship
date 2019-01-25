//M.S. Crosson    //prog4_triangleArea.js
//25 JAN 2019     //JSIntern

/* Task is to write a program to find the area of a triangle with sides 5, 6, and 7 units   */

function triangleArea (a,b,c) {

    /* To find the area of a triangle when you've been given three sides, you use Heron's
       formula.

       First, you find the semi-perimeter, S. S is defined as the sum of the lengths of the sides, 
       divided by 2.

       Next, you use the formula for area.

       Area = the square root of (S*(S-A)*(S-B)*(S-C))
       */

       semiP = (a + b + c)/2 //calculate semiperimeter 

       area = Math.sqrt((semiP*(semiP-a)*(semiP-b)*(semiP-c))) //calculate area

       console.log(area) // output area

}

triangleArea(5,6,7)

