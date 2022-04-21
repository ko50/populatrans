import { resasClient } from "api/resas/config/client";
import { RESAS_BASE_PATH } from "api/resas/config/constants";
import { Response } from "api/resas/config/types";
import { Prefecture } from "models/prefecture";

type ResponseData = {
    prefCode: number;
    prefName: string;
};

export async function getResasPrefectureList(): Promise<Prefecture[]> {
    const url = RESAS_BASE_PATH + "/prefectures";
    const res = await resasClient.get<Response<ResponseData[]>>(url);

    const result = res.data.result;
    const prefectures = result.map<Prefecture>((data) => {
        return {
            code: data.prefCode,
            name: data.prefName,
        };
    });

    return prefectures;
}
