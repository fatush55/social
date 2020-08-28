import React, { FC } from "react"
//Style
import style from "./ProfileInfoList.module.css"
// Type
import {ContactsType, ProfileType} from "../../../../types/types"


type PropsType = {
    profile: ProfileType | null
}

export const ProfileInfoList: FC<PropsType> = ({profile}) => {
    // const contacts = profile && profile.contacts ? Object.keys(profile.contacts) : [];

    return (
        <div className={style.info}>
            <div className={style.infoItem}>
                <span>full Name :</span> {profile && profile.fullName}
            </div>
            <div className={style.infoItem}>
                <span>about Me :</span> {profile && profile.aboutMe ? profile.aboutMe  : 'empty...'}
            </div>
            <div className={style.infoItem}>
                <span>looking ForA Job :</span> {profile && profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div className={style.infoItem}>
                <span>looking For A JobDescription :</span> {profile && profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'empty...'}
            </div>
            <h3>Contacts</h3>
            {
               profile?.contacts && Object.keys(profile.contacts).map((key) => {
                    return (
                        <div key={key} className={style.infoItem}>
                            <span>{key}</span> {profile.contacts && profile.contacts[key as keyof ContactsType] ? profile.contacts[key as keyof ContactsType] : "No"}
                        </div>
                    )
                })
            }
        </div>
    )
}
