export default class Logic {
    /**
     * walkingTime
     */
    static walkingTime(edge) {
        return edge.length / 5.5;
    }
    /**
     * busTime
     */
    static busTime(edge) {
        return edge.startNode.waitBus + edge.length * 1.0 / edge.busSpeed;
    }
    /**
     * taxiTime
     */
    static taxiTime(edge) {
        return edge.startNode.waitTaxi + edge.length * 1.0 / edge.taxiSpeed;
    }
    /**
     * walkingEffort
     */
    static walkingEffort(edge) {
        return -10 * edge.length;
    }
    /**
     * busEffort
     */
    static busEffort(edge) {
        return -5 * edge.length;
    }
    /**
     * taxiEffort
     */
    static taxiEffort(edge) {
        return 5 * edge.length;
    }
    /**
     * walkingCost
     */
    static walkingCost(edge) {
        return 0;
    }
    /**
     * busCost
     */
    static busCost(edge) {
        return 400;
    }
    /**
     * taxiCost
     */
    static taxiCost(edge) {
        return 1000 * edge.length;
    }
}
