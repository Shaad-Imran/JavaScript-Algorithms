// Problem - Give an integer n, find the factorial of that integer

// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120
// factorial(6) = 6*5*4*3*2*1 = 720

function factorial(n) {
  let prod = 1;
  for (let i = 1; i <= n; i++) {
    prod *= i;
  }
  return prod;
}
console.log(factorial(5));
console.log(factorial(4));

// Big-O = O(n) linear time complexity
