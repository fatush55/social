// Api
import { profileApi } from "../api/api"
// Reducer
import {cycleAlert, setCurrentProfile} from "./app-reducer"
import { setMyPhoto } from "./auth-reducer"
import {stopSubmit} from "redux-form";
// Type
import {ProfileType, CommentType, PhotosType} from "../types/types";


const baseType = 'profile/'
const ADD_COMMENT = `${baseType}ADD_COMMENT`
const SET_PROFILE = `${baseType}SET_PROFILE`
const SET_STATUS = `${baseType}SET_STATUS`
const UPDATE_PHOTOS = `${baseType}UPDATE_PHOTOS`
const TRIGGER_LOADING = `${baseType}TRIGGER_LOADING`
const TRIGGER_STATUS_UPDATE_PROFILE = `${baseType}TRIGGER_STATUS_UPDATE_PROFILE`

const initialState = {
    profile: null as null | ProfileType,
    status: null as null | string,
    isLoading: true as boolean,
    statusUpdateProfile: true as boolean,
    comments: [
        {
            id: 1,
            img: {
                url: 'https://c7.hotpng.com/preview/639/452/966/computer-icons-avatar-user-profile-people-icon.jpg',
                alt: 'avatar'
            },
            text: 'asdasd11',
            like: 2
        },
        {
            id: 2,
            img: {
                url: 'https://thehearingheroes.com/wp-content/uploads/2019/02/female-avatar-profile-icon-round-african-american-vector-18307298.jpg',
                alt: 'avatar'
            },
            text: 'asdasdaghjghs',
            like: 0
        },
        {
            id: 3,
            img: {
                url: 'https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg',
                alt: 'avatar'
            },
            text: 'jkljkl',
            like: 1
        },
    ] as Array<CommentType>,
}

type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, {
                    id: state.comments.length + 1,
                    img: {
                        url: action.img,
                        alt: 'avatar'
                    },
                    text: action.comment,
                    like: 0
                }]
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: {...state.profile, ...action.profile},
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case UPDATE_PHOTOS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos,
                }
            }
        case TRIGGER_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TRIGGER_STATUS_UPDATE_PROFILE:
            return {
                ...state,
                statusUpdateProfile: action.status
            }
        default:
            return state
    }
}

// Action Creator
type AddCommentActionType = {
    type: typeof ADD_COMMENT
    comment: string,
    img: string
}
export const addComment = (comment: string, img: string): AddCommentActionType => ({type: ADD_COMMENT, comment, img})
type SetProfileActionType = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
export const setProfile = (profile: ProfileType): SetProfileActionType => ({type: SET_PROFILE, profile})
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string | null
}
export const setStatus = (status: string | null): SetStatusActionType => ({type: SET_STATUS, status})
type TriggerLoadingActionType = {
    type: typeof TRIGGER_LOADING
    isLoading: boolean
}
export const triggerLoading = (isLoading: boolean): TriggerLoadingActionType => ({type: TRIGGER_LOADING, isLoading})
type TriggerStatusUpdateProfileActionType = {
    type: typeof TRIGGER_STATUS_UPDATE_PROFILE
    status: boolean
}
export const triggerStatusUpdateProfile = (status: boolean): TriggerStatusUpdateProfileActionType => ({type: TRIGGER_STATUS_UPDATE_PROFILE, status})
type UpdatePhotosActionType = {
    type: typeof UPDATE_PHOTOS
    photos: PhotosType
}
export const updatePhotos = (photos: PhotosType): UpdatePhotosActionType => ({type: UPDATE_PHOTOS, photos})

// Thunk Creator
export const createComment = (comment: string, img: string) => (dispatch: any) => dispatch(addComment(comment, img))

export const requestProfile = (id: number) => async (dispatch: any) => {
    dispatch(triggerLoading(true))
    const data = await profileApi.getProfile(id)
    dispatch(setProfile(data))
    dispatch(triggerLoading(false))
    dispatch(setCurrentProfile(id))
}

export const requestStatus = (id: number) => async (dispatch: any) => {
    const data = await profileApi.getStatus(id)
    dispatch(setStatus(data))
}

export const requestUpdatePhotos = (fileData: object) => async (dispatch: any) => {
    const data = await profileApi.updatePhotos(fileData)
    dispatch(updatePhotos(data.data.photos))
    dispatch(setMyPhoto(data.data.photos))
}

export const requestUpdateProfile = (profileData: ProfileType) => (dispatch: any) => {
    delete profileData.userId
    delete profileData.photos
    dispatch(triggerStatusUpdateProfile(false))
    profileApi.updateProfile(profileData).then((data: any) => {
        if (!data.resultCode) {
            dispatch(setProfile(profileData))
            dispatch(triggerStatusUpdateProfile(true))
            dispatch(cycleAlert({message: 'successful update Profile', type: 'success'}))
        } else {
            dispatch(stopSubmit('editProfile', prepareError(data.messages)))
        }
    })

}

export const upDataStatus = (status: string) => async (dispatch: any) => {
    const data = await profileApi.upDataStatus(status)
    !data.resultCode &&  dispatch(setStatus(status))
}

// Helpers
const prepareError = (messages: Array<string>): object => {
    const data = {contacts: {} as any}
    const regexp = /\([a-zA-Z]+->([a-zA-Z]+)\)/ as any;
    messages.forEach(elem => data.contacts[regexp.exec(elem)[1].toLocaleLowerCase()] = 'Invalid url')
    return data;
}