// Problem - Given a natural number n, determine if the number is isPrime or not.

// A isPrime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(4));
// console.log(isPrime(7));
// console.log(isPrime(6));
// Big-O = O(n) linear time complexity

// Optimized Primality Test :
// Integers larger than the square root do not need to be checked because whenever n=a*b one of the two factors a and b is less than or equal to the square root of n

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// Big-O = O(sqrt(n))
