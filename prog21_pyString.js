//M.S. Crosson    //prog21_pyString
//26 JAN 2019     //JSIntern

/* Task is to take in a string and prefix 'Py-' to it, as long as 
it doesn't already begin with 'Py-'. If it does, then leave it 
alone   */

/* Function below takes a string as an argument and checks whether the first two 
characters are (case-insensitive) 'py'. If they aren't, it prepends a 'Py' to
the string. If they are, then it leaves the string alone.       */

function pyString(string1) {
    var firstTwo = string1.slice(0,2)
    if (firstTwo.toUpperCase() !== "PY") {
        string1 = "Py" + string1
    } else {
        string1 = string1
    }
    console.log(string1)
}

pyString("Lyon")
pyString("pYlot")