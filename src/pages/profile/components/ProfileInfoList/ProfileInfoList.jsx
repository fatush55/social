import React from "react";
//Style
import style from "./ProfileInfoList.module.css";

export const ProfileInfoList = ({profile}) => {
    return (
        <div className={style.info}>
            <div className={style.infoItem}>
                <span>full Name :</span> {profile.fullName}
            </div>
            <div className={style.infoItem}>
                <span>about Me :</span> {profile.aboutMe ? profile.aboutMe  : 'empty...'}
            </div>
            <div className={style.infoItem}>
                <span>looking ForA Job :</span> {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div className={style.infoItem}>
                <span>looking For A JobDescription :</span> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'empty...'}
            </div>
            <h3>Contacts</h3>
            {
                Object.keys(profile.contacts).map(elem => {
                    return (
                        <div key={elem} className={style.infoItem}>
                            <span>{elem} :</span> {profile.contacts[elem] ? profile.contacts[elem] : 'No'}
                        </div>
                    )
                })
            }
        </div>
    )
}
