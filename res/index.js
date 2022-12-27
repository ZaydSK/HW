import Edge from "./Edge.js";
import Logic from "./Logic.js";
import ONode from "./ONode.js";
let stations = [
    new ONode(30, 5), new ONode(20, 18), new ONode(10, 15)
];
let edges = [
    new Edge(stations[1], stations[2], 1, 2, 7, true, ['first', 'second'], 50, 80),
    new Edge(stations[0], stations[2], 0, 2, 12, true, ['first', 'second'], 50, 80),
    new Edge(stations[0], stations[1], 0, 1, 5, false, null, null, null),
];
var Type;
(function (Type) {
    Type["WALKING"] = "Walking";
    Type["BUS"] = "By Bus";
    Type["CAR"] = "By Taxi";
})(Type || (Type = {}));
let Graph = [];
edges.forEach(() => { Graph.push([]); });
edges.forEach(edge => {
    let walkingMove = {
        edge,
        cost: Logic.walkingCost(edge),
        effort: Logic.walkingEffort(edge),
        time: Logic.walkingTime(edge),
        type: Type.WALKING
    };
    let busMove = {
        edge,
        cost: Logic.busCost(edge),
        effort: Logic.busEffort(edge),
        time: Logic.busTime(edge),
        type: Type.BUS
    };
    let taxiMove = {
        edge,
        cost: Logic.taxiCost(edge),
        effort: Logic.taxiEffort(edge),
        time: Logic.taxiTime(edge),
        type: Type.CAR
    };
    Graph[edge.startNodeIdx].push(walkingMove);
    Graph[edge.startNodeIdx].push(busMove);
    Graph[edge.startNodeIdx].push(taxiMove);
    //Graph[edge.endNodeIdx].push(edge)
});
console.log(Graph);
