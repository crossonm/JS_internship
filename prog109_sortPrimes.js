//M.S. Crosson    //prog109_sortPrimes.js
//9 FEB 2019     //JSIntern

/* Task is to write a JS program to sort an array of all prime numbers between 1
and a given number  */




function findPrimes(num1) {
    var array_o_primes = [];

for (k=2; k<num1; k++) {
    
    //=======================
    // See if number prime. If yes, push it into the array
  
    var isPrime = 1

    for (i = 2; i < k; i++){
        if ((k % i) == 0) {
            isPrime = 0
        }
    }
    if (isPrime == 1) {
        array_o_primes.push(k)
    }

    //=======================
    

}
console.log("Prime numbers between 1 and " + num1 + " = [" + array_o_primes + "]")
}

findPrimes(11198)
