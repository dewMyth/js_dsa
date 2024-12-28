/**
 * Notes: -
 *
 *  1. Objective is to create partial sorted array strating from first index.
 *  2. Then added the each nearest right index to the correect position at partially sorted array.
 *
 *
 * Pseudo Code
 *
 * 1. Start looping from the 1st index of the array (not the 0th)
 * 2. Select first index as the only character in the partially sorted array
 * 3. Then, start looping and compare nearest right element and swap if necessary
 *
 */

// [4, 2, 9, 5, 1]
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]; // arr[i] = 2, i = 1   // initial partially sorted array

    // Use var, since let is only block scope while var is function scoped
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // j = 0
      // arr[j] = 4
      // arr[j+1] = 2
      // currentVal = 2,
      // hence arr[j] > currentVal is true,  triggers the loop

      arr[j + 1] = arr[j];
      // 2 <- 4, assigning the 4 into where 2 was
    }

    // now we have 2 where we have saved in line 19 as the currentVal
    // assign it to where the 2 was
    arr[j + 1] = currentVal;
    // 2, 4
  }

  return arr;
};
console.log("================================");
console.log(insertionSort([4, 2, 9, 5, 1]));
console.log("================================");
