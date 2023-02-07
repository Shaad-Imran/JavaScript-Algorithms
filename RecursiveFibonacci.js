// Recursion is a problem solving techinque, where the solution depends on solutions to smaller instances of the same problems
// Recursion is when a function calls itself

// Recursive Fibonacci sequence
// problem - Give a number nth, find the first n elements of the fibonacci sequence

// recursiveFibonnaci(0) = 0
// recursiveFibonnaci(1) = 1
// recursiveFibonnaci(6) = 8

function recursiveFibonnaci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonnaci(n - 1) + recursiveFibonnaci(n - 2);
}
console.log(recursiveFibonnaci(0));
console.log(recursiveFibonnaci(1));
console.log(recursiveFibonnaci(6));
// Big-O = O(2^n)
