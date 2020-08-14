// Other
import { getAuth } from "./auth-reducer"
// Type
import { ProfileType } from "../types/types"

const baseType = 'app/'
const SET_INITIALIZE = `${baseType}SET_INITIALIZE`
const SET_CURRENT_PROFILE = `${baseType}SET_CURRENT_PROFILE`
const SET_ALERT = `${baseType}SET_ALERT`
const SET_HIDDEN_ALERT = `${baseType}SET_HIDDEN_ALERT`

const initialState = {
    initialize: false as boolean,
    currentProfile: null as null | ProfileType,
    alert: null as null | string,
    hiddenAlert: null as null | 'show' | 'hide',
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                initialize: true,
            }
        case SET_CURRENT_PROFILE:
            return {
                ...state,
                currentProfile: action.id,
            }
        case SET_ALERT:
            return {
                ...state,
                alert: action.payload,
            }
        case SET_HIDDEN_ALERT:
            return {
                ...state,
                hiddenAlert: action.payload,
            }
        default:
            return state
    }
}

// Action creator
type TriggerInitializeActionType = {
    type: typeof SET_INITIALIZE
}
export const triggerInitialize = () : TriggerInitializeActionType => ({type: SET_INITIALIZE})
type SetCurrentProfileActionType = {
    type: typeof SET_CURRENT_PROFILE
    id: number
}
export const setCurrentProfile = (id: number): SetCurrentProfileActionType => ({type: SET_CURRENT_PROFILE, id})
type SetAlertActionType = {
    type: typeof SET_ALERT
    payload: object | null
}
export const setAlert = (payload: object | null): SetAlertActionType => ({type: SET_ALERT, payload})
type SetHiddenAlertActionType = {
    type: typeof SET_HIDDEN_ALERT
    payload: null | 'show' | 'hide'
}
export const setHiddenAlert = (payload: null | 'show' | 'hide'): SetHiddenAlertActionType => ({type: SET_HIDDEN_ALERT, payload})

// Thunk creator
export const setInitialize = () => (dispatch: any) => {
    const promiseGetAuth = dispatch(getAuth())

    Promise.all([promiseGetAuth]).then(() => {
        dispatch(triggerInitialize())
    })
}

export const cycleAlert = (message: object) =>(dispatch: any) => {
    dispatch(setAlert(message))
    dispatch(setHiddenAlert('show'))
    setTimeout(() =>  dispatch(setHiddenAlert('hide')), 3000)
    setTimeout(() =>  dispatch(setAlert(null)), 4000)
}
