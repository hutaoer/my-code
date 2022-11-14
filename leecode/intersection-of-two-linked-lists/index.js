/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 使用set存储
var getIntersectionNode = function (headA, headB) {
  var s = new Set();
  while (headA != null) {
    s.add(headA);
    headA = headA.next;
  }
  while (headB != null) {
    if (s.has(headB)) {
      return headB;
    } else {
      headB = headB.next;
    }
  }
  return null;
};

// 双指针法
var getIntersectionNode1 = function (headA, headB) {
  let a = headA,
    b = headB;
  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};
