/**
    将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */
var mergeTwoLists = function(list1, list2) {
    // const prehead = new ListNode(-1);
    //
    // let prev = prehead;
    // while (l1 != null && l2 != null) {
    //     if (l1.val <= l2.val) {
    //         prev.next = l1;
    //         l1 = l1.next;
    //     } else {
    //         prev.next = l2;
    //         l2 = l2.next;
    //     }
    //     prev = prev.next;
    // }
    //
    // // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    // prev.next = l1 === null ? l2 : l1;
    //
    // return prehead.next;

    if (!list1) return list2
    if (!list2) return list1

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};
