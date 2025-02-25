export function twoSum3(nums: number[], target: number): [number, number] {
  const map = new Map<number, number>()
  for (let index = 0; index < nums.length; index++) {
    const value = nums[index]

    if (value === undefined) {
      throw new Error('unexpected undefined')
    }

    const diff = target - value
    if (map.has(diff)) {
      const diffIndex = map.get(diff)
      if (diffIndex !== undefined) {
        return [diffIndex, index] as const
      }
    }

    map.set(value, index)
  }

  throw new Error('unwanted result')
}
