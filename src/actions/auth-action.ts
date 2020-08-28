// Type
import { AuthDataType } from "../types/auth-reducer-type"
import { PhotosType } from "../types/types"

export const actionsAuth = {
    setMyProfile: (myProfile: AuthDataType) => ({type: 'AUTH/SET_MY_PROFILE', myProfile} as const ),
    setMyPhoto:  (photos: PhotosType) => ({type: 'AUTH/SET_MY_PHOTOS', photos} as const ),
    setLogOut: () => ({type: 'AUTH/SET_LOG_OUT'} as const ),
    setCaptcha: (url: string) => ({type: 'AUTH/SET_CAPTCHA', url} as const ),
    triggerIsAuth: (isAuth: boolean) => ({type: 'AUTH/TRIGGER_AUTH', isAuth} as const ),
}
