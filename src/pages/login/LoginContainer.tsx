// Root
import React, { memo, FC } from "react"
import {connect} from "react-redux"
import { compose } from "redux"
// Thunk
import { login } from "../../thunks/auth-thunk"
// Selector
import { getCaptcha, getIsAuth } from "../../selectors/auth-selector"
// Components
import { Login } from "./Login"
// Type
import { RootState } from "../../store"
import { LoginValue } from "../../types/auth-reducer-type"


type StateToPopsType = {
    isAuth: boolean
    captcha: string
}

type DispatchToPopsType = {
    login: ({ email, password, rememberMy, captcha }: LoginValue) => any
}

const LoginWrapperContainer: FC<StateToPopsType & DispatchToPopsType> =  memo((props) => {
    const handlerSubmit = ({email, password, rememberMy, captcha}: LoginValue): LoginValue => props.login({email, password, rememberMy, captcha})

    return <Login {...props} handlerSubmit={handlerSubmit} />
})

const mapStateToProps = (state: RootState): StateToPopsType => ({
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state)
})

const LoginContainer = compose<StateToPopsType & DispatchToPopsType>(
    connect(mapStateToProps, {login})
)(LoginWrapperContainer)

export default LoginContainer