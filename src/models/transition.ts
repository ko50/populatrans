import { Population } from "models/population";

export type Transition = {
    boundaryYear: number;
    populations: Population[];
};
