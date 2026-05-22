class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        // binary search
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[left] === target) {
                return left;
            }

            if (nums[mid] === target) {
                return mid;
            }

            if (nums[right] === target) {
                return right;
            }


            if (nums[left] <= nums[mid]) {
                // check if left half is sorted

                if (nums[left] <= target && target < nums[mid]) {
                    // check if target is in left half
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            if (nums[right] >= nums[mid]) {
                if (nums[right] >= target && target >= nums[mid]) {
                    // check if right half is sorted
                    left = mid + 1;
                } else {
                    // check if target is in right half
                    right = mid - 1;
                }
            }
        }
    
        return -1;
    }
}
