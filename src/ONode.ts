export default class ONode {
    // by minutes
    waitBus : number; 
    waitTaxi : number;
    
    constructor(waitBus: number, waitTaxi: number){
        this.waitBus = waitBus
        this.waitTaxi = waitTaxi
    }

    getWaitBus(){
        return this.waitBus
    }

    getWaitTaxi(){
        return this.waitTaxi
    }
}