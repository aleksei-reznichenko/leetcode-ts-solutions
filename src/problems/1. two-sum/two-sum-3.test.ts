import { describe, expect, test } from 'vitest'
import { twoSum3 } from './two-sum-3'

describe('twoSum3', () => {
  test('happy path', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(twoSum3(nums, target)).toEqual([0, 1])
  })

  test('edge case: duplicate numbers', () => {
    const nums = [3, 3]
    const target = 6
    expect(twoSum3(nums, target)).toEqual([0, 1])
  })

  test('edge case: negative numbers', () => {
    const nums = [-1, -2, -3, -4, -5]
    const target = -8
    expect(twoSum3(nums, target)).toEqual([2, 4])
  })

  test('error case: unexpected undefined value', () => {
    const nums = [2, undefined, 11, 15]
    const target = 9
    expect(() => twoSum3(nums as number[], target)).toThrowError(
      'unexpected undefined'
    )
  })

  test('error case: no valid pair found', () => {
    const nums = [2, 7, 11, 15]
    const target = 100
    expect(() => twoSum3(nums, target)).toThrowError('unwanted result')
  })
})
