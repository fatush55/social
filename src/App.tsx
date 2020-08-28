// Root
import React, { useEffect, useLayoutEffect, FC, useCallback } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Routes } from "./Routes"
import { connect, Provider } from "react-redux"
import { compose } from "redux"
// Reducer
import { setInitialize, cycleAlert } from "./thunks/app-thunk"
// Selector
import { getInitialize } from "./selectors/app-selector"
// Style
import style from "./App.module.css"
// Components
import { HeaderContainer } from "./components/header/HeaderContainer"
import { InitializeLoading } from "./components/initializeLoding/InitializeLoading"
import { NavBarContainer } from "./components/navbar/NavBarContainer"
import { AlertContainer } from "./components/alert/AlertContainer"
// Type
import {RootState, store} from "./store"
import { AlertType } from "./types/app-reducet-type"


type StateToPopsType = {
    initialize: boolean
}

type DispatchToPopsType = {
    setInitialize: () => void
    cycleAlert: (message: AlertType) => void
}

const  AppContainer: FC<StateToPopsType & DispatchToPopsType> = ({setInitialize, initialize, cycleAlert}) => {
    const catchAllUnHandlerErrors = useCallback ( () => (promiseRejectedEvent: {reason: any}): void => {
        cycleAlert({message: promiseRejectedEvent.reason.message, type: "error"})
    }, [cycleAlert])

    useLayoutEffect(() => {
        window.removeEventListener('unhandledrejection', catchAllUnHandlerErrors)
    })

    useEffect(() => {
        setInitialize()
        window.addEventListener('unhandledrejection', catchAllUnHandlerErrors)
    }, [setInitialize, catchAllUnHandlerErrors])

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

const mapStateToProps = (state: RootState): StateToPopsType => ({
    initialize: getInitialize(state),
})

const AppWrapper = compose(
    connect(mapStateToProps, {
        setInitialize, cycleAlert
    }),
)(AppContainer)


export const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppWrapper />
            </Provider>
        </React.StrictMode>
    )
}
