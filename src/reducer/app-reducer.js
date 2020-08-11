// Other
import { getAuth } from "./auth-reducer"

const baseType = 'app/'
const SET_INITIALIZE = `${baseType}SET_INITIALIZE`
const SET_CURRENT_PROFILE = `${baseType}SET_CURRENT_PROFILE`
const SET_ALERT = `${baseType}SET_ALERT`
const SET_HIDDEN_ALERT = `${baseType}SET_HIDDEN_ALERT`

const initialState = {
    initialize: false,
    currentProfile: null,
    alert: null,
    hiddenAlert: null,
    // alert: {message: '404', type: 'error'},
    // hiddenAlert: 'show',
}

export const appReducer = (state = initialState, action) => {
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
export const triggerInitialize = () => ({type: SET_INITIALIZE})
export const setCurrentProfile = (id) => ({type: SET_CURRENT_PROFILE, id})
export const setAlert = (payload) => ({type: SET_ALERT, payload})
export const setHiddenAlert = (payload) => ({type: SET_HIDDEN_ALERT, payload})

// Thunk creator
export const setInitialize = () => (dispatch) => {
    const promiseGetAuth = dispatch(getAuth())

    Promise.all([promiseGetAuth]).then(() => {
        dispatch(triggerInitialize())
    })
}

export const cycleAlert = (message) =>(dispatch) => {
    dispatch(setAlert(message))
    dispatch(setHiddenAlert('show'))
    setTimeout(() =>  dispatch(setHiddenAlert('hide')), 3000)
    setTimeout(() =>  dispatch(setAlert(null)), 4000)
}
