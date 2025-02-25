export function twoSum1(nums: number[], target: number) {
  for (let index1 = 0; index1 < nums.length - 1; index1++) {
    const value1 = nums[index1]
    if (value1 === undefined) continue
    for (let index2 = index1 + 1; index2 < nums.length; index2++) {
      const value2 = nums[index2]
      if (value2 === undefined || value1 + value2 !== target) continue
      return [index1, index2]
    }
  }
}
