import { Transition } from "models/transition";

export async function getMockedPopulationComposition(): Promise<Transition[]> {
    const prefList: Transition[] = [
        {
            boundaryYear: 2020,
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
            boundaryYear: 2020,
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
    ];

    return prefList;
}
