// Root
import React, { createRef, useEffect, useState, FC } from "react"
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
import { WriteAreaForm } from "../../formik/form/write-area-form/WriteAreaForm"

// Type
import {CommentType, ProfileType} from "../../types/types"
import {ProfileForm} from "../../formik/form/profile/ProfileForm";
import {ProfileFormValueType} from "../../types/profile-reducer-type";



type SubmitType = {
    message: string
}

type PropsType = {
    comments: Array<CommentType>
    profile: null | ProfileType
    isLoading: boolean
    status: string | null
    idAuth: null | number

    statusUpdateProfile:boolean

    upDateStatus: (status: string) => void
    handlerAddComment: (comment: string) => void
    handlerUpdatePhoto: (event: File) => void
    requestUpdateProfile: (profile: ProfileType) => void
}

export const Profile: FC<PropsType> = (props) => {
    const {
        comments, profile, handlerAddComment, isLoading, requestUpdateProfile,
        status, upDateStatus, handlerUpdatePhoto, idAuth, statusUpdateProfile
    } = props

    const contacts = profile && profile.contacts ? {
        ...profile.contacts,
        vk: profile && profile.contacts && profile.contacts.vk ? profile.contacts.vk : '',
        website: profile && profile.contacts && profile.contacts.website ? profile.contacts.website : '',
        youtube: profile && profile.contacts && profile.contacts.youtube ? profile.contacts.youtube : ''
    } : undefined

    // State
    const [editMode, setEditMode] = useState(false)
    // Ref
    const container = createRef<HTMLDivElement>()
    // Handlers
    const handlerEditMode = () => setEditMode(!editMode)
    const handlerSubmit = (form: SubmitType) => handlerAddComment(form.message)
    const handlerSubmitProfile = (form: ProfileFormValueType) => {
       const profileUpdate = profile && {
           ...form,
           userId: profile.userId
       }
       profileUpdate && requestUpdateProfile(profileUpdate)
    }

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
                                                <ProfileForm
                                                    handlerSubmit={handlerSubmitProfile}
                                                    lookingForAJob={profile ? profile.lookingForAJob: false}
                                                    lookingForAJobDescription={profile ? profile.lookingForAJobDescription : ''}
                                                    fullName={profile ? profile.fullName : ''}
                                                    aboutMe={profile ? profile.aboutMe : ''}
                                                    contacts={contacts}
                                                />
                                            }
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
                            <WriteAreaForm handlerSubmit={handlerSubmit} message='' />
                        </div>
                    </>
            }
        </div>
    )
}
