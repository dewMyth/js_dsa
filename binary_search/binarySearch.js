/**
 *
 *  Notes:-
 *  1. Works with only sorted arrays
 *  2. Start by divide the array into two parts.
 *  3. Check whether in which half the search element exist and omit the other half.
 *  4. Keep divide and search until the search element is the only element in the array
 *
 */

const binarySearch = (arr, searchElement) => {
  // Define Left and Right starting indexes
  let start = 0; // Left
  let end = arr.length - 1; // Right

  // Select a divide point to divide array into to parts (binary)
  let middle = Math.floor((start + end) / 2);

  // If the search element is exactly the dividing index, then return it
  if (searchElement === arr[middle]) {
    return middle;
  }

  // If not loop untill start <= end
  while (searchElement !== arr[middle] && start <= end) {
    // Means the search element should exist on the left side of the divided array,
    // Don't change the start, but change the end to the middle - 1
    if (searchElement < arr[middle]) {
      end = middle - 1;
    }
    // Means the search element should exist on the right side of the divided array
    // Don't change the end, but change the start to the middle + 1
    else {
      start = middle + 1;
    }
    // now re-assign the middle as in the reduced array
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === searchElement ? middle : -1;
};

// Execution
console.log("================================");
console.log(binarySearch([1, 2, 4, 6, 7, 8, 9, 60], 2));
console.log("================================");
