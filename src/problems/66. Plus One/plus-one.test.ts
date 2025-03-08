import { describe, expect, test } from '@jest/globals'
import { plusOne } from './plus-one'

describe('plusOne', () => {
  test('happy path: incrementing single-digit numbers', () => {
    expect(plusOne([1])).toEqual([2])
    expect(plusOne([9])).toEqual([1, 0])
  })

  test('happy path: incrementing multi-digit numbers', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
  })

  test('edge case: incrementing numbers with trailing zeros', () => {
    expect(plusOne([1, 0, 0])).toEqual([1, 0, 1])
  })

  // test('edge case: incrementing numbers with leading zeros', () => {
  //   expect(plusOne([0, 1, 2])).toEqual([0, 1, 3])
  // })

  // test('error case: input array is empty', () => {
  //   expect(() => plusOne([])).toThrowError()
  // })

  // test('error case: input array contains non-numeric values', () => {
  //   expect(() => plusOne([1, 'a', 3])).toThrowError()
  // })
})
