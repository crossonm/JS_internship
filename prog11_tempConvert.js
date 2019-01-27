//M.S. Crosson    //prog11_tempConvert.js
//26 JAN 2019     //JSIntern

/* Task is to write a program to convert temperatures to and from 
Celcius, Fahrenheit  */

function TempConvert() {
    //get the original temperature
    var temp = prompt("What is the temperature?");
    var system = prompt("Enter F if this is Fahrenheit or C for Centigrade");
    
    //if original temp is in F, convert to C and write it to the console.
    if (system = "F") {
        var rawTemp =  (temp - 32) * (5/9);
        var convertTemp = Math.floor(rawTemp) //to get a nice integer value
        console.log("That's " + convertTemp + "° in Centigrade.")

    //if original temp is C, convert to F and write it to the console.
    } else if (system = "C") {
        var rawTemp = (temp * (9/5)) + 32;
        var convertTemp = Math.floor(rawTemp) //to get a nice integer value
        console.log("That's " + convertTemp + "° in Fahrenheit.")

    //if original is neither F nor C, error out
    } else {
     console.log("I said enter F or C only. Next time play by the rules.")
}
}
TempConvert()

