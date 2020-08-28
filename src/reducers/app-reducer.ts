// Action
import { actionsApp } from "../actions/app-action"
// Type
import { AlertType, HiddenAlertType } from "../types/app-reducet-type"
import { ActionsCreatorType } from "../store"


const initialState = {
    initialize: false as boolean,
    currentProfile: null as null | number,
    alert: null as null | AlertType,
    hiddenAlert: null as HiddenAlertType,
}

type InitialStateType = typeof initialState
export type ActionReducerType = ActionsCreatorType<typeof actionsApp>

export const appReducer = (state: InitialStateType = initialState, action: ActionReducerType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_INITIALIZE":
            return {
                ...state,
                initialize: true,
            }
        case "APP/SET_CURRENT_PROFILE":
            return {
                ...state,
                currentProfile: action.id,
            }
        case "APP/SET_ALERT":
            return {
                ...state,
                alert: action.payload,
            }
        case "APP/SET_HIDDEN_ALERT":
            return {
                ...state,
                hiddenAlert: action.payload,
            }
        default: return state
    }
}
