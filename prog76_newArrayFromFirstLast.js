//M.S. Crosson    //prog76_newArrayFromFirstLast.js
//2 FEB 2019     //JSIntern

/* Task is to write a JS program to create a new array taking the first and last
elements of a given array of integers with length of at least 1   */

function newArray(array1){

    var isInt = true;
    newArray = [];

    //test that array elements are all integers
    for (i = 0; i < array1.length; i++) {   
        if ((array1[i] % 1) !== 0) {
            isInt = false
            console.log("One of the array elements is not an integer, execution stops here.")
        }
    };
    //test given array contains least one element
    if (array1.length < 1){
        console.log("Length requirement not met, execution stops here.")
    } else {
        if (isInt == true) {
        //go ahead with the function
        newArray[0] = array1[0];
        newArray[1] = array1[array1.length - 1]
        console.log("New array is: [" + newArray + "]")
    }    
  }
}


//Test cases: 

//newArray([])
//newArray([1,2,3,"bob", 9])
//newArray([456.3,6])
newArray([7,7,3,5,9])