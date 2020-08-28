// Root
import React, {FC} from "react"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileImage } from "@fortawesome/free-solid-svg-icons"
// Assets
import defaultImg from "../../../../assets/img/default-user.jpg"
//Style
import style from "./ProfileAvatar.module.css"
// Type
import { ProfileType } from "../../../../types/types"



type PropsType = {
    profile: ProfileType | null
    handlerUpdatePhoto: (file: File) => void
    idAuth: number | null
}

export const ProfileAvatar: FC<PropsType> = ({profile, handlerUpdatePhoto, idAuth}) => {
    return (
        <div className={style.avatar}>
            <div>
                <img src={profile && profile.photos && profile.photos.large ? profile.photos.large : defaultImg} alt="avatar"/>
            </div>
            {
                idAuth === (profile && profile.userId) && (
                    <div className={style.fileBtn}>
                        <label htmlFor="file-upload" className={style.fileLabel}>
                            <FontAwesomeIcon icon={faFileImage}/>
                        </label>
                        <input id="file-upload" type="file" onChange={(event) => event.target.files && handlerUpdatePhoto(event.target.files[0])}/>
                    </div>
                )
            }
        </div>
    )
}
