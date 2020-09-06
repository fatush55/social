// Action
import { actionsUser } from "../actions/user-action"
// Type
import { UsersType } from "../types/types"
import { ActionsCreatorType } from "../store"


const initialState = {
    users: [] as Array<UsersType>,
    followProgress: [] as Array<number>, // users id
    currentPage: 1 as number,
    sizePage: 20 as number,
    searchUser: {search: '', type: 'all'},
    totalUsers: null as number | null,
    isLoading: false as boolean,
}

type InitialStateType = typeof initialState
export type ActionReducerType = ActionsCreatorType<typeof actionsUser>

export const userReducer = (state: InitialStateType = initialState, action: ActionReducerType): InitialStateType => {
    switch (action.type) {
        case "USER/FALLOWED":
            return {
                ...state,
                users: state.users.map((elem) => {
                    if (elem.id === action.id) {
                        return {
                            ...elem,
                            followed: !elem.followed
                        }
                    }
                    return elem
                })
            }
        case "USER/SET_USERS":
            return  {
                ...state,
                users: action.users
            }
        case "USER/SET_TOTAL_USERS":
            return {
                ...state,
                totalUsers: action.total,
            }
        case "USER/SET_CURRENCY_PAGE":
            return {
                ...state,
                currentPage: action.page,
            }
        case "USER/SET_SIZE_PAGE":
            return {
                ...state,
                sizePage: action.size,
            }
        case "USER/SET_SEARCH_USER":
            return {
                ...state,
                searchUser: action.payload,
            }
        case "USER/TRIGGER_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        case "USER/TRIGGER_FALLOW_PROGRESS":
            return {
                ...state,
                followProgress: action.progress
                    ? [...state.followProgress, action.id]
                    : state.followProgress.filter(elem => elem !== action.id),
            }
        default: return state
    }
}
