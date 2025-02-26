import { describe, expect, test } from 'vitest'
import { isPalindrome1 } from './palindrome-number-1'

describe('isPalindrome1', () => {
  test('negative numbers', () => {
    expect(isPalindrome1(-121)).toBe(false)
  })

  test('single digit numbers', () => {
    expect(isPalindrome1(5)).toBe(true)
  })

  test('palindrome numbers with even number of digits', () => {
    expect(isPalindrome1(1221)).toBe(true)
  })

  test('palindrome numbers with odd number of digits', () => {
    expect(isPalindrome1(12321)).toBe(true)
  })

  test('non-palindrome numbers', () => {
    expect(isPalindrome1(123456)).toBe(false)
  })
})
