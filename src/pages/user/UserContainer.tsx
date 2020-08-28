// Root
import React, { useEffect, memo, FC } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
// Thunk
import { requestUsers, setFollow, editCurrencyPage } from "../../thunks/user-thunk"
// Selectors
import {
    getUser, getCurrentPage, getSizePage, getFollowProgress, getIsLoading, getTotalUsers,
} from "../../selectors/users-selector"
import { getProfile } from "../../selectors/profile-selector"
// Components
import { User } from "./User"
// Type
import { ProfileType, UsersType } from "../../types/types"
import { RootState } from "../../store"


type StateToPopsType = {
    users: Array<UsersType>
    currentPage: number
    sizePage: number
    totalUsers: number | null,
    isLoading: boolean
    followProgress: Array<number>
    profile: null |ProfileType
}

type DispatchToPopsType = {
    requestUsers: (currentPage: number, sizePage: number) => void
    setFollow: (id: number, users: Array<UsersType>) => void
    editCurrencyPage: (page: number) => void
}


const UserWrapperContainer: FC<StateToPopsType & DispatchToPopsType> = memo((props) => {
    const {requestUsers, editCurrencyPage, sizePage, currentPage, setFollow, users} = props
    const handlerSetCurrencyPage = (page: number) => editCurrencyPage(page)
    const handlerFallowed = (id: number) => setFollow(id, users)


    useEffect(() => {
        requestUsers(currentPage, sizePage)
    }, [currentPage, sizePage, requestUsers])

    return (
        <User
            {...props}
            setCurrencyPage={handlerSetCurrencyPage}
            fallowUser={handlerFallowed}
        />
    )
})

const mapStateToProps = (state: RootState): StateToPopsType => {
    return {
        users: getUser(state),
        currentPage: getCurrentPage(state),
        sizePage: getSizePage(state),
        totalUsers: getTotalUsers(state),
        isLoading: getIsLoading(state),
        followProgress: getFollowProgress(state),
        profile: getProfile(state)
    }
}

export const UserContainer = compose<StateToPopsType & DispatchToPopsType>(
    connect(mapStateToProps, {requestUsers, setFollow, editCurrencyPage})
)(UserWrapperContainer)
