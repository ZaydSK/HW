import ONode from "./ONode";
export default class Edge {
    private _startNode: ONode;
    private _endNode: ONode;
    private _startNodeIdx: number;
    private _endNodeIdx: number;
    private _length: number;
    private _isDrivable: boolean;
    private _busesNames: Array<string> | null;
    private _busSpeed: number | null;
    private _taxiSpeed: number | null;

    constructor(
        startNode: ONode,
        endNode: ONode,
        startNodeIdx: number,
        endNodeIdx: number,
        length: number,
        isDrivable: boolean,
        busesNames: Array<string> | null,
        busSpeed: number | null,
        taxiSpeed: number | null
    ) {
        this._startNode = startNode;
        this._endNode = endNode;
        this._startNodeIdx = startNodeIdx;
        this._endNodeIdx = endNodeIdx;
        this._length = length;
        this._isDrivable = isDrivable;
        this._busesNames = busesNames;
        this._busSpeed = busSpeed;
        this._taxiSpeed = taxiSpeed;
    }

    public get startNode(): ONode {
        return this._startNode;
    }

    public get endNode(): ONode {
        return this._endNode;
    }

    public get length(): number {
        return this._length;
    }

    public get isDrivable(): boolean {
        return this._isDrivable;
    }

    public get busesNames(): Array<string> | null{
        return this._busesNames;
    }

    public get busSpeed(): number | null {
        return this._busSpeed;
    }

    public get taxiSpeed(): number | null {
        return this._taxiSpeed;
    }
    public get startNodeIdx(): number {
        return this._startNodeIdx;
    }
    public get endNodeIdx(): number {
        return this._endNodeIdx;
    }
}
