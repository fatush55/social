// Root
import React from "react"
import {connect} from "react-redux"
// Selectors
import { getCurrentProfile } from "../../selectors/app-selector"
//Components
import { NavBar } from "./NavBar"


const NavBarWrapperContainer = (props) => <NavBar {...props} />

const mapStateToProps = (store) => ({
    currentProfile: getCurrentProfile(store)
})

export const NavBarContainer = connect(mapStateToProps, null)(NavBarWrapperContainer)