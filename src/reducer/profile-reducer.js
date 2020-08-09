// Api
import { profileApi } from "../api/api"
// Reducer
import { setCurrentProfile } from "./app-reducer"


const baseType = 'profile/'
const ADD_COMMENT = `${baseType}ADD_COMMENT`
const SET_PROFILE = `${baseType}SET_PROFILE`
const SET_STATUS = `${baseType}SET_STATUS`
const TRIGGER_LOADING = `${baseType}TRIGGER_LOADING`

const initialState = {
    profile: null,
    status: null,
    isLoading: true,
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
    ],
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, {
                    id: state.comments.length + 1,
                    img: {
                        url: state.profile.photos.small,
                        alt: 'avatar'
                    },
                    text: action.comment,
                    like: 0
                }]
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case TRIGGER_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

// Action Creator
export const addComment = (comment) => ({type: ADD_COMMENT, comment})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const triggerLoading = (isLoading) => ({type: TRIGGER_LOADING, isLoading})

// Thunk Creator
export const createComment = (comment) => (dispatch) => dispatch(addComment(comment))

export const requestProfile = (id) => async (dispatch) => {
    dispatch(triggerLoading(true))
    const data = await profileApi.getProfile(id)
    dispatch(setProfile(data))
    dispatch(triggerLoading(false))
    dispatch(setCurrentProfile(id))
}

export const requestStatus = (id) => async (dispatch) => {
    const data = await profileApi.getStatus(id)
    dispatch(setStatus(data))
}

export const upDataStatus = (status) => async (dispatch) => {
    const data = await profileApi.upDataStatus(status)
    !data.resultCode &&  dispatch(setStatus(status))
}



