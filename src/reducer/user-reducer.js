// Api
import { userApi } from "../api/api"


const baseType = 'user/'
const FALLOWED = `${baseType}FALLOWED`
const SET_USERS = `${baseType}SET_USERS`
const SET_TOTAL_USERS = `${baseType}SET_TOTAL_USERS`
const SET_CURRENCY_PAGE = `${baseType}SET_CURRENCY_PAGE`
const TRIGGER_LOADING = `${baseType}TRIGGER_LOADING`
const TRIGGER_FALLOW_PROGRESS = `${baseType}TRIGGER_FALLOW_PROGRESS`

const initialState = {
    users: [],
    followProgress: [],
    currentPage: 1,
    sizePage: 20,
    totalUsers: null,
    isLoading: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FALLOWED:
            return {
                ...state,
                users: state.users.map(elem => {
                    if (elem.id === action.id) {
                        return {
                            ...elem,
                            followed: !elem.followed
                        }
                    }
                    return elem
                })
            }
        case SET_USERS:
            return  {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.total,
            }
        case SET_CURRENCY_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case TRIGGER_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TRIGGER_FALLOW_PROGRESS:
            return {
                ...state,
                followProgress: action.progress
                    ? [...state.followProgress, action.id]
                    : state.followProgress.filter(elem => elem !== action.id),
            }
        default:
            return state
    }
}

// Active Creator
export const fallowUser = (id) => ({type: FALLOWED, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsers = (total) => ({type: SET_TOTAL_USERS, total})
export const setCurrencyPage = (page) => ({type: SET_CURRENCY_PAGE, page})
export const triggerLoading = (isLoading) => ({type: TRIGGER_LOADING, isLoading})
export const triggerFollowProgress = (id, progress) => ({type: TRIGGER_FALLOW_PROGRESS, id, progress})

// Thunk Creator
export const requestUsers = (currentPage, sizePage) => async (dispatch) => {
    dispatch(triggerLoading(true))
    const data = await userApi.getUsers(currentPage, sizePage)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsers(data.totalCount))
    dispatch(triggerLoading(false))
}

export const setFollow = (id, users) => async (dispatch) => {
    const type = users.find(elem => elem.id === id).followed ? 'unFollow' : 'follow'

    dispatch(triggerFollowProgress(id, true))
    const data = await userApi.setFollowed(type, id)

    if (!data.resultCode) {
        dispatch(fallowUser(id))
        dispatch(triggerFollowProgress(id, false))
    }
}
