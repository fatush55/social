// Root
import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import classes from "classnames"
// Style
import style from "./UserCart.module.css"
// Assets
import defaultUserImg from "../../assets/img/default-user.jpg"
// Components
import { MiniLoader } from "../../commons/miniLoader/MiniLoader";
// Type
import { ProfileType, UsersType } from "../../types/types"


type PropsType = {
    user: UsersType
    fallowUser: (id: number) => void
    followProgress: Array<number>
    profile: null | ProfileType
}

export const UserCart: FC<PropsType> = ({user, fallowUser, followProgress, profile}) => {
    const isDisabled = followProgress.some(id => id === user.id)
    const classesRoot = classes(
        style.root, {[style.activeProf]: profile && profile.userId === user.id}, user.followed ? style.fallowed : style.unFallowed,
    )

    return (
        <div className={classesRoot}>
            <div className={style.ava}>
                <NavLink to={`/profile/${user.id}`} className={style.linkImg}>
                    <img src={user && user.photos && user.photos.small ? user.photos.small : defaultUserImg } alt='ava' />
                </NavLink>
            </div>
            <div className={style.info}>
                <h4>{user.name}</h4>
            </div>
            <div className={style.action}>
                <button onClick={() => fallowUser(user.id)} value={user.followed ? 1 : 0 } disabled={isDisabled}>
                    {
                        isDisabled
                            ? <MiniLoader/>
                            : user.followed ? 'unFollow' : 'follow'
                    }
                </button>
            </div>
        </div>
    )
}
