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

// [3,2,2,3], val = 3 Output: 2, nums = [2,2,,]
