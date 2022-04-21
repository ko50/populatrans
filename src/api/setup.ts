import { getMockedPrefectureList } from "api/mock/prefList";
import { getMockedPopulationTransition } from "api/mock/transition";
import { getResasPrefectureList } from "api/resas/prefList";
import { getResasPopulationTransition } from "api/resas/transition";
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
    const apiConfig = process.env.NEXT_PUBLIC_API_CONFIG ?? "mock";

    let api: API;
    switch (apiConfig) {
        case "mock":
            api = {
                getPrefList: getMockedPrefectureList,
                getPopulationTransition: getMockedPopulationTransition,
            };
            break;
        case "resas":
            api = {
                getPrefList: getResasPrefectureList,
                getPopulationTransition: getResasPopulationTransition,
            };
            break;

        default:
            throw new Error("Set 'NEXT_PUBLIC_API_CONFIG' 'mock' or 'resas'");
    }

    return api;
}

export const api = setUpAPI();
