// Root
import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
// Reducer
import { requestUsers, setFollow, } from "../../reducer/user-reducer"
// Selectors
import { getUser, getCurrentPage, getSizePage, getFollowProgress, getIsLoading, getTotalUsers } from "../../selectors/users-selector"
import { getProfile } from "../../selectors/profile-selector"
// Components
import { User } from "./User"



class UserApiContainer extends Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.sizePage)
    }

    handlerSetCurrencyPage(page) {
        this.props.requestUsers(page, this.props.sizePage)
    }

    handlerFallowed(id) {
        this.props.setFollow(id, this.props.users)
    }

    render() {
        return <User {...this.props} setCurrencyPage={this.handlerSetCurrencyPage.bind(this)} fallowUser={this.handlerFallowed.bind(this)}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUser(state),
        currentPage: getCurrentPage(state),
        sizePage: getSizePage(state),
        totalUsers: getTotalUsers(state),
        isLoading: getIsLoading(state),
        followProgress: getFollowProgress(state),
        auth: getProfile(state)
    }
}

export const UserContainer = compose(
    connect(mapStateToProps, {requestUsers, setFollow})
)(UserApiContainer)
