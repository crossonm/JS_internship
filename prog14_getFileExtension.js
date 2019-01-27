//M.S. Crosson    //prog14_getFileExtension.js
//27 JAN 2019     //JSIntern

/* Task is to write a JS exercise to get the extension of a filename   */

function getExtension(filename) {
    //Does the name contain at least one '.'? If no, then no extension present
    if (filename.indexOf(".") == -1) {
        console.log("The filename \'" + filename + "\' does not seem to have an extension")
    } else {

    //find the last instance of a '.'
    splitPoint = filename.lastIndexOf(".")

    //extract the extension from the filename
    nameLength = filename.nameLength
    extension = filename.slice(splitPoint,nameLength)
    console.log("The file's extension is: " + extension)
}
}

getExtension("hamster")
getExtension("hamster.txt")
getExtension("here.is.a.hamster.xls")
