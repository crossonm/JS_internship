//M.S. Crosson    //prog47_digitsTwice.js
//29nJAN 2019     //JSIntern

/* Task is to write a JS program to check if a number in the range [40,10000] presents in
two numbers in the same range. For example, 40 presents in 400 and 4000    */

/* Need clarification, because '40' also appears in '409', '340', '2640', etc. 
Do they mean just at the beginning of a number? But 401, 402... 
Do they mean just at the beginning of a number that's followed exclusively by 0's?
Going to go with the last on, as that's the only thing that makes sense with the 
examples they're giving. */



for (i = 40; i < 10001; i++) {
    counter = 0
    if ((39 < 10*i) && (10*i < 10001)) {counter++}
    if ((39 < 100*i) && (100*i < 10001)) {counter++}
    if (counter == 2) {console.log(i + " appears in two numbers in the range.")}
}


