import { describe, expect, test } from '@jest/globals'
import { searchInsert } from './search-insert-position'

describe('searchInsert', () => {
  test('happy path: target found in array', () => {
    const nums = [1, 3, 5, 6]
    const target = 5
    expect(searchInsert(nums, target)).toBe(2)
  })

  test('happy path: target not found in array, return correct index', () => {
    const nums = [1, 3, 5, 6]
    const target = 2
    expect(searchInsert(nums, target)).toBe(1)
  })

  test('edge case: empty array', () => {
    const nums: number[] = []
    const target = 5
    expect(searchInsert(nums, target)).toBe(0)
  })

  test('edge case: array with single element', () => {
    const nums = [5]
    const target = 5
    expect(searchInsert(nums, target)).toBe(0)
  })

  test('edge case: target is less than first element', () => {
    const nums = [5, 6, 7]
    const target = 1
    expect(searchInsert(nums, target)).toBe(0)
  })

  test('edge case: target is greater than last element', () => {
    const nums = [1, 2, 3]
    const target = 4
    expect(searchInsert(nums, target)).toBe(3)
  })
})
