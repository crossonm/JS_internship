//M.S. Crosson    //prog141_findUnion.js
//12 FEB 2019     //JSIntern

/* Task is to write a JS program to find the number of elements which presents in 
both of two given arrays  */

function findUnion(array1, array2) {
var unionArray = [];

    for (i=0; i<array1.length; i++) { //if an element in array1 is in array2, push it to the unionArray
         if (array2.includes(array1[i])) {
            unionArray.push(array1[i])
         }
    }
    console.log(unionArray)
}
findUnion([1,2,3,5,7,"dog","cat"],[2,3,4,11,"cat"])
