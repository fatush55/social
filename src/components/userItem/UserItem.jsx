// Root
import React from "react"
// Style
import style from "./UserItem.module.css"


export const UserItem = ({user, match}) => {
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
