export default class PriorityQueue<T> {
    // heap: T[];

    // parent(index: number): number {
    //     return Math.floor((index - 1) / 2);
    // }
    // left(index: number): number {
    //     return 2 * index + 1;
    // }
    // right(index: number): number {
    //     return 2 * index + 2;
    // }
    // hasLeft(index: number): boolean {
    //     return this.left(index) < this.heap.length;
    // }
    // hasRight(index: number): boolean {
    //     return this.right(index) < this.heap.length;
    // }

    // insert(item: T, prio: Function) {
    //     this.heap.push({ key: prio, value: item });
    //     let i = heap.length - 1;
    //     while (i > 0) {
    //         const p = parent(i);
    //         if (heap[p].key < heap[i].key) break;
    //         const tmp = heap[i];
    //         heap[i] = heap[p];
    //         heap[p] = tmp;
    //         i = p;

    //     }
    // }
}
