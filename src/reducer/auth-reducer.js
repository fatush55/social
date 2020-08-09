// Api
import { authApi, profileApi } from "../api/api"
import { stopSubmit } from "redux-form"


const baseType = 'auth/'
const SET_AUTH_DATA = `${baseType}SET_AUTH_DATA`
const SET_MY_PROFILE = `${baseType}SET_MY_PROFILE`
const SET_LOG_OUT = `${baseType}SET_LOG_OUT`
const TRIGGER_AUTH = `${baseType}TRIGGER_AUTH`

const initialState = {
    isAuth: false,
    authData: {
        email: null,
        login: null,
        id: null,
        photoSmall: null,
        photoLarge: null,
    },
    myStatus: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                authData: {
                    ...state.authData,
                    ...action.payload,
                }
            }
        case SET_MY_PROFILE:
            return {
                ...state,
                authData: {
                    ...state.authData,
                    ...action.payload,
                }
            }
        case SET_LOG_OUT:
            return {
                ...state,
                isAuth: false,
                authData: null,
                myProfile: null,
            }
        case TRIGGER_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        default:
            return state
    }
}

// Action Creator
export const setAuthData = (payload) => ({type: SET_AUTH_DATA, payload})
export const setPhoto = (payload) => ({type: SET_MY_PROFILE, payload})
export const setLogOut = () => ({type: SET_LOG_OUT})
export const triggerIsAuth = (isAuth) => ({type: TRIGGER_AUTH, isAuth})


// Thunk Creator
export const getAuth = () => async (dispatch) => {
    const dataAuth = await authApi.getMe()

    if (!dataAuth.resultCode) {
        dispatch(setAuthData(dataAuth.data))
        dispatch(triggerIsAuth(true))
        const dataProfile = await profileApi.getProfile(dataAuth.data.id)
        dispatch(setPhoto({photoSmall: dataProfile.photos.small, photoLarge: dataProfile.photos.large}))
    }

    return Promise.all([dataAuth]);
}

export const login = (loginData) => (dispatch) => {
    authApi.login(loginData).then((data) => {
        if (!data.resultCode) {
            dispatch(getAuth())
        } else {
             dispatch(stopSubmit('login', {_error: data.messages.join(), email: ' ', password: ' '}))
        }
    })
}

export const logout = () => async (dispatch) => {
    const data = await authApi.logout()
    !data.resultCode && dispatch(setLogOut())
}
