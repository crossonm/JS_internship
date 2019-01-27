//M.S. Crosson    //prog13_createVar.js
//26 JAN 2019     //JSIntern

/* Task is to write an exercise to create a variable with a
user-defined name.   */

/* If a single argument is passed to the function, it declares
the user's variable with an undefined value. If two arguments
are passed, the variable is initialized with value of argument #2
*/

function createVar(varName,value) {
    var varName = value;
    console.log("Value of your variable is currently " + varName)
}


createVar("kitty")
createVar("puppy", 11)