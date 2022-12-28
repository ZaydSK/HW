import { Move } from "./Move";
export default class PriorityQueue<Move> {

    private _heap: Move[];

	constructor(heap: Move[]) {
        
		this._heap = heap;
	}

    parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }
    left(index: number): number {
        return 2 * index + 1;
    }
    right(index: number): number {
        return 2 * index + 2;
    }
    hasLeft(index: number): boolean {
        return this.left(index) < this._heap.length;
    }
    hasRight(index: number): boolean {
        return this.right(index) < this._heap.length;
    }

    insert(item: Move, priority1: priority,priority3: priority,priority2: priority) {
        this._heap.push(item);
        let i = this._heap.length - 1;
        while (i > 0) {
            const p = this.parent(i);
            if (this._heap[p] < this._heap[i].priority1) break;
            if(this._heap[p].priority1 == this._heap[i].priority1){
                if(this._heap[p].priority2 < this._heap[i].priority2){}
            }
            const tmp = this._heap[i];
            this._heap[i] = this._heap[p];
            this._heap[p] = tmp;
            i = p;

        }
    }
    
}

export enum priority  {
    cost = 1,
    effort = 2,
    time = 3
}
