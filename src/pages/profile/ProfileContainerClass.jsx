// Root
import React, { Component } from "react"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import { compose } from "redux"
// HOC
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
// Reducer
import { addComment, requestProfile, requestStatus, upDataStatus} from "../../reducers/profile-reducer"
// Selector
import {  getIsLoading, getStatus, getProfile, getComments } from "../../selectors/profile-selector"
import {  getMyProfile } from "../../selectors/auth-selector"
// Components
import { ProfileContainer } from "./ProfileContainer"


class ProfileApiContainer extends Component {

    componentDidMount() {
        const id = this.props.match.params.idUser || this.props.authData.id

        this.props.requestProfile(id)
        this.props.requestStatus(id)
    }

    handlerUpDateStatus = (status) => {
        this.props.upDataStatus(status)
    }

    render() {
        return <ProfileContainer {...this.props} upDateStatus={this.handlerUpDateStatus} />
    }
}

const mapStateToProps = (state) => {
    return {
        comments: getComments(state),
        profile: getProfile(state),
        status: getStatus(state),
        isLoading: getIsLoading(state),
        authData: getMyProfile(state),
    }
}

export const ProfileContainer = compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        addComment, requestProfile, requestStatus, upDataStatus
    }),
)(ProfileApiContainer)
