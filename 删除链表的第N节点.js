/**
 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。


 1-2-3-4-5
 删除 4
 1-2-3-5


 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var removeNthFromEnd = function(head, n) {
    let forward = head,
        cur = head,
        prev = new ListNode(-1)

    prev.next = cur

    while (n--) {
        forward = forward.next
    }
    // 如果首次n等于链表长度 则直接返回第二个节点
    if (!forward) return head.next
    // 否则prev cur forward三个一起往后移
    while (forward) {
        forward = forward.next
        cur = cur.next
        prev = prev.next
    }
    prev.next = cur.next
    return head
};


