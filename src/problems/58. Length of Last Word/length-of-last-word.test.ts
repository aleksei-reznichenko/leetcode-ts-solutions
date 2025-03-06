import { describe, expect, test } from '@jest/globals'
import { lengthOfLastWord } from './length-of-last-word'

describe('lengthOfLastWord', () => {
  test('empty string', () => {
    expect(lengthOfLastWord('')).toBe(0)
  })

  test('single word', () => {
    expect(lengthOfLastWord('hello')).toBe(5)
  })

  test('multiple words', () => {
    expect(lengthOfLastWord('hello world')).toBe(5)
  })

  test('leading and trailing spaces', () => {
    expect(lengthOfLastWord('   hello world   ')).toBe(5)
  })

  test('single space between words', () => {
    expect(lengthOfLastWord('hello world')).toBe(5)
  })

  test('multiple spaces between words', () => {
    expect(lengthOfLastWord('hello   world')).toBe(5)
  })

  test('single character word', () => {
    expect(lengthOfLastWord('a')).toBe(1)
  })

  test('word with spaces at the end', () => {
    expect(lengthOfLastWord('hello  ')).toBe(5)
  })
})
