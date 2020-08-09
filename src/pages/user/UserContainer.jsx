// Root
import React, { useEffect, memo } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
// Reducer
import { requestUsers, setFollow, setCurrencyPage } from "../../reducer/user-reducer"
// Selectors
import {
    getUser,
    getCurrentPage,
    getSizePage,
    getFollowProgress,
    getIsLoading,
    getTotalUsers,
} from "../../selectors/users-selector"
import { getProfile } from "../../selectors/profile-selector"
// Components
import { User } from "./User"



const UserWrapperContainer = memo((props) => {
    const {requestUsers, setCurrencyPage, sizePage, currentPage, setFollow, users} = props
    const handlerSetCurrencyPage = (page) => setCurrencyPage(page)
    const handlerFallowed = (id) =>  setFollow(id, users)

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

const mapStateToProps = (state) => {
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

export const UserContainer = compose(
    connect(mapStateToProps, {requestUsers, setFollow, setCurrencyPage})
)(UserWrapperContainer)
