import { describe, expect, test } from '@jest/globals'
import { romanToInt } from './roman-to-integer-1'

describe('romanToInt', () => {
  test('happy path: valid Roman numerals', () => {
    expect(romanToInt('III')).toBe(3)
    expect(romanToInt('LVIII')).toBe(58)
    expect(romanToInt('MCMXCIV')).toBe(1994)
  })

  test('edge cases: single digit Roman numerals', () => {
    expect(romanToInt('I')).toBe(1)
    expect(romanToInt('V')).toBe(5)
    expect(romanToInt('X')).toBe(10)
  })

  test('edge cases: Roman numerals with subtractive notation', () => {
    expect(romanToInt('IV')).toBe(4)
    expect(romanToInt('IX')).toBe(9)
    expect(romanToInt('XL')).toBe(40)
  })

  test('error cases: invalid input (non-Roman numerals)', () => {
    expect(() => romanToInt('abc')).toThrowError()
    expect(() => romanToInt('123')).toThrowError()
  })

  test('error cases: empty string input', () => {
    expect(() => romanToInt('')).toThrowError()
  })
})
