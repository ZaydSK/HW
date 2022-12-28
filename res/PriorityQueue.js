export default class PriorityQueue {
    constructor(heap) {
        this._heap = heap;
    }
    parent(index) {
        return Math.floor((index - 1) / 2);
    }
    left(index) {
        return 2 * index + 1;
    }
    right(index) {
        return 2 * index + 2;
    }
    hasLeft(index) {
        return this.left(index) < this._heap.length;
    }
    hasRight(index) {
        return this.right(index) < this._heap.length;
    }
    insert(item, priority1, priority3, priority2) {
        this._heap.push(item);
        let i = this._heap.length - 1;
        while (i > 0) {
            const p = this.parent(i);
            if (this._heap[p] < this._heap[i].priority1)
                break;
            if (this._heap[p].priority1 == this._heap[i].priority1) {
                if (this._heap[p].priority2 < this._heap[i].priority2) { }
            }
            const tmp = this._heap[i];
            this._heap[i] = this._heap[p];
            this._heap[p] = tmp;
            i = p;
        }
    }
}
export var priority;
(function (priority) {
    priority[priority["cost"] = 1] = "cost";
    priority[priority["effort"] = 2] = "effort";
    priority[priority["time"] = 3] = "time";
})(priority || (priority = {}));
