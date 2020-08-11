// Root
import React, {createRef, useEffect, useState} from "react"
// Style
import style from "./Profile.module.css"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons"
// Components
import { Comment } from "../../components/comment/Comment"
import { Loader } from "../../commons/loader/Loader"
import { ProfileStatus } from "./components/ProfileStatus/ProfileStatus"
import { ProfileInfoList } from "./components/ProfileInfoList/ProfileInfoList"
import { ProfileAvatar } from "./components/ProfileAvatar/ProfileAvatar"
import { CommentForm } from "./components/CommentForm/CommentForm"
import { ProfileForm } from "./components/ProfileForm/ProfileForm"


export const Profile = (props) => {
    const {
        comments, profile, handlerAddComment, handlerProfile, isLoading,
        status, upDateStatus, handlerUpdatePhoto, idAuth, statusUpdateProfile
    } = props
    const [editMode, setEditMode] = useState(false)
    const container = createRef()
    const handlerEditMode = () => setEditMode(!editMode)

    useEffect(() => {
        !isLoading && container.current.scrollBy(0, container.current.offsetHeight)
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
                                            <ProfileForm
                                                profile={profile}
                                                initialValues={profile}
                                                onSubmit={(profile) => handlerProfile(profile)}
                                            />
                                            <button className={style.showBtn} onClick={handlerEditMode}>
                                                <FontAwesomeIcon icon={faTimes}/>
                                            </button>
                                        </div>
                                        : <div className={style.showMode}>
                                            <ProfileAvatar profile={profile} handlerUpdatePhoto={handlerUpdatePhoto} idAuth={idAuth} />
                                            <ProfileStatus
                                                status={status}
                                                upDateStatus={upDateStatus}
                                                idAuth={idAuth}
                                                userId={profile.userId}
                                            />
                                            {
                                                profile.userId === idAuth && <>
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
                            <CommentForm onSubmit={({comment}) => handlerAddComment(comment)}/>
                        </div>
                    </>
            }
        </div>
    )
}
