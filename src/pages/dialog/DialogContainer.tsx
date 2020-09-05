// Root
import React, { FC, memo } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
// HOC
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
// Thunk
import { submitMessage } from "../../thunks/dialog-thunk"
// Selector
import { getUsers, getMessages } from "../../selectors/dialog-selector"
// Components
import { Dialog } from "./Dialog"
import { RootState } from "../../store"
// Type
import { MessageType, UsersDialogType } from "../../types/dialog-reduser-type"
import { MatchType } from "../../types/types"


type StateToPopsType = {
    users: Array<UsersDialogType>
    messages: Array<MessageType>
}

type DispatchToPopsType = {
    submitMessage: (id: number, message: string) => void
}

type OwnToPopsType = {
    match: MatchType
}

const DialogWrapperContainer: FC<StateToPopsType & DispatchToPopsType & OwnToPopsType> =  memo(({submitMessage, ...props}) => {
    const handlerMessage = (id: number, message: string) => submitMessage(id, message)

    return <Dialog handlerMessage={handlerMessage} {...props} />
})

const mapStateToProps = (state: RootState): StateToPopsType => {
    return {
        users: getUsers(state),
        messages: getMessages(state),
    }
}

const DialogContainer = compose<StateToPopsType & DispatchToPopsType & OwnToPopsType>(
    withRouter,
    connect(mapStateToProps, {submitMessage}),
    withAuthRedirect,
)(DialogWrapperContainer)

export default DialogContainer
