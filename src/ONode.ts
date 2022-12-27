
export default class ONode {
    // by minutes
    private _waitBus : number; 
    private _waitTaxi: number;
  
	constructor($waitBus: number, $waitTaxi: number) {
		this._waitBus = $waitBus;
		this._waitTaxi = $waitTaxi;
	}

	public get waitBus(): number {
		return this._waitBus;
	}

    public get waitTaxi(): number {
        return this._waitTaxi;
    }

}