import React, { FC } from "react"
//Style
import style from "./ProfileInfoList.module.css"
// Type
import { ProfileType } from "../../../../types/types"


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
            {/*{*/}
            {/*    contacts.map((elem) => {*/}
            {/*        return (*/}
            {/*            <div key={elem} className={style.infoItem}>*/}
            {/*                <span>{elem} :</span> {profile.contacts[elem] ? profile.contacts[elem] : 'No'}*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}

            <div  className={style.infoItem}>
                <span>facebook :</span> {profile && profile.contacts && profile.contacts.facebook ? profile.contacts.facebook : 'No'}
            </div>

            <div  className={style.infoItem}>
                <span>github :</span> {profile && profile.contacts && profile.contacts.github ? profile.contacts.github : 'No'}
            </div>

            <div  className={style.infoItem}>
                <span>instagram :</span> {profile && profile.contacts && profile.contacts.instagram ? profile.contacts.instagram : 'No'}
            </div>

            <div  className={style.infoItem}>
                <span>mainLink :</span> {profile && profile.contacts && profile.contacts.mainLink ? profile.contacts.mainLink : 'No'}
            </div>

            <div  className={style.infoItem}>
                <span>twitter :</span> {profile && profile.contacts && profile.contacts.twitter ? profile.contacts.twitter : 'No'}
            </div>

            <div  className={style.infoItem}>
                <span>vk :</span> {profile && profile.contacts && profile.contacts.vk ? profile.contacts.vk : 'No'}
            </div>

            <div  className={style.infoItem}>
                <span>website :</span> {profile && profile.contacts && profile.contacts.website ? profile.contacts.website : 'No'}
            </div>

            <div  className={style.infoItem}>
                <span>youtube :</span> {profile && profile.contacts && profile.contacts.youtube? profile.contacts.youtube : 'No'}
            </div>

        </div>
    )
}
