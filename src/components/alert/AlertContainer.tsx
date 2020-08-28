// Root
import React, { FC } from "react"
import { connect } from "react-redux"
// Reducers
import { setHiddenAlert } from "../../thunks/app-thunk"
// Selectors
import { getAlert, getHiddenAlert } from "../../selectors/app-selector"
// Components
import { Alert } from "./Alert"
//Type
import { RootState } from "../../store"
import { AlertType, HiddenAlertType } from "../../types/app-reducet-type"

type StateToPopsType = {
    alert: null | AlertType,
    hiddenAlert: HiddenAlertType
}

type DispatchToPopsType = {
    setHiddenAlert: (alert: HiddenAlertType) => any
}

type OwnToPopsType = {

}

const AlertWrapperContainer: FC<StateToPopsType & DispatchToPopsType & OwnToPopsType> = (props) => {
    const handlerClosed = () => props.setHiddenAlert('hide')

    return <Alert {...props} handlerClosed={handlerClosed} />
}

const mapStateToProps = (state: RootState): StateToPopsType => ({
    alert: getAlert(state),
    hiddenAlert: getHiddenAlert(state)
})

export const AlertContainer = connect(mapStateToProps, {
    setHiddenAlert,
})(AlertWrapperContainer)
