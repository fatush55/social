// Action
import { actionsProfile } from "../actions/profile-action"
// Type
import { ProfileType, CommentType } from "../types/types"
import { ActionsCreatorType } from "../store"


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
export type ActionReducerType = ActionsCreatorType<typeof actionsProfile >

export const profileReducer = (state: initialStateType = initialState, action: ActionReducerType): initialStateType => {
    switch (action.type) {
        case "PROFILE/ADD_COMMENT":
            return {
                ...state,
                comments: [...state.comments, {
                    id: state.comments.length + 1,
                    img: action.img.length
                        ? {
                            url: action.img,
                            alt: 'avatar'
                        }
                        : null,
                    text: action.comment,
                    like: 0
                }]
            }
        case "PROFILE/SET_PROFILE":
            return {
                ...state,
                profile: {...state.profile, ...action.profile},
            }
        case "PROFILE/SET_STATUS":
            return {
                ...state,
                status: action.status,
            }
        case "PROFILE/UPDATE_PHOTOS":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos,
                }
            }
        case "PROFILE/TRIGGER_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        case "PROFILE/TRIGGER_STATUS_UPDATE_PROFILE":
            return {
                ...state,
                statusUpdateProfile: action.status
            }
        default: return state
    }
}
