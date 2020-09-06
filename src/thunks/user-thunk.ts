// Api
import { userApi } from "../api/user-api"
// Action
import { actionsUser } from "../actions/user-action"
// Type
import { RootThunkCreatorType } from "../store"
import { ResponseResultCodeType } from "../api/api"
import { ActionReducerType } from "../reducers/user-reducer"


type ThunkCreatorType = RootThunkCreatorType<ActionReducerType>

export const requestUsers = (currentPage: number, sizePage: number, search: string = '', typeSearch: string = 'all'): ThunkCreatorType => async (dispatch) => {
    dispatch(actionsUser.triggerLoading(true))
    const data = await userApi.getUsers(currentPage, sizePage, search, typeSearch)
    dispatch(actionsUser.setUsers(data.items))
    dispatch(actionsUser.setTotalUsers(data.totalCount))
    dispatch(actionsUser.triggerLoading(false))
}

export const setFollow = (id: number, users: Array<any>): ThunkCreatorType => async (dispatch) => {
    const type = users.find((elem) => elem.id === id).followed ? 'unFollow' : 'follow'

    dispatch(actionsUser.triggerFollowProgress(id, true))
    const data = await userApi.setFollowed(type, id)

    if (data.resultCode === ResponseResultCodeType.success) {
        dispatch(actionsUser.fallowUser(id))
        dispatch(actionsUser.triggerFollowProgress(id, false))
    }
}

export const editCurrencyPage = (page: number): ThunkCreatorType => (dispatch) => {
    dispatch(actionsUser.setCurrencyPage(page))
}

export const editSizePage = (size: number): ThunkCreatorType => (dispatch) => {
    dispatch(actionsUser.setSizePage(size))
}

export const setSearchUser = (search: string, type: string): ThunkCreatorType => (dispatch) => {
    dispatch(actionsUser.setSearchUser(search, type))
}
