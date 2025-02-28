/**
 * Finds two numbers in the given array that add up to the target.
 *
 * Throws an error if the result is undefined.
 * O(n^2) complexity
 *
 * @param nums the array of numbers
 * @param target the target value
 * @returns the indices of the two numbers in the array
 */
export function twoSum1(
  nums: number[],
  target: number
): [number, number] | undefined {
  for (let index1 = 0; index1 < nums.length - 1; index1++) {
    const value1 = nums[index1]
    if (value1 === undefined) throw new Error('unexpected undefined')
    for (let index2 = index1 + 1; index2 < nums.length; index2++) {
      const value2 = nums[index2]
      if (value2 === undefined) throw new Error('unexpected undefined')
      if (value1 + value2 === target) return [index1, index2]
    }
  }
  throw new Error('unwanted result')
}
