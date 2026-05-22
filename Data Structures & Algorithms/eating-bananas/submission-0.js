class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function k_works(k) {
            let hours = 0;

            for (let pile of piles) {
                hours += Math.ceil(pile / k);
            }

            return hours <= h;
        }

        let left = 1;
        let right = Math.max(...piles);

        while (left < right) {
            let k = Math.floor((left + right) / 2);
            if (k_works(k)) {
                right = k;
            } else {
                left = k + 1;
            }
        }

        return right
    }
}
