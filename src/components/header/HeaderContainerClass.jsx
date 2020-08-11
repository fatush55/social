// Root
import React , { Component } from "react"
import { connect } from "react-redux"
// Reducer
import { logout } from "../../reducer/auth-reducer"
// Selector
import {  getAuthData, getIsAuth } from "../../selectors/auth-selector"
// Components
import { Header } from "./Header"


class HeaderApiContainer extends Component {
    handlerLogOut = () => this.props.logout()

    render() {
        return <Header {...this.props} handlerLogOut={this.handlerLogOut} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    authData: getAuthData(state),
})

export const HeaderContainer = connect(mapStateToProps, {logout})(HeaderApiContainer)