//M.S. Crosson    //prog94_mostCommonElement.js
//7 FEB 2019     //JSIntern

/* Task is to write a JS program to find the number that appears most
in a given array of integers   */

function mostCommonElement(array1) {

    var mostCommonElement;
    var thisElement;
    var mostNumTimes = 0;
    var thisNumTimes;

    //outer loop
    for (i = 0; i < array1.length; i++){
        thisNumTimes = 1;

        //inner loop
        for (k=(i+1); k < array1.length; k++){
            thisElement = array1[i]
            if (array1[k] == array1[i]) {thisNumTimes++}
            if (thisNumTimes > mostNumTimes) {
                mostCommonElement = thisElement;
                mostNumTimes = thisNumTimes;
            }
        }
    }  
    console.log("The most common element is " + mostCommonElement + " which appears " + mostNumTimes + " times.")

}

mostCommonElement([1,5,3,6,8,8,8,8,9,4,6,1,1])