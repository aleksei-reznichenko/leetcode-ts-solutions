import { describe, expect, test } from '@jest/globals'
import { isPalindrome2 } from './palindrome-number-2'

describe('isPalindrome2', () => {
  test('negative numbers', () => {
    expect(isPalindrome2(-121)).toBe(false)
  })

  test('single digit numbers', () => {
    expect(isPalindrome2(5)).toBe(true)
  })

  test('palindrome numbers with even number of digits', () => {
    expect(isPalindrome2(1221)).toBe(true)
  })

  test('palindrome numbers with odd number of digits', () => {
    expect(isPalindrome2(12321)).toBe(true)
  })

  test('non-palindrome numbers', () => {
    expect(isPalindrome2(123456)).toBe(false)
  })

  test('zero', () => {
    expect(isPalindrome2(0)).toBe(true)
  })

  test('large numbers', () => {
    expect(isPalindrome2(345678909876543)).toBe(true)
  })
})
