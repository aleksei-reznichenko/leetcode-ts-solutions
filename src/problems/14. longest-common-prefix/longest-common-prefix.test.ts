import { longestCommonPrefix } from './longest-common-prefix'
import { describe, expect, it } from '@jest/globals'

describe('longestCommonPrefix', () => {
  it('should return an empty string for an empty array', () => {
    expect(longestCommonPrefix([])).toBe('')
  })

  it('should return the only string in the array', () => {
    expect(longestCommonPrefix(['hello'])).toBe('hello')
  })

  it('should return the common prefix for multiple strings', () => {
    expect(longestCommonPrefix(['hello', 'hello world', 'hello friend'])).toBe(
      'hello'
    )
  })

  it('should return an empty string for multiple strings with no common prefix', () => {
    expect(longestCommonPrefix(['hello', 'world', 'foo'])).toBe('')
  })

  it('should return the common prefix for multiple strings with different lengths', () => {
    expect(longestCommonPrefix(['hello', 'hello world', 'hello'])).toBe('hello')
  })

  it('should handle strings with special characters', () => {
    expect(
      longestCommonPrefix(['hello!', 'hello world!', 'hello friend!'])
    ).toBe('hello')
  })

  it('should handle strings with numbers', () => {
    expect(longestCommonPrefix(['hello1', 'hello2', 'hello3'])).toBe('hello')
  })
})
