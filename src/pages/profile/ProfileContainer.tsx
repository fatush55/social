// Root
import React, { memo, useEffect, FC } from "react"
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
// Type
import { RootState } from "../../store"
import { CommentType, ProfileType, MatchType } from "../../types/types"
import { AuthDataType } from "../../types/auth-reducer-type"


type StateToPopsType = {
    comments: Array<CommentType>,
    profile: null | ProfileType,
    status: null | string,
    isLoading: boolean,
    authData: null | AuthDataType,
    currentProfile: null | number,
    statusUpdateProfile: boolean
}

type DispatchToPopsType = {
    createComment: (comment: string, img: string) => void
    requestProfile: (id: number) => void
    requestStatus: (id: number) => void
    upDataStatus: (status: string) => void
    requestUpdatePhotos: (file: object) => void
    requestUpdateProfile: (profileData: ProfileType) => void
}

type OwnToPopsType = {
    match: MatchType
}

const ProfileWrapperContainer: FC<StateToPopsType & DispatchToPopsType & OwnToPopsType> =  memo((props) => {
    const {
        requestProfile, createComment, requestStatus, upDataStatus,
        authData, match, currentProfile, requestUpdatePhotos, requestUpdateProfile,
        ...prop
    } = props
    const photoUrl = prop.profile && prop.profile.photos && prop.profile.photos.small ? prop.profile.photos.small : ''
    const handlerUpDateStatus = (status: string): void => upDataStatus(status)
    const handlerAddComment = (comment: string) => createComment(comment, photoUrl)
    const handlerUpdatePhoto = (file: object) => requestUpdatePhotos(file)
    // const handlerProfile = (form: ProfileType) =>  props.profile && requestUpdateProfile({...props.profile, contacts: form})


    useEffect(() => {
        const id = Number(match.params.idUser) || (authData && authData.id ? authData.id : 0)

        if (id !== currentProfile) {
            requestProfile(id)
            requestStatus(id)
        }
    }, [match, authData, requestProfile, requestStatus, currentProfile])

    return (
        <Profile
            {...prop}
            idAuth={authData && authData.id ? authData.id : null}
            upDateStatus={handlerUpDateStatus}
            handlerAddComment={handlerAddComment}
            handlerUpdatePhoto={handlerUpdatePhoto}
            requestUpdateProfile={requestUpdateProfile}
        />
    )
})

const mapStateToProps = (state: RootState): StateToPopsType => {
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
