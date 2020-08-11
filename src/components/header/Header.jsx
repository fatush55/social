// Root
import React from "react"
import { NavLink } from "react-router-dom"
// Style
import style from "./Header.module.css"
// Assets
import defaultImg from "../../assets/img/default-user.jpg"


export const Header = ({authData, isAuth, handlerLogOut}) => {
    return (
        <div className={style.root}>
            {
                isAuth
                    ? <>
                        <NavLink to={`/profile`} className={style.item} >
                            <img className={style.itemImg} src={authData.photoSmall ? authData.photoSmall : defaultImg }  alt=''/>
                            {authData.login}
                        </NavLink>
                        <div className={`${style.item} ${style.itemBtn}`} onClick={handlerLogOut}>
                            Log Out
                        </div>
                    </>
                    : <>
                        <NavLink to='/signup' className={style.item}>
                            Sign Up
                        </NavLink>
                        <NavLink to='/login' className={style.item}>
                            Log in
                        </NavLink>
                    </>
            }
        </div>
    )
}
