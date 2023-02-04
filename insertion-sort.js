// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  let unsorted = arr.slice();
  let sorted = [];
  let breakpoint = 0;
  let temp;

  while (unsorted.length > 0) {
    console.log(sorted.join(','));
    temp = unsorted.pop();
    breakpoint = 0;
    sorted.push(null);

    for (let i = sorted.length - 2; i >= 0; i--) {
      if (sorted[i] < temp) {
        breakpoint = i + 1;
        break;
      } else {
        sorted[i + 1] = sorted[i];
      }
    }

    sorted[breakpoint] = temp;
  }

  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let divider = 1;
  let temp;
  let breakpoint;

  while (divider < arr.length) {
    console.log(arr.join(','));
    temp = arr[divider];
    breakpoint = 0;

    for (let i = divider; i >= 0; i--) {
      if (temp > arr[i - 1]) {
        breakpoint = i;
        break;
      } else {
        arr[i] = arr[i - 1];
      }
    }

    arr[breakpoint] = temp;
    divider++;
  }

  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
