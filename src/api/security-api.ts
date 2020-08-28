import {instance} from "./api";

export const securityApi = {
    getCaptcha() {
        return instance.get<string>('security/get-captcha-url').then(response => response.data)
    }
}