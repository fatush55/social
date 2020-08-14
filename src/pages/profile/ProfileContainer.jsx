// Root
import React, { memo, useEffect } from "react"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import { compose } from "redux"
// HOC
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
// Reducer
import {
    createComment, requestProfile, requestStatus, upDataStatus, requestUpdatePhotos, requestUpdateProfile
} from "../../reducer/profile-reducer"
// Selector
import {
    getIsLoading, getStatus, getProfile, getComments, getStatusUpdateProfile,
} from "../../selectors/profile-selector"
import { getMyProfile } from "../../selectors/auth-selector"
import { getCurrentProfile } from "../../selectors/app-selector"
// Components
import { Profile } from "./Profile"


const ProfileWrapperContainer =  memo((props) => {
    const {
        requestProfile, createComment, requestStatus, upDataStatus,
        authData, match, currentProfile, requestUpdatePhotos, requestUpdateProfile,
        ...prop
    } = props

    const handlerUpDateStatus = (status) => upDataStatus(status)
    const handlerAddComment = (comment) => createComment(comment, prop.profile.photos.small)
    const handlerUpdatePhoto = (event) => requestUpdatePhotos(event.target.files[0])
    const handlerProfile = (profile) =>  requestUpdateProfile({...profile})

    useEffect(() => {
        const id = Number(match.params.idUser) || authData.id

        if (id !== currentProfile) {
            requestProfile(id)
            requestStatus(id)
        }
    }, [match, authData, requestProfile, requestStatus, currentProfile])

    return (
        <Profile
            {...prop}
            idAuth={authData.id ? authData.id : null}
            upDateStatus={handlerUpDateStatus}
            handlerAddComment={handlerAddComment}
            handlerUpdatePhoto={handlerUpdatePhoto}
            handlerProfile={handlerProfile}
        />
    )
})

const mapStateToProps = (state) => {
    return {
        comments: getComments(state),
        profile: getProfile(state),
        status: getStatus(state),
        isLoading: getIsLoading(state),
        authData: getMyProfile(state),
        currentProfile: getCurrentProfile(state),
        statusUpdateProfile: getStatusUpdateProfile(state)
    }
}

export const ProfileContainer = compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        createComment, requestProfile, requestStatus, upDataStatus, requestUpdatePhotos, requestUpdateProfile
    }),
)(ProfileWrapperContainer)
