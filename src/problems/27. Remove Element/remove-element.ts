/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * @param {number[]} nums - the input array
 * @param {number} val - the element to remove
 * @returns {number} the number of elements in nums which are not equal to val
 */
function removeElement(nums: number[], val: number): number {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i] as number
    }
  }

  return count
}

export { removeElement }
