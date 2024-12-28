/**
 * Notes:-
 *   Process
 *  1. Start from a one corner, and compare first two indexes first.
 *  2. If it should be swapped, then swapped.
 *  3. Go untill the the comparison reach the other corner.
 *  4. Then start the iteration again
 *
 *  Pseudo Code
 *  1. Start looping from backwards to avoid => (index of arr.length - 1 and index of arr.length (undefined)) comparison
 *  2. Compare each two indexes in the order
 *  3. If it should be swapped, then swapped.
 *  4. Go all the iterations started from the backward loop
 *
 */

const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    console.log("Iterations to go : " + i);
    for (let j = 0; j < i - 1; j++) {
      // Check whether the element of the right index is greater than the element in left index
      if (arr[j] > arr[j + 1]) {
        // If so, swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      if (noSwaps) {
        console.log(
          "No swapped in this iteration, hence skipping to next iteration"
        );
        break;
      }

      console.log("Swapped array after iteration : " + arr);
    }
  }

  return arr;
};

console.log("================================");
console.log(bubbleSort([4, 2, 9, 5, 1]));
console.log("================================");
