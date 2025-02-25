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
export function twoSum3(nums: number[], target: number): [number, number] {
  const map = new Map<number, number>()

  for (const [index, value] of nums.entries()) {
    if (value === undefined) throw new Error('unexpected undefined')

    const diff = target - value
    const diffIndex = map.get(diff)
    if (diffIndex !== undefined) {
      return [diffIndex, index]
    }

    map.set(value, index)
  }

  throw new Error('unwanted result')
}
