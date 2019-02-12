//M.S. Crosson    //prog124_norOperator.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to create the value of NOR of two given booleans.
Note: in Boolean logic, logical nor or joint denial is a truth functional operator
that produces a result that is the negation of the logical or. That is, a sentence
of the form (p NOR q) is true precisely when neither p nor q is true.  */

function noOr(expression1, expression2) {
    var nor;
    if (!(expression1 || expression2)) {
        nor = true
    } else {
        nor = false
    }
    return nor;
}

console.log(noOr(4==2, false === true))
