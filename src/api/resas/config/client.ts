import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export function initializeResasClient(): AxiosInstance {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (apiKey === undefined)
        throw new Error(
            "Please provide API key by setting 'API_KEY' in environment var!"
        );

    const config: AxiosRequestConfig = {
        headers: {
            "X-API-KEY": apiKey!,
        },
    };

    return axios.create(config);
}
