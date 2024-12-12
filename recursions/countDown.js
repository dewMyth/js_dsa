/**
 * Notes:-
 *   Essential Rules
 *  1. BASE CASE - The condition where the recursion ends
 *  2. Same Parameter / Input cannot be used in the function again.
 */

const countDown = (n) => {
  // Base case
  if (n <= 0) {
    console.log(`Counted to 0 at last`);
    return;
  }

  n = n - 1; //n--
  console.log(`Counted from ${n}`);
  countDown(n); // N is always different, not the value we passed from line 8. it is reduced by 1 in line 15

  return;
};

// Execution
console.log("================================");
const num = 100;
console.log(`Starting counting from ${num}`);
console.log(countDown(num)); // Output: 120
console.log("================================");
