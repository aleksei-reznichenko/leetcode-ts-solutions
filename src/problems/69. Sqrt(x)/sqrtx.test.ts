import { describe, expect, test } from '@jest/globals'
import { mySqrt } from './sqrtx'

describe('mySqrt', () => {
  test('happy path: perfect squares', () => {
    expect(mySqrt(4)).toBe(2)
    expect(mySqrt(9)).toBe(3)
    expect(mySqrt(16)).toBe(4)
  })

  test('happy path: non-perfect squares', () => {
    expect(mySqrt(8)).toBe(2)
    expect(mySqrt(10)).toBe(3)
    expect(mySqrt(20)).toBe(4)
  })

  test('edge case: x = 0', () => {
    expect(mySqrt(0)).toBe(0)
  })

  test('edge case: x = 1', () => {
    expect(mySqrt(1)).toBe(1)
  })

  test('edge case: x = 2', () => {
    expect(mySqrt(2)).toBe(1)
  })

  test('large input', () => {
    expect(mySqrt(2147483647)).toBe(46340)
  })
})
