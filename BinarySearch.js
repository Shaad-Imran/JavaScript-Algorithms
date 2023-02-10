// Problem - Given a sorted array of n elements and a target element t, find the index of t in the array. Return -1 if the target element is not found.

// note - Binary Search only works on sorted array

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([0, 3, 6, 8, 35], 6));
console.log(binarySearch([0, 3, 6, 8, 35, 55, 77], 55));
// Big-O = O(logn)
