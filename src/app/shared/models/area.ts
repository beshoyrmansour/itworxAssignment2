import { AreaMap } from "./area-map";

export interface Area {
    name: string;
    achieved: number;
    currentTarget: number;
    map: AreaMap;
}
