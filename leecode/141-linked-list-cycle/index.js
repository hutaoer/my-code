/**
<<<<<<< HEAD
 * Definition for singly-linked list.
 * 通过双游标
=======
 * 给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
>>>>>>> a221da3165e89c606ac5871a933d87f1a03a40d0
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
<<<<<<< HEAD
 * 快慢指针法
 * 快指针一次前进两个节点，慢指针一次前进一个节点。
 * 如果快慢指针相等了，则说明存在环
=======
>>>>>>> a221da3165e89c606ac5871a933d87f1a03a40d0
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
<<<<<<< HEAD
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
=======
  let p1 = head
  let p2 = head
  // p1为慢指针
  // p2为快指针
  // p1 === p2 代表相遇
  // 否则循环结束
  while(p1 && p2 && p2.next) {
      p1 = p1.next
      p2 = p2.next.next
      if(p1 === p2) {
          return true
      }
>>>>>>> a221da3165e89c606ac5871a933d87f1a03a40d0
  }
  return false
};