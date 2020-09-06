// Root
import React, {createRef, FC, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {compose} from "redux";
import {useRouteMatch} from "react-router"
// Style
import style from "./ProfileContainer.module.css"
// HOC
import {withAuthRedirect} from "../../HOC/withAuthRedirect"
// Components
import {Comment} from "../../components/comment/Comment"
import {Loader} from "../../commons/loader/Loader"
import {WriteAreaForm} from "../../formik/form/write-area-form/WriteAreaForm"
import {ProfileModes} from "./ProfileModes"
// Thunks
import {createComment, requestProfile, requestStatus} from "../../thunks/profile-thunk"
// Selectors
import {getComments, getProfile} from "../../selectors/profile-selector"
import {getMyProfile} from "../../selectors/auth-selector"
import {getCurrentProfile} from "../../selectors/app-selector"
import {getIsLoading} from "../../selectors/users-selector"
// Type


type ParamsType = {
    idUser: string | undefined
}

const Profile: FC = (props) => {
    const dispatch = useDispatch()
    const match = useRouteMatch<ParamsType>()
    const comments = useSelector(getComments)
    const profile = useSelector(getProfile)
    const isLoading = useSelector(getIsLoading)
    const authData = useSelector(getMyProfile)
    const currentProfile = useSelector(getCurrentProfile)

    const photoUrl = profile && profile.photos && profile.photos.small ? profile.photos.small : ''
    const container = createRef<HTMLDivElement>()

    const handlerAction = (message: string) => dispatch(createComment(message, photoUrl))

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

    return (
        <div className={style.root}>
            {
                isLoading
                    ? <Loader/>
                    : <>
                        <ProfileModes profile={profile} authData={authData} />
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

export const ProfileContainer = compose(withAuthRedirect)(Profile)
