class ListNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class MyHashMap {
    constructor() {
        this.SIZE = 769;
        this.buckets = Array.from({ length: this.SIZE }, () => new ListNode(-1, -1));
    }

    hash(key) {
        return key % this.SIZE;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let index = this.hash(key);
        let curr = this.buckets[index];

        while (curr.next) {
            if (curr.next.key === key) {
                curr.next.value = value;
                return
            }
            curr = curr.next;
        }

        curr.next = new ListNode(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let index = this.hash(key);
        let curr = this.buckets[index];

        while (curr.next) {
            if (curr.next.key === key) {
                return curr.next.value;
            }
            curr = curr.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.hash(key);
        let curr = this.buckets[index];

        while (curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next;
                return
            }
            curr = curr.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
