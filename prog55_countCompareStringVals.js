//M.S. Crosson    //prog55_countCompareStringVals.js
//30 JAN 2019     //JSIntern

/* Task is to write a JS program to check if a given string contains equal
numbers of p's and t's   */

function comparePsTs(string1) {

    string1 = string1.toLowerCase() //so P and p both count as the same letter

    p_array = string1.split("p") //split string1 at each p and put result into an array
    p_length = p_array.length  //number of elements in the resulting array = (number of Ps + 1)

    t_array = string1.split("t") //next verse, same as the first
    t_length = t_array.length

    if (p_length == t_length) { //compare the numbers
        console.log("\'" + string1 + "\' contains an equal number of Ps and Ts.")
    } else {
        console.log("\'" + string1 + "\' contains " + (p_length - 1) + " Ps and " + (t_length - 1) + " Ts.")
    }
}

comparePsTs("supercalifragilisticexpialidociousexcalibursomesaytheworldwillendinfiresomestayinice")
