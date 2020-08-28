// Root
import React, { FC } from "react"
import { connect } from "react-redux"
// Reducer
import { logout } from "../../thunks/auth-thunk"
// Selector
import {  getMyProfile, getIsAuth } from "../../selectors/auth-selector"
// Components
import { Header } from "./Header"
// Type
import { RootState } from "../../store"
import { AuthDataType } from "../../types/auth-reducer-type"


type StateToPopsType = {
    isAuth: boolean
    myProfile: null | AuthDataType
}

type DispatchToPopsType = {
    logout: () => void
}

const HeaderWrapperContainer: FC<StateToPopsType & DispatchToPopsType> = ({logout, ...props}) =>{
    const handlerLogOut = () => logout()

    return <Header {...props} handlerLogOut={handlerLogOut} />
}

const mapStateToProps = (state: RootState): StateToPopsType => ({
    isAuth: getIsAuth(state),
    myProfile: getMyProfile(state),
})

export const HeaderContainer = connect(mapStateToProps, {
    logout
})(HeaderWrapperContainer)
