class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * @param list1 the first linked list
 * @param list2 the second linked list
 * @returns a new linked list that is the merged result of the two input lists
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let listA: ListNode | null = list1
  let listB: ListNode | null = list2
  const listHead = new ListNode()
  let listAccum = listHead

  while (listA && listB) {
    if (listA.val < listB.val) {
      listAccum.next = listA
      listA = listA.next
    } else {
      listAccum.next = listB
      listB = listB.next
    }
    listAccum = listAccum.next
  }

  listAccum.next = listA ?? listB

  return listHead.next
}

export { ListNode, mergeTwoLists }
