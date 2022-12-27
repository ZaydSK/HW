import Edge from "./Edge.js";
export default class Logic{
    
    /**
     * walkingTime
     */
    public static walkingTime(edge: Edge): number {
        return edge.length/5.5;
    }

    /**
     * busTime
     */
    public static busTime(edge: Edge): number {
        return edge.startNode.waitBus + edge.length*1.0/edge.busSpeed!
    }

    /**
     * taxiTime
     */
    public static taxiTime(edge: Edge): number {
        return edge.startNode.waitTaxi + edge.length*1.0/edge.taxiSpeed!
    }

    /**
     * walkingEffort
     */
    public static walkingEffort(edge: Edge): number {
        return -10*edge.length
    }

    /**
     * busEffort
     */
    public static busEffort(edge: Edge): number {
        return -5*edge.length
    }

    /**
     * taxiEffort
     */
    public static taxiEffort(edge: Edge): number {
        return 5*edge.length
    }

    /**
     * walkingCost
     */
    public static walkingCost(edge: Edge): number {
        return 0
    }


    /**
     * busCost
     */
     public static busCost(edge: Edge): number {
        return 400
    }

    /**
     * taxiCost
     */
    public static taxiCost(edge: Edge): number {
        return 1000*edge.length
    }
}