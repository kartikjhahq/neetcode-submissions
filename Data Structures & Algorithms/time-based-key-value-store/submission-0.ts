class TimeMap {
    private keyStore: Map<string, [string, number][]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key)!.push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number) {
        let result = "";

        let history = this.keyStore.get(key);
        if (!history) return "";

        let left = 0;
        let right = history.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            let [midValue, midTimestamp] = history[mid];

            if (midTimestamp === timestamp) {
                return midValue;
            } else if (midTimestamp < timestamp) {
                result = midValue;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
