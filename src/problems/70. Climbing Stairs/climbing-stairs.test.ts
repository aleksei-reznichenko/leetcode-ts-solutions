import { describe, expect, test } from '@jest/globals'
import { climbStairs } from './climbing-stairs'

describe('climbStairs', () => {
  test('happy path: small inputs', () => {
    expect(climbStairs(1)).toBe(1)
    expect(climbStairs(2)).toBe(2)
    expect(climbStairs(3)).toBe(3)
  })

  test('happy path: larger inputs', () => {
    expect(climbStairs(4)).toBe(5)
    expect(climbStairs(5)).toBe(8)
    expect(climbStairs(6)).toBe(13)
  })
})
