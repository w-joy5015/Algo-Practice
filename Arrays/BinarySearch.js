/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

examples:
binarySearch([1, 2, 3, 4, 5], 4) --> return 3
binarySearch([1, 2, 3, 4, 5], 6) --> return -1
binarySearch([1, 2], 3) --> return -1
binarySearch([1], 1) return 0

assumptions:
- there are no duplicates in the given array
- the given array will always have a length of at least 1
*/

const binarySearch = (arr, target) => {
  let leftBound = 0
  let rightBound = arr.length-1

  if (target < arr[leftBound]) return -1
  if (target > arr[rightBound]) return -1

  while(leftBound <= rightBound){
    let middleIdx = Math.floor((leftBound+rightBound)/2)
    if (arr[middleIdx] === target){
      return middleIdx
    }

    if (arr[middleIdx]>target){
      rightBound = middleIdx - 1
    }else {
      leftBound = middleIdx + 1
    }

  }
  return -1;
}

module.exports = { binarySearch }
