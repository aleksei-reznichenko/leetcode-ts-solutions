/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each element appears only once. The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 *
 * @param {number[]} nums - the input array
 * @returns {number} the number of unique elements
 */
function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0
  if (nums.length === 1) return 1

  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j] as number
    }
  }

  return i + 1
}

export { removeDuplicates }
