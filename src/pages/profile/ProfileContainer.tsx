// Root
import React, {createRef, FC, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {compose} from "redux";
import {withRouter} from "react-router"
// Style
import style from "./Profile.module.css"
// FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEdit, faTimes} from "@fortawesome/free-solid-svg-icons"
// HOC
import {withAuthRedirect} from "../../HOC/withAuthRedirect"
// Components
import {Comment} from "../../components/comment/Comment"
import {Loader} from "../../commons/loader/Loader"
import {ProfileStatus} from "./components/ProfileStatus/ProfileStatus"
import {ProfileInfoList} from "./components/ProfileInfoList/ProfileInfoList"
import {ProfileAvatar} from "./components/ProfileAvatar/ProfileAvatar"
import {WriteAreaForm} from "../../formik/form/write-area-form/WriteAreaForm"
import {ProfileForm} from "../../formik/form/profile/ProfileForm"
// Thunks
import {createComment, requestProfile, requestStatus} from "../../thunks/profile-thunk"
// Selectors
import {getComments, getProfile, getStatusUpdateProfile} from "../../selectors/profile-selector"
import {getMyProfile} from "../../selectors/auth-selector"
import {getCurrentProfile} from "../../selectors/app-selector"
import {getIsLoading} from "../../selectors/users-selector";
// Type
import {MatchType} from "../../types/types"


type PropsType = {
    match: MatchType
}

const Profile: FC<PropsType> = ({match}) => {
    const dispatch = useDispatch()
    const comments = useSelector(getComments)
    const profile = useSelector(getProfile)
    const isLoading = useSelector(getIsLoading)
    const authData = useSelector(getMyProfile)
    const currentProfile = useSelector(getCurrentProfile)
    const statusUpdateProfile = useSelector(getStatusUpdateProfile)

    const idAuth = authData && authData.id ? authData.id : null
    const photoUrl = profile && profile.photos && profile.photos.small ? profile.photos.small : ''

    // State
    const [editMode, setEditMode] = useState(false)
    // Ref
    const container = createRef<HTMLDivElement>()
    // Handlers
    const handlerAction = (message: string) => dispatch(createComment(message, photoUrl))
    const handlerEditMode = () => setEditMode(!editMode)

    useEffect(() => {
        const id = Number(match.params.idUser) || (authData && authData.id ? authData.id : 0)

        if (id !== currentProfile) {
            dispatch(requestProfile(id))
            dispatch(requestStatus(id))
        }
    }, [match, authData, currentProfile, dispatch])

    useEffect(() => {
        const current = container.current
        current && !isLoading && current.scrollBy(0, current.offsetHeight)
    })

    useEffect(() => {
        statusUpdateProfile && setEditMode(false)
    }, [statusUpdateProfile, setEditMode])

    return (
        <div className={style.root}>
            {
                isLoading
                    ? <Loader/>
                    : <>
                        <div className={style.infoContainer}>
                            <div className={style.profileInfo}>
                                {
                                    editMode
                                        ? <div className={style.editMode}>
                                            {
                                                <ProfileForm />
                                            }
                                            <button className={style.showBtn} onClick={handlerEditMode}>
                                                <FontAwesomeIcon icon={faTimes}/>
                                            </button>
                                        </div>
                                        : <div className={style.showMode}>
                                            <ProfileAvatar profile={profile} idAuth={idAuth} />
                                            <ProfileStatus
                                                idAuth={idAuth}
                                                userId={profile && profile.userId}
                                            />
                                            {
                                                profile && profile.userId === idAuth && <>
                                                    <button className={style.editBtn} onClick={handlerEditMode}>
                                                        <FontAwesomeIcon icon={faEdit}/>
                                                    </button>
                                                </>
                                            }
                                            <ProfileInfoList profile={profile} />
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={style.commentContainer}>
                            <div className={style.comment} ref={container}>
                                {
                                    comments.map(elem => <Comment key={elem.id} comment={elem} />)
                                }
                            </div>
                            <WriteAreaForm handlerAction={handlerAction} />
                        </div>
                    </>
            }
        </div>
    )
}

export const ProfileContainer = compose<PropsType>(
    withRouter,
    withAuthRedirect,
)(Profile)
