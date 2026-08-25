/**
 * 20. 相交链表
 *
 * 暴力思路：对链表 A 的每个节点，遍历链表 B 并比较节点引用是否相同。
 * 时间复杂度 O(m * n)，空间复杂度 O(1)。
 *
 * 最优思路：两个指针分别遍历 A + B 和 B + A。交换起点后，两者走过的总路程相同，
 * 最终会在相交节点或 null 处相遇。
 * 时间复杂度 O(m + n)，空间复杂度 O(1)。
 */

export class ListNode {
  constructor(
    public val: number,
    public next: ListNode | null = null,
  ) {}
}

export function getIntersectionNodeBruteForce(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  for (let nodeA = headA; nodeA !== null; nodeA = nodeA.next) {
    for (let nodeB = headB; nodeB !== null; nodeB = nodeB.next) {
      if (nodeA === nodeB) return nodeA;
    }
  }
  return null;
}

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA === null ? headB : pointerA.next;
    pointerB = pointerB === null ? headA : pointerB.next;
  }
  return pointerA;
}
