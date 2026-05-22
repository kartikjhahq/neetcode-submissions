/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists === null || lists.length === 0) return null;

        return this.mergeListsHelper(lists, 0, lists.length - 1);
    }

    mergeListsHelper(lists, start, end) {
        if (start === end) {
            return lists[start];
        }
        if (start + 1 === end) {
            return this.merge2SortedLists(lists[start], lists[end]);
        }

        let mid = Math.floor((start + end) / 2);

        let left = this.mergeListsHelper(lists, start, mid);
        let right = this.mergeListsHelper(lists, mid + 1, end);

        return this.merge2SortedLists(left, right)
    }

    merge2SortedLists(list1, list2) {
        let dummy = new ListNode(0);
        let curr = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        if (list1) {
            curr.next = list1;
        } else {
            curr.next = list2;
        }

        return dummy.next;
    }
}
