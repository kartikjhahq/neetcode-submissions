class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        // get the prefix for nums 
        let count = 0;
        this.prefix = [];

        for(let num of nums) {
            count += num;
            this.prefix.push(count);
        }      
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        
        let leftSum = left > 0 ? this.prefix[left-1] : 0;
        let rightSum = this.prefix[right]

        return rightSum - leftSum
        
    }
}
