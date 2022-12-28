import Edge from "./Edge.js";
import { Type } from "./index";

export type Move = {
    edge: Edge; cost: number; effort: number; time: number; type: Type;
};
