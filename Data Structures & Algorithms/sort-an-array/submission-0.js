class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if(nums.length <= 1) {
            return nums;
        }

        let mid = Math.floor(nums.length/2);
        let left = this.sortArray(nums.slice(0, mid));
        let right = this.sortArray(nums.slice(mid));

        return this.merge(left, right)
    }

    merge(nums1, nums2) {
        let result = [];

        let i = 0;
        let j = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                result.push(nums1[i]);
                i++;
            } else {
                result.push(nums2[j]);
                j++;
            }
        }

        while (i < nums1.length) {
            result.push(nums1[i]);
            i++;
        }

        while (j < nums2.length) {
            result.push(nums2[j]);
            j++;
        }

        return result;
    }
}
