import { resasClient } from "api/resas/config/client";
import { RESAS_BASE_PATH } from "api/resas/config/constants";
import { Response } from "api/resas/config/types";
import { Prefecture } from "models/prefecture";
import { Transition, TransitionList } from "models/transition";

type ResponseData = {
    boundaryYear: number;
    data: [
        // 総人口のみ考慮
        {
            label: "総人口";
            data: {
                year: number;
                value: number;
            }[];
        }
    ];
};

export async function getResasPopulationTransition(
    selected: Prefecture[]
): Promise<TransitionList> {
    const data: Transition[] = [];
    let boundaryYear: number;

    for (const p of selected) {
        await (async () => {
            const url =
                RESAS_BASE_PATH +
                "/population/composition/perYear?prefCode=" +
                p.code +
                "&cityCode=-";
            const _res = await resasClient.get<Response<ResponseData>>(url);

            const result = _res.data.result;
            const datum: Transition = {
                pref: p.name,
                populations: result.data[0].data,
            };

            boundaryYear = result.boundaryYear;
            data.push(datum);
        })();
    }

    const transitionList: TransitionList = {
        boundaryYear: boundaryYear!,
        transitions: data,
    };

    return transitionList;
}
