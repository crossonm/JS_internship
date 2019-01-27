//M.S. Crosson    //prog15_diff13.js
//26 JAN 2019     //JSIntern

/* Task is to write a program to get the difference between a given
number and 13. If the number is greater than 13, return double the
absolute difference  */

function diff13(givenNum) {
    if (givenNum < 13) {
        console.log(Math.abs(givenNum - 13)) //show the difference
    } else if (givenNum == 13) {
        console.log("They're the same")
    } else if (givenNum > 13) {
        console.log(2*Math.abs(givenNum-13)) //show twice the difference
    }
}

//call the function with different argts
diff13(1)
diff13(13)
diff13(20)
