import Edge from "./Edge.js"
import Logic from "./Logic.js"
import ONode from "./ONode.js"

let stations : ONode[] = [
    new ONode(30,5),new ONode(20,18),new ONode(10,15)
]

let edges: Edge[] = [
    new Edge(stations[1],stations[2],1,2,7,true,['first','second'],50,80),
    new Edge(stations[0],stations[2],0,2,12,true,['first','second'],50,80),
    new Edge(stations[0],stations[1],0,1,5,false,null,null,null),
]

enum Type{
    WALKING = 'Walking',
    BUS = 'By Bus',
    CAR = 'By Taxi'
}
type Move = {
    edge: Edge,cost: number, effort:number, time: number,type: Type
}

let Graph: Array<Array<Move>> = [];
edges.forEach(()=>{Graph.push([])});


edges.forEach(edge => {
    let walkingMove: Move = {
        edge,
        cost: Logic.walkingCost(edge),
        effort: Logic.walkingEffort(edge),
        time: Logic.walkingTime(edge),
        type: Type.WALKING
    }

    let busMove: Move = {
        edge,
        cost: Logic.busCost(edge),
        effort: Logic.busEffort(edge),
        time: Logic.busTime(edge),
        type: Type.BUS
    }

    let taxiMove: Move = {
        edge,
        cost: Logic.taxiCost(edge),
        effort: Logic.taxiEffort(edge),
        time: Logic.taxiTime(edge),
        type: Type.CAR
    }
    Graph[edge.startNodeIdx].push(walkingMove)
    Graph[edge.startNodeIdx].push(busMove)
    Graph[edge.startNodeIdx].push(taxiMove)
    //Graph[edge.endNodeIdx].push(edge)
});

console.log(Graph);