import { Population } from "models/population";
import { Prefecture } from "models/prefecture";

export type Transition = {
    pref: Prefecture;
    populations: Population[];
};

export type TransitionList = {
    boundaryYear: number;
    transitions: Transition[];
};
