/**
     给你一个链表数组，每个链表都已经按升序排列。

     请你将所有链表合并到一个升序链表中，返回合并后的链表。


     输入：lists = [[1,4,5],[1,3,4],[2,6]]
     输出：[1,1,2,3,4,4,5,6]
     解释：链表数组如下：
     [
     1->4->5,
     1->3->4,
     2->6
     ]
     将它们合并到一个有序链表中得到。
     1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeKLists = function(lists) {

    // 首先先回一下怎么合并两个有序链表
    const mergeTwo = (head1, head2) => {
        // 这里dummyHead是初始状态，这么写的原因是记录这个初始状态，以便返回dummy.next就是最终结果
        let dummyHead = new ListNode(0)
        let current = dummyHead
        while (head1 && head2) {
            if (head1.val < head2.val) {
                current.next = head1
                head1 = head1.next
            } else {
                current.next = head2
                head2 = head2.next
            }
            // 知道下一个ListNode之后...
            current = current.next
        }
        // 缝合剩下的list1或者list2
        current.next = head1 === null? head2 : head1
        return dummyHead.next // see?
    }

    // 现在知道怎么比较两个，现在就用 两两合并 的方式合并所有 ListNode
    const mergeAll = (list) =>{
        if (list.length < 2) {
            return list[0] || null // in case of empty list
        }
        let res = []
        for (let i=0;i<list.length;i+=2) {
            res.push(mergeTwo(list[i], list[i+1]))
        }
        return mergeAll(res)
    }

    return mergeAll(lists)
}

const test = [[1,4,5],[1,3,4],[2,6]]
console.log(mergeKLists(test))
