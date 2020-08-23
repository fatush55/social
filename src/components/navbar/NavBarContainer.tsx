// Root
import React, { FC } from "react"
import { connect } from "react-redux"
// Selectors
import { getCurrentProfile } from "../../selectors/app-selector"
//Components
import { NavBar } from "./NavBar"
// Type
import { RootState } from "../../store"


type StateToPopsType = {
    currentProfile?: null | number
}

const NavBarWrapperContainer: FC<StateToPopsType> = (props) => <NavBar {...props} />

const mapStateToProps = (store: RootState): StateToPopsType => ({
    currentProfile: getCurrentProfile(store)
})

export const NavBarContainer = connect(mapStateToProps, null)(NavBarWrapperContainer)
