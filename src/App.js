// Root
import React, { useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Routes } from "./Routes"
import { connect } from "react-redux"
import { compose } from "redux";
// Reducer
import { setInitialize } from "./reducer/app-reducer"
// Selector
import { getInitialize } from "./selectors/app-selector"
// Style
import style from "./App.module.css"
// Components
import { NavBar } from "./components/navbar/NavBar"
import { HeaderContainer } from "./components/header/HeaderContainer"
import { InitializeLoading } from "./components/initializeLoding/initializeLoading"


const  AppContainer = ({setInitialize, initialize}) => {

    useEffect(() => {
        setInitialize()
    }, [setInitialize])

    return (
        <div className={style.root}>
        {
            initialize
            ? <>
                <Router>
                    <NavBar/>
                    <div className={style.contentContainer}>
                        <HeaderContainer/>
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
    connect(mapStateToProps, {setInitialize}),
)(AppContainer)
