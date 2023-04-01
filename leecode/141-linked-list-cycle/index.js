/**
 * Definition for singly-linked list.
 * 通过双游标
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针法
 * 快指针一次前进两个节点，慢指针一次前进一个节点。
 * 如果快慢指针相等了，则说明存在环
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let f = head;
    let s = head;
    while(f != null && f.next != null) {
        s = s.next;
        f = f.next.next;
        if(s == f) return true
    }
    return false
};

// 遍历整个链表，如果一个元素出现两次，则说明有环
var hasCycleV1 = function(head) {
  const visited = []
  while(head != null) {
    if(visited.indexOf(head) >= 0) return true
    visited.push(head)
    head = head.next
  }
  return false
};