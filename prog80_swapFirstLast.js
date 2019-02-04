//M.S. Crosson    //prog80_swapFirstLast.js
//4 FEB 2019     //JSIntern

/* Task is to write a JS program to swap the first and last elements of a given array of 
integers. Array must contain at least one element  */



function swapFirstLast(array1) {

    var holder;
    var isInt = true;

    // does array have at least one element?
    if (array1.length < 1) {
        console.log("Given array is too short. Array must contain one or more elements")
    } else {

        //is every element an integer?
        for (i=0; i < array1.length; i ++) {
           if ((array1[i] % 1) !== 0)
           isInt = false
          
        }

        if (isInt == true) {
           
            holder = array1[0]
            array1[0] = array1[(array1.length)-1]
            array1[(array1.length)-1] = holder
        } else {console.log ("At least one array element is not an integer.")}
 
            } 
console.log("The array is now: " + array1)
}

//swapFirstLast([1,2,3,,5,6,7,8,9])
swapFirstLast([1,2,3,4,5])