/**
 * 反转链表
 * https://leetcode.cn/problems/reverse-linked-list/
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // prev 节点的前一个节点
  let prev = null;
  // 当前节点
  let current = head;
  // 判断不能为null
  while(current) {
    // 先把 next 暂存起来。这一步很关键。
    const next = current.next;
    // 更改方向为 prev
    current.next = prev;
    // 挪动prev 指针到当前节点
    prev = current;
    // 当前节点挪动到下个节点
    current = next;
  }
  return prev;
};

// 递归解法
// 大问题拆成两个子问题
// 子问题和求解方式和大问题一样
// 存在最小的子问题

var reverseList = function(head) {
  if(head === null || head.next === null) {
    return head
  }
  const p = reverseList(head.next)
  // 反转
  head.next.next = head
  head.next = null
  return p
};
