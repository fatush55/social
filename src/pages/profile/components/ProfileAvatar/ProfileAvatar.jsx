// Root
import React from "react"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileImage } from "@fortawesome/free-solid-svg-icons"
// Assets
import defaultImg from "../../../../assets/img/default-user.jpg"
//Style
import style from "./ProfileAvatar.module.css"


export const ProfileAvatar = ({profile, handlerUpdatePhoto, idAuth}) => {
    return (
        <div className={style.avatar}>
            <div>
                <img src={profile.photos ? profile.photos.large : defaultImg} alt="avatar"/>
            </div>
            {
                idAuth === profile.userId && (
                    <div className={style.fileBtn}>
                        <label htmlFor="file-upload" className={style.fileLabel}>
                            <FontAwesomeIcon icon={faFileImage}/>
                        </label>
                        <input id="file-upload" type="file" onChange={handlerUpdatePhoto}/>
                    </div>
                )
            }
        </div>
    )
}
