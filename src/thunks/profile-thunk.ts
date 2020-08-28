// Action
import { actionsProfile } from "../actions/profile-action"
// Api
import { profileApi } from "../api/profile-api"
// Thunk
import { cycleAlert, setCurrentProfile } from "./app-thunk"
import { setMyPhoto } from "./auth-thunk"
// Type
import { RootThunkCreatorType } from "../store"
import { ResponseResultCodeType } from "../api/api"
import { ProfileType } from "../types/types"
import { ActionReducerType } from "../reducers/profile-reducer"


type ThunkCreatorType = RootThunkCreatorType<ActionReducerType>

export const createComment = (comment: string, img: string): ThunkCreatorType => (dispatch) => {
    dispatch(actionsProfile.addComment(comment, img))
}

export const requestProfile = (id: number): ThunkCreatorType => async (dispatch) => {
    dispatch(actionsProfile.triggerLoading(true))
    const data = await profileApi.getProfile(id)
    dispatch(actionsProfile.setProfile(data))
    dispatch(setCurrentProfile(id))
    dispatch(actionsProfile.triggerLoading(false))
}

export const requestStatus = (id: number): ThunkCreatorType => async (dispatch) => {
    const data = await profileApi.getStatus(id)
    dispatch(actionsProfile.setStatus(data))
}

export const requestUpdatePhotos = (fileData: File): ThunkCreatorType => async (dispatch) => {
    const data = await profileApi.updatePhotos(fileData)
    if (data.resultCode === ResponseResultCodeType.success) {
        dispatch(actionsProfile.updatePhotos(data.data.photos))
        dispatch(setMyPhoto(data.data.photos))
    }
}

export const requestUpdateProfile = (profileData: ProfileType): ThunkCreatorType => (dispatch) => {
    dispatch(actionsProfile.triggerStatusUpdateProfile(false))
    profileApi.updateProfile(profileData).then((data: any) => {
        if (data.resultCode === ResponseResultCodeType.success) {
            dispatch(actionsProfile.setProfile(profileData))
            dispatch(actionsProfile.triggerStatusUpdateProfile(true))
            dispatch(cycleAlert({message: 'successful update Profile', type: 'success'}))
        } else {

        }
    })
}

export const upDataStatus = (status: string): ThunkCreatorType => async (dispatch) => {
    const data = await profileApi.upDataStatus(status)
    if (data.resultCode === ResponseResultCodeType.success) dispatch(actionsProfile.setStatus(status))
}

// Helpers
// const prepareError = (messages: Array<string>): object => {
//     const data = {contacts: {} as any}
//     const regexp = /\([a-zA-Z]+->([a-zA-Z]+)\)/ as any;
//     messages.forEach(elem => data.contacts[regexp.exec(elem)[1].toLocaleLowerCase()] = 'Invalid url')
//     return data;
// }