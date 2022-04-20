import { getMockedPrefectureList } from "api/mock/prefList";
import { getMockedPopulationTransition } from "api/mock/transition";
import { Prefecture } from "models/prefecture";
import { TransitionList } from "models/transition";

type _PrefListAPIType = () => Promise<Prefecture[]>;
type _PopulationTransitionAPIType = (
    prefList: Prefecture[]
) => Promise<TransitionList>;

export type API = {
    getPrefList: _PrefListAPIType;
    getPopulationTransition: _PopulationTransitionAPIType;
};

export function setUpAPI(): API {
    const apiConfig = process.env.API_CONFIG ?? "mock";
    let prefListAPI: _PrefListAPIType;
    let populationTransitionAPI: _PopulationTransitionAPIType;

    switch (apiConfig) {
        case "mock":
            prefListAPI = getMockedPrefectureList;
            populationTransitionAPI = getMockedPopulationTransition;
            break;
        case "resas":
            // TODO: implement adapters for RESAS api
            prefListAPI = getMockedPrefectureList;
            populationTransitionAPI = getMockedPopulationTransition;
            break;

        default:
            throw new Error("Set API_CONFIG 'mock' or 'resas'");
    }

    return {
        getPrefList: prefListAPI,
        getPopulationTransition: populationTransitionAPI,
    };
}

export const api = setUpAPI();
