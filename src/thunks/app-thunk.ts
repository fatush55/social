// Action
import { actionsApp } from "../actions/app-action";
// Thunk
import { getAuth } from "../thunks/auth-thunk"
// Type
import { RootThunkCreatorType } from "../store"
import { AlertType, HiddenAlertType } from "../types/app-reducet-type"
import { ActionReducerType } from "../reducers/app-reducer"


type ThunkCreatorType = RootThunkCreatorType<ActionReducerType>

export const setInitialize = (): ThunkCreatorType => async (dispatch: any) => {
    const promiseGetAuth = await dispatch(getAuth())

    const isProcessFinish = await Promise.all([promiseGetAuth]).then(() => true)
    isProcessFinish && dispatch(actionsApp.triggerInitialize())
}

export const cycleAlert = (message: AlertType): ThunkCreatorType => (dispatch) => {
    dispatch(actionsApp.setAlert(message))
    dispatch(actionsApp.setHiddenAlert('show'))
    setTimeout(() =>  dispatch(actionsApp.setHiddenAlert('hide')), 3000)
    setTimeout(() =>  dispatch(actionsApp.setAlert(null)), 4000)
}

export const setCurrentProfile = (id: number): ThunkCreatorType => (dispatch) => {
    dispatch(actionsApp.setCurrentProfile(id))
}

export const setHiddenAlert = (action: HiddenAlertType): ThunkCreatorType =>(dispatch) => {
    dispatch(actionsApp.setHiddenAlert(action))
}
