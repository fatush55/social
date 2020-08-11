// Root
import React from "react"
import { connect } from "react-redux"
// Reducers
import { setHiddenAlert } from "../../reducer/app-reducer"
// Selectors
import { getAlert, getHiddenAlert } from "../../selectors/app-selector"
// Components
import { Alert } from "./Alert"


const AlertWrapperContainer = (props) => {
    const handlerClosed = () => props.setHiddenAlert('hide')

    return <Alert {...props} handlerClosed={handlerClosed} />
}

const mapStateToProps = (state) => ({
    alert: getAlert(state),
    hiddenAlert: getHiddenAlert(state)
})

export const AlertContainer = connect(mapStateToProps, {
    setHiddenAlert,
})(AlertWrapperContainer)
