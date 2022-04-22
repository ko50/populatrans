import { Prefecture } from "models/prefecture";
import { TransitionList } from "models/transition";

export async function getMockedPopulationTransition(
    prefList: Prefecture[]
): Promise<TransitionList> {
    const transition: TransitionList = {
        boundaryYear: 2020,
        transitions: [
            {
                pref: { code: 1, name: "茨城県" },
                populations: [
                    {
                        year: 2018,
                        value: 2000,
                    },
                    {
                        year: 2019,
                        value: 4000,
                    },
                    {
                        year: 2020,
                        value: 6000,
                    },
                    {
                        year: 2021,
                        value: 8000,
                    },
                ],
            },
            {
                pref: { code: 2, name: "東京都" },
                populations: [
                    {
                        year: 2018,
                        value: 1000,
                    },
                    {
                        year: 2019,
                        value: 2000,
                    },
                    {
                        year: 2020,
                        value: 3000,
                    },
                    {
                        year: 2021,
                        value: 4000,
                    },
                ],
            },
        ],
    };

    return transition;
}
