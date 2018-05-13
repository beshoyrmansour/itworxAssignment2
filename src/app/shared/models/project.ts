import { Area } from "./area";

export interface Project {
    name: string;
    owner: string;
    startDate: string;
    endDate: string;
    oldActual: number;
    achieved: number;
    currentTarget: number;
    nextTarget: number;
    projects:Array<Area>
}
