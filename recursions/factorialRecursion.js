/**
 * Notes:-
 *   Essential Rules
 *  1. BASE CASE - The condition where the recursion ends
 *  2. Same Parameter / Input cannot be used in the function again.
 */

const factorial = (n) => {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive function
  return n * factorial(n - 1); // Always pass different value as parameter
};

// Execution
console.log("================================");
console.log(factorial(5)); // Output: 120
console.log("================================");
