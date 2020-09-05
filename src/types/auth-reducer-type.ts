import { PhotosType } from "./types"

export type LoginValue = {
    password: string;
    email: string;
    rememberMy: boolean;
    captcha: string;
}

export type AuthDataType = {
    email?: null | string
    login?: null | string
    id?: null | number
    photos?: null | PhotosType
}

export type AuthMeType = {
    id: number
    email: string
    login: string
}
