export default class ONode {
    constructor($waitBus, $waitTaxi) {
        this._waitBus = $waitBus;
        this._waitTaxi = $waitTaxi;
    }
    get waitBus() {
        return this._waitBus;
    }
    get waitTaxi() {
        return this._waitTaxi;
    }
}
