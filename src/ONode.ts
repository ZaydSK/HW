
export default class ONode {
    // by hours
    private _waitBus : number; 
    private _waitTaxi: number;
    private _isHMK: boolean;
    private _isHome: boolean;
  
	constructor(waitBus: number, waitTaxi: number,isHMK: boolean, isHome: boolean) {
		this._waitBus = waitBus/60.0;
		this._waitTaxi = waitTaxi/60.0;
        this._isHMK = isHMK;
        this._isHome = isHome;
	}

    /**
     * Getter waitBus
     * @return {number}
     */
	public get waitBus(): number {
		return this._waitBus;
	}

    /**
     * Getter waitTaxi
     * @return {number}
     */
	public get waitTaxi(): number {
		return this._waitTaxi;
	}


    /**
     * Getter isHMK
     * @return {boolean}
     */
	public get isHMK(): boolean {
		return this._isHMK;
	}

    /**
     * Getter isHome
     * @return {boolean}
     */
	public get isHome(): boolean {
		return this._isHome;
	}


}