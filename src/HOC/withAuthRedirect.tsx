// Root
import React, { ComponentType, FC } from "react"
import { Redirect, RouteComponentProps } from "react-router-dom"
import { connect } from "react-redux"
// Selector
import { getIsAuth } from "../selectors/auth-selector"
// Type
import { RootState } from "../store"


type mapStateToPropsType = {
    isAuth: boolean
}
type OwnToPropsType = RouteComponentProps<RouteMatchType>


type RouteMatchType = {
    idUser: string
}

const mapStateToProps = (state: RootState): mapStateToPropsType => ({
    isAuth: getIsAuth(state),
})

export const withAuthRedirect = <P extends {}>(WrapperComponent: ComponentType<P>) => {
    const RedirectComponent: FC<mapStateToPropsType & OwnToPropsType> = (props) => {
        const {isAuth, ...restProps} = props
        const urlProfile = '/profile/:idUser?'

        if (!isAuth && !(restProps.match.path === urlProfile && restProps.match.params.idUser)) {
            return <Redirect to='/login'/>
        }

        return <WrapperComponent {...restProps as P & OwnToPropsType} />
    }

    return connect<mapStateToPropsType, {}, P, RootState>(
        mapStateToProps,
    )(RedirectComponent)
}
