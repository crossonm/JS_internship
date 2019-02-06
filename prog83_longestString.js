//M.S. Crosson    //prog.js
//5 FEB 2019     //JSIntern

/* Task is to write a JS program to find the longest string from a given array of strings */

function longestString(array1) {

    //declare holder for longest string
    var longestString = "";

    //find longest string
    for (i=0; i < array1.length; i++){
        if ((array1[i]).length > longestString.length) {
            longestString = array1[i]
        }
    }
    
    //write longest string
    console.log(longestString)
}

longestString(["Ohio","Indiana","Michigan","Mississippi","North Dakota"])