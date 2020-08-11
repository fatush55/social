// Root
import React, {useEffect, useLayoutEffect} from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Routes } from "./Routes"
import { connect } from "react-redux"
import { compose } from "redux"
// Reducer
import { setInitialize, cycleAlert } from "./reducer/app-reducer"
// Selector
import { getInitialize } from "./selectors/app-selector"
// Style
import style from "./App.module.css"
// Components
import { HeaderContainer } from "./components/header/HeaderContainer"
import { InitializeLoading } from "./components/initializeLoding/initializeLoading"
import { NavBarContainer } from "./components/navbar/NavBarContainer"
import { AlertContainer } from "./components/alert/AlertContainer"


const  AppContainer = ({setInitialize, initialize, cycleAlert}) => {
    const catchAllUnHandlerErrors = (promiseRejectedEvent) => {
        cycleAlert({message: promiseRejectedEvent.reason.message, type: 'error'})
    }

    useLayoutEffect(() => {
        window.removeEventListener('unhandledrejection', catchAllUnHandlerErrors)
    })

    useEffect(() => {
        setInitialize()
        window.addEventListener('unhandledrejection', catchAllUnHandlerErrors)
    }, [setInitialize])

    return (
        <div className={style.root}>
        {
            initialize
            ? <>
                <Router>
                    <NavBarContainer/>
                    <div className={style.contentContainer}>
                        <HeaderContainer/>
                        <AlertContainer/>
                        <Routes/>
                    </div>
                </Router>
            </>
            : <InitializeLoading/>
        }
        </div>
    )
}

const mapStateToProps = (state) => ({
    initialize: getInitialize(state),
})

export const App = compose(
    connect(mapStateToProps, {
        setInitialize, cycleAlert
    }),
)(AppContainer)
