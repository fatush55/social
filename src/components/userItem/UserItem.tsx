// Root
import React, { FC } from "react"
// Style
import style from "./UserItem.module.css"
// Type
import { UsersDialogType } from "../../types/dialog-reduser-type"


type MatchType = {
    params: {idUser: number};
    isExact: boolean;
    path: string;
    url: string;
}

type PropsType = {
    user: UsersDialogType
    match: MatchType
}

export const UserItem: FC<PropsType> = ({user, match}) => {
    const idUser = match.params.idUser ? Number(match.params.idUser) : 1

    return (
        <div className={idUser === user.id ? style.active : style.root}>
            <div className={style.avatar}>
                <img src={user.img.url} alt={user.img.alt}/>
            </div>
            <div className={style.info}>
                <p>{user.name}</p>
            </div>
            <div className={style.alert}>
                <div className={style.alertBox}>
                    {user.message}
                </div>
            </div>
        </div>
    )
}
