import { Population } from "models/population";

export type Transition = {
    pref: string;
    populations: Population[];
};

export type TransitionList = {
    boundaryYear: number;
    transitions: Transition[];
};
