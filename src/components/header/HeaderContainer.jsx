// Root
import React from "react"
import { connect } from "react-redux"
// Reducer
import { logout } from "../../reducer/auth-reducer"
// Selector
import {  getAuthData, getIsAuth } from "../../selectors/auth-selector"
// Components
import { Header } from "./Header"


const HeaderApiContainer = ({logout, ...props}) =>{
    const handlerLogOut = () => logout()

    return <Header {...props} handlerLogOut={handlerLogOut} />
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    authData: getAuthData(state),
})

export const HeaderContainer = connect(mapStateToProps, {logout})(HeaderApiContainer)
