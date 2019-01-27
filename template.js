//M.S. Crosson    //prog14_getFileExtension.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS exercise to get the extension of a filename   */

function getExtension(filename) {
    //Does the name contain at least one '.'? If no, then no extension present
    if (filename.indexOf(".") == -1) {
        console.log("The filename " + filename + " does not seem to have an extension")
    }
}

getExtension("hamster")
