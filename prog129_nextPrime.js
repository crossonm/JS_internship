//M.S. Crosson    //prog129_nextPrime.js
//13 FEB 2019     //JSIntern

/* Task is to write a JS program to find the smallest prime number strictly
greater than a given number   */

function nextPrime(num1) {

    var isPrime=false;

    for (i = (num1+1); isPrime == false; i++){
        console.log("Now i is: " + i)
        for (k=2; k%num1==0; k++){
            console.log("Now k is: " + k)
            console.log("i % k = " + i%k)
           
            }
        }
    }

    console.log("The next prime number after " + num1 + " is " + i + ".")


nextPrime(42)
nextPrime(4234)
