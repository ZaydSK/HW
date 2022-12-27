import Edge from "./Edge.js";
import ONode from "./ONode.js";
let stations = [
    new ONode(30, 5), new ONode(20, 18), new ONode(10, 15)
];
let edges = [
    new Edge(stations[0], stations[1], 0, 1, 7, true, ['first', 'second'], 50, 80),
    new Edge(stations[0], stations[2], 0, 2, 12, true, ['first', 'second'], 50, 80),
    new Edge(stations[1], stations[2], 1, 2, 5, false, null, null, null),
];
let Graph = [];
Graph.push([], [], []);
edges.forEach(edge => {
    Graph[edge.startNodeIdx].push(edge.endNodeIdx);
    Graph[edge.endNodeIdx].push(edge.startNodeIdx);
});
console.log(Graph);
