//M.S. Crosson    //prog.js
//9 FEB 2019     //JSIntern

/* Task is to write a JS program to determine if a given matrix (what?) is
an identity matrix (what, what?). Note: In linear algebra (oh, ffs...) the 
identity matrix, or sometimes ambiguously called a unit matrix, of size
n is the n ? n square matrix with ones on the main diagonal and zeros 
elsewhere. */

function areYouFuckingKiddingMeWTF(array1) {
    //is the array an n-by-n matrix?
    //ie does each sub-array have the same number of elements as the main array?

    var num1 = array1.length;
    var isIdentityMatrix = true; //start by assuming it is one.

    for (i = 0; i< num1; i++) {
        if (array1[i].length !== num1) {
            isIdentityMatrix = false
        }        
    }

    //are the 1's and 0's in the correct spots?

    //outer loop
    for (i = 0; i< num1; i++) {
        //inner loop
        for (k = 0; k < num1; k++){
            if (i == k) {
                if (array1[i][k] !== 1) {
                    isIdentityMatrix = false
            } 
        } else if (array1[i][k] !== 0){
                isIdentityMatrix = false
            }
        }
    }   
    if (isIdentityMatrix == false) {
        console.log(array1 + " is not an identity matrix.")
    } else {
        console.log(array1 + " IS an identity matrix!")
    }
}



areYouFuckingKiddingMeWTF([[1,2,3],[5,6,3],[2,7,6]])
areYouFuckingKiddingMeWTF([[1,2,3],[5,6,3],[2,7,6,9]])
areYouFuckingKiddingMeWTF([[1,0,0],[0,1,0],[0,0,1]])
