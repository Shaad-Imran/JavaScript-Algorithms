// Problem - Give a positive integer n , determine if the number is a power of 2 or not

// isPowerOfTwo(1) = true
// isPowerOfTwo(2) =  true
// isPowerOfTwo(3) = false

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }

//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(10));
// console.log(isPowerOfTwo(6));
// console.log(isPowerOfTwo(32));

// Big-O = O(logn)

// another solution
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(4));
console.log(isPowerOfTwoBitWise(14));
console.log(isPowerOfTwoBitWise(64));
// Big-O = O(1)
