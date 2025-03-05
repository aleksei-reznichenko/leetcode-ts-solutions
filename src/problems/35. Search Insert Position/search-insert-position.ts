/**
 * Given a sorted array of distinct integers and an integer target,
 * return the index if the target is found.
 * If not, return the index where it should be inserted to maintain the sorted order.
 *
 * @param {number[]} nums - the input array
 * @param {number} target - the target number
 * @returns {number} the position of the target, or the position where it should be inserted
 */
function searchInsert(nums: number[], target: number): number {
  for (let position = 0; position < nums.length; position++) {
    if (target <= (nums[position] as number)) return position
  }

  return nums.length
}

export { searchInsert }
