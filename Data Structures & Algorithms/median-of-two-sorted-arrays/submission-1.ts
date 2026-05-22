class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]) {
        // nums1 should always be smaller than nums2
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        let leftLength = nums1.length;
        let rightLength = nums2.length;
        let left = 0;
        let right = leftLength; // smaller of the two

        // binary search
        while (left <= right) {
            let partX = Math.floor((left + right) / 2);
            let partY = Math.floor((leftLength + rightLength + 1) / 2) - partX;

            let l1 = partX === 0 ? -Infinity : nums1[partX - 1];
            let l2 = partY === 0 ? -Infinity : nums2[partY - 1];
            let r1 = partX === leftLength ? Infinity : nums1[partX];
            let r2 = partY === rightLength ? Infinity : nums2[partY];

            if (l1 <= r2 && l2 <= r1) {
                if ((leftLength + rightLength) % 2 === 1) {
                    return Math.max(l1, l2);
                } else {
                    return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
                }
            } else if (l1 > r2) {
                right = partX - 1;
            } else {
                left = partX + 1;
            }
        }

        return 0.0;
    }
}
