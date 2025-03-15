import { describe, expect, test } from '@jest/globals'
import { addBinary } from './add-binary'

describe('addBinary', () => {
  test('happy path: no carry', () => {
    expect(addBinary('10', '1')).toBe('11')
    expect(addBinary('101', '10')).toBe('111')
  })

  test('happy path: with carry', () => {
    expect(addBinary('11', '1')).toBe('100')
    expect(addBinary('1011', '101')).toBe('10000')
  })

  test('edge case: different lengths', () => {
    expect(addBinary('10', '100')).toBe('110')
    expect(addBinary('101', '1000')).toBe('1101')
  })
  test('edge case: different lengths', () => {
    expect(addBinary('0', '0')).toBe('0')
  })
})
