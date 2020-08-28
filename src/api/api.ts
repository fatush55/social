// Root
import axios from "axios"


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "654a1c8f-38f3-4def-a9e0-de8694410a93"
    },
});

export enum ResponseResultCodeType {
    success = 0,
    error = 1,
}

export enum ResponseResultCodeForCaptchaType {
    isCaptcha = 10
}

export type ResponseApiType<D = {}, R = never> = {
    data: D
    resultCode: ResponseResultCodeType | R
    messages: Array<string>
}

export type ResponseItemApiType<I> = {
    items: Array<I>
    totalCount: number
    error: string
}
