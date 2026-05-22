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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {

        // middle is left after the loop ends;
        let left = head;
        let right = head;

        while(right && right.next) {
            left = left.next;
            right = right.next.next;
        }

        // break the list 
        let rightList = left.next;
        left.next = null;

        // reverse the second half
        let prev = null;

        while(rightList) {
            let temp = rightList.next;
            rightList.next = prev;
            prev = rightList;
            rightList = temp;
        }

        // join the two halves into final result
        let list1 = head;
        let list2 = prev;

        while(list2) {
            let temp = list1.next;
            list1.next = list2;
            list1 = list2;
            list2 = temp;
        }

    }
}
