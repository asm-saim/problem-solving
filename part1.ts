/**
Write a function mergeSortedArrays that takes two arrays of numbers, each already sorted in ascending order, and merges them into a single sorted array.

Your solution should take advantage of the fact that both input arrays are already sorted.

Examples
mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// => [1, 2, 3, 4, 5, 6]
mergeSortedArrays([1, 2, 3], [4, 5, 6]);
// => [1, 2, 3, 4, 5, 6]
Example 1
Input: arr1 = [1,3,5], arr2 = [2,4,6]

Output: [1,2,3,4,5,6]

Explanation: Interleaved elements from both arrays in sorted order.

Example 2
Input: arr1 = [1,2,3], arr2 = [4,5,6]

Output: [1,2,3,4,5,6]

Explanation: All elements of the first array are smaller than all elements of the second array.
**/

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const merged = [...arr1, ...arr2] //using spread
  const sorted = merged.sort((a, b) => a - b)
  return sorted
}
