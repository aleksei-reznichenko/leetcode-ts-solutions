import { describe, expect, test } from 'vitest'
import { twoSum1 } from './two-sum-1'
import { twoSum2 } from './two-sum-2'
import { twoSum3 } from './two-sum-3'

describe('solution #1', () => {
  test('1', () => {
    const [nums, target, result] = [[2, 7, 11, 15], 9, [0, 1]]
    expect(twoSum1(nums, target)).toEqual(result)
  })

  test('2', () => {
    const [nums, target, result] = [[3, 2, 4], 6, [1, 2]]
    expect(twoSum1(nums, target)).toEqual(result)
  })

  test('3', () => {
    const [nums, target, result] = [[3, 3], 6, [0, 1]]
    expect(twoSum1(nums, target)).toEqual(result)
  })

  test('4', () => {
    const [nums, target, result] = [[-1, -2, -3, -4, -5], -8, [2, 4]]
    expect(twoSum1(nums, target)).toEqual(result)
  })
})

describe('solution #2', () => {
  test('1', () => {
    const [nums, target, result] = [[2, 7, 11, 15], 9, [0, 1]]
    expect(twoSum2(nums, target)).toEqual(result)
  })

  test('2', () => {
    const [nums, target, result] = [[3, 2, 4], 6, [1, 2]]
    expect(twoSum2(nums, target)).toEqual(result)
  })

  test('3', () => {
    const [nums, target, result] = [[3, 3], 6, [0, 1]]
    expect(twoSum2(nums, target)).toEqual(result)
  })

  test('4', () => {
    const [nums, target, result] = [[-1, -2, -3, -4, -5], -8, [2, 4]]
    expect(twoSum2(nums, target)).toEqual(result)
  })
})

describe('solution #3', () => {
  test('1', () => {
    const [nums, target, result] = [[2, 7, 11, 15], 9, [0, 1]]
    expect(twoSum3(nums, target)).toEqual(result)
  })

  test('2', () => {
    const [nums, target, result] = [[3, 2, 4], 6, [1, 2]]
    expect(twoSum3(nums, target)).toEqual(result)
  })

  test('3', () => {
    const [nums, target, result] = [[3, 3], 6, [0, 1]]
    expect(twoSum3(nums, target)).toEqual(result)
  })

  test('4', () => {
    const [nums, target, result] = [[-1, -2, -3, -4, -5], -8, [2, 4]]
    expect(twoSum3(nums, target)).toEqual(result)
  })
})
