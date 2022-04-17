import { Prefecture } from "models/prefecture";

export async function getMockedPrefectureList(): Promise<Prefecture[]> {
    const prefList: Prefecture[] = [
        {
            code: 1,
            name: "茨城県",
        },
        {
            code: 2,
            name: "埼玉県",
        },
        {
            code: 3,
            name: "東京都",
        },
    ];

    return prefList;
}
