class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]) {
        let max = -1;

        for(let i = arr.length-1; i >= 0; i--) {
            let currNum = arr[i];

            arr[i] = max;

            max = Math.max(max, currNum);
        }

        return arr;
    }
}
