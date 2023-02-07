// Problem - Give an integer n, find the factorial of that integer

// recursiveFactorial(4) = 4*3*2*1 = 24
// recursiveFactorial(5) = 5*4*3*2*1 = 120
// recursiveFactorial(6) = 6*5*4*3*2*1 = 720

function recursiveFactorial(n) {
  //   let prod = 1;
  //   for (let i = 1; i <= n; i++) {
  //     prod *= i;
  //   }
  //   return prod;
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(6));
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
// recursiveFactorial(n-1)*1

// Big-O = O(n)
