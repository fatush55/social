// Root
import React, { FC } from "react"
import { Redirect } from "react-router-dom"
// Components
import { LoginForm } from "../../formik/form/login/LoginForm"
import { LoginValue } from "../../types/auth-reducer-type";

type PropsType = {
    handlerSubmit: ({ email, password, rememberMy, captcha }: LoginValue) => LoginValue
    isAuth: boolean
    captcha: string
}

export const Login: FC<PropsType> = ({handlerSubmit, isAuth, captcha}) => {
    if (isAuth) return <Redirect to='/profile' />

    return <LoginForm handlerSubmit={handlerSubmit} rememberMy={false} password={''} email={''} captcha={captcha} />
}
