/**
 * Notes: -
 *
 *  1. Objective is to find the smallest value in the each loop iteration.
 *  2. Then bring it to front, i.e to exactly the value is belong in the sorting order.
 *
 *
 * Pseudo Code
 *
 * 1. Start looping from the begining to end of the array.
 * 2. Select first index as the lowest
 * 3. Then, start another loop to compare the initially selected lowest with the rest of the array.
 * 4. If a new lowest found, swap it with the first element at the end of the outer loop iteration.
 *
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // Select first index as the lowest
    let lowest = i;

    // Another loop to comparison
    for (let j = i + 1; j < arr.length; j++) {
      // Compare each elemebt value with the initially selected lowest, change the lowest if valid
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // If the lowest change, swap the 2 elements
    if (lowest !== i) {
      console.log(
        `Found new lowest, hence SWAPPING! at No. ${i + 1} iteration`
      );
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
};

console.log("================================");
console.log(selectionSort([4, 2, 9, 5, 1]));
console.log("================================");
