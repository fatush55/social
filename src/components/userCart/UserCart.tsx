// Root
import React, {FC, memo} from "react"
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux"
import classes from "classnames"
// Style
import style from "./UserCart.module.css"
// Assets
import defaultUserImg from "../../assets/img/default-user.jpg"
// Components
import {MiniLoader} from "../../commons/miniLoader/MiniLoader"
// Selector
import {getProfile} from "../../selectors/profile-selector"
// Type
import {UsersType} from "../../types/types"
import {getFollowProgress} from "../../selectors/users-selector";


type PropsType = {
    user: UsersType
    fallowUser: (id: number) => void
}

export const UserCart: FC<PropsType> = memo(({user, fallowUser}) => {
    const profile = useSelector(getProfile)
    const followProgress = useSelector(getFollowProgress)

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
})
