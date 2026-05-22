class HashSetListNode {
    constructor(key, next) {
        this.key = key;
        this.next = next;
    }
}

class MyHashSet {
    constructor() {
        this.SIZE = 10000;
        this.buckets = Array.from({ length: this.SIZE }, () => new HashSetListNode(-1));
    }

    hash(key) {
        return key % this.SIZE;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let index = this.hash(key);
        let curr = this.buckets[index];

        while (curr.next) {
            if (curr.next.key === key) {
                return;
            }
            curr = curr.next;
        }
        curr.next = new HashSetListNode(key);
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

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let index = this.hash(key);
        let curr = this.buckets[index];

        while (curr.next) {
            if (curr.next.key === key) {
                return true;
            }
            curr = curr.next;
        }

        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
