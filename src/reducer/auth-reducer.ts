// Api
import { authApi, profileApi, securityApi } from "../api/api"
// Reducer

// Type
import { PhotosType } from "../types/types"
import { LoginValue, AuthDataType } from "../types/auth-reducer-type"


const baseType = 'auth/'
const SET_MY_PROFILE = `${baseType}SET_MY_PROFILE`
const SET_MY_PHOTOS = `${baseType}SET_MY_PHOTOS`
const SET_LOG_OUT = `${baseType}SET_LOG_OUT`
const TRIGGER_AUTH = `${baseType}TRIGGER_AUTH`
const SET_CAPTCHA = `${baseType}SET_CAPTCHA`

const initialState = {
    isAuth: false as boolean,
    myStatus: '' as string,
    captcha: '' as string,
    myProfile: {
        email: null,
        login: null,
        id: null,
        photos: null
    } as AuthDataType | null,
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_MY_PROFILE:
            return {
                ...state,
                myProfile: {
                    ...state.myProfile,
                    ...action.myProfile,
                }
            }
        case SET_LOG_OUT:
            return {
                ...state,
                isAuth: false,
                myStatus: '',
                myProfile: null,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.url,
            }
        case SET_MY_PHOTOS:
            return {
                ...state,
                myProfile: {
                    ...state.myProfile,
                    photos: action.photos
                },
            }
        case TRIGGER_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        default: return state
    }
}

// Action Creator
type SetMyProfileActionType = {
    type: typeof SET_MY_PROFILE
    myProfile: AuthDataType
}
export const setMyProfile = (myProfile: AuthDataType): SetMyProfileActionType => ({type: SET_MY_PROFILE, myProfile})

type SetPhotoActionType = {
    type: typeof SET_MY_PROFILE
    photos: PhotosType
}
export const setMyPhoto = (photos: PhotosType): SetPhotoActionType => ({type: SET_MY_PHOTOS, photos})

type SetLogOutActionType = {
    type: typeof SET_LOG_OUT
}
export const setLogOut = (): SetLogOutActionType => ({type: SET_LOG_OUT})

type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    url: string
}
export const setCaptcha = (url: string): SetCaptchaActionType => ({type: SET_CAPTCHA, url})

type TriggerIsAuthActionType = {
    type: typeof TRIGGER_AUTH
    isAuth: boolean
}
export const triggerIsAuth = (isAuth: boolean): TriggerIsAuthActionType => ({type: TRIGGER_AUTH, isAuth})

// Thunk Creator
export const getAuth = () => async (dispatch: any) => {
    const dataAuth = await authApi.getMe()

    if (!dataAuth.resultCode) {
        dispatch(setMyProfile(dataAuth.data))
        dispatch(triggerIsAuth(true))
        const dataProfile = await profileApi.getProfile(dataAuth.data.id)
        dispatch(setMyPhoto(dataProfile.photos))
    }

    return Promise.all([dataAuth]);
}



export const login = ({email, password, rememberMy, captcha}: LoginValue) => (dispatch: any) => {
    authApi.login(email, password, rememberMy = false, captcha).then((data: any) => {
        if (!data.resultCode) {
            dispatch(getAuth())
            dispatch(setCaptcha(''))
        } else {
            data.resultCode === 10 && securityApi.getCaptcha().then((data: any) => dispatch(setCaptcha(data.url)))
        }
    })
}

export const logout = () => async (dispatch: any) => {
    const data = await authApi.logout()
    !data.resultCode && dispatch(setLogOut())
}
