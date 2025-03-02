import { describe, expect, test } from '@jest/globals'
import { ListNode, mergeTwoLists } from './merge-two-sorted-lists'

describe('mergeTwoLists', () => {
  test('empty lists', () => {
    expect(mergeTwoLists(null, null)).toBeNull()
  })

  test('one empty list', () => {
    const list1 = new ListNode(1)
    expect(mergeTwoLists(list1, null)).toEqual(list1)
  })

  test('both lists have one node', () => {
    const list1 = new ListNode(1)
    const list2 = new ListNode(2)
    const expected = new ListNode(1, new ListNode(2))
    expect(mergeTwoLists(list1, list2)).toEqual(expected)
  })

  test('both lists have multiple nodes', () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5)))
    const list2 = new ListNode(2, new ListNode(4, new ListNode(6)))
    const expected = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    )
    expect(mergeTwoLists(list1, list2)).toEqual(expected)
  })

  test('lists with duplicate values', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(2)))
    const list2 = new ListNode(2, new ListNode(3, new ListNode(3)))
    const expected = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3))))
      )
    )
    expect(mergeTwoLists(list1, list2)).toEqual(expected)
  })

  test('lists with negative values', () => {
    const list1 = new ListNode(-1, new ListNode(0, new ListNode(1)))
    const list2 = new ListNode(-2, new ListNode(-1, new ListNode(0)))
    const expected = new ListNode(
      -2,
      new ListNode(
        -1,
        new ListNode(-1, new ListNode(0, new ListNode(0, new ListNode(1))))
      )
    )
    expect(mergeTwoLists(list1, list2)).toEqual(expected)
  })
})
