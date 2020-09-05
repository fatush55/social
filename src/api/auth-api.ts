import { AuthMeType } from "../types/auth-reducer-type"
import { instance, ResponseApiType, ResponseResultCodeForCaptchaType } from "./api"

export const authApi = {
    getMe() {
        return instance.get<ResponseApiType<AuthMeType>>('auth/me').then(response => response.data)
    },
    login(email: string, password: string, rememberMy = false, captcha: null | string = null) {
        return instance.post<ResponseApiType<{}, ResponseResultCodeForCaptchaType>>('auth/login', {
            email, password, rememberMy, captcha
        }).then(data => data.data)
    },
    logout() {
        return instance.delete<ResponseApiType>('auth/login').then(data => data.data)
    }
}
