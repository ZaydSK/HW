import Edge from "./Edge.js"
import Logic from "./Logic.js"
import { Move } from "./Move"
import ONode from "./ONode.js"
import PriorityQueue, { priority } from "./PriorityQueue.js"

let stations : ONode[] = [
    new ONode(60,0,true,false),  // 0 HMK
    new ONode(30,10,false,false),  // 1 Fahama
    new ONode(20,15,false,false),  // 2 SANA
    new ONode(10,15,false,false), // 3 Bridge
    new ONode(0,0,false,true)  // 4 Home
]

let edges: Edge[] = [
    new Edge(stations[0],stations[1],0,1,6,true,['first','second'],30,50),
    new Edge(stations[1],stations[2],1,2,3,true,['first','second'],40,70),
    new Edge(stations[0],stations[2],0,2,9,true,['first','second'],35,60),
    new Edge(stations[0],stations[3],0,3,10,true,['first','second'],35,60),
    new Edge(stations[3],stations[4],3,4,12,true,['first','second'],50,80),
    new Edge(stations[2],stations[3],2,3,1,false,null,null,null),
]

export enum Type{
    WALKING = 'Walking',
    BUS = 'By Bus',
    CAR = 'By Taxi'
}
let graph=buildGraph(edges)

function buildGraph(edges: Edge[]) : Array<Array<Move>> {
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
	    Graph[edge.startNodeIdx].push(walkingMove)
	    
	    if(edge.isDrivable){
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
	        Graph[edge.startNodeIdx].push(busMove)
	        Graph[edge.startNodeIdx].push(taxiMove)
	    } 
	});

    return Graph
	
}
console.log(graph);

let pq = new PriorityQueue<Move>([]);

pq.insert(graph[0][0],priority.time,priority.cost,priority.effort);