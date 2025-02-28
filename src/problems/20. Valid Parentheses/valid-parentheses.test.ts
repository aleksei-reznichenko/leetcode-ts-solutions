import { describe, expect, test } from '@jest/globals'
import { isValid } from './valid-parentheses'

describe('isValid', () => {
  test('happy path: valid parentheses', () => {
    expect(isValid('()')).toBe(true)
    expect(isValid('[]')).toBe(true)
    expect(isValid('{}')).toBe(true)
    expect(isValid('({[]})')).toBe(true)
  })

  test('edge case: single type of parentheses', () => {
    expect(isValid('((()))')).toBe(true)
    expect(isValid('[]{}[]')).toBe(true)
  })

  test('edge case: multiple types of parentheses', () => {
    expect(isValid('({[]})')).toBe(true)
    expect(isValid('[({})]')).toBe(true)
  })

  test('error case: mismatched parentheses', () => {
    expect(isValid('({)}')).toBe(false)
    expect(isValid('[{]}')).toBe(false)
    expect(isValid('(]')).toBe(false)
    expect(isValid('(')).toBe(false)
  })

  test('error case: empty string', () => {
    expect(isValid('')).toBe(true)
  })

  // test('error case: null or undefined input', () => {
  //   expect(() => isValid(null)).toThrowError()
  //   expect(() => isValid(undefined)).toThrowError()
  // })
})
