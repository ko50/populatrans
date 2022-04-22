import { RESAS_BASE_PATH } from "api/resas/config/constants";
import { Response } from "api/resas/config/types";
import { AxiosInstance } from "axios";
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
    client: AxiosInstance,
    selected: Prefecture[]
): Promise<TransitionList> {
    const data: Transition[] = [];
    let boundaryYear: number;

    for (const p of selected) {
        await (async () => {
            const url = RESAS_BASE_PATH + "/population/composition/perYear";
            const query = "?prefCode=" + p.code + "&cityCode=-"; // 全ての市区町村から取得
            const _res = await client.get<Response<ResponseData>>(url + query);

            const result = _res.data.result;
            const datum: Transition = {
                pref: p,
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
