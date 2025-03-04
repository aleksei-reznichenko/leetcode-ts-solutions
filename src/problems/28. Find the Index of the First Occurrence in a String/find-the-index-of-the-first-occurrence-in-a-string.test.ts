import { describe, expect, test } from '@jest/globals'
import { strStr } from './find-the-index-of-the-first-occurrence-in-a-string'

describe('strStr', () => {
  test('happy path: needle found in haystack', () => {
    expect(strStr('hello world', 'world')).toBe(6)
  })

  test('happy path: needle found in haystack', () => {
    expect(strStr('mississippi', 'issip')).toBe(4)
  })

  test('happy path: needle found in haystack', () => {
    expect(strStr('hello', 'll')).toBe(2)
  })

  test('edge case: needle is an empty string', () => {
    expect(strStr('hello world', '')).toBe(0)
  })

  test('edge case: haystack is an empty string', () => {
    expect(strStr('', 'world')).toBe(-1)
  })

  test('edge case: needle is longer than haystack', () => {
    expect(strStr('hello', 'world')).toBe(-1)
  })

  test('error case: needle is not found in haystack', () => {
    expect(strStr('hello world', 'foo')).toBe(-1)
  })
})
