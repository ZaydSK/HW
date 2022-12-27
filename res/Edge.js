export default class Edge {
    constructor(startNode, endNode, startNodeIdx, endNodeIdx, length, isDrivable, busesNames, busSpeed, taxiSpeed) {
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
    get startNode() {
        return this._startNode;
    }
    get endNode() {
        return this._endNode;
    }
    get length() {
        return this._length;
    }
    get isDrivable() {
        return this._isDrivable;
    }
    get busesNames() {
        return this._busesNames;
    }
    get busSpeed() {
        return this._busSpeed;
    }
    get taxiSpeed() {
        return this._taxiSpeed;
    }
    get startNodeIdx() {
        return this._startNodeIdx;
    }
    get endNodeIdx() {
        return this._endNodeIdx;
    }
}
