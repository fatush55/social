// Root
import React, {FC, useEffect, useState} from "react"
import {useSelector} from "react-redux"
// Style
import style from "./ProfileModes.module.css"
// Component
import {ProfileForm} from "../../formik/form/profile/ProfileForm"
import {ProfileAvatar} from "./components/ProfileAvatar/ProfileAvatar"
import {ProfileStatus} from "./components/ProfileStatus/ProfileStatus"
import {ProfileInfoList} from "./components/ProfileInfoList/ProfileInfoList"
// FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEdit, faTimes} from "@fortawesome/free-solid-svg-icons"
// Selector
import {getStatusUpdateProfile} from "../../selectors/profile-selector"
// Type
import {ProfileType} from "../../types/types"
import {AuthDataType} from "../../types/auth-reducer-type"


type PropsType = {
    profile: ProfileType | null
    authData: AuthDataType | null
}

export const ProfileModes: FC<PropsType> = ({profile, authData}) => {
    const statusUpdateProfile = useSelector(getStatusUpdateProfile)
    const idAuth = authData && authData.id ? authData.id : null

    const [editMode, setEditMode] = useState(false)
    const handlerEditMode = () => setEditMode(!editMode)

    useEffect(() => {
        statusUpdateProfile && setEditMode(false)
    }, [statusUpdateProfile, setEditMode])

    return (
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
    )
}
