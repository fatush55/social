// Root
import React, { memo } from "react"
import {connect} from "react-redux"
import { compose } from "redux"
// Reducer
import { login, logout } from "../../reducer/auth-reducer"
// Selector
import {  getAuthData, getIsAuth } from "../../selectors/auth-selector"
// Components
import { Login } from "./Login"


const LoginWrapperContainer =  memo((props) =>{
    const handlerSubmit = (loginData) => props.login(loginData)

    return <Login {...props} handlerSubmit={handlerSubmit} />
})

const mapStateToProps = (state) => ({
    authData: getAuthData(state),
    isAuth: getIsAuth(state),
})

const LoginContainer = compose(
    connect(mapStateToProps, {login, logout})
)(LoginWrapperContainer)

export default LoginContainer