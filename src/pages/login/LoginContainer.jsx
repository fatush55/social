// Root
import React, { memo } from "react"
import {connect} from "react-redux"
import { compose } from "redux"
// Reducer
import { login, logout } from "../../reducer/auth-reducer"
// Selector
import { getCaptcha, getIsAuth } from "../../selectors/auth-selector"
// Components
import { Login } from "./Login"


const LoginWrapperContainer =  memo((props) =>{
    const handlerSubmit = ({email, password, rememberMy, captcha}) => props.login(email, password, rememberMy, captcha)

    return <Login {...props} handlerSubmit={handlerSubmit} />
})

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state)
})

const LoginContainer = compose(
    connect(mapStateToProps, {login, logout})
)(LoginWrapperContainer)

export default LoginContainer