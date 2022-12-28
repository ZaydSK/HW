export default class ONode {
    constructor(waitBus, waitTaxi, isHMK, isHome) {
        this._waitBus = waitBus / 60.0;
        this._waitTaxi = waitTaxi / 60.0;
        this._isHMK = isHMK;
        this._isHome = isHome;
    }
    /**
     * Getter waitBus
     * @return {number}
     */
    get waitBus() {
        return this._waitBus;
    }
    /**
     * Getter waitTaxi
     * @return {number}
     */
    get waitTaxi() {
        return this._waitTaxi;
    }
    /**
     * Getter isHMK
     * @return {boolean}
     */
    get isHMK() {
        return this._isHMK;
    }
    /**
     * Getter isHome
     * @return {boolean}
     */
    get isHome() {
        return this._isHome;
    }
}
