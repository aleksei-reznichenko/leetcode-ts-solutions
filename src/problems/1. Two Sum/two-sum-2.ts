/**
 * Finds two numbers in the given array that add up to the target.
 *
 * Throws an error if an unexpected undefined value is encountered or if no valid pair is found.
 * O(n) complexity
 *
 * @param nums the array of numbers
 * @param target the target value
 * @returns the indices of the two numbers in the array
 */
export function twoSum2(nums: number[], target: number): [number, number] {
  const valueIndexes: number[] = []

  for (let index = 0; index < nums.length; index++) {
    const value = nums[index]

    if (value === undefined) {
      throw new Error('unexpected undefined')
    }

    const diff = target - value

    if (diff in valueIndexes) {
      const diffIndex = valueIndexes[diff]
      if (diffIndex !== undefined) {
        return [diffIndex, index] as const
      }
    }

    valueIndexes[value] = index
  }

  throw new Error('unwanted result')
}
