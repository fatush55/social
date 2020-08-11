// Root
import React from "react"
import { Redirect } from "react-router-dom"
// Style
import style from "./Login.module.css"
// Components
import { LoginForm } from "./components/LoginForm"


export const Login = ({handlerSubmit, isAuth, captcha}) => {
    if (isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div className={style.root}>
            <h1>Log In</h1>
            <LoginForm onSubmit={handlerSubmit} captcha={captcha} />
        </div>
    )
}
