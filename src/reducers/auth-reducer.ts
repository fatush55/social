// Api
import { profileApi } from "../api/profile-api"
import { authApi } from "../api/auth-api";
import { securityApi } from "../api/security-api"
// Action
import { actionsAuth } from "../actions/auth-action"
// Type
import { PhotosType } from "../types/types"
import { LoginValue, AuthDataType } from "../types/auth-reducer-type"
import {ActionsCreatorType, RootThunkCreatorType} from "../store"
import { ResponseResultCodeForCaptchaType, ResponseResultCodeType } from "../api/api"


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
export type ActionReducerType = ActionsCreatorType<typeof actionsAuth>

export const authReducer = (state: InitialStateType = initialState, action: ActionReducerType): InitialStateType => {
    switch (action.type) {
        case "AUTH/SET_MY_PROFILE":
            return {
                ...state,
                myProfile: {
                    ...state.myProfile,
                    ...action.myProfile,
                }
            }
        case "AUTH/SET_LOG_OUT":
            return {
                ...state,
                isAuth: false,
                myStatus: '',
                myProfile: null,
            }
        case "AUTH/SET_CAPTCHA":
            return {
                ...state,
                captcha: action.url,
            }
        case "AUTH/SET_MY_PHOTOS":
            return {
                ...state,
                myProfile: {
                    ...state.myProfile,
                    photos: action.photos
                },
            }
        case "AUTH/TRIGGER_AUTH":
            return {
                ...state,
                isAuth: action.isAuth,
            }
        default: return state
    }
}
