// RESASではエラーメッセージとデータが返ってくる
export type Response<T> = {
    message: string;
    result: T;
};
