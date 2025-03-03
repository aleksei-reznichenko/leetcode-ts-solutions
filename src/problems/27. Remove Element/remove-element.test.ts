import { describe, expect, test } from '@jest/globals'
import { removeElement } from './remove-element'

describe('removeElement', () => {
  test('happy path: array with elements to be removed', () => {
    const nums = [3, 2, 2, 3]
    const val = 3
    const expected = 2
    expect(removeElement(nums, val)).toBe(expected)
    expect(nums.slice(0, expected)).toEqual([2, 2])
  })

  test('happy path: array without elements to be removed', () => {
    const nums = [1, 2, 3, 4]
    const val = 5
    const expected = 4
    expect(removeElement(nums, val)).toBe(expected)
    expect(nums).toEqual([1, 2, 3, 4])
  })

  test('edge case: empty array', () => {
    const nums: number[] = []
    const val = 1
    const expected = 0
    expect(removeElement(nums, val)).toBe(expected)
    expect(nums).toEqual([])
  })

  test('edge case: array with single element', () => {
    const nums = [1]
    const val = 1
    const expected = 0
    expect(removeElement(nums, val)).toBe(expected)
    expect(nums).toEqual([1])
  })

  test('edge case: array with all elements to be removed', () => {
    const nums = [1, 1, 1, 1]
    const val = 1
    const expected = 0
    expect(removeElement(nums, val)).toBe(expected)
    expect(nums).toEqual([1, 1, 1, 1])
  })

  test('edge case: array with duplicate elements to be removed', () => {
    const nums = [1, 2, 2, 3, 3, 3]
    const val = 2
    const expected = 4
    expect(removeElement(nums, val)).toBe(expected)
    expect(nums.slice(0, expected)).toEqual([1, 3, 3, 3])
  })
})
