import { describe, expect, test } from '@jest/globals'
import { removeDuplicates } from './remove-duplicates-from-sorted-array'

describe('removeDuplicates', () => {
  test('happy path: array with duplicates', () => {
    const nums = [1, 1, 2, 2, 3, 3, 4]
    const expected = 4
    expect(removeDuplicates(nums)).toBe(expected)
    expect(nums.slice(0, expected)).toEqual([1, 2, 3, 4])
  })

  test('happy path: array without duplicates', () => {
    const nums = [1, 2, 3, 4, 5]
    const expected = 5
    expect(removeDuplicates(nums)).toBe(expected)
    expect(nums).toEqual([1, 2, 3, 4, 5])
  })

  test('edge case: empty array', () => {
    const nums: number[] = []
    const expected = 0
    expect(removeDuplicates(nums)).toBe(expected)
    expect(nums).toEqual([])
  })

  test('edge case: array with single element', () => {
    const nums = [1]
    const expected = 1
    expect(removeDuplicates(nums)).toBe(expected)
    expect(nums).toEqual([1])
  })

  test('edge case: array with all duplicates', () => {
    const nums = [1, 1, 1, 1, 1]
    const expected = 1
    expect(removeDuplicates(nums)).toBe(expected)
    expect(nums.slice(0, expected)).toEqual([1])
  })
})
