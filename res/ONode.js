export default class ONode {
    constructor(waitBus, waitTaxi) {
        this.waitBus = waitBus;
        this.waitTaxi = waitTaxi;
    }
    getWaitBus() {
        return this.waitBus;
    }
    getWaitTaxi() {
        return this.waitTaxi;
    }
}
