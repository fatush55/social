// Root
import React from "react"
// Style
import style from "./ProfileInfo.module.css"
//Components
import { ProfileStatus } from "./ProfileStatus"
// Other
import defaultImg from "../../../assets/img/default-user.jpg"


export const ProfileInfos = (props) => {
    const {profile, status, upDateStatus, idAuth} = props

    return (
        <div className={style.root}>
            <div className={style.avatar}>
                <img src={profile.photos.large ? profile.photos.large : defaultImg} alt="avatar"/>
            </div>
            <ProfileStatus status={status} upDateStatus={upDateStatus} idAuth={idAuth} userId={profile.userId} />
            <div className={style.info}>
                <h3>Contacts</h3>
                <div className={style.infoItem}>
                    <span>full Name :</span> {profile.fullName}
                </div>
                <div className={style.infoItem}>
                    <span>about Me :</span> {profile.aboutMe}
                </div>
                <div className={style.infoItem}>
                    <span>looking For A JobDescription :</span> {profile.lookingForAJobDescription}
                </div>
                <div className={style.infoItem}>
                    <span>looking ForA Job :</span> {profile.lookingForAJob ? 'Yes' : 'No'}
                </div>

                <h3>Contacts</h3>

                <div className={style.infoItem}>
                    <span>facebook :</span> {profile.facebook ? 'Yes' : 'No'}
                </div>
                <div className={style.infoItem}>
                    <span>website :</span> {profile.website ? 'Yes' : 'No'}
                </div>
                <div className={style.infoItem}>
                    <span>vk :</span> {profile.vk ? 'Yes' : 'No'}
                </div>
                <div className={style.infoItem}>
                    <span>instagram :</span> {profile.instagram ? 'Yes' : 'No'}
                </div>
                <div className={style.infoItem}>
                    <span>youtube :</span> {profile.youtube ? 'Yes' : 'No'}
                </div>
                <div className={style.infoItem}>
                    <span>github :</span> {profile.github ? 'Yes' : 'No'}
                </div>
                <div className={style.infoItem}>
                    <span>mainLink :</span> {profile.mainLink ? 'Yes' : 'No'}
                </div>
            </div>

        </div>
    )
}
