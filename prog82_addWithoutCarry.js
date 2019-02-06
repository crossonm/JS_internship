//M.S. Crosson    //prog82_addWithoutCarry.js
//4 FEB 2019     //JSIntern

/* Task is to write a JS program to add two positive integers without carry   */

//CURRENTLY ONLY WORKS WHEN THE TWO INTEGERS HAVE THE SAME NUMBER OF DIGITS; NEED TO FIX THIS.

function addNoCarry(num1, num2) {
    var str1 = num1.toString();
    var str2 = num2.toString();

   //get the number of digits in the longer number ( -> numDigits)
    if (str1.length > str2.length) {
        numDigits = str1.length
        } else {
            numDigits = str2.length
        }

        console.log(numDigits)

    //initialize the value of the "tens multiplier"
    var place = 1;
    
    //initialize the value of the "element locator" (since starting at the rightnost digit)
    var elementLoc = numDigits-1;

    //initialize the value of the sum
    var sumNumbers = 0;

    //declare the holder var
    var holder;

    //start at the ones place and add the numbers

    for (i=0; i < numDigits; i++) {
        // fix the NaN issue when one number has more digits
        //console.log((Number(str1[elementLoc])))
        //console.log(Number(str2[elementLoc]))

        //console.log((((Number(str1[elementLoc])) + (Number(str2[elementLoc]))) % 10) * place)
        


        holder = ((((Number(str1[elementLoc])) + (Number(str2[elementLoc]))) % 10) * place)
        //console.log("holder = " + holder)
        sumNumbers = sumNumbers + holder;
        //console.log("sumNumbers = " + sumNumbers)
        place = place * 10
        elementLoc = elementLoc - 1

    }
console.log(sumNumbers)
 }
addNoCarry(192,83)