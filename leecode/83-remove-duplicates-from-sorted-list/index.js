/**
 * 删除有序链表中的重复元素，从head开始
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var cur = head
  while(cur.next) {
    if(cur.val == cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next;
    }
  }
};

// 自己写的一版，忘记return了
var deleteDuplicatesV1 = function(head) {
  var node = head
    while(node.next && node.val) {
        if(node.val == node.next.val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return node
}