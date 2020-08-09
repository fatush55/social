// Other
import { getAuth } from "./auth-reducer"

const baseType = 'app/'
const SET_INITIALIZE = `${baseType}SET_INITIALIZE`
const SET_CURRENT_PROFILE = `${baseType}SET_CURRENT_PROFILE`

const initialState = {
    initialize: false,
    currentProfile: null,
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
        default:
            return state
    }
}

// Action creator
export const triggerInitialize = () => ({type: SET_INITIALIZE})
export const setCurrentProfile = (id) => ({type: SET_CURRENT_PROFILE, id})


// Thunk creator
export const setInitialize = () => (dispatch) => {
    const promiseGetAuth = dispatch(getAuth())

    Promise.all([promiseGetAuth]).then(() => {
        dispatch(triggerInitialize())
    })
}
