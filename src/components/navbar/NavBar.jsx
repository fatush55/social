// Root
import React from "react"
import { NavLink } from "react-router-dom"
// Style
import style from "./NavBar.module.css"


export const NavBar = () => {
    return (
        <div className={style.root}>
            <div className={style.rootContainer} />
            <div className={style.itemContainer}>
                <NavLink className={style.item} to='/profile' activeClassName={style.itemActive} >
                    Profile
                </NavLink>
                <NavLink className={style.item} to='/dialog' activeClassName={style.itemActive}>
                    Dialog
                </NavLink>
                <NavLink className={style.item} to='/user' activeClassName={style.itemActive}>
                    User
                </NavLink>
            </div>
        </div>

    )
}
