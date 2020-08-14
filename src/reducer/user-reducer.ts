// Api
import { userApi } from "../api/api"
// Type
import { UsersType } from "../types/types"


const FALLOWED = `USER/FALLOWED`
const SET_USERS = `USER/SET_USERS`
const SET_TOTAL_USERS = `USER/SET_TOTAL_USERS`
const SET_CURRENCY_PAGE = `USER/SET_CURRENCY_PAGE`
const TRIGGER_LOADING = `USER/TRIGGER_LOADING`
const TRIGGER_FALLOW_PROGRESS = `USER/TRIGGER_FALLOW_PROGRESS`

const initialState = {
    users: [] as Array<UsersType>,
    followProgress: [] as Array<number>, // users id
    currentPage: 1 as number,
    sizePage: 20 as number,
    totalUsers: null as number | null,
    isLoading: false as boolean,
}

type InitialStateType = typeof initialState

export const userReducer = (state: InitialStateType = initialState, active: any ): InitialStateType => {
    switch (active.type) {
        case FALLOWED:
            return {
                ...state,
                users: state.users.map((elem) => {
                    if (elem.id === active.id) {
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
                users: active.users
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: active.total,
            }
        case SET_CURRENCY_PAGE:
            return {
                ...state,
                currentPage: active.page,
            }
        case TRIGGER_LOADING:
            return {
                ...state,
                isLoading: active.isLoading
            }
        case TRIGGER_FALLOW_PROGRESS:
            return {
                ...state,
                followProgress: active.progress
                    ? [...state.followProgress, active.id]
                    : state.followProgress.filter(elem => elem !== active.id),
            }
        default: return state
    }
}

// Active Creator
type FallowUserActionType = {
    type: typeof FALLOWED
    id: number
}
export const fallowUser = (id: number): FallowUserActionType => ({type: FALLOWED, id})
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users})
type SetTotalUsersActionType = {
    type: typeof SET_TOTAL_USERS
    total: number
}
export const setTotalUsers = (total: number): SetTotalUsersActionType => ({type: SET_TOTAL_USERS, total})
type SetCurrencyPageActionType = {
    type: typeof SET_CURRENCY_PAGE
    page: number
}
export const setCurrencyPage = (page: number): SetCurrencyPageActionType => ({type: SET_CURRENCY_PAGE, page})
type TriggerLoadingActionType = {
    type: typeof TRIGGER_LOADING
    isLoading: boolean
}
export const triggerLoading = (isLoading: boolean): TriggerLoadingActionType => ({type: TRIGGER_LOADING, isLoading})
type TriggerFollowProgressActionType = {
    type: typeof TRIGGER_FALLOW_PROGRESS
    id: number
    progress: boolean
}
export const triggerFollowProgress = (id: number, progress: boolean): TriggerFollowProgressActionType => ({type: TRIGGER_FALLOW_PROGRESS, id, progress})

// Thunk Creator
export const requestUsers = (currentPage: number, sizePage: number) => async (dispatch: any) => {
    dispatch(triggerLoading(true))
    const data = await userApi.getUsers(currentPage, sizePage)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsers(data.totalCount))
    dispatch(triggerLoading(false))
}

export const setFollow = (id: number, users: Array<any>) => async (dispatch: any) => {
    const type = users.find((elem) => elem.id === id).followed ? 'unFollow' : 'follow'

    dispatch(triggerFollowProgress(id, true))
    const data = await userApi.setFollowed(type, id)

    if (!data.resultCode) {
        dispatch(fallowUser(id))
        dispatch(triggerFollowProgress(id, false))
    }
}
