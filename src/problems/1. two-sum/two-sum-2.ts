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
