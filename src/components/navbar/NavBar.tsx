// Root
import React, { FC } from "react"
import { NavLink } from "react-router-dom"
// Style
import style from "./NavBar.module.css"


type PropsType = {
    currentProfile?: null | number
}

export const NavBar: FC<PropsType> = ({currentProfile}) => {
    const currentProfileId = currentProfile ? `/${currentProfile}` : ''

    return (
        <div className={style.root}>
            <div className={style.rootContainer} />
            <div className={style.itemContainer}>
                <NavLink className={style.item} to={`/profile${currentProfileId}`} activeClassName={style.itemActive} >
                    Profile
                </NavLink>
                <NavLink className={style.item} to='/dialog' activeClassName={style.itemActive}>
                    Dialog
                </NavLink>
                <NavLink className={style.item} to='/user' activeClassName={style.itemActive}>
                    User
                </NavLink>
                {/*<NavLink className={style.item} to='/test' activeClassName={style.itemActive}>*/}
                {/*    Test*/}
                {/*</NavLink>*/}
            </div>
        </div>

    )
}
