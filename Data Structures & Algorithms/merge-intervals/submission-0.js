class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let start = 0;
        let end = 1;
        intervals.sort((a, b) => a[start] - b[start]);
        let previous = intervals[start];
        let result = [previous];

        for (let current of intervals) {
            if (current[start] <= previous[end]) {
                // overlap
                previous[end] = Math.max(previous[end], current[end]);
            } else {
                // no overlap
                result.push(current);
                previous = current;
            }
        }

        return result;
    }
}
